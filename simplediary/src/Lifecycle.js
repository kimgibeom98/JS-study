import React, { useEffect, useState } from "react";

const UnmountTest = () => {
    useEffect(() => {
        console.log("Mount!")
        return () => {
            console.log("Unmount!")
        }
    }, [])
    return <div>unmount Testiong Component</div>
}

const Lifecycle = () => {
    // const [count, setCount] = useState(0);
    // const [text, setText] = useState('');

    // useEffect(() => {
    //     console.log("Mount!")
    // }, [])

    // // 컨포넌트가 업데이트될때 사용하고싶을땐 아래처럼 useEffect사용
    // useEffect(() => {
    //     console.log("update!")
    // })

    // // Dependecy Array 값이 변화되는순간 안에 콜백함수가 실행됨 아래와 같이
    // // 이것을 활용하면 감지하고싶은값만 감지해서 그 값이 변화하는 순간에만 콜백함수를 실행시킬수 있음
    // useEffect(() => {
    //     console.log(`count is update : ${count}`)
    //     if (count > 5) {
    //         alert("count가 5를 넘었습니다 따라서 1로 초기화합니다.");
    //         setCount(1);
    //     }
    // }, [count])
    // useEffect(() => {
    //     console.log(`count is update : ${text}`)
    // }, [text])

    // return (
    //     <div style={{ padding: 20 }}>
    //         <div>
    //             {count}
    //             <button onClick={() => setCount(count + 1)}>+</button>
    //         </div>
    //         <div>
    //             <input value={text} onChange={(e) => setText(e.target.value)} />
    //         </div>
    //     </div >
    // );

    // 위에는 Lifecycle Mount와 Update의 대한 예제 아래는 unmount에 대한 예제

    const [isVisible, setIsVisible] = useState(false);
    const toggle = () => setIsVisible(!isVisible);

    return (
        <div style={{ padding: 20 }}>
            <button onClick={toggle}>ON/OFF</button>
            {isVisible && <UnmountTest />}
        </div >
    );
};

export default Lifecycle;