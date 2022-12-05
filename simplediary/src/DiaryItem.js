import { useState } from "react";

const DiaryItem = ({ onRemove, author, content, created_date, emotion, id }) => {
  const [isEdit, setIsEdit] = useState(false);
  //true일땐 false로 false일땐 true 토글시켜줌
  const toggleIsEdit = () => setIsEdit(!isEdit);
  const [localContent, setLocalContent] = useState(content);

  const handelRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id)
    }
  }

  return (
    <div className="DiaryItem">
      <div className="info">
        <span>작성자 : {author} | 감정 점수 : {emotion}</span>
        <br />
        <span className="date">{new Date(created_date).toLocaleString()}</span>
      </div>
      <div className="content">
        {isEdit
          ? <><textarea value={localContent} onChange={(e) => setLocalContent(e.target.value)} /></>
          : <>{content}</>}
      </div>

      {isEdit
        ? <><button onClick={toggleIsEdit}>수청 취소</button>
          <button>수청 완료</button></>
        : <><button onClick={handelRemove}>삭제하기</button>
          <button onClick={toggleIsEdit}>수정하기</button></>
      }
    </div>
  );
};

export default DiaryItem;