//request => 브라우저가 서버로 보내는 요청
//response => 서버가 브라우저로 보내는 응답
//fetch를 사용하지않고 자바스크립트 코드로 request, response를 할수있는 방법이있지만 
//오늘날에 와서는 fetch를 사용하는게 제일 보편적이게 되었다. 그 이외방법은 나중에 알아보자


fetch('https://www.google.com') //파라미터로 값으로 request를 한다.
    //request를 한값으로 response가 객체로 오는데 그게 'response'객체에 담겨 온다.
    //지금은 (response) 라고 해놨지만 다른단어를 써도 상관없다.
    //여기 함수(arrow fun)가 fetch가 실행될때 함께 실행되는 함수가 아니다. 서버의 response가 올때 실행된다. 이렇게 나중에 어떤 조건이 만족되었을때 실행되는함수를 콜백이라 한다.
    //then 메서드는 fetch가 리턴하는 어떤객체의 메서드인데 이 객체를 promise객체라 하는데 그건 뒤에서 알아보자
    //promise 객체의 then 메서드는 콜백을 등록하는 메서드이다.
    //이렇게 then메서드로 콜백을 등록하면 response가 왔을때 그 콜백이 실행된다.
    .then((Response) => Response.text()) 
    .then((result) => {console.log(result);}); //이 then 메서드도 마찬가지이다. 이 then메서드는 그위 then메서드가 실행되고 실행된다.
    // 이렇게 위와 같은 예시로 콜백값을 다음 콜백이 넘겨받을수있다
    // 여기서 result에는 response의 내용이다. 이것을 출력하면 response의 내용을 볼수있는것이다.
