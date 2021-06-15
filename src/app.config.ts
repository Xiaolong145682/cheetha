import routes from './router/routes.json'

export default {
  pages: routes.pages,
  tabBar: {
    list: [
      {
        pagePath: routes.tabs.recentlyRead,
        text: '最近阅读',
        iconPath: 'assets/tab-icon/icon-home@2x.png',
        selectedIconPath:'assets/tab-icon/icon-home-selected@2x.png'
      },
      {
        pagePath: routes.tabs.home,
        text: '书城',
        iconPath: 'assets/tab-icon/icon-activity@2x.png',
        selectedIconPath:'assets/tab-icon/icon-activity-selected@2x.png'
      },
      {
        pagePath: routes.tabs.my,
        text: '个人中心',
        iconPath: 'assets/tab-icon/icon-user@2x.png',
        selectedIconPath:'assets/tab-icon/icon-user-selected@2x.png'
      },
    ],
    color: '#969799',
    selectedColor: '#FB4436',
    borderStyle: 'white',
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
