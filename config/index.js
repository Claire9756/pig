// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
			sitEnv: require('./sit.env'),
			prodEnv: require('./prod.env'),
			index: path.resolve(__dirname, '../dist/index.html'),
			assetsRoot: path.resolve(__dirname, '../dist'),
			assetsSubDirectory: 'static',
			assetsPublicPath: './',          //请根据自己路径配置更改
			productionSourceMap: false,
			// Gzip off by default as many popular static hosts such as
			// Surge or Netlify already gzip all static assets for you.
			// Before setting to `true`, make sure to:
			// npm install --save-dev compression-webpack-plugin
			productionGzip: false,
			productionGzipExtensions: ['js', 'css'],
			// Run the build command with an extra argument to
			// View the bundle analyzer report after build finishes:
			// `npm run build --report`
			// Set to `true` or `false` to always turn it on or off
			bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
			env: require('./dev.env'),
			port: 9528,
			autoOpenBrowser: true,
			assetsSubDirectory: 'static',
			assetsPublicPath: '/',
			proxyTable: {
        '/auth': {
          target: 'http://127.0.0.1:9999',
          changeOrigin: true,
          pathRewrite: {
            '^/auth' : '/auth'
          }
        },
        '/admin': {
          target: 'http://127.0.0.1:9999',
          changeOrigin: true,
          pathRewrite: {
            '^/admin' : '/admin'
          }
        },
      },
			cssSourceMap: false
    }
}
