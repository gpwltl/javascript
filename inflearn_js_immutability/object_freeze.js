/*
Object freeze로 객체를 불면하게 만들기
    - 객체의 property를 얼리는 것 (property 값을 바꿀 수 없음)
    - 하지만 객체 속, 배열은 다른 곳에 저장되어 있기 때문에 push는 작동함.

*/

var o1 = { name: 'kim', score: [1, 2] }
Object.freeze(o1);
//Object.freeze(o1.score);      //TypeError: Cannot add property 2, object is not extensible
                                //      그 이유는, o1의 score까지 얼려서 값을 추가할 수 없기 때문에 
o1.name = 'lee';
o1.city = 'seoul';      //없는 property 당연히 작업x
o1.score.push(3);       //push는 잘 작동함 -> 그 이유는, 배열은 복제해도 같은 값을 매칭되고 있기 때문
console.log(o1);        //name 값이 변경되지 않음