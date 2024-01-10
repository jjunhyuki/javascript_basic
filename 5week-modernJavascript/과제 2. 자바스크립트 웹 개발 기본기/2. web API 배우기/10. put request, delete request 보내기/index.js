//   fetch('https://learn.codeit.kr/api/members/3')
//   .then((response) => response.text())
//   .then((result) => {console.log(result);})
  
//put request (추가)
const member = {
    name: 'Alice',
    email: 'alice@codeitmail.kr',
    department: 'marketing',
  };
  
  fetch('https://learn.codeit.kr/api/members/2', {
    method: 'PUT',  
    body: JSON.stringify(member), 
  })
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  
//delete request (삭제)
  fetch('https://learn.codeit.kr/api/members/2', {
    method: 'DELETE', //delete는 값을 삭제하는것이기때문에 body 에 담아 보낼게 없다.
  })
  .then((response) => response.text())
  .then((result) => { console.log(result); })
  
  
  
  