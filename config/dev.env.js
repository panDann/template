var merge = require('webpack-merge')
var prodEnv = require('./prod.env')
const path = (path) => require('path').resolve(__dirname, path)


module.exports = merge(prodEnv, {
  NODE_ENV: '"development"',
  module:{
    rules:[
      {
        test:/\.styl$/,
        use:[
          'stylus-loader',
          'css-loader',
          {
            loader: 'style-resources-loader',
            options: {
              patterns: [
                path('../src/styles/variables.styl'),
              ]
            }
          }
        ]
      }
    ]
  }
})
