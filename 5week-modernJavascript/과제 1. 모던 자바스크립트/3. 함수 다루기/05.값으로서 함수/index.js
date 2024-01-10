const printJS = function () {
    console.log('JavaScript');
  };
  
  console.dir(0);
  console.dir('codeit');
  console.dir(true);
  console.dir(null);
  console.dir(undefined);
  console.dir({});
  console.dir([]);
  console.dir(printJS);
  
  
  // const myObject = {
  //   brand: 'Codeit',
  //   bornYear: 2017,
  //   isVeryNice: true,
  //   sayHi: function(name) {
  //     console.log(`Hi! ${name}`);
  //   }
  // };
  
  // myObject.sayHi('JavascScript');
  
  
  // const myArray = [
  //   'codeit',
  //   2017,
  //   true,
  //   function(name) {
  //     console.log(`Hi! ${name}`);
  //   },
  // ];
  
  // myArray[3]('Codeit');
  
  
  // function makeQuiz(quiz, answer, success, fail) {
  //   if (prompt(quiz) === answer) {
  //     console.log(success());
  //   } else {
  //     console.log(fail());
  //   }
  // };
  
  // function getSuccess() {
  //   return '정답';
  // };
  
  // function getFail() {
  //   return '오답!';
  // };
  
  // const question = '5 + 3 = ?';
  // makeQuiz(question, '8', getSuccess, getFail); //다른 함수에 파라미터로 전달된 함수을 콜백함수 라고한다.(getSuccess, getFail)
  

  // 고차함수 
  // 함수를 리턴하는 함수를 고차함수라고 한다.
  // function getPrintHi() {
  //   return function () {
  //     console.log('Hi!?');
  //   };
  // };
  
  // const sayHi = getPrintHi();
  
  // sayHi();
  // getPrintHi()(); //고차함수를 이렇게도 표현한다.

  // 프로그래밍에서 이런 함수를 일급함수 라고 하는데 이래서 자바스크립트는 일급함수를 가진 프로그래밍언어이다 라고 말한다.