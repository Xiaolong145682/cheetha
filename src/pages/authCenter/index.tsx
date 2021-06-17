import React, { FunctionComponent, useEffect } from 'react'
import Taro, { useRouter } from '@tarojs/taro'
import { View } from '@tarojs/components'
import Router, { NavigateType } from 'tarojs-router-next'

import {
  getProviderUrlInAuthCenterMp
} from '@utils'

const AuthCenter: FunctionComponent = () => {
  const { params } = useRouter()

  useEffect(() => {
    if (params && params.xpat) {
      Taro.setStorageSync('xpat', params.xpat)
      Router.toLogin({ type: NavigateType.redirectTo })
    } else {
      // eslint-disable-next-line no-restricted-globals
      location.href = getProviderUrlInAuthCenterMp(location.href)
    }
  }, [params])

  return (
    <View>
      认证中心
    </View>
  )
}

export default AuthCenter
