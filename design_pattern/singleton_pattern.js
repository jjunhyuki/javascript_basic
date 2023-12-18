const obj = {
 a: 27
}
const obj2 = {
 a: 27
}

console.log(obj === boj2)
// false



class Singleton{
		constructor(){
			if(!Singleton.instance) {
				Singleton.instance = this
			}	
		return Singleton.instance
	}
	getInstance(){
		return this
	}
}
const c = new Singleton()
const d = new Singleton()
console.log(c === d) // true

/* 이 코드는 Singleton.instance라는 하나의 인스턴스를 가지는 Singleton 클래스를 구현한 모습
    - a와 b는 하나의 인스턴스를 가진다. */



/* ---------------------------------------------- */


//싱글톤 패턴을 사용한 데이터베이스 연결 모듈
const URL = 'monGodb://localhost:27017/kundolapp'
const createConnection = url => ({"url" : url})
class DB{
	constructor(url) {
		if(!DB.instance) {
            DB.instance = createConnection(url)
        }
        return DB.instance
	}
    connect(){
        return this.instance
    }
}
const a = new DB(url);
const b = new DB(url);
console.log(a === b) // true
/* 이렇게 하나의 인스턴스로 a, b 를 생성하여 이를 통해 
데이터 베이스 연결에 관한 인스턴스 생성 비용을 아낄수있다. */



//mongoose의 싱글톤 패턴
Mongoose.prototype.connect = function(uri, options, callback) {
    const _mongoose = this instanceof Mongoose ? this : Mongoose;
    const conn = _mongoose.connection;

    return _mongoose._promiseOrCallback(callback, cb => {
        conn.openUri(uri, options, err => {
            if(err != null){
                return cb(err);
            }
            return cb(null, _mongoose);
        })
    });
}

//MySQL의 싱글톤 패턴
const mysql = require('mysql');
const pool = mysql.createPool({
    connectionLimit: 10,
    host: 'example.org',
    user: 'kundol',
    password: 'secret',
    database: '승철이디비'
});
pool.connect();

//모듈 A
pool.query(query, function (error, results, fields) {
    if(error) throw error;
    console.log('The solution is: ', result[0].solution);
});

//모듈 B
pool.query(query, function (error, results, fields) {
    if(error) throw error;
    console.log('The solution is: ', result[0].solution);
});

/* 메인 모듈에서 데이터 베이스 연결에 관한 인스턴스를 정의하고 다른 모듈인 A or B에서
해당 인스턴스를 기반으로 쿼를 보내는 형식*/