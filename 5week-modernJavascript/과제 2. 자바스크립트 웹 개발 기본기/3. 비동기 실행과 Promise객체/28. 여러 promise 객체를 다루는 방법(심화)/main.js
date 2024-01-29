//여러 개의 Promise 객체를 다뤄야 할 때 사용되는 Promise의 메소드들을 배워보겠습니다.

//1. all 메소드

// 1번 직원 정보
const p1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const p2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const p3 = fetch('https://learn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([p1, p2, p3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  });

  // but 만약 p1~3 객체들 중 하나라도, rejected 상태가 되면 어떻게 될까요?
  //ex) p3가 rejected 상태가 된다면  TypeError: Failed to fetch가 뜨게 되는데 
  //    all 메소드는 하나의 Promise 객체라도 rejected 상태가 되면, 전체 작업이 실패한 것으로 간주해야 할 때 사용합니다. 
  
  //    이렇게 Promise 객체가 하나라도 rejected 상태가 되는 경우에 대비하려면 catch 를 사용한다.
// 1번 직원 정보
const pp1 = fetch('https://learn.codeit.kr/api/members/1').then((res) => res.json());
// 2번 직원 정보
const pp2 = fetch('https://learn.codeit.kr/api/members/2').then((res) => res.json());
// 3번 직원 정보
const pp3 = fetch('https://learnnnnnn.codeit.kr/api/members/3').then((res) => res.json());

Promise
  .all([pp1, pp2, pp3])
  .then((results) => {
    console.log(results); // Array : [1번 직원 정보, 2번 직원 정보, 3번 직원 정보]
  })
  .catch((error) => {
    console.log(error);
  });



//2. race 메소드
// race 메소드도 all 메소드와 마찬가지로 여러 Promise 객체들이 있는 배열을 아규먼트로 받습니다. 
// 그리고 race 메소드도 all 메소드처럼 Promise 객체를 리턴하는데요. 하지만 그 적용 원리가 다릅니다.
// race 메소드가 리턴한 Promise 객체는 아규먼트로 들어온 배열의 여러 Promise 객체들 중에서 
// 가장 먼저 fulfilled 상태 또는 rejected 상태가 된 Promise 객체와 동일한 상태와 결과를 갖게 됩니다.

//=> race 메소드가 리턴한 Promise 객체는 이 중에서 가장 빨리 상태 정보가 결정된 p1 객체와 동일한 상태와 결과를 가집니다. 
//말그대로 race 메소드는 여러 Promise 객체들을 레이스(race, 경쟁)시켜서 가장 빨리 상태가 결정된 Promise 객체를 선택하는 메소드입니다. 
//아래 코드에서는 pr1만 fulfilled 상태가 되고 2, 3 은 reject 상태가 되버린다.
const pr1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 1000);
  });
  const pr2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 2000);
  });
  const pr3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail2')), 4000);
  });
  
  Promise
    .race([pr1, pr2, pr3])
    .then((result) => {
      console.log(result); // hello 출력
    })
    .catch((value) => {
      console.log(value);
    });

    
    //이렇게 실행하면 2가  fulfilled가 되고 1, 3 은 reject가 된다.
const prr1 = new Promise((resolve, reject) => {
    setTimeout(() => resolve('Success'), 6000);
    });
    const prr2 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail')), 2000);
    });
    const prr3 = new Promise((resolve, reject) => {
    setTimeout(() => reject(new Error('fail2')), 4000);
    });
    
    Promise
    .race([prr1, prr2, prr3])
    .then((result) => {
        console.log(result); // hello 출력
    })
    .catch((value) => {
        console.log(value);
    });
    
// 3. allSettled 메서드
// allSettled 메소드 : 배열 내의 모든 Promise 객체가 fulfilled 또는 rejected 상태가 되기까지 기다리고, pending 상태의 Promise 객체가 하나도 없게 되면, A의 상태값은 fulfilled 상태가 되고 그 작업 성공 결과로, 하나의 배열을 갖게 됩니다. 
// 이 배열에는 아규먼트로 받았던 배열 내의 각 promise 객체의

// (1) 최종 상태를 status 프로퍼티, 
// (2) 그 작업 성공 결과는 value 프로퍼티, 
// (3) 그 작업 실패 정보는 reason 프로퍼티

// 에 담은 객체들이 요소로 존재합니다. 
// [
//     {status: "fulfilled", value: 1},
//     {status: "fulfilled", value: 2},
//     {status: "fulfilled", value: 3},
//     {status: "rejected",  reason: Error: an error}
//  ]
 
// 4. any메서드
// any 메소드 : 여러 Promise 객체들 중에서 가장 먼저 fulfilled 상태가 된 Promise 객체의 상태와 결과가 A에도 똑같이 반영됩니다. 만약 모든 Promise 객체가 rejected 상태가 되어버리면 AggregateError라고 하는 에러를 작업 실패 정보로 갖고 rejected 상태가 됩니다. any라는 단어의 뜻처럼 배열 속의 Promise 객체 중 단 하나라도 fulfilled 상태가 되면 되는 겁니다.

