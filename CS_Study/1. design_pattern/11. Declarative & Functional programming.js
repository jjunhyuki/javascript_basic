//함수형 프로그래밍 Declarative programming

// 예제 데이터
const numbers = [1, 2, 3, 4, 5];

// 함수형 프로그래밍 예제

// 1. 불변성 유지: 기존 배열을 변경하지 않고 새로운 배열을 생성
const squaredNumbers = numbers.map(num => num * num);

// 2. 순수 함수: 외부 상태를 변경하지 않고 같은 입력에 대해 항상 같은 출력을 반환
const sum = arr => arr.reduce((acc, curr) => acc + curr, 0);

// 3. 고차 함수: 함수를 인자로 받거나 함수를 반환하는 함수
const double = num => num * 2;
const triple = num => num * 3;

const calculate = (num, operation) => operation(num);

// 4. 함수 합성: 여러 함수를 조합하여 새로운 함수를 생성
const compose = (...functions) => arg => functions.reduceRight((acc, fn) => fn(acc), arg);

const squareAndDouble = compose(double, num => num * num);

// 예제 사용
console.log("Original Numbers:", numbers);
console.log("Squared Numbers:", squaredNumbers);
console.log("Sum of Numbers:", sum(numbers));
console.log("Double of 5:", calculate(5, double));
console.log("Square and Double of 3:", squareAndDouble(3));

/*-------------------------------------------------------------------------------------*/

//Functional programming

// 예제 데이터
const numberss = [1, 2, 3, 4, 5];

// 함수형 프로그래밍 예제

// 1. map: 각 요소에 함수를 적용하여 새로운 배열 생성
const squaredNumberss = numbers.map(num => num * num);

// 2. filter: 조건에 맞는 요소로 구성된 배열 생성
const evenNumbers = numbers.filter(num => num % 2 === 0);

// 3. reduce: 배열을 단일 값으로 축소
const sums = numbers.reduce((acc, curr) => acc + curr, 0);

// 4. 함수 합성 (compose): 여러 함수를 조합하여 새로운 함수 생성
const composes = (...functions) => arg => functions.reduceRight((acc, fn) => fn(acc), arg);

// 5. 함수 부분 적용 (partial application): 함수에 일부 인수를 제공하여 새로운 함수 생성
const multiply = (a, b) => a * b;
const doubles = multiply.bind(null, 2);

// 예제 사용
console.log("Original Numbers:", numberss);
console.log("Squared Numbers:", squaredNumberss);
console.log("Even Numbers:", evenNumberss);
console.log("Sum of Numbers:", sums);

// 함수 합성과 부분 적용을 조합하여 사용
const squareAndDoubles = compose(double, num => num * num);
console.log("Square and Double of 3:", squareAndDoubles(3));
