import { useMemo, useState } from "react";

const hardCalculate = (number) => {
  console.log('어려운 계산!')
  for(let i = 0; i < 999999999; i ++) {} // 생각하는 시간
  return number + 100000;
}

const easyCalculate = (number) => {
  return number + 1;
}

const UseMemo = () => {
  const [hardNumber, setHardNumber] = useState(1);
  const [easyNumber, setEasyNumber] = useState(1);

  // const hardSum = hardCalculate(hardNumber);
  const hardSum = useMemo(() => {
    return hardCalculate(hardNumber);
  }, [hardNumber]) // hardNumber가 변경이 되어야지만 다시 랜더링
  const easySum = easyCalculate(easyNumber)

  return (
    <div>
      <h3>어려운 계산기</h3>
      <input type="number" value={hardNumber} onChange={(e) => setHardNumber(parseInt(e.target.value))} />
      <span> + 1 = {hardSum}</span>

      <h3>쉬운 계산기</h3>
      <input type="number" value={easyNumber} onChange={(e) => setEasyNumber(parseInt(e.target.value))} />
      <span> + 10000 = {easySum}</span>
    </div>
    
  )
}

export default UseMemo;

// Memo = Memoization - 자주 필요한 값을 캐싱을 해 둬서 필요할때 마다 캐시에서 꺼내서 사용하는것