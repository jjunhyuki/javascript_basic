import Container from '@/components/Container';
import Header from '@/components/Header';
import Head from 'next/head';
import { ThemeProvider } from '@/lib/ThemeContext';
import '@/styles/global.css';
// import { Noto_Sans_KR } from '@next/font/google';

// 폰트사용할땐 아래처럼 만든후 className에 넣어주면됨 ex)className="notoSansKR"
// const notoSansKR = Noto_Sans_KR({
//   weight: ['400', '700'],
//   subsets: [],
//   // subsets는 빈 배열로 했는데요. => 전부다 사용하겠다.
//   //  서브셋이라는 건 폰트에서 영문, 한글 이런 식으로 사용할 글자들만 골라서 사용할 때 쓰는 것
//   // 만약 영문만 사용하는 폰트라면 ['latin']으로 써주면 됩니다.
// });
export default function App({ Component, pageProps }) {
  return (
    <>
      {/* app.js는 전체 페이지에 다 적용시킬때 사용함 */}
      <Head>
        {/* 여기서 기본 타이틀을 정해주고 */}
        {/* 다른 페이지에서 이렇게 헤드와 아이콘을정해주면 그 페이지에서는 새롭게 덮어 씌워진다. */}
        <title>Codeitmall</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
