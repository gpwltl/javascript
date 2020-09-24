/*
초기값의 비교
    - 변수에 지정하는 값을 숫자나 문자등 변할 수 없는 값을 준다면, 하나의 값에 대해 여러 변수가 매치될 수 있다. 
    - but, 객체의 경우, 안의 내용이 언제든지 변할 수 있기 때문에 같은 데이터라도 변수가 각각 다른 value들로 매칭이 된다. 
                       그러므로 같은 데이터의 객체를 비교해도 false가 나오는 것을 발견
*/

var p1 = 1;
var p2 = 1;
console.log(p1, p2, p1 === p2);     //true

var o1 = { name: 'kim' };
var o2 = { name: 'kim' };
console.log(o1, o2, o1 === o2);     //false