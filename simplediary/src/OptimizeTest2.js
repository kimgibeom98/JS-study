import React, { useState, useEffect } from 'react';


const CounterA = React.memo(({ count }) => {
    useEffect(() => {
        console.log(`counterA update - count : ${count}`)
    })
    return <div>{count}</div>
});

// 객체일때는 asrqual함수 사용 - 얕은비교를함 
const CounterB = ({ obj }) => {
    useEffect(() => {
        console.log(`counterB update - count : ${obj.count}`)
    })
    return <div>{obj.count}</div>
};

const areEqual = (prevProps, nextProps) => {
    // return true - 이전값과 다음값이 같다 리랜더링이 일어나면 안됨
    // return flase = 이전값과 다음값이 다르다 리랜더링이 일어나야한다.
}

const OptimizeTest = () => {

    const [count, setCount] = useState(1);
    const [obj, setObj] = useState({
        count: 1
    })

    return <div style={{ padding: 50 }}>
        <div>
            <h2>Count A</h2>
            <CounterA count={count} />
            <button onClick={() => setCount(count)}>A button</button>
        </div>
        <div>
            <h2>Count B</h2>
            <CounterB obj={obj} />
            <button onClick={() => setObj({
                count: obj.count
            })}>B button</button>
        </div>
    </div>
}

export default OptimizeTest;