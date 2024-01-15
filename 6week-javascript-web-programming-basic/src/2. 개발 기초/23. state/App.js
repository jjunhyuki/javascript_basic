import { usestate } from 'react'
import Button from './Button';
import Dice from './Dice';

function random(n){
  return Math.ceil(Math.random() * n);
}

function App() {
  //usestate는 파라미터를 초기값으로 받고 usestate가 실행된 후에는 2개의 값을 가진 배열을 리턴한다. 
  //배열의 첫번째 파라미터는 현재 변수의 값
  //  두번쨰 파라미터는 setter값인데 첫번째 파라미터에다 값을 넣어서 변경하는것이 아닌 
  //  setter함수에다 값을 넣어서 state값을 변경
  const [num, setNum] = usestate(1);

  const handleRollclick = () => {
    const nextNum = random(6);
    setNum(nextNum);
    // setNum(3);
  }

const handleClearClick = () =>{
  setNum(1);
}

  return (
    <div>
      <div>
        <Button onClick={handleRollclick}>던지기</Button>
        <Button onClick={handleClearClick}>처음부터</Button>
      </div>
      <Dice color="red" num={num} />
    </div>
  );
}

export default App;
