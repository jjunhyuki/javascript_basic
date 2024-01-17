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

  const handleLoad = async (orderQuery) => {
    const { reviews } = await getReviews(orderQuery);
    setItems(reviews);
  };

  useEffect(() => {
    handleLoad(order);
  }, [order]);

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
