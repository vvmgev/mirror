const path = require('path');

module.exports = {
    entry: './src/index.js',
    output : {
        path: path.join(__dirname, 'build'),
        filename: 'bundle.js',
        publicPath: '/build/'
    },
    devServer: {
        compress: false,
        hot: false,
        inline: false
    },
    devtool: 'source-map',
    mode: "development",
    module: {
        rules: [
            {
              test: /\.js?$/,
              exclude: /(node_modules)/,
              loader: "babel-loader",
              query: {
                presets: ["es2015", "react", "stage-2"],
              }
            },
            {
                test: /\.less$/,
                use: [
                  {
                    loader: "style-loader"
                  },
                  {
                    loader: "css-loader",
                    options: {
                      sourceMap: true,
                      modules: true,
                      localIdentName: "[local]___[hash:base64:5]"
                    }
                  },
                  {
                    loader: "less-loader"
                  }
                ]
              },
        ]
    }
}