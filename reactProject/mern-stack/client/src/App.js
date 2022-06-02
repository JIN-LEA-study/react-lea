import "./App.css";
import Test from "./Test";
import { Routes, Route } from "react-router-dom";
import List from "./component/List";
import Heading from "./component/Heading";
import Upload from "./component/Upload";

function App() {
  return (
    <>
      <Heading />
      <Routes>
        <Route path="/list" element={<List />}></Route>
        <Route path="/upload" element={<Upload />}></Route>
      </Routes>
    </>
  );
}

export default App;
