import { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  const [values, setValues] = useState({
    title: '',
    rating: 0,
    content: '',
  });

  const handleChange = e => {
    const { name, value } = e.target;
    setValues(prevValues => ({
      ...prevValues,
      [name]: value,
    }));
  };

  const handleSubmit = e => {
    e.preventDafault();
    console.log(values);
  };
  //html form 의 기본동작은 submit버튼을 눌렀을때 입력값과 함께 getRequest 보내는것 그래서 여기에서는 기본동작을 막아줘야한다.
  // 이벤트 객체의 prevent.default동작을 사용했다.(바로 시작하지말고 기다려주는것 (기억안나면 찾아보자.))
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <input name='title' value={values.title} onChange={handleChange} />
      <input
        type='number'
        name='rating'
        value={values.rating}
        onChange={handleChange}
      />
      <textarea name='content' value={values.content} onChange={handleChange} />
      <button type='submit'>확인</button>
    </form>
  );
}

export default ReviewForm;
