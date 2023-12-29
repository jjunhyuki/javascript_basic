// 조건 연산자
    //조건 ? truthy 할 때 표현식 : falsy 할 때 표현식 => 삼항연산자 (Ternary operator)
//if else
//switch

if(조건){
 //조건이 true일때
} else {
    //조건이 false일때
}

switch (값) {
    case A:
        //값이 A와 일치할때 동작
        break;
    default:
        //값이 일치하는 case가 없을 때 동작
}

//이렇게 위와같이 조건문들이 있는데 표현식으로 좀더 간결하게 표현가능

//삼항연산자 (Ternary operator)
const CUT_OFF = 80;
function passChecker(score) {
    return score > CUT_OFF ? '합격!' : '불합격!';
}

console.log(passChecker(90));

