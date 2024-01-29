//catch
//error을 감지 할때 사용한다.

/*fetch('https://www.jsonplaceholder.typicode.com/user')
.then((Response) => Response.text(), (error) => { console.log(error); })
.then((result) => { console.log(result); });*/

//첫번쨰 then메서드의 두번쨰 콜백으로 넣는방법말고 catch를 사용해보자
fetch('https://jsonplaceholder.typicode.com/userssssssss') //일부러 rejected를 반환하기위해 이상한 url을 넣어둠
  .then((response) =>  response.text()) 
  .catch((error) => { console.log(error); }) //promise객체가 rejected가 되면 사용할 
  .then((result) => { console.log(result); });