//promise를 배운상태에서 전에 배웠던 코드를 다시 해석해보자

console.log('Start!');

 fetch('https://jsonplaceholder.typicode.com/users') //promise객체를 리턴
  .then((response) => response.text())  
  //fulfilled 가 되었을때 실행, 작업성공결과 response이다.
  .then((result) => { console.log(result); }) 
   
console.log('End'); 

