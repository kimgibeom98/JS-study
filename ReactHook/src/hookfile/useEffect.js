import { useState, useEffect } from "react";

const UseEffect = () => {
  const [count, setCount] = useState(1);
  const [name, setName] = useState('')

  const handleCountUpdate = () => {
    setCount(count + 1)
  };

  const handleInputChange = (e) => {
    setName(e.target.value)
  }

  // 렌더링마다 매번 실행됨 - 렌더링 이후
  useEffect(() => {
    console.log('렌더링')
  })

  // 마운팅 + count가 변화할때마다 실행
  useEffect(() => {
    console.log('count 변화')
  }, [count])

  // 마운팅 + name이 변화할때마다 실행
  useEffect(() => {
    console.log('name 변화')
  }, [name])

  // 맨 처음 렌더링에만 실행
  useEffect(() => {
    console.log('한번 실행')
  }, [])

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count : {count}</span>
      <input type="text" value={name} onChange={handleInputChange} />
      <span>name : {name}</span>
    </div>
  )
}

export default UseEffect;
