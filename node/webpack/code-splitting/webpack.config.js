var path = require('path');

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
        use: ['style-loader', 'css-loader']
      },// babel을 사용할 경우 아래와 같이
      // { 
      //   test : /\.js$/,
      //   use : ['babel-loader']
      // }
    ]
  },
}