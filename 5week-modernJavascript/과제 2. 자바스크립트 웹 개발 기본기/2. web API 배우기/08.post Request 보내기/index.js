//post

//기본 조회
// fetch('https://learn.codeit.kr/api/members')
//   .then((response) => response.text())
//   .then((result) => {console.log(result);})
  
// //id가 3인 직원조회
//   fetch('https://learn.codeit.kr/api/members/3')
//   .then((response) => response.text())
//   .then((result) => {console.log(result);})
  
//직원 추가
const newMember = {
    name: 'Jerry',
    email: 'Jerry@codeitmail.kr',
    department: 'engineering',
  };
  //post
  fetch('https://learn.codeit.kr/api/members', {
    //이렇게 argument객체가 있는데 이걸 옵션객체라 부른다. 
    //아무것도없다면 디폴트값을 쓴다.(디폴트값은 get response)이다.
    method: 'POST',  
    body: JSON.stringify(newMember), 
    //외부에 값을 보내고싶을떄에는 stringify에 담아서 보낸다. parse의 반대이다.
  })
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  
  
  
  
  