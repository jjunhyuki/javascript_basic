//모던한 프로퍼티 표기법

//앞서 배운 객체의 프로퍼티를 이렇게 표기했었다.
// const user = {
//     title: title,
//     birth: birth,
//     job: job,
// };

//변수에 할당된 값을 활용해서 프로퍼티를 만들수있다.
 //우리가 활용할 변수의 이름과 프로퍼티 이름이 같다면
const title = 'Codeit';
const birth = 2017;
const job = '프로그래밍 강사';

const user = { //이렇게 있다면
    title,
    birth,
    job,
};

console.log(user); // {title: "Codeit", birth: "2017", job: "프로그래밍 강사"} 이렇게 나온다.

//ex
 //this 표기법예시
function getFullName1() {
    return `${this.firstName} ${this.lastName}`;
}

const user1 ={
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName1, //getFullName1: getFullName1, //이렇게 프로퍼티 네임과 벨류나 변수의 이름이 같다면 이렇게도 사용가능
};

const admin = {
    firstName: 'Alex',
    lastName: 'Kim',
    getFullName1, //getFullName1: getFullName1, //이렇게 프로퍼티 네임과 벨류나 변수의 이름이 같다면 이렇게도 사용가능
};

console.log(user1.getFullName1()); // Tess Jang
console.log(admin.getFullName1()); // Tess Jang

const new_user = {
    firstName: 'Tess',
    lastName: 'Jang',
    getFullName1() { //getFullName1: function() { 이렇게 있던걸 생략가능
        return `${this.firstName} ${this.lastName}`;
    },
};
console.log(user.getFullName1()); //Tess Jang

//계산된 속성명
//프로퍼티 네임을 표현식으로 나타내는법
//ex)
// const userss = {
//     [표현식]: 값 , //표현식을 대괄호로 감싸면 프로퍼티로 사용가능
// };
const userss = {
    ['Code' + 'it']: 'value',
};

console.log(userss); //  {Codeit: "value"};

//위와같이 변수에 [] 를 감싸서 표현식으로 바꾸는 방식은

const propertyName = 'birth';
const getJob = () => 'job';

const codeit ={
    ['topic' + 'Name']: 'Modern JavaScript',
    [propertyName]: 2017,
    [getJob()]: '프로그래밍 강사', //프로퍼티네임에 리턴값도 사용가능 
};

console.log(codeit) // {topicName: "Modern JavaScript, birth: 2017, job:"프로그래밍 강사"}