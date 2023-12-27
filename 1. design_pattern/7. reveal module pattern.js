//reveal module
const pukuba= (() => {
	const a = 1
	const b = () => 2
	const public = {
		c : 2,
		d : () => 3
	}
	return public
}) ()
console.log(pukuba)
console.log(pukuba.a)
// { c: 2, d: [Function: d] }
// undefined


//a와 b는 다른 모듈에서 사용 할 수 없는 변수나 함수이며, private 범위를 가진다.
//c와 d는 다른 모듈에서 사용할 수 있는 변수나 함수이며 public 범위를 가진다. 
