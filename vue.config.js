const ImageminPlugin = require('imagemin-webpack-plugin').default;

module.exports = {
  pluginOptions: {
    i18n: {
      locale: 'English',
      fallbackLocale: 'English',
      localeDir: 'locales',
      enableInSFC: true
    }
  },
  configureWebpack: {
    plugins: [].concat(process.env.NODE_ENV === 'production' ? [new ImageminPlugin(),] : [])
  }
};
