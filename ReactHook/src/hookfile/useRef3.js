import { useRef, useState } from "react";

const UseRef3 = () => {
  const [count, setCount] = useState(1);

  return (
    <div>
      <p>Count : {count}</p>
    </div>
  )

}

export default UseRef3;

