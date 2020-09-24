/*
const vs. object freeze
    - const : 이름이 가르키는 값을 다른걸로 못바꾸게 하는 것
    - object freeze : 값 자체를 못바꾸게 하는 것
*/

const o1 = { name: 'kim' }
Object.freeze(o1);
const o2 = { name: 'lee' };

//o1 = o2;        //TypeError: Assignment to constant variable. -> const 때문에 생김(var로 바꾸면 error안뜸)
o1.name = 'park';       //값 변경x
console.log(o1);