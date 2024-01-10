// async & await

// fetch('https://jsonplaceholder.typicode.com/users') 
//   .then((response) => response.text())  
//   .then((result) => { console.log(result); }) 

//await을 사용해보기 
// await은 뒤에 코드를 실행하고 해당 promise가 
// fulfilled(또는 reject)상태가 될때까지 promise를 기다린다.
// fulfilled상태가 되면 그 작업 성공결과를 리턴한다.
// 그리고 나서 그 다음줄 코드를 실행한다.
async function fetchAndPrint() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const result = await response.text();
    console.log(result);
  }
  
  fetchAndPrint();