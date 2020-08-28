//조건문
//1. if문
//예제1-1 
let input=33;
if(input % 2 == 0){
    console.log("짝수입니다.");
}
else{
    console.log("홀수입니다.");
}

//예제1-2
let kor=70, eng=50, math=100;
let tot=kor+eng+math;
let avg=tot/3;
let grade;
if(avg>=90) {
    grade="A";
    if(avg>=97) {
        grade+="+";
    }
} else if(avg>=80) {
    grade="B";
    if(avg>=87) {
        grade+="+";
    }
} else if(avg>=70) {
    grade="C";
    if(avg>=77) {
        grade+="+";
    }
} else if(avg>=60) {
    grade="C";
    if(avg>=67) {
        grade+="+";
    }
} else {
    grade="F";
}
console.log(grade);

//예제1-3 (106라인과 동일(예제3-4))
let noval;
if(!noval){
    noval=100;
} console.log(noval+10);


//2. switch문
//예제2-1
let input1 = 32;
switch(input1 % 2){
    case 0: console.log("짝수입니다."); break;
    case 1: console.log("홀수입니다."); break;
}

//예제2-2
switch(true){
    case avg>=90: grade="A"; break; 
    case avg>=80: grade="B"; break; 
    case avg>=70: grade="C"; break; 
    case avg>=60: grade="D"; break; 
    default: grade="F"; break; 
} console.log(grade);

//예제2-3
let date = new Date();
switch(date.getMonth()+1){
    case 12:
    case 1: 
    case 2: console.log("겨울"); break;
    case 3: 
    case 4: 
    case 5: console.log("봄"); break;
    case 6:
    case 7:
    case 8: console.log("여름"); break;
    case 9: 
    case 10: 
    case 11: console.log("가을"); break;
}


//3. 삼항조건 연산자
//표현식? 참일때 실행문 : 거짓일때 실행문;
//예제3-1
let d = 33;
console.log(d%2==0? '짝수' : '홀수');

//예제3-2
let val1=20, val2=10;
let max = val1 - val2;
console.log(max>=0? val1: val2);

// // 강사님 풀이
// let val1=20, val2=30;
// let max = val1>val2? val1:val2;
// console.log(max);

//예제3-3
val1=20, val2=30; let val3=10;
let min = val1<val2? (val1<val3? val1:val3) : (val2<val3? val2:val3);
console.log(min);

//예제3-4
let noval1;
noval1=noval1? noval1 : 100;
noval1=noval1? noval1 : 200;
console.log(noval1+10);

//예제3-5
noval=noval || 100;
console.log(noval+10);