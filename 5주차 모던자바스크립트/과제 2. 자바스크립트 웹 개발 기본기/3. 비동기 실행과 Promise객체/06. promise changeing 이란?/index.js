//promise 객체 chain 
//  작업을 진행중 pending
//  작업을 성공 fulfilled
//  작업을 실패 rejected

//   then 메소드가 새로운 promise객체를 리턴한다.
//  then 메소드가 리턴한 프로미스 객체는 처음에는 pending상태
//  but 콜백을하여 then 메서드가 리턴한 프로미스 객체영향을 받는다.
//  크게 2가지로 나눌수있다.
//  1. 콜백 안에서 promise객체를 리턴하는경우
//    콜백에서 프로미스객체를 리턴하면 then메서드가 리턴한 프로미스와 동일한 상태와 결과를 가지게 된다.
//    ex) 콜백이 리턴한 프로미스객체가 fulfilled상태이면 then 메서드가 리턴한 프로미스도 fulfilled가 된다.
//      그와 반대인 rejected도 같다. rejected이면 rejected상태가 된다.
//  2. 콜백 안에서 promise객체가 아닌값을 리턴하는경우.
//    콜백에서 프로미스 말고 숫자, 문자열, 객체 등등을 리턴하는경우에는
//    then 메서드가 리턴한 프로미스객체는 fulfille상태가 되고 콜백의 리턴값을 작업성공 결과로 본다.

console.log('Start!');

 fetch('https://jsonplaceholder.typicode.com/users') 
  .then((response) => response.text())  
  .then((result) => { 
    const users = JSON.parse(result);
    return users[0];
  }) 
  .then((user) =>{
    console.log(user);
    const { address } = user;
    return address;
  })
  .then((address) => {
    console.log(address);
    const { geo } = address;
    return geo;
  })
  .then((geo) => {
    console.log(geo);
    const { lat } = geo;
    return lat;
  }) 
  .then((lat) => {
    console.log(lat);
  });
  
console.log('End'); 

