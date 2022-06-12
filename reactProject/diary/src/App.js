import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useReducer, useRef } from "react";

//router
import Home from "./pages/Home";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Diary from "./pages/Diary";

// reducer

const reducer = (state, action) => {
  let newState = [];
  switch (action.type) {
    case "INIT": {
      return action.data;
    }
    case "CREATE": {
      const newItem = {};
      newState = [action.data, ...state];
      break;
    }
    case "REMOVE": {
      newState = state.filter((it) => it.id !== action.targetId);
      break;
    }
    case "EDIT": {
      newState = state.map((it) =>
        it.id === action.data.id ? { ...action.data } : it
      );
      break;
    }
    default:
      return state;
  }
  return newState;
};

export const DiaryStateContext = React.createContext();
export const DiaryDispatchContext = React.createContext();

const dummyData = [
  { id: 1, emotion: 1, contetn: "오늘의 일기", date: 1655026676226 },
  { id: 2, emotion: 2, contetn: "오늘의 일기", date: 1655026676227 },
  { id: 3, emotion: 3, contetn: "오늘의 일기", date: 1655026676229 },
  { id: 4, emotion: 4, contetn: "오늘의 일기", date: 1655026676230 },
  { id: 5, emotion: 5, contetn: "오늘의 일기", date: 1655026676231 },
];

function App() {
  const [data, dispatch] = useReducer(reducer, dummyData);
  console.log(new Date().getTime());

  const dataId = useRef(0);

  // Create
  const onCreate = (date, content, emotion) => {
    dispatch({
      type: "CREATE",
      data: {
        id: dataId.current,
        date: new Date(date).getTime(),
        content,
        emotion,
      },
    });
    dataId.current += 1;
  };
  // Remove
  const onRemove = (targetId) => {
    dispatch({ type: "REMOVE", targetId });
  };
  // Edit
  const onEdit = (targetId, date, content, emotion) => {
    dispatch({
      type: "EDIT",
      data: { id: targetId, date: new Date(date).getTime(), content, emotion },
    });
  };

  return (
    <DiaryStateContext.Provider value={data}>
      <DiaryDispatchContext.Provider value={{ onCreate, onEdit, onRemove }}>
        <BrowserRouter>
          <div className="App">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/new" element={<New />} />
              <Route path="/edit" element={<Edit />} />
              <Route path="/diary/:id" element={<Diary />} />
            </Routes>
          </div>
        </BrowserRouter>
      </DiaryDispatchContext.Provider>
    </DiaryStateContext.Provider>
  );
}

export default App;
