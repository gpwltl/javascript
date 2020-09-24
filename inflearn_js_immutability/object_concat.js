/*
중첩된 객체의 복사
    - 배열도 객체.
    - 객체 속 배열은 값이 저장될 때 따로 저장이 되게 되는데 '객체 복사'하면 배열값은 따로 복사되지 않고 동일한 배열값을 매칭한다. 
            따라서, 복사하고 값을 push하면 원본값은 사라지고 변경된 값으로 둘 다 적용됨
    - concat() 이용하면, 배열도 각각 매핑하게 되는데 그렇다면 o2에서 배열 값을 push해도 원본에 영향을 끼치지 않는다. 
*/

var o1 = { name: 'kim', score: [1, 2] }
var o2 = Object.assign({}, o1)
console.log(o1, o2, o1 === o2, o1.score === o2.score)       //o1과 o2는 false지만 배열값은 true

//o2.score.push(3);
//console.log(o1, o2, o1 === o2, o1.score === o2.score)       //o1의 배열값도 변경된 것을 확인(원본값 사라짐.)

o2.score = o2.score.concat();
o2.score.push(3);
console.log(o1, o2, o1 === o2, o1.score === o2.score)       //o2의 배열값만 변경되어 false