/*
가운데 글자 가져오기
단어 s의 가운데 글자를 반환하는 함수 만들기
    길이가 짝수는 가운데 두 글자 반환
    홀수는 가운데 글자만 반환
abcde-> c, qwer-> we
*/

//방법1
function solution(s) {
    var answer = '';
    var arr = s.split('');
    var leg = arr.length;
    var half = Math.floor(leg / 2);

    if (leg % 2 === 1) {
        //홀수
        answer = arr[half];
    } else {
        //짝수
        answer += arr[half - 1];
        answer += arr[half];
    }
    return answer;
}

//방법2
function solution(s) {
    var answer = '';

    var leg = s.length;
    var length

    var str = s.substr(leg / 2, 1);
    var str2 = s.substr((leg / 2) - 1, 2);
    answer = leg % 2 === 0 ? str2 : str;


    return answer;
}


/*
feedback.
1) 오류 방지를 위해!!! arr.length나 Math.floor() 같은거는 변수로 지정하고 사용할 것!!
2) 다른 풀이방법에서, arr.substr() 사용
    -str.substr(start, length) : 파라미터로 입력받은 start index부터 length 길이만큼 string 잘라내서 반환하는 함수
    (방법 2로 다시 작성해봄)
*/