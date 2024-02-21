import Image from 'next/image';

export default function Test() {
  return (
    <>
      {/* 이렇게 스크롤할수있게 줄이 많이있다고 가정할때에
      개발자 도구의 network img로 들어가면 img만 불러오고 스크롤해서 내려가면 
      이미지가 필요한 순간 Image태그가 부른 이미지가 띄워질것이다.
      이런걸 lazyloading이란건데 lazyloading을 하면 필요없을떄는 로딩을 안하고 필요할떄 로딩을 하기 떄문에 
      페이지 초기로딩속도가 빨라짐 
      => next가 제공하는 Image태그를 쓰면 이미지 크기를 알아서 최적화 해주고 
      lazyloading을해서 페이지 로딩속도도 줄여줄수 있다.*/}
      {/* <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /> */}
      {/* <img //img태그는 img를 그대로 쓰는것 이미지 주소를 가져와서 띄워보면 큰 크기에 이미지 가 보일것
        src='/images/product.png'
        width='400'
        height='400'
        alt='상품 이미지'
      /> */}
      {/* //Image태그는 원본이미지 주소가 쿼리스트링안에있고 w값과 q값도 있다. 
      => 이미지 주소를 가져와서 쓰면 이미지 원본을 그대로 쓰는것이 아닌 nextjs서버를 한번 거쳐서 최적화가 된 크기의 이미지를 가져온다. */}
      {/* //Image의 크기를 지정해주지 않으면 error이 뜨는데 next가 크기를 최적화해주기떄문. 그렇다고 항상 매번 크기를 지정해줄수있는건 아닐때 fill을 사용
      => fill을 사용해서 유연하게 크기를 지정 (fill: 조상요소에 꽉차게 하는것(but, position된 요소여야 한다)) */}
      {/* 해보면 div안에 꽉차면서 유연하게 크기를 지정해줄수있다.(화면의 크기를 줄였다 늘였다 해보자.) */}
      {/* 이미지 비율이 꺠지는데 이미지 비율을 유지하면서 채우고싶다면 objectFit을 적용해보자. */}
      <div
        style={{
          position: 'relative',
          width: '50%',
          height: '200px',
        }}
      >
        <Image
          fill
          src='/images/product.png'
          // width='400'
          // height='400'
          alt='상품 이미지'
          style={{ objectFit: 'cover' }}
        />
      </div>
    </>
  );
}
