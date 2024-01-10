//Destructuring(구조 분해), 배열이나 객체를 분해하는것
// 배열과 객체가 값을 가지는 방식이 다르기때문에 Destructuring도 객체, 배열 이 둘의 방식이 다르다
// 객체는 index가 아닌 property name을 기준으로 분해한다.
const macbook = {
    title: '맥북 프로 16형',
    price: 3690000,
    memory: '16GB',
    Storage: '1TB SSD 저장 장치',
    display: '16형 Retina 디스플레이',
    'serial-num': 'ABCDEFGHIJKL',
};

//이렇게 있던 표현이
//const title = macbook.title;
//const price = macbook.price;
//Destructuring 표현으로 바꿈
// const {title, price} = macbook;

// 배열은 [] 인데 객체니까 {} 으로 감싸줘서 표현
// {}안에 기존 property name과 같은 name이 있다면 그 값이 할당되는 방식
// const {title, price} = macbook;
// const {title, price, color = 'silver'} = macbook;

// console.log(title);
// console.log(price); 
// // console.log(MSerise); //undefined, macbook에 없는 프로퍼티다
// console.log(color); //macbook에 없는프로퍼티면 기본값을 설정해주면 undefined 안뜬다.

/*-------------------------------*/

// ...변수 이렇게 선언하면 앞에 유효한 부분을 그대로 할당이 되고
//남은부분들을 모아서 하나의 객체로 모아준다.
// const {title, ...rest} = macbook; 

// console.log(rest);

/*-------------------------------*/

//macbook의 title이라는 프로퍼티네임을 바꾸고싶을떄에는 
// 변수뒤에 : newName 을 해주면 된다.
// const {title: product , ...rest} = macbook; 

// console.log(product);
// console.log(rest);

//주의
//  간혹 객체내에 변수이름으로 사용할수 없는 프로퍼티가 있을수있다.
// ex) 'serial-num': 'ABCDEFGHIJKL', 
//       ㄴ> 이런이름들은 Destructuring할때 반드시 새로운 변수이름을 설정해줘야한다.
// const {title: product , 'serial-num': seriaNum ,...rest} = macbook; 
// console.log(product);
// console.log(seriaNum);
// console.log(rest);

const propertyName = 'title';
const { [propertyName]: product} = macbook; //이렇게 {}를 통해서 변수이름을 바꿀수 있다.

console.log(propertyName);

