import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import axios from '@/lib/axios';
import styles from '@/styles/Product.module.css';
import SizeReviewList from '@/components/SizeReviewList';
import StarRating from '@/components/StarRating';
import Image from 'next/image';
import Spinner from '@/components/Spinner';

//2. 이렇게만 해놓으면 next는 빌드를 할떄 어떤어떤 params 가있는지 모른다.
//=> 어떤어떤 페이지를 미리만들어야할지 이런걸 알려주는 함수가 필요한데.
// 이 함수도 export 와 getStaticPaths라는 이름으로 정해줘야한다.
export async function getStaticPaths() {
  //모든 상품 목록을 api 에서 가져온다음에 params id값으로 맵핑
  const res = await axios.get('/products/');
  const products = res.data.results;
  const paths = products.map(product => ({
    params: { id: String(product.id) },
  }));
  return {
    paths /*:[
      //params 값은 사이트 주소에서 가져오는 값이니까 문자열로 써줘야함
      // 한두개면 이렇게 해줘도 괜찮은데 많아진다면 ...;; => 값을 통쨰로가져와서 맵핑해보자
      // { params: { id: '1' } },
      // { params: { id: '2' } },
    ], */,
    // fallback: false, //없는 경우에 대한 처리를 해주는곳
    //fallback 속성을 사용하면 미처 정적속성해놓지 않은 페이지들
    // 그때그때 getstaticprop  s 을 실행해서 보여줄수있는데
    // 일단 data없이 보여줄 로딩화면을 만들어야하고 => return <spinner /> 가 있는 부분
    // request를 했을때 데이터가 없을때는 notfound:ture 로 404를 보여주면 된다
    fallback: true,
  };
}

//1 .id가 필요한데
//getStaticProps 에서는 reacthook을 사용할수없으니 파라미터로 받는 context객체에서
export async function getStaticProps(context) {
  //이렇게 id값을 가져올수있다.
  const productId = context.params['id'];
  // const res = await axios.get(`/products/${targetId}`);
  let product;
  try {
    const res = await axios.get(`/products/${productId}`);
    product = res.data;
  } catch {
    return {
      notFound: true,
    };
  }
  return {
    props: {
      product,
    },
  };
}

export default function Product({ product }) {
  const [sizeReviews, setSizeReviews] = useState([]);
  const router = useRouter();
  const id = router.query;

  async function getSizeReviews(targetId) {
    const res = await axios.get(`/size_reviews/?product_id=${targetId}`);
    const nextSizeReviews = res.data.results ?? [];
    setSizeReviews(nextSizeReviews);
  }

  useEffect(() => {
    if (!id) return;
    getSizeReviews(id);
  }, [id]);

  // if (!product) return null;
  if (!product)
    return (
      <div className={styles.loading}>
        <Spinner />
      </div>
    );

  return (
    <>
      <h1 className={styles.name}>
        {product.name}
        <span className={styles.englishName}>{product.englishName}</span>
      </h1>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image fill src={product.imgUrl} alt={product.name} />
        </div>
        <div>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>제품 정보</h2>
            <div className={styles.info}>
              <table className={styles.infoTable}>
                <tbody>
                  <tr>
                    <th>브랜드 / 품번</th>
                    <td>
                      {product.brand} / {product.productCode}
                    </td>
                  </tr>
                  <tr>
                    <th>제품명</th>
                    <td>{product.name}</td>
                  </tr>
                  <tr>
                    <th>가격</th>
                    <td>
                      <span className={styles.salePrice}>
                        {product.price.toLocaleString()}원
                      </span>{' '}
                      {product.salePrice.toLocaleString()}원
                    </td>
                  </tr>
                  <tr>
                    <th>포인트 적립</th>
                    <td>{product.point.toLocaleString()}</td>
                  </tr>
                  <tr>
                    <th>구매 후기</th>
                    <td className={styles.starRating}>
                      <StarRating value={product.starRating} />{' '}
                      {product.starRatingCount.toLocaleString()}
                    </td>
                  </tr>
                  <tr>
                    <th>좋아요</th>
                    <td className={styles.like}>
                      ♥{product.likeCount.toLocaleString()}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천</h2>
            <SizeReviewList sizeReviews={sizeReviews ?? []} />
          </section>
          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>사이즈 추천하기</h2>
          </section>
        </div>
      </div>
    </>
  );
}
