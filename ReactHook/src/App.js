import './App.css';
import UseState from './hookfile/useState'
import UseEffect from './hookfile/useEffect';
import UseEffectCleanup from './hookfile/useEffectCleanup';

function App() {
  return (
    <>
      <UseState />
      <UseEffect />
      <UseEffectCleanup />
    </>
  );
}

export default App;
