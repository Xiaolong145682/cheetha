// import Taro from '@tarojs/taro'
// import { UnknownError } from '../utils/error'
// // import { userControllerAuth } from './collection/Users'

// export const auth = async () => {
//   try {
//     const { code } = await Taro.login({ timeout: 5000 })
//     const res = await userControllerAuth({ code })
//     const { wxOpenId, token } = res
//     if (token) {
//       Taro.setStorageSync('token', token)
//     }
//     Taro.setStorageSync('wxOpenId', wxOpenId)
//     return res
//   } catch (e) {
//     throw new UnknownError(`网络请求错误-获取授权 token 接口报错`)
//   }
// }
