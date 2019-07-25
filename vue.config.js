module.exports = {
  indexPath: 'index.html',
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
};
