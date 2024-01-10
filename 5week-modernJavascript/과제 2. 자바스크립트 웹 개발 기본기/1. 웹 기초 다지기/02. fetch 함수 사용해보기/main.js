//fetch
//웹 브라우저와 통신하는 걸 배울거다

//구글 키고 개발자 도구 들어가서 console에 자바스크립트 코드를 입력해보자

fetch('https://www.google.com')
    .then((Response) => Response.text())
    .then((result) => {console.log(result);});

//콘솔에 입력히면 promise부분은 뒤에서 배울거고 그밑에 엄청많은 코드가 나올텐데
// 그게 웹브라우저가 구글서버로 부터 받은 내용이다. 저 내용을 가지고 브라우저가 화면을띄우고 기능을 사용할수 있게 한다.