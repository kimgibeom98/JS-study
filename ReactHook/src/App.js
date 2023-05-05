import './App.css';
import UseState from './hookfile/useState'
import UseEffect from './hookfile/useEffect';
import UseEffectCleanup from './hookfile/useEffectCleanup';
import UseRef from './hookfile/useRef'
import UseRef2 from './hookfile/useRef2'
import UseRef3 from './hookfile/useRef3'
import UseRef4 from './hookfile/useRef4'
import UseContext from './hookfile/useContext';

function App() {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseEffectCleanup />
      <UseRef />
      <UseRef2 />
      <UseRef3 />
      <UseRef4 />
      <UseContext />
    </>
  );
}

export default App;
