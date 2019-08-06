// vue.config.js
const path = require('path')
const fs = require('fs')
const SkeletonWebpackPlugin = require('vue-skeleton-webpack-plugin')
const mockDirPath = path.resolve(__dirname, './mock')


function mockProxy (app, mockDir) {
  fs.readdirSync(mockDir).forEach(function (file) {
    let filePath = path.resolve(mockDir, file)
    if (fs.statSync(filePath).isDirectory()) {
      mockProxy(app, filePath)
    } else {
      let mock = require(filePath)
      app.use(mock.api, function (req, res) {
        mock.response(req, res, fs)
      })
    }
  })
}

const isMock = process.env.VUE_APP_MOCK
const isDev = process.env.NODE_ENV === 'development'

const configProxy = 'http://localhost:8080'

module.exports = {
  productionSourceMap: false,
  assetsDir: 'static',
  devServer: {
    open: true,
    port: 9000,
    before: function (app) {
      if (isMock) {
        mockProxy(app, mockDirPath)
      }
    },
    proxy: isDev && !isMock ? configProxy : ''
  },
  chainWebpack: config => {
    config.when(!isDev, config => {
      config.plugin('skeleton')
        .use(SkeletonWebpackPlugin, [{
          webpackConfig: {
            entry: {
              app: path.join(__dirname, './src/skeleton.js')
            }
          },
          minimize: true,
          quiet: true
        }])
    })
  }
}
