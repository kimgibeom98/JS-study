// import logo from './logo.svg';
// import './App.css';


import Counter from './Counter';
import Container from './Container';
import MyHeader from './MyHeader'

// import MyFooter from './MyFooter'

function App() {

  const counterProps = {
    a: 1,
    b: 2,
    c: 3,
    d: 4,
    e: 5,
    initialValue: 5
  }

  return (
    <Container>
      <div>
        <MyHeader />
        <Counter {...counterProps} />
      </div>
    </Container>
  );
}

export default App;
