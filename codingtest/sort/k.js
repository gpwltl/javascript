/*
K번째수
arr의 i번째 숫자부터 j번쨰 숫자까지 자르고 정렬했을 때, k번쨰에 있는 수를 구하기
arr=[1, 5, 2, 6, 3, 7, 4], i=2, j=5, k=3 일때, 
    arr의 2(i)번째 부터 5(j)번째까지 자르고 [5,2,6,3]
    그 배열의 정렬-오름차순 [2,3,5,6]
    거기서 3(k)번째 숫자를 리턴 : 5
    이것을 반복
arr=[1, 5, 2, 6, 3, 7, 4], commands=[[2, 5, 3], [4, 4, 1], [1, 7, 3]] 일때, 결과: [5, 6, 3]
*/

var array = [1, 5, 2, 6, 3, 7, 4];
var commands = [[2, 5, 3], [4, 4, 1], [1, 7, 3]];

var answer = [];
var arrAns = [];
var arrSort = [];
for (var i = 0; i < commands.length; i++) {
    arrAns = array.slice(commands[i][0] - 1, commands[i][1]);
    arrSort = arrAns.sort((a, b) => a - b);
    answer.push(arrSort[commands[i][2] - 1]);
}
console.log(answer);

/*
feedback.
1) 코드를 더 간결하게 해보자.
        19-20번 줄을 하나로 묶을 수 있다. (.은 이어서 사용 가능)
        arrAns = array.slice(commands[i][0] - 1, commands[i][1]).sort(function(a, b){ return a - b; })
           -> 한줄로 바꾸게 push할 때 들어갈 배열만 바꿔주면 됨
2) push할 때 변수를 지정하면 결과는 push된 횟수가 리턴됨
    결과값만 원한다면 answer.push만 하고 answer을 출력하면 됨
3) map사용?
*/