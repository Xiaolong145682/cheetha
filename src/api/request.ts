/* eslint-disable */
// @ts-ignore
import Taro from '@tarojs/taro'
import { UnknownError } from '../utils/error'
// import { auth } from './auth'

const _request = async (url, options) => {
  console.log('url: ', url)
  console.log('options: ', options)
  const token = Taro.getStorageSync('token')
  const { ignoreFailToast, specialErrorHandle } = options
  return Taro.request({
    url,
    ...options,
    cors_mode: 'cors',
    data: options.body,
    header: {
      ...options.headers,
      Authorization: `Bearer ${token}`,
    },
  })
    .then((res) => {
      Taro.hideLoading()
      if (res.statusCode < 400 && res.statusCode >= 200) {
        return res.data
      }

      if (res.statusCode == 400) {
        throw res
      }

      throw new UnknownError(`${res.errMsg}`)
    })
    .catch(async (err) => {
      console.warn('err: ', err)
      Taro.hideLoading()
      if (err.data) {
        if (err.data.code === 3) {
          Taro.clearStorageSync()
          // await auth()
          return await _request(url, options)
        }

        // 特殊错误处理句柄
        const handle =
          specialErrorHandle && specialErrorHandle(err.data.message)

        if (handle) {
          handle()
        } else {
          // 常规错误统一 Toast 提示
          if (!ignoreFailToast) {
            const { message } = err.data
            if (message) {
              Taro.showToast({
                icon: 'none',
                title: typeof message === 'string' ? message : message[0],
                duration: 1000,
              })
            }
          }
        }
      }

      throw new UnknownError(`${err.data.message}`)
    })
}

export default _request
