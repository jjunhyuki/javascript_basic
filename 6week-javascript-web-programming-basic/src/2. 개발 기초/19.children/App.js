import Button from './Button';
import Dice from './Dice';

function App() {
  return (
    <div>
      <div>
        {/* <Button text="던지기"/>
        <Button text="처음부터"/> */}
        <Button>던지기</Button>
        <Button>처음부터</Button>
      </div>
      <Dice color="red" num={2} />
      {/* <Dice color="blue" num={1} /> */}
    </div>
  );
}

export default App;
