//try catch

try {
    //코드
} catch (error) {
    //에러가 발생했을때 동작할 코드
}

try {
    //코드
    console.log('에러 전');
    const codeit = '코드 잇';
    console.log(codeit);

    codeit = 'codeit';

    const language = 'JavaScript';
    console.log(language);
} catch (error) {
    //에러가 발생했을때 동작할 코드
    console.log('에러 후');
}