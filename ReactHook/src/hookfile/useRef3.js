import { useEffect, useRef, useState } from "react";

const UseRef3 = () => {
  const [count, setCount] = useState(1);
  const renderCount = useRef(1);

  useEffect(() => {
    renderCount.current = renderCount.current + 1;
    console.log('렌더링 수 :', renderCount.current) // useState로 할 경우 무한루프가 돌지만 Ref는 리렌더링을 발생시키지 않기때문에 무한루프가 발생하지 않음
  })
  return (
    <div>
      <p>Count : {count}</p>
      <button onClick={() => setCount(count + 1)}>올려</button>
    </div>
  )

}

export default UseRef3;

