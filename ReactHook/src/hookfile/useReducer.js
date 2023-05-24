import { useState, useReducer } from "react"


const ACTION_TYPES = {
  deposit: 'deposit',
  withdraw: 'withdraw'
}

const reducer = (state, action) => {
  switch (action.type) {
    case ACTION_TYPES.deposit:
      return state + action.payload;
    case ACTION_TYPES.withdraw:
      return state - action.payload;
    default:
      return state;
  }
}

const UseReducer = () => {
  const [number, setNumber] = useState(0);
  const [money, dispatch] = useReducer(reducer, 0);
  console.log(money)
  return (
    <div>
      <h2>useReducer 은행에 오신것을 환영합니다.</h2>
      <p>잔고 {money}원</p>
      <input type="number" value={number} onChange={(e) => setNumber(parseInt(e.target.value))} step="1000"></input>
      <button onClick={() => { dispatch({ type: ACTION_TYPES.deposit, payload: number }) }}>출금</button>
      <button onClick={() => { dispatch({ type: ACTION_TYPES.withdraw, payload: number }) }}>예금</button>
    </div>
  )
}

export default UseReducer

// useState처럼 state를 생성하고 관리할 수 있는 도구 - 여러개의 하위값을 포함하는 복잡한 state를 다뤄야할때 useState대신 사용
// Reducer, Dispatch, Action 으로 이루어져 있음
// Dispatch - 요청
// Action - 요청한 내용
// Reducer - 요청한 내용에 의해서 state변경