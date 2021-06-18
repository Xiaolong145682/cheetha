import React, { FunctionComponent, useEffect } from 'react'
import { View } from '@tarojs/components'
import Router from 'tarojs-router-next'

const AuthCenter: FunctionComponent = () => {

  useEffect(() => {
    Router.back({ aa: '12345'})
  }, [])

  return (
    <View>
      认证中心
    </View>
  )
}

export default AuthCenter
