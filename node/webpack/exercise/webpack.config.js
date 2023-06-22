var path = require('path')
var webpack = require('webpack')

module.exports = {
  mode: 'production',
  entry: './src/main.js', // 웹팩 변환 대상파일
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  }, // 결과파일 정보
  module: {
    rules: [
      {
        test: /\.css$/, // css loader를 이용해서 변환
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader', //여러 브라우저가 최대한 호환할수 있게해주는 bable-loader
        exclude: /node_modules/ // 제외
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js'
    },
    extensions: ['*', '.js', '.vue', '.json']
  }, // 파일끼리의 연관관계를 해석할때 별칭같은거다. vue$는 vue/dist/vue.esm.js 이렇게 해석한다. pacaage-json에서 "scripts" 와 비슷함
  devServer: {
    historyApiFallback: true,
    noInfo: true,
    overlay: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}
