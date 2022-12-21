const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/user-management/' : '/',

  transpileDependencies: [
    'vuetify',
       'keycloak'
  ],
  runtimeCompiler: true,
  pluginOptions: {
    i18n: {
      locale: 'en',
      fallbackLocale: 'uk',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
})

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api/': {
        target: 'http://localhost:8080'
      }
    }
  },

  pluginOptions: {
    runtimeCompiler: true,
    i18n: {
      locale: 'en',
      fallbackLocale: 'uk',
      localeDir: 'locales',
      enableInSFC: false,
      enableBridge: false
    }
  }
}
