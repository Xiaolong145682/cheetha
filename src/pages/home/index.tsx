import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Cookies from 'js-cookie'

import Tabs from '@components/Tabs'
import { Menu } from '@components/types'

export default class index extends Component {
  handleToLogin = (): void => {
    const token = Cookies.get('token')
    window.location.href =
      `https://hapjs.org/app/com.yinliuredian.weather/pages/Web?userToken=${token}`
  }
  render() {
    return (
      <View>
        <Tabs currentTab={Menu.Home} />
        <View>书城</View>
        <View onClick={this.handleToLogin}>前往快应用</View>
      </View>
    )
  }
}
