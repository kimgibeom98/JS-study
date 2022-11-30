// import logo from './logo.svg';
import './App.css';

import MyHeader from './MyHeader'
import MyFooter from './MyFooter'

function App() {
  const name = "김기범";

  return (
    <div className="App">
      <MyHeader />
      <header className="App-header">
        <h2>안녕 리액트 {name}</h2>
      </header>
      <MyFooter />
    </div>
  );
}

export default App;
