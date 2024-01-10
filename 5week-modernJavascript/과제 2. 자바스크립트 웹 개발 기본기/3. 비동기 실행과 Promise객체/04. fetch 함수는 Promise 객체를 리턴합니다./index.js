//fetch는 promise객체를 리턴한다!!
//promise란?
//   어떤 작업에 관한 '상태 정보' 이다.
//  promise는 3가지 상태중 1가지를 가진다.
//  작업을 진행중 pending
//  작업을 성공 fulfilled
//  작업을 실패 rejected
//  promise의 상태변환은 1.pending 으로 시작했다가 
//  작업이 성공 => fulfilled
//  작업이 실패(서버가 끊기거나 할떄)=> rejected

//  작업이 성공해서 fulfilled가 되면 작업성공 결과도 같이 가지게된다.
//  ex) response

//  작업이 실패해서 rejected가 되면 작업 실패한 이유도 가지게 된다.

                                                

console.log('Start!');

 fetch('https://jsonplaceholder.typicode.com/users') //fetch함수는 promise를 리턴
  .then((response) => response.text())  //then 은 리턴하는 promise객체의 메소드
  .then((result) => { console.log(result); }) 
   
console.log('End'); 