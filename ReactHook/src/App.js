import './App.css';
import UseState from './hookfile/UseState'
import UseEffect from './hookfile/UseEffect';
import UseEffectCleanup from './hookfile/UseEffectCleanup';
import UseRef from './hookfile/UseRef'
import UseRef2 from './hookfile/UseRef2'
import UseRef3 from './hookfile/UseRef3'
import UseRef4 from './hookfile/UseRef4'
import UseContext from './hookfile/UseContext';
import UseMemo from './hookfile/UseMemo';
import UseMemo2 from './hookfile/UseMemo2';
import UseCallback from './hookfile/UseCallback';
import UseCallback2 from './hookfile/UseCallback2';
import UseReducer from './hookfile/UseReducer';
import UseReducer2 from './hookfile/UseReducer2';
import ReactMemo from './hookfile/ReactMemo.js';

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
      <UseMemo />
      <UseMemo2 />
      <UseCallback />
      <UseCallback2 />
      <UseReducer />
      <UseReducer2 />
      <ReactMemo />
    </>
  );
}

export default App;
