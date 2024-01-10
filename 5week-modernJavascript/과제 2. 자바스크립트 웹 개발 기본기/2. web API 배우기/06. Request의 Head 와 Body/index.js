//Request의 종류
//조회(get), 추가(post), 수정(put), 삭제(delete)

//하나의 Request에는 Head, Body 로 나누어져있다.
//head에는 Request에 대한 부가정보 , 메소드가 여기에 속한다.
// body에는 실제 데이터가 담겨있다.

// post, put은 주로 body에 담아서 보내줘야한다.
// but
// 단순히 데이터를 get, delete는 body가 필요치 않다.

//개발자 모드에서 실행시켜보자.
//  network탭 으로 가보자, network탭(웹브라우저와 주고받은 request를 직접 볼수있는곳)
//  하단에 users파일? 같은걸 클릭해보자
//  스크롤해서 아래쪽으로 내려가면 request headers 가 있는데 이게 head부분
//  header는 head안에 존재하는 하나하나 키와 값의 쌍을 의미.
//  method: get 이라고 나와있을텐데 지금 내가 요청한 request 종류가 조회(get)이라는뜻
//  path는 url의 그 path이다. 이게 헤더에있기때문에 웹브라우저는 이 리퀘스트가 어떤 정보를 원하는지 알수있다.
//  user-agent는 리퀘스트를 보낸 브라우저와 그것이 설치되어있는 운영체제의 정보가 담겨있다.
fetch('https://www.jsonplaceholder.typicode.com/user')
.then((Response) => Response.text())
.then((result) => {console.log(result);});
