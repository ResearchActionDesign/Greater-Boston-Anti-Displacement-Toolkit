module.exports = {
  indexPath: 'index.html',
  pluginOptions: {
    i18n: {
      locale: 'English',
      fallbackLocale: 'English',
      localeDir: 'locales',
      enableInSFC: true
    },
    pwa: {
      name: 'Greater Boston Anti-Displacement Toolkit',
      themeColor: '#5da352',
      msTileColor: '#000000',
      appleMobileWebAppCapable: 'yes',
      appleMobileWebAppStatusBarStyle: 'black',

      // configure the workbox plugin
      workboxPluginMode: 'GenerateSW',

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
        '/en/resources',
        // Spanish routes
        '/es/manual',
        '/es/manual/mapeo',
        '/es/manual/búsqueda-de-datos',
        '/es/manual/uso-de-estadísticas',
        '/es/manual/políticas',
        '/es/manual/estrategias',
        '/es/manual/historias',
        '/es/película',
        '/es/recursos',
      ],
      useRenderEvent: true,
      headless: true,
      onlyProduction: true,
    },
  },
};
