// 단어 s의 가운데 글자를 반환하는 함수, solution을 만들어 보세요.
//단어의 길이가 짝수라면 가운데 두글자를 반환하면 됩니다.

// 재한사항
// s는 길이가 1 이상, 100이하인 스트링입니다.

// ex) string | return
//     "abcde" | "c"
//     "qwer"  | "we"

// function solution(s) {
//     var answer = '';
//     return answer;
// }

function solution(s) {
  let len = s.length;
  let answer = '';

  if (len % 2 === 0) {
    answer = s.substring(len / 2 - 1, len / 2 + 1);
  } else {
    answer = s.charAt(Math.floor(len / 2));
  }
  return answer;
}
