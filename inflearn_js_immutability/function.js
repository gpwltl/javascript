/*
불변의 함수 만들기
    - 함수 안에서든 밖에서든 무언가 변경하려는 함수일 때, 
    값을 바로 변하게 하지 않고 Object.assing({}, )을 통해 복사를 한 후 값을 변경해주면 
    원본을 가리키고 있는 변수의 값은 건들이지 않고 값을 변경할 수 있다.  
*/

//'lee'로 이름을 변경하는 함수
//방법1 : 내부적으로
function fn(person) {
    person = Object.assign({}, person)      //기존의 값을 복사해서 
    person.name = 'lee';                    //'lee'로 바꿔주는 것
    return person;                          //변경된 person값을 리턴
}
var o1 = { name: 'kim' }
var o2 = fn(o1)
console.log(o1, o2);

//방법2 : 외부적으로
// function fn(person) {
//     person.name = 'lee';
// }
// var o1 = { name: 'kim' }
// var o2 = Object.assign({}, o1)
// fn(o2)
// console.log(o1, o2);