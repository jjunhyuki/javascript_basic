import { useState, usestate } from 'react'
import Button from './Button';
import Dice from './Dice';

function random(n){
  return Math.ceil(Math.random() * n);
}

function App() {
  const [num, setNum] = usestate(1);
  const [sum, setSum] = useState(0);
  const [gameHistory, setGameHistory] = useState([]);

  const handleRollclick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    setSum(sum + nextNum);
    /* ------------------------- */
    // const prevHistory = gameHistory;
    // gameHistory.push(nextNum);
    // console.log(prevHistory === gameHistory) // TRUE 가 나온다... 주소값이 같기 때문 그래서 이런방식으로 하면안된다.
    // setGameHistory(gameHistory);
    //해결방법은 아래와 같이 ... 스프레드 문법을 사용하는것
    //  빈배열안에서 gameHistory를 펼쳐주고 그뒤에 nextNum(새로추가할 요소)을 추가 시켜주면 된다!
    setGameHistory([...gameHistory, nextNum]);

  }

const handleClearClick = () =>{
  setNum(1);
  setSum(0);
  setGameHistory([]);
}

  return (
    <div>
      <div>
        <Button onClick={handleRollclick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
        <h2>나</h2>
        <Dice color="blue" num={num} />
        <h2>총점</h2>
        <p>{sum}</p>
        <h2>기록</h2>
        <p>{gameHistory.join(', ')}</p>
      </div>
    </div>
  );
}

export default App;
