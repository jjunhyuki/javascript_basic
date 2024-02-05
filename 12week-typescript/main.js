"use strict";
//03 타입을 정하는법
// size = 'L'; //error
let size = 100;
//or
let size1;
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
//차근차근 하나하나씩
product1 = newProduct;
const salePrice = product.price * 0.9;
console.log(`할인 가격: ${salePrice}`);
