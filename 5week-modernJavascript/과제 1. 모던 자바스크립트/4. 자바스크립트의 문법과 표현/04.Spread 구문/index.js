// Spread 구문
//Spread 구문은 묶여있던 값들을 하나의 개별값으로 구분하는 방식이다.
const numbers= [1, 2, 3];

console.log(...numbers); // 1 2 3 을 출력함 => 배열의 각각 개별값을 출력함
console.log(1, 2, 3); 

console.log('');
console.log('------------------------------------');

// Rest parameter 과 비슷하지만 사용법이 다르다
const sumAll = (...args) => {
    let sum = 0;
    for(arg of args){
        sum += arg;
    }
    return sum;
}
console.log(sumAll(1, 2, 3, 4));
// Rest parameter은 여러개의 파라미터를 하나의 argument로 묶는것이다.

console.log('');
console.log('------------------------------------');

// 배열에서 유용하게 잘 쓰인다. (ex. 배열을 복사할떄)
//ex
const webPublishing = ['HTML', 'CSS'];
const interactiveWeb = webPublishing;

interactiveWeb.push('javaScript');

console.log(webPublishing); //['HTML', 'CSS', 'javaScript'];
console.log(interactiveWeb); //['HTML', 'CSS', 'javaScript']; => 값을 참조 하기때문에 interactiveWeb에 값을 넣어도 webPublishing에 값이 생긴다.
// const interactiveWeb = webPublishing.slice(); => 이렇게 slice() 함수를 사용할수도있지만
const interactiveWeb1 = [...webPublishing]; // 이렇게 사용할수도있고
const interactiveWeb2 = [...webPublishing, 'JavaScript']; //이렇게 값을 바로 추가할수도있다.
console.log(interactiveWeb1); //[ 'HTML', 'CSS', 'javaScript' ] 
console.log(interactiveWeb2); //[ 'HTML', 'CSS', 'javaScript', 'JavaScript' ]

console.log('');
console.log('------------------------------------');


//이렇게 여러배열을 합칠떄에도 사용한다.
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);

//conca() 을 사용하여 배열을 합칠수도있다.
const arr4 = arr1.concat(arr2);
console.log(arr4);

//but spread()를 사용하는것이 배열을 좀더 직관적으로 볼수있다는 장점이있다.


// 함수를 활용할떄 argument로도 활용가능
const introduce = (name, birth, job) => {
    console.log('안녕하세요! 반갑습니다.');
    console.log(`저는 ${name}입니다.`);
    console.log(`${birth}년 생이고,`);
    console.log(`직업은 ${job}입니다.`);
    console.log('잘 부탁드립니다 :)');
};

const myArr = ['코드잇', 2017, '스프린터'];
introduce(...myArr); //이렇게 객체를 추가로 넣을수도 있다.

//주의
// spread구문을 값이라고 생각하면 안됨! => 여러값의 목록이라고 생각해야한다, 배열을 펼친것 이라고 생각하면 쉽다.
//ex)
const number_s = [1];
// const number = ...numbers_s; //error , 이렇게 값이 하나일때는 error이 뜬다. => 값이 아니다.

//배열을 펼쳐서 객체에 담으면 어떻게 될까?
const members = ['태호', '종훈', '우재'];

const newObject = { ...members};

console.log(newObject); // {0: "태호", 1: "종훈", 2: "우재"}; 