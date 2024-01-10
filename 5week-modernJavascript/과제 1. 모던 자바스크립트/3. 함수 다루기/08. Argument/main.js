function printArgument(a, b, c){
    console.log(a);
    console.log(b);
    console.log(c);
    console.log(arguments.length); //argument 객체를 통해 이런것들도 할수있다. 알아두자
    console.log('-----------');
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log('-----------');
    for(const arg of arguments){
        console.log(arg);
    }
    console.log('-----------');
}

printArgument('Young', 'Mark', 'Koby');
printArgument('Captain');
printArgument('Jayden', 'Scott');
printArgument('Suri', 'Jack', 'joy', 'Noel');
