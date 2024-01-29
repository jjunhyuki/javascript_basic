//Destructuring(구조 분해), 배열이나 객체를 분해하는것
// 배열과 객체가 값을 가지는 방식이 다르기때문에 Destructuring도 객체, 배열 이 둘의 방식이 다르다

// const macbook = {
//     title: '맥북 프로 16형',
//     price: 3690000,
//     memory: '16GB',
//     Storage: '1TB SSD 저장 장치',
//     display: '16형 Retina 디스플레이',
// };

//배열 구조분해 먼저 알아보자
// const rank = ['효준', '유나', '민환', '재하'];
const rank = ['효준', '유나', '민환', '재하', '규식'];

// const macbook = rank[0]; //효준
// const ipad = rank[1]; //유나
// const airpods = rank[2]; //민환
// const coupon = rank[3]; //재하
// 위 네 줄을 아래 한줄로 표현가능 => 배열을 분해해서 하나식 할당가능하게 한것 => 구조분해 이다.
// const [macbook, ipad, airpods, coupon] = rank;
// const [macbook, ipad, airpods, coupon]; //이렇게 아예 하나도 할당안해버리면 error 을 내뱉음
const [macbook, ipad, airpods, ...coupon] = rank; 
//가장 마지막 변수에 ...을 붙여주면 rest parameter 처럼 배열을 분해해서 할당할때
//앞쪽에 변수에 순서대로 요소를 할당하고 남은 나머지 요소를 마지막 변수에 배열로 할당할수있다.
// 주의1 => rest parameter 처럼 마지막 요소를 가져오기때문에 마지막 변수에만 할당할수있다.

console.log(macbook); //효준
console.log(ipad); //유나
console.log(airpods); //민환
console.log(coupon); //["재하, "규식"] => ...coupon 을 해서 이렇게 나온다.


/* ------------------------------------------------------------------------------ */
//배열의 길이보다 더 많은 요소를 할당시킨다면 
// 앞에서 부터 순서에 맞게 할당이 되다가 할당받지 못한 남은 부분들은 undefined 가 된다.
// 해결해기위해 파라미터에 기본값을 너어주자

const rank_ex = ['효준', '유나', '민환']; 
// const [macbook1, ipad1, airpods1, coupon1] = rank; 
console.log(macbook); //효준
console.log(ipad); //유나
console.log(airpods); //민환
console.log(coupon); // undefined

const [macbook1, ipad1, airpods1, coupon1 = '없음'] = rank_ex; 
console.log(macbook); //효준
console.log(ipad); //유나
console.log(airpods); //민환
console.log(coupon); //없음


/* ------------------------------------------------------------------------------ */
//변수의 할당된 값을 서로 교환할때도 사용가능
let macbookk = '효준';
let ipadd = '유나';

console.log('MacBook 당첨자:', macbookk); //MacBook 당첨자: 효준
console.log('Ipad 당첨자:', ipadd); //Ipad 당첨자: 유나

//전에는 변수의 할당된 값을 서로 교환할떄는 
// let tmp = macbook;
// macbook = ipad;
// ipad = macbook; 
//이렇게 교환했는데 너무 번거롭고 코드의 줄도 길다.

//Destructuring 를 사용해서 변수의 값을 서로 교환한다면?
//ex)
[macbookk, ipadd] = [ipadd, macbookk]; //이렇게 교환가능하다. 
//=> ipad에 담겨있던 유나가 macbook에 담기고 macbook에 담겨있던 효준이 ipad에 담기게된다.
console.log('MacBook 당첨자:', macbookk); //MacBook 당첨자: 유나
console.log('Ipad 당첨자:', ipadd); //Ipad 당첨자: 효준
