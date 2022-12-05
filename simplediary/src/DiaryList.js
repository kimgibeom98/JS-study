import DiaryItem from "./DiaryItem";

const DiaryList = ({ onRemove, diaryList }) => {
    return <div className="DiaryList">
        <h2>일기 리스트</h2>
        <h4>{diaryList.length}개의 일기가 있습니다.</h4>
        <div>
            {diaryList.map((it) => (
                <DiaryItem onRemove={onRemove} key={it.id} {...it} />
            ))}
        </div>
    </div>
}


// 넘겨받는 diaryList의 오류를 대비해 아래처럼 사용(ex.undefind,null)
DiaryList.defaultProps = {
    diaryList: []
}

export default DiaryList;