const express = require('express');
const next = require('next');
const { createProxyMiddleware } = require('http-proxy-middleware');

const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // 프록시 설정
  server.use(
    '/api', // 프록시 경로 설정
    createProxyMiddleware({
      target: 'http://example.com', // 프록시할 대상 서버 주소
      changeOrigin: true, // 대상 서버 주소를 변경
      pathRewrite: {
        '^/api': '', // 경로 재작성
      },
    }),
  );

  server.all('*', (req, res) => {
    return handle(req, res);
  });

  server.listen(3000, err => {
    if (err) throw err;
    console.log('> Ready on http://localhost:3000');
  });
});
