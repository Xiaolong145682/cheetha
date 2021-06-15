import {
  switchTab,
  getCurrentPages,
  navigateBack,
  reLaunch,
  redirectTo,
  navigateTo,
} from '@tarojs/taro'
import qs from 'qs'
import routes from './routes.json'
import { RoutesName } from './types'

// 根据路由在文件中定义的名称获取完整路由路径
function getPathByName(name: RoutesName) {
  return routes.source[name]
}

// 判断页面是否已经在路由栈中
function isPageExit(name: RoutesName, data?: Record<string, string>) {
  const pages = getCurrentPages()
  // 历史 是否 === 即将跳转页面
  const index = pages.findIndex(
    (item) =>
      `${item.route}?${qs.stringify(item.query)}` ===
      `${getPathByName(name)}?${qs.stringify(data)}`
  )
  return index > -1
}

// 判断是否 tab 上定义的页面
function isTabPage(name: RoutesName) {
  return Object.keys(routes.tabs).includes(name)
}

/**
 * @function 路由跳转函数
 * @param {RoutesName} name 路由名
 * @param {object} data query 参数
 * @param {enum} ['redirectTo', 'relaunch'] method 方法
 */
export default function routerPush(
  name: RoutesName,
  data?: Record<string, string>,
  method?: 'redirectTo' | 'relaunch'
) {
  const dataStr = qs.stringify(data)
  const pages = getCurrentPages() // 路由栈
  const index = 0 // 路由里面是否有这个页面
  const path = getPathByName(name)
  if (isTabPage(name)) {
    // NOTE: 这个无法带参
    switchTab({
      url: `/${path}`,
    })
  } else if (isPageExit(name, data)) {
    // 如果存在 并且参数也完全相同,就返回栈页面避免重新渲染该页面
    navigateBack({
      delta: pages.length - (index + 1),
    })
  } else {
    switch (method) {
      case 'redirectTo':
        redirectTo({
          url: `/${path}?${dataStr}`,
        })
        break
      case 'relaunch':
        reLaunch({
          url: `/${path}?${dataStr}`,
        })
      default:
        navigateTo({
          url: `/${path}?${dataStr}`,
        })
        break
    }
  }
}
