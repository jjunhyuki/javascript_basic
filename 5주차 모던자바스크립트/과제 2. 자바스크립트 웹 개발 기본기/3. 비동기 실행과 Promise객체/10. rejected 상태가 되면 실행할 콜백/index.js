//rejected 상태가 되면 실행할 콜백

//,이전은 promise가 fulfiled 상태일떄  , 이후는 rejected상태일때 실행
// rejected일떄 작업실패정보가 넘어온다는걸 잊지말자.
fetch('https://www.jsonplaceholder.typicode.com/user')
.then((Response) => Response.text(), (error) => { console.log(error); })
.then((result) => { console.log(result); });
