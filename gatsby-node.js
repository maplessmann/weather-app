const path = require('path')

exports.onCreateWebpackConfig = ({ actions, plugins }) => {
  actions.setWebpackConfig({
    plugins: [
      plugins.provide({
        React: 'react',
      }),
      plugins.define({
        'process.env.API_KEY': JSON.stringify(process.env.API_KEY),
      }),
    ],

    resolve: {
      alias: {
        components: path.resolve(__dirname, 'src/components'),
        hooks: path.resolve(__dirname, 'src/hooks'),
        images: path.resolve(__dirname, 'src/images'),
        services: path.resolve(__dirname, 'src/services/index.js'),
        styles: path.resolve(__dirname, 'src/styles'),
        utils: path.resolve(__dirname, 'src/utils'),
      },
    },
  })
}
