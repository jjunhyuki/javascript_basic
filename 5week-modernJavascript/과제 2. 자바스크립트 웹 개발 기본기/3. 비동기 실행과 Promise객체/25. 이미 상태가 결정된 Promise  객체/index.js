//1. 이미 상태가 결정된 Promise 객체 만들기

//(1) fulfilled 상태의 Promise 객체 만들기
const p1 = Promise.resolve('success');


// (2) rejected 상태의 Promise 객체 만들기
const p2 = Promise.reject(new Error('fail'));


const p3 = new Promise((resolve, reject) => { 
    // setTimeout(() => { resolve('success'); }, 2000); //2초 후에 실행
    // setTimeout(() => { reject(new Error('fail')); }, 2000); //2초 후에 실행
  });

const p4 = Promise.resolve('success');
p.then((result) => { console.log(result); }, (error) => { console.log(error); });

const p5 = Promise.reject(new Error('fail'));
p.then((result) => { console.log(result); }, (error) => { console.log(error); });


// 2. Promise 객체의 작업 성공 결과 또는 작업 실패 정보
const p6 = new Promise((resolve, reject) => {
    setTimeout(() => { resolve('success'); }, 2000); // 2초 후에 fulfilled 상태가 됨
  });
  
  p.then((result) => { console.log(result); }); // Promise 객체가 pending 상태일 때 콜백 등록
  setTimeout(() => { p.then((result) => { console.log(result); }); }, 5000); // Promise 객체가 fulfilled 상태가 되고 나서 콜백 등록 
//  이 코드를 실행하면 Promise가 pending 상태일 때 등록한 콜백이든, 
//  fulfilled 상태가 된 후에 등록한 콜백이든 잘 실행되는 것을 알 수 있습니다.
//  이렇게 어느 시점이든, 몇 번의 then 메소드를 붙이든 상관없이, 
//  pending 상태만 아니라면 항상 then 메소드로 Promise 객체의 결과를 추출할 수 있습니다.

// Promise 객체는 항상 결과를 줄 수 있는 공급자(Provider)이고 
// 그것의 then 메소드는 그 결과를 소비하는 콜백인 소비자(Consumer)를 설정하는 메소드라는 사실을 잘 기억하셔야 합니다. 
// 시점과는 전혀 연관이 없으니까 오해하지 마세요!

