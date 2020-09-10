/*
두 정수 사이의 합
두 정수 a,b가 주어졌을 때 a와 b 사이의 모든 정수를 합한 결과를 리턴
3,5라면 3+4+5=12 결과 출력 (값이 동일한 경우 아무거나 출력)
*/
var a = 3;
var b = 5;
var answer = 0;
if (a != b) {
    var min = Math.min(a, b);
    var max = Math.max(a, b);
    for (var i = min; i <= max; i++) {
        answer += i;
    }
} else {
    answer = a;
}
console.log(answer)

/*
사용한 함수들 : Math.min()/ Math.max()
*/