//03 타입을 정하는법
// size = 'L'; //error
let size: number = 100;
//or
let size1: number;
size = 105;

//04. 타입 오류 이해하기

const product = {
  id: 'c001',
  name: '라이트 윈드 브레이커',
  price: 129000,
};

// ...

// product.price = '139000원'; //error => 타입스크립트에서는 이런 사소한 오류같은걸 바로 알수있다.(빨간색으로 에러를물들임)

let product1 = {
  id: 'c001',
  name: '라이트 윈드 브레이커',
  price: 129000,
  sizes: ['M', 'L', 'XL'],
};

const newProduct = {
  id: 'c002',
  name: '다크 윈드 브레이커',
  price: 139000,
  sizes: [90, 95, 100, 105, 100],
};

// ...
//안에있는 값들의 형태가 달라서 에러가 나는데 에러를 잘 읽어보자 , 에러에서 밖(상위 에러줄)에서 안쪽으로(하위 에러줄)
//차근차근 하나하나씩 에러를 읽어보자.
// product1 = newProduct;

const salePrice = product.price * 0.9;
console.log(`할인 가격: ${salePrice}`);

//05 기본형

let itemName: string = '코드잇 블랙 후드';
let itemPrice: number = 129000;
let membersOnly: boolean = true;
let owner: undefined = undefined;
let seller: null = null;

//07. 배열과 튜플

const cart: string[] = [];

cart.push('c0001');
cart.push('c0002');
// cart.push(3); //error

const carts: string[][] = [['c001', 'c002'], ['c003']];

//튜플타입 => 들어올 타입을 미리 명시해주는것
let mySize: [number, number, string] = [167, 28, 'M'];
//ex
//let mySize: string[] = [];
// mySize.push('갑옷');
// mySize.push('빨간 물약');

// mySize = [167, 28, 255]; //error
// mySize = [255]; // error
// mySize = [176, '28inch'];// error
mySize = [182, 34, 'XXL'];

//09 객체 타입

let product09: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean; //옵셔널 체이닝을 이렇게 넣어줄수 있다. => membersOnly이게 꼭 없어도 괜찮으니까 없어도 가능하게 함
  sizes: string[];
} = {
  id: 'c001',
  name: '코드잇 블랙 후디',
  price: 129000,
  sizes: ['M', 'L', 'XL'],
};

if (product09.membersOnly) {
  console.log('회워 전용 상품');
} else {
  console.log('일반 상품');
}

//프로퍼티 이름에 변수를 쓰고싶다면 ex) [field]: 'field value',이렇게 []대괄호를 쓰고 변수를 사용했다면
//타입스크립트객체타입에서는 프로퍼티 갯수를 알수없거나 갯수를 정해놓고 싶지 않을때에는 프로퍼티의 타입만 정해놓을수 있는데

let stock: {
  [id: string]: number; //여기서 id는 예시이다.
} = {
  c001: 3, //이렇게 앞에 뭔값을 넣어도 상관없음 (id에 해당하는 값 넣으면 됨)
  c002: 0,
  c003: 1,
  // coo4: 'codeit', //error => type error
};

// 11. any

//자바스크립트였다면 오류가 안나는데 타입스크립트는 타입이 다른게 바로 티가나게 오류를 뱉어줌
//  ㄴ> 이럴떄 js처럼 만들어주는 타입있는데 => any 이다.
// 타입스크립트는 쓰는 이유는 타입검사를해서 오류를 바로 알수있게하기위해서인데
// const product11 = {
//   id: 'c001',
//   name: '코드잇 블랙 후디',
//   price: 129000,
//   sizes: ['M', 'L', 'XL'],
// };

// console.log(product11.reviews[2]); //타입이 안맞아서 바로 error 가 뜬다.

//아래와 같이 쓰면 any를 쓰면 타입오류가 없어지는데 any는 함부로 쓰지않는다
// ㄴ> 타입검사를해서 오류를 바로 알수없어지기 때문 but json파일의 값들처럼 확실치 않은 값을 받을때에는 어떤 값이 올지모르니까 any를 써준다.
const product11: any = {
  id: 'c001',
  name: '코드잇 블랙 후디',
  price: 129000,
  sizes: ['M', 'L', 'XL'],
};

console.log(product11.reviews[2]);
//어쩔수없이 타입이 any가 될떄도 있다 .
//아래와같이 타입을 선언해줄수이따.
const parsedProduct12: {
  name: string;
  price: number;
} = JSON.parse('{"name": "코드잇 토트백", "price": 12000 }');

const parsedProduct13 = JSON.parse(
  '{"name": "코드잇 토트백", "price": 12000 }',
) as {
  name: string;
  price: number;
};

const parsedProduct14 = JSON.parse(
  '{"name": "코드잇 토트백", "price": 12000 }',
);

//12. 함수에 타입 정의하기.

const stock1: { [id: string]: number } = {
  c001: 3,
  c002: 1,
};

const cart1: string[] = [];

const codeitmall: {
  stock: { [id: string]: number };
  cart: string[];
  addToCart: (id: string, quantity?: number) => boolean;
  addManyToCart: (...ids: string[]) => void;
} = {
  stock: {
    c001: 3,
    c002: 1,
  },
  cart: [],
  addToCart,
  addManyToCart,
};

function addToCart(id: string, quantity?: number) {
  //quantity?: number 이렇게 옵셔널 체이닝방법도 쓸수있다.
  //quantity에 기본값을 줄때는 아래와같이는 잘 사용하지않고 바로 파라미터로 받는 quantity에 바로 초기값을 준다. (취향차이)
  if (typeof quantity === 'undefined') {
    quantity = 1;
  }

  if (stock[id] < quantity) {
    return false;
  }

  codeitmall.stock[id] -= quantity;
  for (let i = 0; i < quantity; i++) {
    codeitmall.cart.push(id);
  }

  return true;
}

function addManyToCart(...ids: string[]) {
  for (const id of ids) {
    addToCart(id);
  }
}

console.log(stock, cart);
const result1 = addToCart('c001', 1);
console.log(`결과1: ${result1}`);
console.log(stock, cart);
const result2 = addToCart('c002', 2);
console.log(`결과1: ${result2}`);
console.log(stock, cart);

//3.Enum 01. Enum

//enum은 왠만해선 값을 정해놓고 쓰는게 좋다.
// enum Size {S, M, L, XL,}
enum Size {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

let product01: {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
  sizes: Size[];
} = {
  id: 'c001',
  name: '코드잇 블랙 후디',
  price: 129000,
  sizes: [Size.M, Size.L],
};

function findProcudt(size?: Size) {
  if (!size) {
    console.log('전체 사이즈로 검색');
    return;
  }
  console.log('특정 사이즈로 검색');
}

// enum은 0부터
console.log(Size.S); //값을 안정해줬을때에는 0 , 값을정해줬을때에는 해당하는 값이 나온다. => S
console.log(Size.M); //1 => M
console.log(Size.L); //2 => L
console.log(Size.XL); //3 => XL
console.log();

/*-------------------------------------------------------------------------------------*/

//4.interface 01.interface

// 같은 타입을 여러곳에서 사용하고 정의하는것이 비효율적이다 그럴때 쓰는데 interface

enum Size1 {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

// let interface1: {
//   id: string;
//   name: string;
//   price: number;
//   membersOnly?: boolean;
//   sizes: Size[];
// } = {
//   id: 'c001',
//   name: '코드잇 블랙 후디',
//   price: 129000,
//   sizes: [Size.M, Size.L],
// };

// let interface2: {
//   id: string;
//   name: string;
//   price: number;
//   membersOnly?: boolean;
//   sizes: Size[];
// } = {
//   id: 'c001',
//   name: '코드잇 블랙 후디',
//   price: 129000,
//   sizes: [Size.M, Size.L],
// };

interface InterfaceProduct {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

//interface  에서는 상속이 가능하다는 장점이있다.
interface ClothingProduct extends InterfaceProduct {
  sizes: Size1[];
}

// const interface1: InterfaceProduct = {
const interface1: ClothingProduct = {
  id: 'c001',
  name: '코드잇 블랙 후디',
  price: 129000,
  membersOnly: true,
  sizes: [Size1.M, Size1.L],
};

const interface2: InterfaceProduct = {
  id: 'c001',
  name: '코드잇 블랙 후디',
  price: 129000,
  membersOnly: true,
};

//interface는 함수도 정의할수있다.
interface printProductionFunction {
  (product: InterfaceProduct): void;
}

// function printProduction(product: InterfaceProduct) {
const printProduction: printProductionFunction = InterfaceProduct => {
  console.log(
    `${InterfaceProduct.name}의 가격은 ${InterfaceProduct.price}원 입니다.`,
  );
};

printProduction(interface1);
printProduction(interface2);

// 05 그밖의 타입들 01. 리터럴

let productName1 = '코드잇 블랙 후드'; //productName1 은 string이 타입
const productName2 = '코드잇 텀블러'; //productNmae2 는 '코드잇 텀블러'가 타입
//ㄴ> let은 값이 바뀔수있고 const 값이 안바뀌어서 '코드잇 텀블러'를 타입으로가진다 , 이런걸 리터럴 타입이라 한다.

let small = 95;
const large = 100; // 100을 타입으로 가지게된다.

function printSize(size: number) {
  console.log(`${size}: 사이즈 입니다.`);
}

// function printSize(sizde: 100) {
// ㄴ> 만약 값을 이렇게 받는다면
// printSize(small); 은 에러가 뜨게된다.

printSize(small);
printSize(large);

//즉 리터럴 타입은 값을 곧 타입으로 받는다 라는것

//02. 타입별칭
type Cart2 = string[];

type CartResultCallback = (result: boolean) => void;

//이렇게 객체형태 타입을 정할수 있지만
// type Product = {
//   id: string;
//   name: string;
// };

//왠만해서는 객체형태 타입은 인터페이스를 사용하는건 권장 (아래코드와 같이)
interface product02 {
  id: string;
  name: string;
}

const Cart2: Cart2 = ['c001', 'c002', 'c003'];

interface User {
  username: string;
  email: string;
  cart: Cart2;
}

const user: User = {
  username: 'codeit',
  email: 'typescript@codeit.kr',
  cart,
};

//04 Union 타입

enum ClothingSize {
  S = 'S',
  M = 'M',
  L = 'L',
  XL = 'XL',
}

// type ClothingSize = 'S' | 'M' | 'L' | 'XL'; // 이렇게 리터럴로도 사용도 가능하지만 어떨때 사용하는게 좋은지는 다음 챕터에서 확인

interface ProductUnion {
  id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
}

interface ClothingProductUnion extends ProductUnion {
  sizes: ClothingSize[];
  color: string;
}

//유니온 타입은 리터럴 타입이랑 같이쓰면 효율이 급상승한다.
type ShoeSize =
  | 220
  | 225
  | 230
  | 235
  | 240
  | 245
  | 250
  | 255
  | 260
  | 265
  | 270
  | 275
  | 280;
interface shoeProductUnion extends ProductUnion {
  sizes: number[];
  // sizes: ShoeSize;
  handmade: boolean;
}

function printSizes(product: ClothingProductUnion | shoeProductUnion) {
  //받는 값을 ClothingProduct이거나 shoeProduct 이라는뜻 이렇게 쓰는게 유니온 타입
  const availableSizes = product.sizes.join(', ');
  console.log(`구매 가능한 사이즈는 다음과 같습니다: ${availableSizes}`);

  // 특정한 타입에 대해서 뭔가 하고싶다면  if, in을 사용해보자
  if ('color' in product) {
    console.log(`색상: ${product.color}`);
  }

  if ('handmade' in product) {
    console.log(
      product.handmade
        ? '이 상품은 장인이 직접 만듭니다.'
        : '이 상품은 공장에서 만들어 졌습니다.',
    );
  }
}

// 06. intersection 타입 => 타입을 합치는 법

interface Id {
  id: string;
}

interface Timestamp {
  createdAt: Date;
  updatedAt: Date;
}

//이게 인터섹션
type ProdcutIntersection = Id & {
  // id: string;
  name: string;
  price: number;
  membersOnly?: boolean;
};

type UserIntersection = Id &
  Timestamp & {
    // id: string;
    username: string;
    email: string;
    // createdAt: Date;
    // updatedAt: Date;
  };

type Review = Id &
  Timestamp & {
    // id: string;
    productId: string;
    userId: string;
    content: string;
    // createdAt: Date;
    // updatedAt: Date;
  };
