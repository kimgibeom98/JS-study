import { useRef, useState } from "react";

const UseRef2 = () => {
  const [renderer, setRenderer] = useState(0);
  const countRef = useRef(0);
  let countlet = 0;

  const doRendering = () => {
    setRenderer(renderer + 1);
  }

  const increasRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref', countRef.current)
  }

  const increasLet = () => {
    countlet = countlet + 1;
    console.log('let', countlet)
  }

  const printResults = () => {
    console.log(`ref : ${countRef.current}, let : ${countlet}`)
  }

  return (
    <div>
      <p>Ref : {countRef.current}</p>
      <p>let : {countlet}</p>
      <button onClick={doRendering}>렌더!</button>
      <button onClick={increasRef}>Ref 올려</button>
      <button onClick={increasLet}>let 올려</button>
      <button onClick={printResults}>Ref let 값 출력</button>
    </div>
  )

}

export default UseRef2;

