//Arrow Function ES15에서 나옴
//기존 표현식과 선언식 보다 간결하고 가독성이 좋음 써보려고 노력하자.

//함수 표현식
// const getTwice = function(number){ 
//     return number * 2;
// };

//함수 선언식
const getTwice = (number) => { //arrow function은 좀더 간결하게 표현하기위해 나온것
    return number * 2;
};

console.log(getTwice(5));

const myBtn = document.querySelector('#myBtn');

// myBtn.addEventListener('click', function(){
//     console.log('button is clicked!');
// });

myBtn.addEventListener('click', () => {
    console.log('button is clicked!');
});

/* ----------------------------------- */

//위코드를 아래 한줄로 표현가능함
//arrow function 이 간결함
const getTwice1 = number => number * 2;

console.log(getTwice1(6));


/* ----------------------------------- */

//파라미터가 1개인 arrow fun 은 파라미터자리에 ()을 생략가능 but 파라미터인것을 표현하려고 일부러 생략 안하는 추세임
// const getTwice2 = number =>  { 
//     return number * 2;
// };
const getTwice2 = (number) =>  { 
        return number * 2;
};

console.log(getTwice(3));

const sum = (a, b) => {
    const result = a + b;
    // return a + b;
    return result;
};

// const getCodeit = () => { 
//     return {name : 'Codeit', };
// }
//return을 지우고 ()을 입혀서 이렇게 줄일수있다. 
const getCodeit = () => ({name : 'Codeit', });  


console.log(sum(10, 5));
console.log(getCodeit());

//주의 할것
//Arrow function에서는 argument객체가 없다!!
function normalFunc() {
    console.log(arguments);
}

const arrowFunc = () => {
    console.log(arguments);
}

//Arrow function을 사용하면 Arguments 를 사용못한다는걸 알아두자
normalFunc(1, 2, 3); //Argument(3) [1, 2, 3, callee:f, Symbol(Symbol.iterator): f] => argumnet객체가 존재한다.
arrowFunc(1, 2, 3,); // uncaught , ReferenceError : arguments is not defined => 에러가 뜬다.
