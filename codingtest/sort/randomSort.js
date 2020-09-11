/*200912
문자열 내 마음대로 정렬하기
문자열로 구성된 리스트 strings와, 정수 n이 주어져서 각 문자열의 인덱스 n번째 글자를 기준으로 오름차순 정렬
strings = [sun, bed, car]; n=1 -> 결과 [car, bed, sun]
    --인덱스 1의 문자 u, e, a를 비교해서 정렬한 것
*/

var strings = ["sun", "bed", "car"];
var n = 1;

var arr = strings.sort(function (a, b) {
    var first = a[n];
    var second = b[n];

    if (first === second) {
        return (a > b) - (a < b);
    } else {
        return (first > second) - (first < second)
    }
});
console.log(strings)

/*
feedback.
1) sort함수 안에 function을 사용하는 것을 잘 활용할 줄 알아야 하는 문제   ***추후 많은 학습 후 다시보기
    - (a<b) return: -1  : 순서가 바뀔 것.
    - (a=b) return: 0
    - (a>b) return: 1

2) localeCompare() 사용?
*/