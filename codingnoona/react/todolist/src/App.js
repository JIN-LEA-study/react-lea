import React, { useState } from "react";
import "./App.css";
import TodoBoard from "./component/TodoBoard";

function App() {
  const [inputValue, setInputValue] = useState("");
  const [todoList, setTodoList] = useState([]);

  const addItem = () => {
    console.log(inputValue);
    //기존에 있는 아이템은 유지하고 새로운 inputValue를 넣어주세요.
    setTodoList([...todoList, inputValue]);
  };
  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button onClick={addItem}>추가</button>
      {/* TodoBoard에 값 전달 */}
      <TodoBoard todoList={todoList} />
    </main>
  );
}

export default App;
