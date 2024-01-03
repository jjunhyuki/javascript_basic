// catch메소드를 마지막에 쓴다.
    //then메서드에서 콜백에서 에러를 발생시키면 
    //  이 then메서드에서의 콜백은 rejected가 된다.
    //이럴때에는 캐치 매서드를 맨 아래로 내려서 사용한다.
// fetch('https://jsonplaceholder.typicode.com/users')
//   .then((response) =>  response.text()) 
//   .catch((error) => { console.log(error); }) 
//   .then((result) => { 
//     console.log(result); 
//     throw new Error('test');
//   });
  
  
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>  response.text()) 
.then((result) => { 
  console.log(result); 
  throw new Error('test');
})
.catch((error) => { console.log(error); }) ;
//이렇게 해두면 
//fetch사용하면서 발생한 에러이든, 일부러 발생시킨 에러이든 다 적용가능



