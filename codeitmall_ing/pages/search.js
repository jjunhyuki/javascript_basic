import Head from 'next/head';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/styles/Search.module.css';

//정적생성은 빌드하는시점에 렌더링하는것이고 , 서버사이드 렌더링은 웹브라우저가 리퀘스트를 보낼때마다 렌더링하는것
// 미리 빌드를 해놓으면 어떤 값이 들어올지 모르기때문에 이렇게 실시간으로 바뀌는 값같을때는 정적생성을 하지못한다.
//검색어는 사용자가 입력하는 것이기에 next.js에서 request가 오는시점에만 알수있기에
// 이럴떄에는 정적생성을 할수없는데 대신에 서버사이드 렌더링을 해야함
// => next.js에 request가 도착하면 request값안에 query값을 가지고 렌더링하면 될것.
// 하는일은 정적생성과 비슷한데 이름이 다르다. getStaticProps? ㄴㄴ
//결론 : 프리렌더링을 하고싶은데 querystring값에 따라서 다르게 렌더링하고싶을떈 getServerSideProps!!
export async function getServerSideProps(context) {
  const q = context.query['q'];

  const res = await axios.get(`/products/?q=${q}`);
  const products = res.data.results ?? [];

  return {
    props: {
      products,
      q,
    },
  };
}

export default function Search({ q, products }) {
  return (
    <>
      <Head>
        <title>{q} 검색 결과 - Codeitmall</title>
      </Head>
      <SearchForm initialValue={q} />
      <h2 className={styles.title}>
        <span className={styles.keyword}>{q}</span> 검색 결과
      </h2>
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
