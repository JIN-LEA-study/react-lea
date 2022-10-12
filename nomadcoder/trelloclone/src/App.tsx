import React from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { minuteState, hourSelector } from "./atoms";

/**
 * +"1" -> 1 앞에 +를 붙여주면 string 타입을 number 타입으로 바꿔준다.
 */

function App() {
  const [minutes, setMinutes] = useRecoilState(minuteState);
  const hours = useRecoilValue(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input value={hours} type="number" placeholder="Hours" />
    </div>
  );
}

export default App;
