// import logo from './logo.svg';
import { useRef, useState } from "react";
import './App.css';
import DiaryEditor from './DiaryEditor';
import DiaryList from './DiaryList';
import Lifecycle from "./Lifecycle";



function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);
  const onCreate = (author, content, emotion) => {
    const created_data = new Date().getTime();
    const newItem = {
      author,
      content,
      emotion,
      created_data,
      id: dataId.current
    }
    dataId.current += 1;
    setData([newItem, ...data])
  }

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) => it.id === targetId ? { ...it, content: newContent } : it)
    )
  }

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList)
  }

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onEdit={onEdit} onRemove={onRemove} diaryList={data} />
    </div>
  );
}

export default App;
