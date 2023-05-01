import { useRef } from "react";

const UseRef2 = () => {
  const countRef = useRef(0);
  let countlet = 0;

  const increasRef = () => {
    countRef.current = countRef.current + 1;
    console.log('ref', countRef.current) 
  }

  const increasLet = () => {
    countlet = countlet + 1;
    console.log('let', countlet) 
  }

  return (
    <div>
      <p>Ref : {countRef}</p>
      <p>let : {countlet}</p>
      <button onClick={increasRef}>Ref 올려</button>
      <button onClick={increasLet}>let 올려</button>
    </div>
  )

}

export default UseRef2;

