/* eslint-disable quotes */
// vue.config.js
module.exports = {
  publicPath: 'webpage-mockup',
  css: {
    loaderOptions: {
      sass: {
        prependData: `@import "@/styles/app.scss";`,
      },
    },
  },
  pluginOptions: {
    webpackBundleAnalyzer: {
      openAnalyzer: false,
    },
  },
};
