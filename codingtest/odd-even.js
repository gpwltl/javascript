/*
짝수와 홀수
num이 짝수일 땐 "Even", 홀수일 땐 "Odd" 반환
*/

// 방법 1
function solution(num) {
    var answer = '';
    answer = num % 2 === 0 ? "Even" : "Odd"

    return answer;
}


//방법 2
function solution(num) {
    var answer = '';
    if (num % 2 === 0) {
        answer = 'Even'
    } else {
        answer = 'Odd'
    }

    return answer;
}

/*새로 알게 된 사실
1) 삼항연산자가 if문보다 더 빠르게 처리된다.
*/