import React, { Component } from 'react'
import Taro, { getCurrentInstance } from '@tarojs/taro'
import { View } from '@tarojs/components'
import { NavigateType, Router } from 'tarojs-router-next'
import Cookies from 'js-cookie'
import { userLoginByAuthcenterCreate } from '@api/collection/Novel'

export default class Login extends Component {
  componentDidMount () {
    this.handleLogin()
  }

  handleLogin = async (): Promise<void> => {
    try {
      const wxMpAuthToken = Taro.getStorageSync('xpat')
      if (wxMpAuthToken) {
        const { Data } = await userLoginByAuthcenterCreate({ wxmp_auth_token: wxMpAuthToken })
        console.log('==> ', Data)
        Cookies.set('token', Data?.UserToken)
        const { backUrl = '' } = getCurrentInstance()?.router?.params
        console.log(getCurrentInstance()?.router?.params)
        setTimeout(() => {
          if (backUrl) {
            Router.navigate({ url: backUrl }, { type: NavigateType.redirectTo })
          } else {
            Router.toHome()
          }
        })

      } else {
        Router.toAuthCenter({ type: NavigateType.redirectTo })
      }
    } catch (error) {
      console.warn('login error: ', error)
    }
  }

  render() {
    return (
      <View>
        登录中...
      </View>
    )
  }
}
