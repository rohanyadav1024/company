const path = require('path')
require("@hotwax/app-version-info")
module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'en',
      localeDir: 'locales',
      enableLegacy: true,
      runtimeOnly: true,
      compositionOnly: false,
      fullInstall: true,
      enableInSFC: true
    }
  },
  pwa: {
    name: "Company - HotWax Commerce",
    themeColor: "#FFFFFF",
    manifestOptions: {
      short_name: "Company",
      start_url: "./"
    },
    id: "/",
    display: "standalone",
    background_color: "#000000"
  },
  configureWebpack: {
    resolve: {
      alias: {
        vue: path.resolve('./node_modules/vue')
      }
    }
  },
  runtimeCompiler: true,
  transpileDependencies: ['@hotwax/dxp-components']
}
