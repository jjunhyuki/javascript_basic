import { useQuery } from '@tanstack/react-query';
import { getPosts } from './api/api';

function HomePage() {
  const res = useQuery({ queryKey: ['posts'], queryFn: getPosts });
  console.log(res);

  return <div>홈페이지</div>;
}

export default HomePage;
