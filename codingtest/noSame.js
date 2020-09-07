/*
같은 숫자는 싫어
배열 arr에서 연속적으로 나타나는 숫자는 하나만 남기고 전부 제거함
제거된 후 남은 수들을 반환할 때 원소들의 순서를 유지해야 함
arr=[1,1,3,3,0,1,1] -> answer=[1,3,0,1]
*/

function solution(arr) {
    var answer = [];
    answer[0] = arr[0];
    for (var i = 0; i < arr.length - 1; i++) {
        if (arr[i] !== arr[i + 1]) answer.push(arr[i + 1]);
    }

    return answer;
}

/*
feedback.
1) arr.filter() 함수 사용하기 (arr.push 사용도 좋지만)
        function solution(arr){
            answer = arr.filter((val,index) => val != arr[index+1]);
            return answer;
        }
        : val과 arr[index+1]의 값이 같지 않을때만 answer배열에 저장후 리턴

*/