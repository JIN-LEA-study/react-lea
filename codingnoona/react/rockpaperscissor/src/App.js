import { useState } from "react";
import Box from "./componet/Box";
import "./App.css";

const choice = {
  rock: {
    name: "Rock",
    img: "https://nationaltoday.com/wp-content/uploads/2021/08/National-Pet-Rock-Day-640x514.jpg",
  },
  scissors: {
    name: "Scissors",
    img: "https://www.ikea.com/kr/en/images/products/sy-scissors__0112301_pe263788_s5.jpg?f=s",
  },
  paper: {
    name: "Paper",
    img: "https://www.collinsdictionary.com/images/full/paper_111691001.jpg",
  },
};
function App() {
  //useSelet값은 내가 선택하기 전에 초기값이 null
  const [userSelect, setUserSelect] = useState(null);
  const [computerSelect, setCouputerSelect] = useState(null);
  const [result, setResult] = useState("");

  const play = (userChoice) => {
    setUserSelect(choice[userChoice]);
    let computerChoice = randomChoice();
    setCouputerSelect(computerChoice);
    setResult(judgement(choice[userChoice], computerChoice)); //판단하는 값을 전달(유저선택, 컴퓨터선택)
  };

  const judgement = (user, computer) => {
    // 가위바위보 로직
    // user == computer  tie
    // user == rock, computer == 'scissors' user win
    // user == rock, computer == paper user lose
    // user == scissors, computer == paper user win

    // if, else문 코드
    // if (user.name === computer.name) {
    //   return "tie";
    // } else if (useState.name === "rock") {
    //   if (computer === "scissors ") {
    //     return "win";
    //   }
    // } else {
    //   return "lose";
    // }

    //삼항연산자

    if (user.name === computer.name) {
      return "tie";
    } else if (useState.name === "Rock")
      return computer.name === "Scissors" ? "win" : "lose";
    else if (user.name === "Scissors")
      return computer.name === "Paper" ? "win" : "lose";
    else if (user.name === "Paper")
      return computer.name === "Rock" ? "win" : "lose";
  };

  // 랜덤 로직 짜는 법
  const randomChoice = () => {
    let itemArray = Object.keys(choice); //배열로 만들어줌
    let randomItem = Math.floor(Math.random() * itemArray.length);
    let final = itemArray[randomItem];
    return choice[final]; //choice의 final 값을 리턴
  };

  return (
    <div>
      <div className="main">
        <Box title="You" item={userSelect} result={result} />
        <Box title="Computer" item={computerSelect} result={result} />
      </div>
      <div className="main">
        <button onClick={() => play("scissors")}>가위</button>
        <button onClick={() => play("rock")}>바위</button>
        <button onClick={() => play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
