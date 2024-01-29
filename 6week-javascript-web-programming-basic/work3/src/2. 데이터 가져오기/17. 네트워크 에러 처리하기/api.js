export async function getReviews({
  order = 'createdAt',
  offset = 0,
  limit = 6,
}) {
  // throw new Error('버그가 아니라 기능입니다.');
  const query = `order=${order}&offset=${offset}&limit=${limit}`;
  const response = await fetch(
    `https://learn.codeit.kr/api/film-reviews?${query}`,
    // `https://learn.codeit.kr/error/film-reviews?${query}`,
  );
  if (!response.ok) {
    //response객체의 ok 프로퍼티를 이용해서 오류가 났다면 리스폰스 객체를 확인하고 error을 던지겠다.
    throw new Error('리뷰를 불러오는데 실패했습니다.');
  }
  const body = await response.json();
  return body;
}
