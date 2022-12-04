const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  publicPath: process.env.NODE_ENV === 'production' ? '/user-management/' : '/',
  transpileDependencies: [
    'vuetify',
       'keycloak'
  ]
})

module.exports = {
  devServer: {
    port: 8080,
    proxy: {
      '^/api/': {
        target: 'http://localhost:8080'
      }
    }
  }
}
