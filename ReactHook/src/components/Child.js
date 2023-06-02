import { memo } from 'react';

const Child = ({ name }) => {
  console.log('자녀 컴포넌트 렌더링')
  return (
    <div style={{ border: '2px solid powderblue', padding: '10px' }}>
      <h3>자녀</h3>
      <p>성 : {name.lastName}</p>
      <p>이름 : {name.firstName}</p>
    </div>
  )
}

export default memo(Child);