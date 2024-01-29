import ReactDOM from 'react-dom/client';

const product = 'MacBook';
const model = 'Air';
const item = product + model;
const imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/MacBook_with_Retina_Display.png/500px-MacBook_with_Retina_Display.png';

function handleClick() {
    alert('곧 도착합니다!');
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <h1>나만의 {product.toUpperCase} 주문하기 </h1>
    // <h1>나만의 {product + model} 주문하기 </h1>
    <div>
        <h1>나만의 {item} 주문하기 </h1>,
        <img src={imageUrl} alt="제품 사진"></img>
        <button onClick={handleClick}>확인</button>
    </div>
);

import ReactDOM from 'react-dom';
