// npm install = npm i
// npm install "라이브러리 네임" - 라이브러리 추가할때
// npm uninstall "라이브러리 네임" - 라이브러리 삭제할때
// npm install "라이버르러 네임" --global - 전역으로 설치됨 -> --global = -g 로 축약가능

// npm install vue --save-dev = npm i vue -d

// dependencies - 배포용 : npm i jquery 로 설치했을때 dependencies - 화면 dom조작을 도와주는 라이브러리 - application을 동작시킬때 필요한 라이브러리 ex) vue, react, angular, chart, jquery 등
// devDependencies - 개발용 : npm i webpack - d 로 설치했을때 devDependencies - webpack, sass 등 개발을 할때 도움을 주는 개발보조 라이브러리,
// npm run build 했을때 포함 안됨 그렇기때문에 화면조작에 필요한 라이브 러리라고 생각되면 dependencies에 넣어줘야함 ex) webpack, js-compression, sass 등

// webpack
// - ex) 쉽게 예를 들자면 나눠져 있는 index.js, lodash라이브러리를 하나로 합침 -> main.js로 before.html과 index.html참고
// - webpack은 익명함수(즉시실행함수)구조안에 담겨있다. IIFE

// 여러개의 파일을 병합해서 하나로 합쳐주는것 - module bundler

// module의 개념 - 다른 module에서 가져다가 활용할수있고, module들을 합쳐서 거대한 모듈을 만들수있다

// 웹팩에서의 모듈은 웹 애플리케이션을 구성하는 모든 자원을 의미한다. 즉 javscript뿐만 아니라 html,css,img,font 이런것들 모두 다 하나의 모듈이 될수있다.
// 레이지 로딩 - 필요할때 해당 모듈을 넣어주는 기법

// 빌드, 번들링, 변환 이 세단어 모두 같은 의미

// 웹팩의 4가지 주요속성 간단 정리
// mode - 번전 3과 4의 차이 그렇게 중요하지 않음
// entry - 빌드를 할 대상 파일 - https://joshua1988.github.io/webpack-guide/concepts/entry.html
// output - 빌드를 하고나서(웹팩으로 변환하고)  나서의 결과 파일 - https://joshua1988.github.io/webpack-guide/concepts/output.html
// module - entry에서 output으로 변환할때 중간에 개입하는것
// Loader - 웹팩이 웹 애플리케이션을 해석할 때 자바스크립트 파일이 아닌 웹 자원(html, css, images, font등)을 변활할 수 있도록 도와주는 속성.
