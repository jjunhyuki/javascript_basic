//Rest Parameter
//argument는 유사배열이라서 배열 사용 불가능인다
//Rest Parameter 는 배열이라서 배열의 메소드 사용가능
function printArgument(... args){ // ... 이게 Rest Parameter
    console.log(args.splice(0, 2));
    console.log(arguments.splice(0, 2));
    console.log('-----------');
}

printArgument('Young', 'Mark', 'Koby');
printArgument('Captain');
printArgument('Jayden', 'Scott');
printArgument('Suri', 'Jack', 'joy', 'Noel');


//명확해야할 파라미터는 명확하게 해주고 불명확하게 할 파라미터들은 rest parameter 으로 처리
function printArgument(first, second, ...others){ 
    console.log('코드잇 레이스 최종 결과');
    console.log(`우승: ${first}`);
    console.log(`준우승: ${second}`);
    for(const arg of others){
        console.log(`참가자: ${arg}`);
    }
}

printArgument('Phil', 'Won', 'Emma', 'Min', 'Luke');