//2. 02 리퀘스트 다루기
export default function handler(req, res) {
  //   res.send('안녕 다이나믹 라우터!');
  //   res.send(req.query);
  //   res.send(req.cookies); //쿠키값을 확인하는 방법, 쿠키에는 간단한 사용자 정보나 로그인하고 인증방법정도가 담겨있는데 그걸 리퀘스할때마다 보내주는 방식으로 활용
  res.send(req.method); //메소드 확인
}

// 만약 메소드값에 따라서 다르게 처리하고싶다면 switch 문을 써보자
export default function handler(req, res) {
  switch (req.method) {
    case 'PATCH':
      res.send('ShortLink 수정');
      break;
    case 'GET':
      res.send('ShortLink 조회');
      break;
    default:
      res.send();
      break;
  }
}

