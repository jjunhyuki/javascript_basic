//웹통신을 할때 알아야할 자바스크립트 문법에대해 배워봄

//예상 콘솔로그 나오는 순서 start => result => end
//but 실재로는 start => end = > result 순서로 나온다.
// 왜냐하면 fetch함수가 비동기실행 부분이있기떄문이다.
console.log('Start!'); //실행1

 fetch('https://jsonplaceholder.typicode.com/users') //fetch함수가 실행2되는데
  .then((response) => response.text()) //이부분(콜백)이 서버로부터 response가 와야실행이된다. (.then메서드로 등록만하고 바로 실행 안된다.)
  .then((result) => { console.log(result); }) //이부분(콜백)이 서버로부터 response가 와야실행이된다. (.then메서드로 등록만하고 바로 실행 안된다.)
   
console.log('End'); // 실행3되고
//response가 도착하면 이제 .then부분들이 실행된다. 
//그래서 start => end = > result 순으로 시작된다.