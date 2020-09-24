/*
가변과 불변 api 비교
*/

var score = [1, 2, 3];
var a = score;
var b = score;

//score.push(4);    //원본 사라짐
var score2 = score.concat(4);       //원본 바꾸지 않고 복제본을 바꿈
console.log(score2, a, b);          //push일 때는 a,b가 score와 같이 1234로 변경되지만
                                    //concat일 때는 a,b는 원본 그대로 존재하고 score값만 변경됨