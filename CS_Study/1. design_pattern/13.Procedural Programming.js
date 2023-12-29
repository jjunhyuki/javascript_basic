//절차적 프로그래밍 Procedural Programming

//다음예시는 squareArray, printArray, calculateSum과 같은 함수들을 사용하여 간단한 프로시저를 정의합니다.

// 예제 데이터
const numbers = [1, 2, 3, 4, 5];

// 프로시저 지향 프로그래밍 예제

// 1. 프로시저: 배열의 각 요소를 제곱하는 프로시저
function squareArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] ** 2;
  }
}

// 2. 프로시저: 배열의 각 요소를 출력하는 프로시저
function printArray(arr) {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

// 3. 프로시저: 배열의 합계를 계산하는 프로시저
function calculateSum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

// 예제 사용
console.log("Original Numbers:");
printArray(numbers);

console.log("Squared Numbers:");
squareArray(numbers);
printArray(numbers);

const sum = calculateSum(numbers);
console.log("Sum of Numbers:", sum);
