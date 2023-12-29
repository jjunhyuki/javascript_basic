// 에러와 에러객체
// 프로그램을 만들다가 error 이 발생하면 하던걸 멈추고 그 뒤부분을 실행하지 않게 된다..
// 에러는 에러객체(name): 에러 메세지(message) 이렇게 표현된다.
// 

console.log('시작!');

const title = '코드잇';
console.log(title);
console.log(codeit); // codeit이 없어서 error 을 내뱉는데 error이 나와서 밑에 끝! 을 표현하지않는다.

console.lot('끝!');

//자주 보는 에러 3가지
// 존재하지 않는 객체를 호출할떄 => ReferenceError
// 문자열이 담긴 변수를 함수처럼() 사용하려고, 잘못된 방식으로 자료형을 다루려고 하면  => TypeError , 
    //ex) console.log(title());
// 문법에 맞지 않는 코드를 작성하면 => SyntaxError , syntax에러를 발생하는곳이있다면 코드를 실행안하고 에러를 내뱉는다.
    //ex) const ti-tle = '코드잇'; , 변수이름중간에 - 붙일수없다.


//의도적으로 에러 객체를 만들기
//   에러객체의 이름과 내용이라는 형식을 맞춘다면 직접 에러를 만들어서 표현할수있다.

//만들어놓은 에러객체를 가지고 에러를 발생시키는 방법 => throw을 사용해보자
const error = new TypeError('타입 에러가 발생했습니다.');

throw error; //이렇게 하면 TypeError이 발생하고 아래 코드들은 실행 되지 않는다.

console.log(error.name);
console.log(error.message);

console.log('끝!');
