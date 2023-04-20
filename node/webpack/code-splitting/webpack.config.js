var path = require('path');
var MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'none', // production, development, none -> mode에는 3가지가 있지만 실제로 배포할때는 production을 사용
  entry: './index.js',  // 웹팩으로 변환할 대상 파일의 경로
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }, // dist라는 폴더의 경로를 만들어서 bundel.js를 생성
  module: { // Loader
    rules: [
      {
        test: /\.css$/,
        use: [
          { loader: MiniCssExtractPlugin.loader },
          "css-loader"
        ]
      },// babel을 사용할 경우 아래와 같이
      // { 
      //   test : /\.js$/,
      //   use : ['babel-loader']
      // }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin()
  ],
}

// loader에서 use 부분에 css-loader만 넣어선 안됨, 순서도 바뀌면 안됨
// css-loader의 역할은 css파일을 webpack안으로 들어갈수 있게해줌
// style-loader의 역할은 들어간 style코드를 head안에 인라인 스타일로 넣어줌
// 항상 loader는 오른쪽에서 왼쪽 순서로 적용이 됨 ex) css-loader -> style-loader