// 객체 하나 정의
function Users() { 
    this.users = ["레쉬", "철수", "영희"]
  } 
  
  // 유저 정보를 추가하는 기능
  Users.prototype.add = function(name, callback) {
    let self = this;
    this.users.push(name);
  } 
  Users.prototype.remove = function(name, callback) {
    let self = this;
    this.users = this.users.filter(user => user !== name);
  }


function UsersProxy() {
    let users = new Users();
    let count = 0;
    return {
        add: function(name, callback) {
            users.add(name);
            count = count + 1;
        },
        remove: function(name, callback) {
            users.remove(name);
            count = count + 1;
        },
        getUsers: function() { 
            return users;
        },
        getCount: function() {
            return count;
            }
    }
}
// 기존에 프로토타입으로 선언해뒀던 add와 remove에 count 기능을 추가하여 오버라이딩해준 모습이다. 
// 프록시 객체에서 기존 객체의 메소드를 재정의하는 것 또한 오버라이드라고 명명하는지는 잘 모르겠으나, 
// 방식 자체는 오버라이드와 비슷한 듯하다.