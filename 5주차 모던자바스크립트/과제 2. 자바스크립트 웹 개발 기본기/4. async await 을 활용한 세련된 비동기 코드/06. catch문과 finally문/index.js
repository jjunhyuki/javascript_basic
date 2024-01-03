// catch && finally

//존재하지않는 URL로 reject상태로 바꿈
// async function fetchAndPrint() {
//     const response = await fetch('https://jsonplaceholder.typicode.commmm/users');
//     const result = await response.text();
//     console.log(result);
//   }
//   fetchAndPrint();
  //이렇게 하니 rejected상태의 promise객체가 제대로 처리가 안되어서 에러를 표출 
  // 이걸 고쳐보자 
  
//async await은 try catch문으로 감싸주면 해결!  
async function fetchAndPrint() {
    try{
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      // const response = await fetch('https://jsonplaceholder.typicode.commmm/users');
      const result = await response.text();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
    finally{
      console.log('exit');
    }
  }
    fetchAndPrint();
    
    