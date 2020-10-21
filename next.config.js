const withImages = require('next-images');
module.exports = withImages({});
module.exports = {
  webpack: (config, { isServer }) => {
    // Fixes npm packages that depend on `fs` module
    if (!isServer) {
      config.node = {
        fs: 'empty'
      }
    }
    config.module.rules.push({
      test: /\.(png|svg|jpg|gif|pdf)$/,
      use: [
        {
          loader: 'file-loader',
          options: {
            name: '[name].[ext]'
          }
        }
      ]
    })
    return config
  }
}
