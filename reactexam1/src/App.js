// import logo from './logo.svg';
// import './App.css';

import MyHeader from './MyHeader'
import MyFooter from './MyFooter'

function App() {
  const name = "김기범";

  const style = {
    App: {
      backgroundColor: 'black'
    },
    h2: {
      color: 'red'
    },
    bold_text: {
      color: 'green'
    }
  };

  return (
    <div style={style.App}>
      <MyHeader />
      <h2 style={style.h2}>안녕 리액트 {name}</h2>
      <b style={style.bold_text}> id='bold_text'>React.js</b>
      <MyFooter />
    </div >
  );
}

export default App;
