import { useEffect, useMemo, useState } from "react";


const UseMemo2 = () => {
  const [number, setNumber] = useState(0);
  const [isKorea, setIsKorea] = useState(true);

  const location = useMemo(() => {
    return {
        country : isKorea ? '한국' : '외국'
    }
  }, [isKorea])

  useEffect(() => {
    console.log('usEffect 호출')
  },[location]) // 여기서 만약 location이 객체 혹은 변수 일 경우에는 input을 올려도 useEffect가 계속 작동됨 이유는 원시타입은 각자 다른 주소를 바라보기때문 - useMemo 사용해야함

  return (
    <div>
        <h2>하루에 몇끼 먹어요?</h2>
        <input type="number" value={number} onChange={(e) => setNumber(e.target.value)} />
        <hr />
        <h2>어느 나라에 있어요?</h2>
        <p>나라 : {location.country}</p>
        <button onClick={() => setIsKorea(!isKorea)}>비행기 타자</button>
    </div>
  )
}

export default UseMemo2;
