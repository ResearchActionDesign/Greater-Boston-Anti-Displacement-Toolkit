const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'English',
      fallbackLocale: 'English',
      localeDir: 'locales',
      enableInSFC: true
    },
    prerenderSpa: {
      registry: undefined,
      renderRoutes: [
        '/',
        '/en',
        '/es',
        '/en/toolkit',
        '/en/toolkit/mapping',
        '/en/toolkit/finding-data',
        '/en/toolkit/using-data',
        '/en/toolkit/policies',
        '/en/toolkit/strategies',
        '/en/toolkit/stories',
        '/en/film',
        '/en/resources'
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
  configureWebpack: {
    plugins: [].concat(process.env.NODE_ENV === 'production' ? [new ImageminPlugin({ test: /\.(jpe?g|png|gif|svg)$/i }),] : [])
  }
};
