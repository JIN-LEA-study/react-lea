import React, { useSate } from "react";
import "./App.css";

function App() {
  const [inputValue, setInputValue] = useSate("");
  return (
    <main>
      <input
        value={inputValue}
        type="text"
        onChange={(event) => setInputValue(event.target.value)}
      />
      <button>추가</button>
    </main>
  );
}

export default App;
