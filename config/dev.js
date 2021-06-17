const isH5 = process.env.CLIENT_ENV === 'h5'

module.exports = {
  env: {
    NODE_ENV: '"development"'
  },
  defineConstants: {
    API_URL: isH5 ? '"/api"' : JSON.stringify('http://pntapi.yocdev.com')
  },
  mini: {},
  h5: {},
}
