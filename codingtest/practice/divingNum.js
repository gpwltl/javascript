/*
나누어 떨어지는 숫자 배열
arr의 값 중에서 divisor로 나누어 떨어지는 값을 오름차순으로 정렬하여 리턴
divisor로 떨어지는 값이 없으면 [-1]을 리턴

arr=[2,33,1,3], divisor=3 -> [3,33]
arr=[3,2,6], divisor=10 -> [-1]
*/

function solution(arr, divisor) {
    var answer = [];
    var array = arr.filter(x => x % divisor == 0);
    if (array.length == 0) {
        answer.push(-1);
    }
    else {
        answer = array.sort((a, b) => a - b);
    }
    return answer;
}


/*
feedback.
1) 배열의 조건에 충족한 값만 배열에 담고 싶다면 arr.filter() 사용하기
2) filter한 값이 존재하지 않을때를 표현할 때는 "그 배열의 길이가 존재하지 않는다"라고 표현 (arr.length==0)
        처음에 answer==[] 이라고 계속 조건 준다면, -1을 answer에 주지 못함*****
3) map 사용 못할 것이라 생각했는데 사실 가능하긴 함!! (아래 풀이로 설명)
*/


//다른 사람 풀이
function solution(arr, divisor) {
    var answer = [];
    arr.map((x) => {
        x % divisor === 0 && answer.push(x);
    })
    return answer.length ? answer.sort((a, b) => a - b) : [-1];
}

/*
기존의 map을 살펴보면 배열의 값들에 2배를 하고싶거나 나눈 값을 새로운 함수로 리턴할 때 사용한다.
(map을 이용한다면 값이 5개일 때 무조건 5개의 리턴값이 나온다고 생각함 mistake)
    -조건을 주는 것도 가능하다. 조건을 주면 조건에 충족한 값만 나오기에 동일한 개수가 아닐 수 있다.
    but 결과는 true/false 값으로 출력
    -그래서 "&& answer.push(x)" 을 추가해서 값을 배열에 다시 넣어서 출력할 수 있다.
*/