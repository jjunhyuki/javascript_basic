import { getReviews } from "../api";
import ReviewList from "./ReviewList";
import { useEffect, useState } from "react";

function App() {
  const [items, setItems] = useState([]);
  const [order, setOrder] = useState("createdAt");
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createAt");

  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = item.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async () => {
    const { reviews } = await getReviews();
    setItems(reviews);
  };

  //useEffect를 실행하면 리엑트는 바로 콜백함수를 실행하는것이 아니라 콜백함수를 예약해뒀다가 렌더링이 끝나면 실행해준다.
  //맨처음 렌더링이 끝나면 콜백함수를 실행해주고 디펜던시값들과 비교해서 기억했던 값과 다를 경우에만 콜백함수를 호출
  // useEffect(() => {
  //   handleLoad(); //여기가 콜백부분
  // }, []); //여기서 [] 부분이 디펜던시 부분인데 앞에서 기억한값과 []부분을 비교해서 콜백함수를 부를지 말지 정함
  useEffect(() => {
    handleLoad();
  }, [order]); //처음 렌더링할떄 리엑트가 기억하는 order값과 현재 order값이 다니까 콜백함수를 호출(handleLoad()를 호출)

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onclick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
    </div>
  );
}

export default App;
