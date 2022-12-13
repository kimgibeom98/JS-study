// import logo from './logo.svg';
import { useMemo, useEffect, useRef, useCallback, useReducer } from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';

// import Lifecycle from "./Lifecycle";

const reducer = (state, action) => {
  switch (action.type) {
    case 'INIT':
    case 'CREATE':
    case 'REMOVE':
    case 'EDIT':
    default:
      return state;
  }
}

function App() {
  // const [data, setData] = useState([]);
  // useState에서 useReduce로 변경 - 이유는 복잡한 상태변화로직을 컨포넌트 밖으로 분리하기위해서.
  const [data, dispatch] = useReducer(reducer, []);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        author: it.email,
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        created_date: new Date().getTime() + 1,
        id: dataId.current++
      };
    })

    setData(initData);
  }

  useEffect(() => {
    getData();
  }, [])


  const onCreate = useCallback((author, content, emotion) => {
    const created_date = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_date,
      id: dataId.current
    }
    dataId.current += 1;
    setData((data) => [newItem, ...data])
  }, []);

  const onRemove = useCallback((targetId) => {
    setData(data => data.filter((it) => it.id !== targetId))
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData(data =>
      data.map((it) => it.id === targetId ? { ...it, content: newContent } : it)
    )
  }, []);



  // useMemo(최적화) - 리랜더링 할때마다 연산을 또 하지 않아도 되는값을 기억해둠 - 메모리를 굳이 사용하지않음
  // useMemo로 사용할경우 useMemo는 값을 리턴해줌 - useMemo를 감싸는 함수는 더이상 함수가 아닌 값이다.
  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = (goodCount / data.length) * 100;
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      {/* <OptimizeTest /> */}
      {/* <OptimizeTest2 /> */}
      {/* <Lifecycle /> */}
      <DiaryEditor onCreate={onCreate} />
      <div>전체 일기 : {data.length}</div>
      <div>기분 좋은 일기 개수 : {goodCount}</div>
      <div>기분 나쁜 일기 개수 : {badCount}</div>
      <div>기분 나쁜 일기 비율 : {goodRatio}%</div>
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;