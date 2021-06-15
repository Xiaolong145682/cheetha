const path = require('path')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin")

const config = {
  projectName: 'cheetah',
  date: '2021-6-11',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {
  },
  alias: {
    '@components': path.resolve(__dirname, '..', 'src/components'),
    '@utils': path.resolve(__dirname, '..', 'src/utils'),
    '@data': path.resolve(__dirname, '..', 'src/data'),
    '@hooks': path.resolve(__dirname, '..', 'src/hooks'),
    '@stores': path.resolve(__dirname, '..', 'src/stores'),
    '@assets': path.resolve(__dirname, '..', 'src/assets'),
    '@api': path.resolve(__dirname, '..', 'src/api'),
    '@yoc-types': path.resolve(__dirname, '..', 'types'),
  },
  copy: {
    patterns: [
    ],
    options: {
    }
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {

        }
      },
      url: {
        enable: true,
        config: {
          limit: 1024 // 设定转换尺寸上限
        }
      },
      cssModules: {
        enable: false, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'module', // 转换模式，取值为 global/module
          generateScopedName: '[name]__[local]___[hash:base64:5]'
        }
      }
    }
  },
  h5: {
    publicPath: '/',
    staticDirectory: 'static',
    postcss: {
      autoprefixer: {
        enable: true,
        config: {
        }
      },
      cssModules: {
        enable: true, // 默认为 false，如需使用 css modules 功能，则设为 true
        config: {
          namingPattern: 'global', // 转换模式，取值为 global/module
          generateScopedName: '[name]___[hash:base64:5]'
        }
      }
    },
    router: {
      mode: 'browser', //可选 'hash' | 'browser'
      // 配置自定义路由
      customRoutes: {
        '/pages/index/index': '/index',
        '/pages/home/index': '/home',
        '/pages/my/index': '/my',
        '/pages/recentlyRead/index': '/recently-read'
      }
    }
  }
}

module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
