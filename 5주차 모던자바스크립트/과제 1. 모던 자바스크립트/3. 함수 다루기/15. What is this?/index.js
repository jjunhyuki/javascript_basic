//this
//일반적으로 혼자쓰이지는 않고 함수 내부에서 많이쓰임
// 객체의 메소드를 만들때 쓰임

//아래에서처럼 간단하게 쓸때에는 this를 안써도 접근이 어렵지않다.
// const user ={
//     firstName: 'Tess',
//     lastname: 'Jang',
//     getFullName: function() {
//         return `${user.firstName} ${user.lastname}`;
//     },
// };
const user ={
    firstName: 'Tess',
    lastname: 'Jang',
    getFullName: function() {
        return `${this.firstName} ${this.lastname}`;
    },
};


console.log(user.getFullName());

console.log('------------------------------------')

//but
// function getFullName1() {
//     return `${user1.firstName} ${user1.lastName}`;
// }
function getFullName1() {
    return `${this.firstName} ${this.lastName}`;
}

const user1 ={
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName1: getFullName1,
};

const admin = {
    firstName: 'Alex',
    lastName: 'Kim',
    getFullName1: getFullName1,
};

// console.log(user1.getFullName1()); // Tess Jang
// console.log(admin.getFullName1()); // Tess Jang
console.log(user1.getFullName1()); // Tess Jang
console.log(admin.getFullName1()); // Tess Jang

console.log('------------------------------------')

//단일으로써 this 를 쓴다면 이렇게 window객체를 띄우지만
console.log(this); //window 객체를 띄움

function printThis() { //window 객체를 띄움
    console.log(this);
}
printThis();


//아래와같이 함수 또는 객체를 통해 쓴다면 그 해당하는 객체 or 함수를 띄움
//이렇게 외부에서 여러객체에 공통적으로 사용되는 메서드를 만들때 뿐만 아니라 
// 객체 내부에서 메서드를 만들때에도 메서드가 속해있는 객체의 프로퍼티가 필요한 상황에서 활용할수있다.
const myObj = {
    content: 'myObj',
    printThis: printThis,
};

const otherObj = {
    content: 'otherObj',
    printThis: printThis,
};

myObj.printThis();
otherObj.printThis();

//주의사항
//Arrow fun 의 this값은 일반함수처럼 호출한 대상에 따라 상대적을 변하는게 아니라
// arrow fun 이 선언되기 직전에 그떄 유효한 this 값과 똑같은 값을 가지고 동작하게된다.
// 이러한 특징때문에 특정한 객체 메소드를 만들때에는 arrow fun을 쓰지않는다. => 일반함수가 좀더 권장된다.
//ex) 

console.log(this); // 여기 this이다. , window객체가 띄워진다.
 
const printThis = () => { //여기 arrow fun이 선언되기 직전에 유효한 this는 바로위 console.log(this)이다.
    console.log(this); //이러한 특징
}
printThis();

const myObj1 = {
    content: 'myObj1',
    printThis: printThis,
};

const otherObj1 = {
    content: 'otherObj1',
    printThis: printThis,
};

myObj1.printThis();
otherObj1.printThis();