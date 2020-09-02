/*
최대공약수, 최소공배수 구하기
    2개의 값(3, 12)을 가져와 gcd, lcm을 구한 후 
    배열의 [3, 12] 형태로 출력
*/

function solution(n, m) {
    var answer = [];
    var min_num=1;
    var max_num=1;
    
    for(var i=0; i<Math.max(n, m); i++){
        if(n%i==0 && m%i==0){
            min_num=i;
        }
    }
     max_num=n*m/min_num;
    answer=[min_num, max_num];
    
    return answer;
}

/*
알면 유용한 개념
    1) Math.max() / Math.min()
        Math.max(3, 12) 식으로 입력한다면 둘 중에 큰 값을 리턴
    
    2) 최소공배수 구할 때, n*m 값에서 최대공약수를 나누어주면 됨
*/