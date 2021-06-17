import React, { Component } from 'react'
import { Provider } from 'mobx-react'
import Router from 'tarojs-router-next'
import Cookies from 'js-cookie'

import './middleware'

import counterStore from './store/counter'
import './app.scss'

const store = {
  counterStore
}

class App extends Component {
  componentDidShow () {
    const token = Cookies.get('token')
    if (!token) {
      Router.toLogin()
    }
  }

  // this.props.children 就是要渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    )
  }
}

export default App
