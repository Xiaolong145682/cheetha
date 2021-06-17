import React, { FunctionComponent  } from 'react'
import { View } from '@tarojs/components'
import Router from 'tarojs-router-next'
import clsx from 'clsx'

import styles from './index.scss'
import { Menu } from '../types'

const MenuData = [{
  tab: Menu.RecentlyRead,
  tabText: '最近阅读',
  handleMenuClick: () => Router.toRecentlyRead()
},{
  tab: Menu.Home,
  tabText: '书城',
  handleMenuClick: () => Router.toHome()
},{
  tab: Menu.My,
  tabText: '个人中心',
  handleMenuClick: () => Router.toMy()
}]

interface TabsProps {
  currentTab: Menu
}

const Tabs: FunctionComponent<TabsProps> = (props) => {
  const { currentTab } = props

  return (
    <View className={styles['tabs']}>
      {MenuData.map(menu => {
        return (
          <View
            key={menu.tab}
            onClick={menu.handleMenuClick}
            className={clsx(styles['tabs-item'], {
              [styles['tabs-item__selected']]: currentTab === menu.tab
            })}
          >
            {menu.tabText}
          </View>
        )
      })}
    </View>
  )
}

export default Tabs