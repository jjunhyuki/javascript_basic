//아래와같이 프로미스객체를 갖다 쓰는게 아니라 직접 만들수도있다.

// fetch('https://jsonplaceholder.typicode.commmm/users')
// .then((response) =>  response.text()) 
// .then((result) => { console.log(result); })
// .catch((error) => { console.log(error); })
// .finally(() => {console.log('exit'); }); 

//여기서 Promise 내부를 executor 함수라고 하는데 
//  resolve 부분은 생성된 promise객체를 fulfilled 상태로 만들수 있는 함수와 연결된다.
//  reject 부분은 생성된 promise객체를 reject 상태로 만들수 있는 함수와 연결된다.
const p = new Promise((resolve, reject) => { 
    // setTimeout(() => { resolve('success'); }, 2000); //2초 후에 실행
    setTimeout(() => { reject(new Error('fail')); }, 2000); //2초 후에 실행
  });
  
  //생성된 프로미스 객체에 then을 붙여 써보도록하자.
  // p.then((result) => {console.log(result); });
  p.catch((error) => {console.log(error); });
  