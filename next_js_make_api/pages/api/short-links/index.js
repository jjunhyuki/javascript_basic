// export default function handler(request, response) {
//   response.send('안녕 API!');
// }
//2. 03 리스폰스 다루기
export default function handler(req, res) {
  switch (req.method) {
    case 'POST':
      res.status(201).send({
        title: '위키디피아 Next.js',
        url: 'https://en.wikipedia.org/wiki/Next.js',
      });
      break;

    case 'GET':
      res.send([
        {
          id: 'abc',
          title: '위키디피아 Next.js',
          url: 'https://en.wikipedia.org/wiki/Next.js',
        },
        {
          id: 'def',
          title: '코드잇 자유 게시판',
          url: 'https://codeit.kr/community/general',
        },
        {
          id: 'ghi',
          title: '코드잇 질문답변',
          url: 'https://codeit.kr/community/questions',
        },
      ]);
      break;

    default:
      //response객체의 . 표기법으로 접근을 했는데 줄줄이 이어서 또 메서드를 사용했는데 이런걸 메소드 체이닝이라하는데
      //메소드의 리턴값이 리스폰스 그 자체여서 아래와 같이 사용가능
      res.status(404).send(); //send()는  문자열이나 객체를 보낼수 있는 메소드(자바스크립트)
      break;
  }
}
