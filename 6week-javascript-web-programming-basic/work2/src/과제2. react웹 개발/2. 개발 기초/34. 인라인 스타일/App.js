import { useState } from 'react';
import Board from './Board';
import Button from './Button';

function random(n){
  return Math.ceil(Math.random() * n);
}

function App() {
  const [myHistory, setMyHistory] = useState([]);
  const [otherHistory, setOtherHistory] = useState([]);

  const handleRollclick = () => {
    const nextMyNum = random(6);
    const nextOtherNum = random(6);
    setMyHistory([...myHistory, nextMyNum]);
    setOtherHistory([...otherHistory, nextOtherNum]);
  };

const handleClearClick = () =>{
  setMyHistory([]);
  setOtherHistory([]);
};


  return (
    <div>
      <div>
          <Button color="blue" onClick={handleRollclick}>던지기</Button>
          <Button color="red" onClick={handleClearClick}>처음부터</Button>
      </div>
      <div>
          <Board name="나" color="blue" gameHistory={myHistory}/>
          <Board name="상대" color="red" gameHistory={otherHistory}/>
      </div>
    </div>
  );
}

export default App;