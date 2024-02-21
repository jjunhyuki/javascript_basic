import { useEffect, useState } from 'react';
import ProductList from '@/components/ProductList';
import SearchForm from '@/components/SearchForm';
import axios from '@/lib/axios';
import styles from '@/styles/Home.module.css';
import Head from 'next/head';

//next에서는 정적생성할때 data도 가져올수있었는데 다음과같은방법
// next.js에서 사용하는 특이한문법인데(정해진약속) export 와 getStatictProps을 꼭 써줘야한다.
// => export를 쓰고 getStatictProps를 사용한 함수가있다면
// next.js가 정적생성을 할때 getStatictProps함수를 실행해준다.
// 이 함수는 정적생성을 할때 사용할 프롭스를 내려주는 역할
export async function getStaticProps() {
  //이 함수에서는 react hook 같은것은 사용 못함
  const res = await axios.get('/products');
  const products = res.data.results;

  return {
    props: {
      products, // 이 프롭스(프로덕트)를 아래 홈의 프롭스로 준다.
    },
  };
}

export default function Home({ products }) {
  return (
    <>
      {/* Head를 사용하면 탭에 나오는 title을 바꿀수있다. */}
      <Head>
        <title>Codeitmall</title>
      </Head>
      <SearchForm />
      <ProductList className={styles.productList} products={products} />
    </>
  );
}
