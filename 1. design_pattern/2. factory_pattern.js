//factort pattern
//java Script's factory pattern

const num = new Object(42)
const str = new Object('abc')
num.constructor.name; //Number
str.constructor.name; //String

/* 자바스크립트에서 팩토리 패턴을 구현한다면 간단하게 new Object() 로 구현할수있다. */

//coffee factory를 기반으로 라떼등을 생산하는 코드를 만들어보면
// 다음과 같다.
class CoffeFactory{
    static createCoffee(type){
        const factory = factoryList[type]
        return factory.createCoffee()
    }
}

class Latte{
    constructor() {
        this.name = "Latte"
    }
}

class Espresso{
    constructor() {
        this.name = "Espresso"
    }
}

class LatteFactory extends CoffeeFactory{
    static createCoffee(){
        return new Latte()
    }
}

class EspressoFactory extends CoffeeFactory{
    static createCoffee(){
        return new Espresso()
    }
}

const factoryList = {LatteFactory, EspressoFactory}

const main = () => {
    //라떼 커피를 주문한다.
    const coffee = CoffeeFactory.createCoffee("LatteFactory")
    //커피 이름을 부른다.
    console.log(coffee.name) //latte
}

main()

/* CoffeeFactory라는 상위 클래스가 중요한 뼈대를 결정하고 
하위 클래스인 LatteFactory가 구체적인 내용을 결정하고있습니다. */