//개발자 도구(console)에서 확인해보자
//웹페이가 출력되도록 리스폰이 나오는것 말고 어떠한 정보가 담긴 리스폰스도 받을수있다.
//  기본
//  html을 그리기위한 html코드를 받았다.
// fetch('https://www.google.com') 
//     .then((Response) => Response.text())
//     .then((result) => {console.log(result);});
    
//아래와 같이 해본다면 어떠한 정보를 담고있는듯한 리스폰을 볼수있다.
  //어떠한 정보가 담겨있는 json형식으로 리스폰을 받았다.
  //json은 어떠한 정보를 교환할때 사용하기위해서 만들어진 데이터 포맷
    // (javascript언어를 빌려서 만들어진 데이터 포맷이다.) 자바스크립트와 매우 비슷
fetch('https://www.jsonplaceholder.typicode.com/user')
.then((Response) => Response.text())
.then((result) => {console.log(result);});
