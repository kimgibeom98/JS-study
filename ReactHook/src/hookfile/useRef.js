import { useState, useRef } from "react";

const UseRef = () => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  const increaseCountState = () => {
    setCount(count + 1);
  };

  const increaseCountRef = () => {
    countRef.current = countRef.current + 1; // Ref의 값이 바뀐다고 해도 리렌더링이 일어나지 않음
  }

  return (
    <div>
      <p>State : {count}</p>
      <p>Ref : {countRef.current}</p>
      <button onClick={increaseCountState}>State 올려</button>
      <button onClick={increaseCountRef}>Ref 올려</button>
    </div>
  )

}

export default UseRef;


// const ref = useRef(value) -> {current : value} 와 같이 구성되어있음 unmount 되기전까진 값을 그대로 유지할 수 있음

// state
// State의변화 -> 렌더링 -> 컴포넌트 내부 변수들 초기화

// ref
// Ref 의 변화 -> No 렌더링 -> 변수들의 값이 유지됨

// State의변화 -> 렌더링 -> 그래도 Ref의 값은 유지됨(focus이용할때 많이 사용)