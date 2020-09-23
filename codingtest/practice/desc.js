/*
문자열 내림차순으로 배치하기 
문자열을 큰것에서 작은 순으로 정렬해 새로운 문자열로 리턴 
abcde -> edcba
*/
var answer = 'abcde';
var result = answer.split('').sort().reverse().join('');
console.log(result);


/* feedback.
1) 진짜 간단한 함수인데 필요한 함수에 대해서 잘 몰라서 오래 걸림
    split -> sort -> reverse -> join
*/