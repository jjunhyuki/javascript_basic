//async
// 중요!!! await은 async안에서만 실행 가능하다.

//이 코드를
// fetch('https://jsonplaceholder.typicode.com/users') 
//   .then((response) => {
//    console.log(7);
//    return response.text();  
//})
//   .then((result) => { console.log(result); }) 

//이렇게 바꾼것
//async는 fetchAndPrint함수가 비동기 라는 뜻이 된다.
// ㄴ> 이말은 바깥 코드들이 다 실행되고나서 실행되는 코드가 있다는 뜻이된다.
//    ㄴ> 그것이 바로 await이 붙은 코드들이다.
async function fetchAndPrint() { 
    console.log(2);
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log(7);
    const result = await response.text();
    console.log(result);
  }
  console.log(1);
  fetchAndPrint();
  console.log(3);
  console.log(4);
  console.log(5);
  console.log(6);
  
  //실행순서.
  // 1 => 2 => 3 => 4 => 5 => 6 => 7 => result