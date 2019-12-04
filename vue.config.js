/* eslint-disable quotes */
// vue.config.js
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/webpage-mockup/'
    : '/',
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
