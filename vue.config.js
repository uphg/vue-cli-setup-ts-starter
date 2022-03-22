const ScriptSetup = require('unplugin-vue2-script-setup/webpack').default
const VueComponents = require('unplugin-vue-components/webpack')
const { ElementUiOndemand } = require('./plugins/index')

module.exports = {
  parallel: false,  // disable thread-loader, which is not compactible with this plugin
  configureWebpack: {
    plugins: [
      ScriptSetup({ /* options */ }),
      VueComponents({
        // 自动导入组件的目录
        dirs: ['src/components'],
        // 文件后缀
        extensions: ['vue'],
        resolvers: [
          ElementUiOndemand({ importStyle: 'css' })
        ]
      })
    ]
  },
  chainWebpack(config) {
    // disable type check and let `vue-tsc` handles it
    config.plugins.delete('fork-ts-checker')
  }
}