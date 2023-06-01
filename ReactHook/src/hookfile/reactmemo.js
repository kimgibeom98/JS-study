import { useState, useMemo } from "react";

import Child from '../component/child'

const ReactMemo = () => {

  const [parentAge, setParentAge] = useState(0);

  const incrementParentAge = () => {
    setParentAge(parentAge + 1);
  }

  console.log('부모 컴포넌트 렌더링')
  const name = useMemo(() => {
    return {
      lastName: '홍',
      firstName: '길동'
    }
  }, []);

  return (
    <div style={{ border: '2px solid navy', padding: '10px' }}>
      <h1>부모</h1>
      <p>age : {parentAge}</p>
      <button onClick={incrementParentAge}>부모 나이 증가</button>
      <Child name={name} />
    </div>
  )

}

export default ReactMemo;


// React.memo를 사용해야 할때 - 무분별 하게 사용하면 메모리의 용량을 쓸데없이 많이 차지할 수 있음 꼭! 필요할때만 사용
// 1. 컴포넌트가 같은 Props로 자주 렌더링 될때
// 2. 컴포넌트가 렌더링이 될때마다 복잡한 로직을 처리해야 한다면