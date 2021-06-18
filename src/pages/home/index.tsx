import React, { Component } from 'react'
import { View } from '@tarojs/components'

import Tabs from '@components/Tabs'
import { Menu } from '@components/types'
import Router from 'tarojs-router-next'

export default class index extends Component {
  handleToLogin = async (): Promise<void> => {
    try {
      const data = await Router.toAuthCenter()
      console.log('==> data: ', data)
    } catch (error) {
      console.log('error: ', error)
    }
  }

  render() {
    return (
      <View>
        <Tabs currentTab={Menu.Home} />
        <View onClick={this.handleToLogin}>前往认证中心</View>
      </View>
    )
  }
}
