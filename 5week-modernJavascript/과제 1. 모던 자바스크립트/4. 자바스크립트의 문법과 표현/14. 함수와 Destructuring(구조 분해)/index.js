//Destructuring(구조 분해), 배열이나 객체를 분해하는것
// 배열과 객체가 값을 가지는 방식이 다르기때문에 Destructuring도 객체, 배열 이 둘의 방식이 다르다
// 객체는 index가 아닌 property name을 기준으로 분해한다.
// 함수와 Destructuring

//복습
// 배열
function getArray() {
    return ['컴퓨터', '냉장고', '세탁기'];
}

const [el1, el2, el3] = getArray();

console.log(el1);
console.log(el2);
console.log(el3);

// rest parameter 을 사용해서
// function printWinners(...arg){
    //parameter 부분에서 Destructuring 을 바로 사용해서 이렇게도 가능
function printWinners(macbook, ipad, airpods, ...coupon){ // 1. 여러개의 파라미터를 {}로 묶어주고
    // const [macbook, ipad, airpods, ...coupon] = arg;

    console.log('이벤트 결과를 알려드립니다.');
    console.log(`맥북의 주인공은 '${macbook}'님 입니다.`);
    console.log(`아이패드의 주인공은 '${ipad}'님 입니다.`);
    console.log(`에어팟의 주인공은 '${airpods}'님 입니다.`);
    console.log('코드잇 3개월 수강권 주인공은');

    for (let user of coupon)
    {
        console.log(`'${user}'님`);
    }
    console.log(`이상 총 ${coupon.length}명 입니다.`);
}

// printWinners('효준', '효신', '재훈', '소원', '현승', '종훈');
const ranks = ['효준', '효신', '재훈', '소원', '현승', '종훈'];
printWinners(ranks); //2.배열을 할당하는것과 크게 다르지않다.

/*--------------------------------------------------------------------------------*/

//복습
// 객체

function getObject(){
    return {
        name: '코드잇',
        birth: 2017,
        job: '스프린터',
    }
};

const {name: brand, birth, job} = getObject(); //이렇게 Destructuring 문법을 활용할수있다.

console.log(brand);
console.log(birth);
console.log(job);

//but 
// 객체의 경우에는 객체를 리턴하는 함수보다는 파라미터를 객체 형태로 작성하는 함수에서 좀더 유용하다.

const macbook1 = {
    title: '맥북 프로 16형',
    price: 3690000,
    memory: '16GB',
    Storage: '1TB SSD 저장 장치',
    display: '16형 Retina 디스플레이',
    'serial-num': 'ABCDEFGHIJKL',
};

function printSummary({title, color, price}) { //3. 이렇게 Destructuring를 활용하면 많이 줄일수 있다는 장점이있다.
    //const {title, color, price} = object; //2. Destructuring를 사용하면 좀더 간결하게 활용가능 , but 함수내부에서 딱 이 프로퍼티들만 활용 할것이라면

     //1. 함수 내부에서 프로퍼티를 활용할때 매번 이 객체를 접근하는 것이 아니라 
    console.log(`선택한 상품은 '${title}' 입니다.`);
    console.log(`색상은 ${color}이며,`);
    console.log(`가격은 ${price}원 입니다.`);
}

printSummary(macbook1);

//DOM 이벤트를 다룰때도 잘 활용할수 있다.
const btn = document.querySelector('#btn');

// btn.addEventListener('click', (event) => { //파라미터로 event객체가 전달되니까 매번 event객체의 접근하는게 아니라 target 프로퍼티만 사용한다면 아래와 같이 (간결하게)사용가능
btn.addEventListener('click', ({target}) => {
    // event.target.classList.toggle('checked');
    target.classList.toggle('checked'); //여기 타켓프로퍼티가 객체인데 이렇게 중첩된 객체는 : 기호를 가지고 한번더 분해를 하는 방식으로 응용가능
});

btn.addEventListener('click', ({target: {classList}}) => { //1 .이렇게 한번더 분해를 하면 괄호가 많아져서 이해하기 힘든데 
    classList.toggle('checked'); 
});

btn.addEventListener('click', ({target}) => { // 사실 중첩 객체를 분해하지 않아도 함수 내부에서 한번더 Destructuring문법을 활용할수있다. 
    const {classList} = target;
    classList.toggle('checked'); 
});

// 중첩 객체 구조 분해 ( Nested Object Destructuring ) //2. Destructuring가 익숙해지면 중첩 객체 구조 분해 를 알아보면서 심화학습으로 공부해보자 
//중첩 객체 구조 분해가 괄호와 코드가 길어짐에 따라 가독성이 안좋아지고 이해하기 어렵다면 위에 방법처럼 함수 내부에서 한번더 Destructuring문법을 활용하는것도 괜찮은 방법이다.


