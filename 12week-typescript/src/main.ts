import moduleProduct from './types/Product';
import moduleSize from './types/Size';

const moduleProduct1 = {
  id: 'c001',
  name: '코드잇 블랙 후드 집업',
  price: 129000,
  membersOnly: true,
  //   sizes: ['S', 'M'],
  sizes: [moduleSize.S, moduleSize.M],
};

const moduleProduct2 = {
  id: 'd001',
  name: '코드잇 텀블러',
  price: 25000,
};

console.log(moduleProduct1);
console.log(moduleProduct2);
