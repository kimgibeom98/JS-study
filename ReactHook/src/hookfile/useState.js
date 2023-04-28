import { useState } from 'react';

const heavyWork = () => {
  return ['홍길동', '김민수']
}

function UseState() {
  const [names, setNames] = useState(() => {
    // useState를 사용해서 초기값을 받아올때 무거운 일을 해야한다면 useState의 인자로 콜백함수를 넣어주면 맨 처음 렌더링 될때만 실행되게 할수있다.
    return heavyWork();
  });
  // useState훅은 state와 setState를 배열 형태로 리턴해준다. state는 setState함수로 변경한다. 변경할때마다 컴포넌트 리렌더링.
  const [input, setInput] = useState('');

  const handleInputChange = (e) => {
    setInput(e.target.value)
  };

  const handleUpload = () => {
    // state를 변경할때 새로 변경될 state값이 이전 state값과 연관이 있다면 setState의 인자로 새로운 state를 return하는 콜백함수를 넣어주는게 좋다.
    setNames((prevState) => {
      return ([input, ...prevState])
    });
  };

  return (
    <div>
      <input type='text' value={input} onChange={handleInputChange} />
      <button onClick={handleUpload}>Upload</button>
      {
        names.map((name, idx) => {
          return <p key={idx}>{name}</p>
        })
      }
    </div>
  );
}

export default UseState;
