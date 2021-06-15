export default {
  pages: [
    'pages/home/index',
    'pages/my/index',
    'pages/recentlyRead/index',
    'pages/index/index'
  ],
  tabBar: {
    list: [
      {
        pagePath: 'pages/recentlyRead/index',
        text: '最近阅读',
        iconPath: 'assets/tab-icon/icon-home@2x.png',
        selectedIconPath:'assets/tab-icon/icon-home-selected@2x.png'
      },
      {
        pagePath: 'pages/home/index',
        text: '书城',
        iconPath: 'assets/tab-icon/icon-activity@2x.png',
        selectedIconPath:'assets/tab-icon/icon-activity-selected@2x.png'
      },
      {
        pagePath: 'pages/my/index',
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
