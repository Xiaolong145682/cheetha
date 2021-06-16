const path = require('path')
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin
const TerserPlugin = require("terser-webpack-plugin")
const routes = require('../src/router/routes.json')


const config = {
  projectName: 'cheetah',
  date: '2021-6-11',
  designWidth: 750,
  deviceRatio: {
    640: 2.34 / 2,
    750: 1,
    828: 1.81 / 2,
  },
  sourceRoot: 'src',
  outputRoot: 'dist',
  plugins: [],
  defineConstants: {},
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
    patterns: [],
    options: {},
  },
  framework: 'react',
  mini: {
    postcss: {
      pxtransform: {
        enable: true,
        config: {},
      },
      url: {
        enable: true,
        config: {
          // 设定转换尺寸上限
          limit: 1024,
        },
      },
      cssModules: {
        // 默认为 false，如需使用 css modules 功能，则设为 true
        enable: false,
        config: {
          // 转换模式，取值为 global/module
          namingPattern: 'module',
          generateScopedName: '[name]__[local]___[hash:base64:5]',
        },
      },
    },
  },
  h5: {
    output: {
      filename: 'static/js/[name].[hash:8].js',
      chunkFilename: 'static/js/[name].[contenthash:8].js',
    },
    miniCssExtractPluginOption: {
      filename: 'static/css/[name].[contenthash:8].css',
      chunkFilename: 'static/css/[name].[contenthash:8].css',
    },
    imageUrlLoaderOption: {
      name: 'static/images/[name].[contenthash:8].[ext]',
    },
    mediaUrlLoaderOption: {
      name: 'static/media/[name].[contenthash:8].[ext]',
    },
    fontUrlLoaderOption: {
      name: 'static/fonts/[name].[contenthash:8].[ext]',
    },
    postcss: {
      autoprefixer: {
        enable: true,
        config: {},
      },
      cssModules: {
        enable: true,
        config: {
          namingPattern: 'global',
          generateScopedName: '[name]___[hash:base64:5]',
        },
      },
    },
  },
}


module.exports = function (merge) {
  if (process.env.NODE_ENV === 'development') {
    return merge({}, config, require('./dev'))
  }
  return merge({}, config, require('./prod'))
}
