{
  mode: 'production',
  context: 'C:\\git\\atat\\atat-web-ui',
  devtool: 'source-map',
  output: {
    hashFunction: 'xxhash64',
    path: 'C:\\git\\atat\\atat-web-ui\\dist',
    filename: 'js/[name].[contenthash:8].js',
    publicPath: '/',
    chunkFilename: 'js/[name].[contenthash:8].js'
  },
  resolve: {
    alias: {
      '@': 'C:\\git\\atat\\atat-web-ui\\src',
      vue$: 'vue/dist/vue.runtime.esm.js'
    },
    extensions: [
      '.tsx',
      '.ts',
      '.mjs',
      '.js',
      '.jsx',
      '.vue',
      '.json',
      '.wasm'
    ],
    modules: [
      'node_modules',
      'C:\\git\\atat\\atat-web-ui\\node_modules',
      'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  resolveLoader: {
    modules: [
      'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\cli-plugin-typescript\\node_modules',
      'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\cli-plugin-babel\\node_modules',
      'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\cli-service\\lib\\config\\vue-loader-v15-resolve-compat',
      'node_modules',
      'C:\\git\\atat\\atat-web-ui\\node_modules',
      'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\cli-service\\node_modules'
    ]
  },
  module: {
    noParse: /^(vue|vue-router|vuex|vuex-router-sync)$/,
    rules: [
      /* config.module.rule('esm') */
      {
        test: /\.m?jsx?$/,
        resolve: {
          fullySpecified: false
        }
      },
      /* config.module.rule('vue') */
      {
        test: /\.vue$/,
        use: [
          /* config.module.rule('vue').use('vue-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\vue-loader-v15\\lib\\index.js',
            options: {
              compilerOptions: {
                whitespace: 'condense'
              },
              transformAssetUrls: {
                'v-app-bar': 'src',
                'v-carousel-item': [
                  'src',
                  'lazy-src'
                ],
                'v-img': [
                  'src',
                  'lazy-src'
                ],
                'v-navigation-drawer': 'src',
                'v-parallax': 'src',
                'v-toolbar': 'src'
              }
            }
          }
        ]
      },
      /* config.module.rule('vue-style') */
      {
        test: /\.vue$/,
        resourceQuery: /type=style/,
        sideEffects: true
      },
      /* config.module.rule('pug') */
      {
        test: /\.pug$/,
        oneOf: [
          /* config.module.rule('pug').oneOf('pug-vue') */
          {
            resourceQuery: /vue/,
            use: [
              /* config.module.rule('pug').oneOf('pug-vue').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          },
          /* config.module.rule('pug').oneOf('pug-template') */
          {
            use: [
              /* config.module.rule('pug').oneOf('pug-template').use('raw') */
              {
                loader: 'raw-loader'
              },
              /* config.module.rule('pug').oneOf('pug-template').use('pug-plain-loader') */
              {
                loader: 'pug-plain-loader'
              }
            ]
          }
        ]
      },
      /* config.module.rule('svg') */
      {
        test: /\.(svg)(\?.*)?$/,
        type: 'asset/resource',
        generator: {
          filename: 'img/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('images') */
      {
        test: /\.(png|jpe?g|gif|webp|avif)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'img/[name]-[hash:6]-[ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        }
      },
      /* config.module.rule('media') */
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
        type: 'asset',
        generator: {
          filename: 'media/[name].[hash:8][ext]'
        }
      },
      /* config.module.rule('fonts') */
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/i,
        type: 'asset',
        generator: {
          filename: 'other_assets/[name]-[hash:6]-[ext]'
        },
        parser: {
          dataUrlCondition: {
            maxSize: 10000
          }
        }
      },
      /* config.module.rule('css') */
      {
        test: /\.css$/,
        oneOf: [
          /* config.module.rule('css').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('css').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('css').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('css').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('css').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('css').oneOf('normal') */
          {
            use: [
              /* config.module.rule('css').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('css').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('css').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('css').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('postcss') */
      {
        test: /\.p(ost)?css$/,
        oneOf: [
          /* config.module.rule('postcss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('postcss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('postcss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('postcss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          },
          /* config.module.rule('postcss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('postcss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('postcss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('scss') */
      {
        test: /\.scss$/,
        oneOf: [
          /* config.module.rule('scss').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('scss').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('scss').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('vue').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('scss').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('scss').oneOf('normal') */
          {
            use: [
              /* config.module.rule('scss').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('scss').oneOf('normal').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('sass') */
      {
        test: /\.sass$/,
        oneOf: [
          /* config.module.rule('sass').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('sass').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue-modules').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('sass').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('vue').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('sass').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal-modules').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          },
          /* config.module.rule('sass').oneOf('normal') */
          {
            use: [
              /* config.module.rule('sass').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('sass').oneOf('normal').use('sass-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\sass-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  sassOptions: {
                    indentedSyntax: true
                  }
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('less') */
      {
        test: /\.less$/,
        oneOf: [
          /* config.module.rule('less').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('less').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('less').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('less').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('vue').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('less').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal-modules').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('less').oneOf('normal') */
          {
            use: [
              /* config.module.rule('less').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('less').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('less').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('less').oneOf('normal').use('less-loader') */
              {
                loader: 'less-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('stylus') */
      {
        test: /\.styl(us)?$/,
        oneOf: [
          /* config.module.rule('stylus').oneOf('vue-modules') */
          {
            resourceQuery: /module/,
            use: [
              /* config.module.rule('stylus').oneOf('vue-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3,
                  modules: {
                    localIdentName: '[name]_[local]_[hash:base64:5]',
                    auto: () => true
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('vue') */
          {
            resourceQuery: /\?vue/,
            use: [
              /* config.module.rule('stylus').oneOf('vue').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('vue').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal-modules') */
          {
            test: /\.module\.\w+$/,
            use: [
              /* config.module.rule('stylus').oneOf('normal-modules').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal-modules').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          },
          /* config.module.rule('stylus').oneOf('normal') */
          {
            use: [
              /* config.module.rule('stylus').oneOf('normal').use('vue-style-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-style-loader\\index.js',
                options: {
                  sourceMap: false,
                  shadowMode: false
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('css-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\css-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  importLoaders: 3
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('cssnano') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      {
                        version: '8.4.7',
                        plugins: [
                          {
                            postcssPlugin: 'postcss-discard-comments',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-gradients',
                            OnceExit(css) {
                              css.walkDecls(optimise);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-initial',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-svgo',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-display-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-reduce-transforms',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-colormin',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-timing-functions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-calc',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-convert-values',
                            OnceExit(css) {
                              css.walkDecls(transform.bind(null, opts));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-ordered-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-params',
                            OnceExit(css) {
                              css.walkAtRules(transform.bind(null, browsers.some(hasAllBug)));
                            }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-charset',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-overridden',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-string',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-unicode',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-minify-font-values',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-url',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-repeat-style',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-positions',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-normalize-whitespace',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-duplicates',
                            OnceExit(css) {
                              dedupe(css);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-merge-rules',
                            prepare: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'postcss-discard-empty',
                            OnceExit(css, { result }) {
                              discardAndReport(css, result);
                            }
                          },
                          {
                            postcssPlugin: 'postcss-unique-selectors',
                            OnceExit: function () { /* omitted long function */ }
                          },
                          {
                            postcssPlugin: 'cssnano-util-raw-cache',
                            OnceExit: function () { /* omitted long function */ }
                          }
                        ]
                      }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('postcss-loader') */
              {
                loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\postcss-loader\\dist\\cjs.js',
                options: {
                  sourceMap: false,
                  postcssOptions: {
                    plugins: [
                      function () { /* omitted long function */ }
                    ]
                  }
                }
              },
              /* config.module.rule('stylus').oneOf('normal').use('stylus-loader') */
              {
                loader: 'stylus-loader',
                options: {
                  sourceMap: false
                }
              }
            ]
          }
        ]
      },
      /* config.module.rule('js') */
      {
        test: /\.m?jsx?$/,
        exclude: [
          function () { /* omitted long function */ }
        ],
        use: [
          /* config.module.rule('js').use('thread-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\@vue\\cli-plugin-babel\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          /* config.module.rule('js').use('babel-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\babel-loader\\lib\\index.js',
            options: {
              cacheCompression: false,
              cacheDirectory: 'C:\\git\\atat\\atat-web-ui\\node_modules\\.cache\\babel-loader',
              cacheIdentifier: '5a7e1f5c'
            }
          }
        ]
      },
      /* config.module.rule('ts') */
      {
        test: /\.ts$/,
        use: [
          /* config.module.rule('ts').use('thread-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          /* config.module.rule('ts').use('babel-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('ts').use('ts-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              appendTsSuffixTo: [
                '\\.vue$'
              ],
              happyPackMode: true
            }
          }
        ]
      },
      /* config.module.rule('tsx') */
      {
        test: /\.tsx$/,
        use: [
          /* config.module.rule('tsx').use('thread-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\thread-loader\\dist\\cjs.js'
          },
          /* config.module.rule('tsx').use('babel-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\babel-loader\\lib\\index.js'
          },
          /* config.module.rule('tsx').use('ts-loader') */
          {
            loader: 'C:\\git\\atat\\atat-web-ui\\node_modules\\ts-loader\\index.js',
            options: {
              transpileOnly: true,
              happyPackMode: true,
              appendTsxSuffixTo: [
                '\\.vue$'
              ]
            }
          }
        ]
      }
    ]
  },
  optimization: {
    realContentHash: false,
    splitChunks: {
      cacheGroups: {
        defaultVendors: {
          name: 'chunk-vendors',
          test: /[\\/]node_modules[\\/]/,
          priority: -10,
          chunks: 'initial'
        },
        common: {
          name: 'chunk-common',
          minChunks: 2,
          priority: -20,
          chunks: 'initial',
          reuseExistingChunk: true
        }
      }
    },
    minimizer: [
      /* config.optimization.minimizer('terser') */
      new TerserPlugin(
        {
          terserOptions: {
            compress: {
              arrows: false,
              collapse_vars: false,
              comparisons: false,
              computed_props: false,
              hoist_funs: false,
              hoist_props: false,
              hoist_vars: false,
              inline: false,
              loops: false,
              negate_iife: false,
              properties: false,
              reduce_funcs: false,
              reduce_vars: false,
              switches: false,
              toplevel: false,
              typeofs: false,
              booleans: true,
              if_return: true,
              sequences: true,
              unused: true,
              conditionals: true,
              dead_code: true,
              evaluate: true
            },
            mangle: {
              safari10: true
            }
          },
          parallel: true,
          extractComments: false
        }
      )
    ]
  },
  plugins: [
    /* config.plugin('vue-loader') */
    new VueLoaderPlugin(),
    /* config.plugin('define') */
    new DefinePlugin(
      {
        'process.env': {
          NODE_ENV: '"production"',
          BASE_URL: '"/"',
          VUE_APP_BASE_API_URL: '"https://dev49920.service-now.com/api"'
        }
      }
    ),
    /* config.plugin('case-sensitive-paths') */
    new CaseSensitivePathsPlugin(),
    /* config.plugin('friendly-errors') */
    new FriendlyErrorsWebpackPlugin(
      {
        additionalTransformers: [
          function () { /* omitted long function */ }
        ],
        additionalFormatters: [
          function () { /* omitted long function */ }
        ]
      }
    ),
    /* config.plugin('html') */
    new HtmlWebpackPlugin(
      {
        title: 'sn-vue',
        scriptLoading: 'defer',
        templateParameters: function () { /* omitted long function */ },
        template: 'C:\\git\\atat\\atat-web-ui\\public\\index.html'
      }
    ),
    /* config.plugin('copy') */
    new CopyPlugin(
      {
        patterns: [
          {
            from: 'C:\\git\\atat\\atat-web-ui\\public',
            to: 'C:\\git\\atat\\atat-web-ui\\dist',
            toType: 'dir',
            noErrorOnMissing: true,
            globOptions: {
              ignore: [
                '**/.DS_Store',
                'C:/git/atat/atat-web-ui/public/index.html'
              ]
            },
            info: {
              minimized: true
            }
          }
        ]
      }
    ),
    /* config.plugin('eslint') */
    new ESLintWebpackPlugin(
      {
        extensions: [
          '.js',
          '.jsx',
          '.vue',
          '.ts',
          '.tsx'
        ],
        cwd: 'C:\\git\\atat\\atat-web-ui',
        cache: true,
        cacheLocation: 'C:\\git\\atat\\atat-web-ui\\node_modules\\.cache\\eslint\\88ab0ffe.json',
        context: 'C:\\git\\atat\\atat-web-ui',
        failOnWarning: false,
        failOnError: true,
        eslintPath: 'C:\\git\\atat\\atat-web-ui\\node_modules\\eslint',
        formatter: 'stylish'
      }
    ),
    /* config.plugin('fork-ts-checker') */
    new ForkTsCheckerWebpackPlugin(
      {
        typescript: {
          extensions: {
            vue: {
              enabled: true,
              compiler: 'C:\\git\\atat\\atat-web-ui\\node_modules\\vue-template-compiler\\index.js'
            }
          },
          diagnosticOptions: {
            semantic: true,
            syntactic: true
          }
        }
      }
    ),
    /* config.plugin('VuetifyLoaderPlugin') */
    new VuetifyLoaderPlugin()
  ],
  entry: {
    app: [
      './src/main.ts'
    ]
  }
}
