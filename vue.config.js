const path = require('path');
const servicenowConfig = require('./servicenow.config')

const DEFAULTS = {
  ASSET_SIZE_LIMIT: 244
}
const CONFIG = {
  ...DEFAULTS,
  ...servicenowConfig
}

const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: [
    'vuex-module-decorators'
  ],
  configureWebpack: (config) => {
    if (process.env.NODE_ENV === 'production') {
      config.output.filename = 'js/[name]-[hash].js'
      config.output.chunkFilename = 'js/[name]-[chunkhash].js'
    }
  },
  chainWebpack: config => {

    let BASE_API_URL = CONFIG.SERVICENOW_INSTANCE;
    BASE_API_URL += BASE_API_URL.endsWith("/") ? "api" : "/api";

    config.plugin('define').tap((definitions) => {
      let _base = definitions[0]["process.env"];
      definitions[0]["process.env"] = {
        ..._base,
        'VUE_APP_BASE_API_URL': JSON.stringify(BASE_API_URL),
      };
      return definitions;
    });

    if (process.env.NODE_ENV === 'development') {
      config.plugin('define').tap((definitions) => {
        definitions[0]['process.env']['VUE_APP_USER'] = JSON.stringify(servicenowConfig.VUE_APP_USER);
        definitions[0]['process.env']['VUE_APP_PASSWORD'] = JSON.stringify(servicenowConfig.VUE_APP_PASSWORD);
        return definitions;
      });
    }

    if (process.env.NODE_ENV === 'production') {

      config.module
        .rule("images")
        .set('parser', {
          dataUrlCondition: {
            maxSize: CONFIG.ASSET_SIZE_LIMIT
          }
        }).set('generator', {

          filename: 'img/[name]-[hash:6][ext]'
        });

      config.module
        .rule("fonts").set('parser', {
          dataUrlCondition: {
            maxSize: CONFIG.ASSET_SIZE_LIMIT
          }
        }).set('generator', {

          filename: 'other_assets/[name]-[hash:6][ext]',
        });
    }
  },
  css: {
    extract: false,
  },
})
