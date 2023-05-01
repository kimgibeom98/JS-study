import './App.css';
import UseState from './hookfile/useState'
import UseEffect from './hookfile/useEffect';
import UseEffectCleanup from './hookfile/useEffectCleanup';
import UseRef from './hookfile/useRef'
import UseRef2 from './hookfile/useRef2'

function App() {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseEffectCleanup />
      <UseRef />
      <UseRef2 />
    </>
  );
}

export default App;
