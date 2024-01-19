import { useEffect, useState } from "react";
import ReviewList from "./ReviewList";
import { getReviews } from "../api";

const LIMIT = 6;

function App() {
  const [order, setOrder] = useState("createdAt");
  const [offset, setOffset] = useState(0);
  const [hasNext, setHasNext] = useState(false);
  const [items, setItems] = useState([]);
  const sortedItems = items.sort((a, b) => b[order] - a[order]);

  const handleNewestClick = () => setOrder("createdAt");

  const handleBestClick = () => setOrder("rating");

  const handleDelete = (id) => {
    const nextItems = items.filter((item) => item.id !== id);
    setItems(nextItems);
  };

  const handleLoad = async (option) => {
    const { reviews, paging } = await getReviews(option);
    if (option.offset === 0) {
      setItems(reviews);
    } else {
      setItems((prevItems) => [...prevItems, ...reviews]);
    }
    setOffset(option.offset + reviews.length);
    setHasNext(paging.hasNext);
  };

  const handleLoadMore = () => {
    handleLoad({ order, offset, limit: LIMIT });
  };

  useEffect(() => {
    handleLoad({ order, offset: 0, limit: LIMIT });
  }, [order]);

  return (
    <div>
      <div>
        <button onClick={handleNewestClick}>최신순</button>
        <button onClick={handleBestClick}>베스트순</button>
      </div>
      <ReviewList items={sortedItems} onDelete={handleDelete} />
      //이럴때는 hasNext가 true일떄는 버튼이 보이고 false을때는
      보이지않는다(리엑트는 false를 렌더링안함)
      {hasNext && <button onClick={handleLoadMore}>더 보기</button>}
    </div>
  );
}

export default App;
