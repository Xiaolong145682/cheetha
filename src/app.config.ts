import routes from './router/routes.json'

export default {
  pages: routes.pages,
  entryPagePath: routes.source['home'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black'
  }
}
