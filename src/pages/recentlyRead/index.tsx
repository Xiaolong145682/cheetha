import React, { Component } from 'react'
import { View } from '@tarojs/components'
import Tabs from '@components/Tabs'
import { Menu } from '@components/types'

export default class index extends Component {
  render() {
    return (
      <View>
        <Tabs currentTab={Menu.RecentlyRead} />
        最近阅读
      </View>
    )
  }
}
