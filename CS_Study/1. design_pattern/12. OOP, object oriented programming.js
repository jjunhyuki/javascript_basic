//자연수로 이루어진 배열에서 최대값을 찾으라 했을때
const ret = [1 ,2 ,3, 4, 5, 11, 12]
class List {
	constructor(list) {
		this.list = list
		this.mx = list.reduce((max, num) => num > max ? num : max, 0)
	}
	getMax() {
		return this.mx
	}
}
const a = new List(ret)
console.log(a.getMax()) // 12
// list 클래스 메서드 getMax() 로 list의 최대값을 반환하는 예시코드

/*-------------------------------------------------------------------------------------*/

//다음예시에선 Shape라는 부모 클래스를 정의하고, Circle와 Rectangle이라는 두 개의 자식 클래스를 만들어 사용합니다. 
//상속, 생성자, 메서드 오버라이딩과 같은 객체지향 프로그래밍의 주요 개념을 사용하여 도형에 관한 정보를 표현하고 계산합니다.

// 부모 클래스 (기본 도형)
class Shape {
    constructor(color) {
      this.color = color;
    }
  
    // 메서드: 도형 정보 출력
    getInfo() {
      return `This is a shape with color ${this.color}`;
    }
  }
  
  // 자식 클래스 (원)
  class Circle extends Shape {
    constructor(color, radius) {
      // 부모 클래스의 생성자 호출
      super(color);
      this.radius = radius;
    }
  
    // 메서드: 원의 넓이 계산
    getArea() {
      return Math.PI * this.radius ** 2;
    }
  
    // 메서드 오버라이딩: 부모 클래스의 getInfo 메서드를 재정의
    getInfo() {
      return `This is a circle with color ${this.color} and radius ${this.radius}`;
    }
  }
  
  // 자식 클래스 (사각형)
  class Rectangle extends Shape {
    constructor(color, width, height) {
      super(color);
      this.width = width;
      this.height = height;
    }
  
    // 메서드: 사각형의 넓이 계산
    getArea() {
      return this.width * this.height;
    }
  
    // 메서드 오버라이딩
    getInfo() {
      return `This is a rectangle with color ${this.color}, width ${this.width}, and height ${this.height}`;
    }
  }
  
  // 예제 사용
  const redCircle = new Circle('red', 5);
  const blueRectangle = new Rectangle('blue', 4, 6);
  
  console.log(redCircle.getInfo()); // Circle 정보 출력
  console.log(`Circle Area: ${redCircle.getArea()}`); // Circle 넓이 출력
  
  console.log(blueRectangle.getInfo()); // Rectangle 정보 출력
  console.log(`Rectangle Area: ${blueRectangle.getArea()}`); // Rectangle 넓이 출력
  