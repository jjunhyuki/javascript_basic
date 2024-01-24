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

  //html에서는 사용자가 input에 입력할떄마다 oninput이벤트가 발생
  //onchange이벤트는 사용자입력이 끝났을때 발생하는 이벤트

  //리엑트에서의 onChange는 사용자가 입력을할때마다 발생
  // 리엑트를 만든 개발자들이 oninput보다 onChange단어가 좀더 어울린다고 해서 이렇게 만듬
  return (
    <form>
      <input value={title} onChange={handleTitleChange}></input>
      <input type='number' value={rating} onChange={handleRatingChange} />
      <textarea value={content} onChange={handleContentChange} />
    </form>
  );
}

export default ReviewForm;
