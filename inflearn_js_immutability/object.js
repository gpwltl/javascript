/*
객체의 가변성
    - 객체는 생성마다 새로운 객체를 생성함
    - 아래 코드에서 주석된 부분을 살펴보면 o2가 o1이 매칭하고 있는 값에 매칭하게 되었는데 이때 name(lee)을 바꾼다? 
                                        그러면, 원본 데이터(o1)는 삭제되어 찾을 수 없게 된다. 

객체의 복사
    - 위의 문제에 대한 해결법
    - Object.assign({}, o1)을 이용하여 객체를 복사하고 그곳에서 값을 변경하도록 한다.
*/

var o1 = { name: 'kim' }
// var o2 = o1
// o2.name = 'lee'
var o2 = Object.assign({}, o1)
console.log(o1, o2, o1 === o2);

o2.name = 'lee';
console.log(o1, o2);