import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";

function App() {
  return (
    <div>
      <input type="number" placeholder="Minutes" />
      <input type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
