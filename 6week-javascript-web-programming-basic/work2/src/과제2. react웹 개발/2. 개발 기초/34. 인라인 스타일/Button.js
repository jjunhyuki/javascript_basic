// const style = {
//     // 속성: '값',
//     padding: '14px 27px',
//     border: 'solid 1px #7090ff',
//     outline: 'none',
//     color: '#7090ff',
//     backgroundColor: 'rgba(0, 89, 255, 0.2)',
//     borderRadius: '30px',
//     fontSize: '17px',
// };
const baseButtonStyle = {
    padding: '14px 27px',
    outline: 'none',
    cursor: 'pointer',
    borderRadius: '9999px',
    fontSize: '17px',
  };
  
  const blueButtonStyle = {
    ...baseButtonStyle,
    border: 'solid 1px #7090ff',
    color: '#7090ff',
    backgroundColor: 'rgba(0, 89, 255, 0.2)',
  };
  
  const redButtonStyle = {
    ...baseButtonStyle,
    border: 'solid 1px #ff4664',
    color: '#ff4664',
    backgroundColor: 'rgba(255, 78, 78, 0.2)',
  };

function Button({ children, onClick, color }) {
    const style = color === 'red' ? redButtonStyle : blueButtonStyle;
    return (
    //이렇게도 가능 but 이렇게 하면 적용해야하는 것들이 많아지면 가독성이 떨어짐
    /* <button style={{ backgroundColor: 'yellow' }} onCLick={onClick} > */
    <button style={style} onCLick={onClick} >
        {children}
    </button>
    );
}

export default Button;