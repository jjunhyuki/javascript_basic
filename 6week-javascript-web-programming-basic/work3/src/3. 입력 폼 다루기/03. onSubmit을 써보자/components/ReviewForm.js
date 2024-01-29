import { useState } from 'react';
import './ReviewForm.css';

function ReviewForm() {
  const [title, setTitle] = useState('');
  const [rating, setRating] = useState(0);
  const [content, setContent] = useState('');

  const handleTitleChange = e => {
    setTitle(e.target.value);
  };

  const handleRatingChange = e => {
    const nextRating = Number(e.target.value) || 0;
    setRating(nextRating);
  };

  const handleContentChange = e => {
    setContent(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDafault();
    console.log({
      title,
      rating,
      content,
    });
  };
  //html form 의 기본동작은 submit버튼을 눌렀을때 입력값과 함께 getRequest 보내는것 그래서 여기에서는 기본동작을 막아줘야한다.
  // 이벤트 객체의 prevent.default동작을 사용했다.(바로 시작하지말고 기다려주는것 (기억안나면 찾아보자.))
  return (
    <form className='ReviewForm' onSubmit={handleSubmit}>
      <input value={title} onChange={handleTitleChange}></input>
      <input type='number' value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
      <button type='submit'>확인</button>
    </form>
  );
}

export default ReviewForm;
