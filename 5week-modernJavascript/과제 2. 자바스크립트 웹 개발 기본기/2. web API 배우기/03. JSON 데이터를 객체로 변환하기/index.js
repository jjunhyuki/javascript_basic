//response.text 는 string 타입 인데 이걸 가지고 값을 다루기가 쉽지않다.
//but
//string 타입의 json데이터는 자바스크립트의 객체로 변환가능하기때문에 이번시간에 다뤄보자

// fetch('https://www.jsonplaceholder.typicode.com/user')
// .then((response) => response.text())
// .then((result) => {console.log(result);}); 

//parse() 를 사용하면 json타입을 바사스크립트 객체 타입으로 변환가능
fetch('https://www.jsonplaceholder.typicode.com/user')
  .then((response) => response.text())
  .then((result) => {
    const users = JSON.parse(result);
    console.log(users.length); //10
    users.forEach((user) =>{ //for문이 10개를 돌면서 이름을 출력
      console.log(user.name);
    });
  }); 
  