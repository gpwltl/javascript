/*
자릿수 더하기 
    N의 각 자릿수의 합을 구해서 return
    123이면 1+2+3으로 6리턴
*/

function solution(n) {
    var num = n;
    var addNum = 0;
    while (true) {
        if (num < 1) {
            break;
        }
        addNum += (num % 10)
        num = Math.floor(num / 10);       //주어진 숫자와 같거나 작은 정수 중에서 가장 큰 수를 반환(반올림)
    }
    return addNum;
}


/*
feedback
1) 10으로 나누어 몫과 나머지를 이용하면 훨씬 간단한 문제해결이 가능했음
2) Math.floor() 함수를 이용하여 계속 문제가 되었던 소수점을 해결하였음
*/