// finally
// 콜백이 fulfiled or rejected나 항상 실행 시키고 싶을때 사용

// fetch('https://jsonplaceholder.typicode.com/users')
// .then((response) =>  response.text()) 
// .then((result) => { console.log(result); })
// .catch((error) => { console.log(error); })
// .finally(() => {console.log('exit'); });


fetch('https://jsonplaceholder.typicode.commmm/users')
.then((response) =>  response.text()) 
.then((result) => { console.log(result); })
.catch((error) => { 
  console.log(error);
  throw new Error('from catch method');  //에러가 발생하더라도
})
.finally(() => {console.log('exit'); }); //실행가능하다.