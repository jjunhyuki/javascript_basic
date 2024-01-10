//Parameter

function greeting(name) {
    console.log(`Hi! My name is ${name}!`);
}

greeting('JavaScript'); //() 안에 값들이 argument 아규먼트
greeting('CodeIt');
greeting('World');


function greeting(name = 'Codeit') { //파라미터에 초기값을 설정해서 이렇게도 쓸수있다. (ES15부터 나온문법)
    console.log(`Hi! My name is ${name}!`);
}

greeting();


// function greeting(name = 'Codeit', interest) { //interset 가 undefined로 뜬다
//     console.log(`Hi! My name is ${name}!`);
//     console.log(`I like ${interest}!`);
// }

// greeting('JavaScript');

function greeting(name = 'Codeit', interest = 'JavaScript') { 
    console.log(`Hi! My name is ${name}!`);
    console.log(`I like ${interest}!`);
}

greeting(undefined ,'Python');


function defaultTest(x, y = x + 3){
    console.log(`x: ${x}`);
    console.log(`y: ${y}`);
};

defaultTest(2, 3);