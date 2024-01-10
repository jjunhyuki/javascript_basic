//이전에 배웠던 프로미스 체
console.log('Start!');

 fetch('https://jsonplaceholder.typicode.com/users') 
  .then((response) => response.text())  
  .then((result) => { 
    const users = JSON.parse(result);
    const user = users[0];
    console.log(user);
    const {address} = user;
    console.log(address);
    const { geo } = address;
    console.log(geo);
    const { lat } = geo;
    console.log(lat);
  });
   
console.log('End'); 


//promise chain이 필요할때는?
//  비동기작업을 순차적으로 수행해야할때 전체코드를 좀더 깔끔하게 하기위해 사용함
// 다음과 같이 사용가능
console.log('Start!');

 fetch('https://jsonplaceholder.typicode.com/users') 
  .then((response) => response.text())  
  .then((result) => { 
    const users = JSON.parse(result);
    const { id } = users[0];
    // fetch(`https://jsonplaceholder.typicode.com/posts?usersID=${id}`)
    //   .then((response) => response.text())
    //   .then((posts) => {
    //     console.log(posts);
    //   });
    return fetch(`https://jsonplaceholder.typicode.com/posts?usersID=${id}`);
    })  
    //여기서 부터는 두번쨰 fetch함수가 리턴한 프로미스객체에 then에 연결된거라고 생각하면 쉽다.
      .then((response) => response.text()) 
      .then((posts) => {
        console.log(posts);
  });
   
console.log('End'); 