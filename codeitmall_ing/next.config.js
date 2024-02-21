/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
    return [
      {
        source: '/products/:id', //리다이렉트 할 주소
        destination: '/items/:id ', // 이동시킬 주소
        permanent: true, //리스폰스 스테이트 코드를 정하는곳 (웹브라우저에게 주소가 바뀌었다는 사실을 저장하게 하려면 true)
      },
    ];
  },
  //next Image태그를 쓸때는 public안에 파일을 쓰는게 아닌 외부에 이미지를 쓸때는 이렇게 설정을 해줘야한다.
  //이 설정값들은 외부의 이미지를 사용할것을 미리 next서버에 알려주는것이라고 생각하면 쉽다.
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'learn-codeit-kr-static.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/codeitmall/**',
      },
    ],
  },
};

module.exports = nextConfig;
