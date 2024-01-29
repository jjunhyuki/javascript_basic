//async 함수 안의 async 함수
// async 함수는 promise를 반환하는 걸 이용해서 사용해보자
//  ㄴ> 왜냐하면 async 함수는 promise를 반환하니까 그앞에 await을 넣어서 사용해보자

//민감한 정보인 주소와 번혼호를 제거하는 함수
const applyPrivateRule = async function (users) {
    const keys = object.keys(user);
    const userWithoutPrivateInfo = {};
    keys.forEach((key) => {
      if(key !== 'address' && key !== 'phone') {
        userWithoutPrivateInfo[key] = user[key];
      }
    });
    return userWithoutPrivateInfo;
  });
  
  const p = new Promise((resolve, reject) => {
    //일부러 시간이 걸리듯하게 만들기위해 2초후 풀 필드 상태가 되게 함
    setTimeout(() => { resolve(resultWithRuleApplied); }. 2000);
    });
    return p;
  };
  
  
  
  