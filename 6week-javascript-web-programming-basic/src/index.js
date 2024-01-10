import { Fragment } from 'react';
import ReactDOM from 'react-dom/client';

//ReactDOM 의 render은 index.js에서 주로 한번만 실행되기때문에 외울핋요는 없고 알아만두자
//ReactDOM.render은 첫번쨰 아규먼트로 html요소를 만들고, 두번쨰 아규먼트값에 그 요소를 넣어주는 역할을 한다.
// ReactDOM.render(<h1>안녕 리액트!</h1>, document.getElementById('root'));
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <h1>안녕 리액트!</h1>,
    // <p>안녕 리액트!</p>,
    // <div>안녕 리액트!</div>,
    // <p id="ptagId">안녕 리액트!</p>,
    // <p className="ptagClassName">안녕 리액트!</p>,
    // <form>
    //     <label htmlFor="name">이름</label>
    //     <input id="name" type="text" onBlur="" onFocus="" onMouseDown="" />
    // </form>,
    
    //한번에 어려개 두려면 div로 묶거나 div스기싫으면 fragment태그를 쓰자.
    <div>
        <p>안녕</p>
        <p>리액트</p>
    </div>,
    <Fragment>
        <p>안녕</p>
        <p>리액트</p>
    </Fragment>,
    //아래와같이 아무것도 없는 태그로 감싸주는것도 하나의 방법
    <>
    </>
);
