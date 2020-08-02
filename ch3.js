//반복문
//1. For문 (초기식; 조건식; 증감식)
for(let i=0; i<3; i++){
    console.log("for문입니다.");
}

//예제1-1
let sum=0;
for(let n=1; n<=1000; n++){
    sum += n
} 
console.log(sum);

//예제1-2
let sum1=0, sum2=0;
for(let n1=1; n1<=1000; n1++){
    if(n1%2==0){
        sum1 += n1;
    } else{
        sum2 += n1;
    }
}
console.log(("짝수의 합: "+sum1)+(", 홀수의 합: "+sum2));

//예제1-3
let dan=5;
console.log(dan+"단");
for(let n2=1; n2<10; n2++){
    console.log(dan+"x"+n2+"="+(dan*n2));      //console.log(`${dan}x${n2}=${dan*n2}`); 도 가능
}

//예제1-4
console.log(dan+"단");
for(let n2=9; n2>0; n2--){
    console.log(dan+"x"+n2+"="+(dan*n2));
}

// 2. while문
// while(){}
let n3=1;
while(n3<4){
    console.log("while문 입니다.")
    ++n3;                                      //증감을 안하면 계속 1상태이기 때문에 무한 루프가 걸림
}

//예제2-1
let n4=1;
while(n4<10){
    console.log(`${dan}x${n4}=${dan*n4}`);
    ++n4;
}

//예제2-2
sum1=0; sum2=0;
n1=1;
while(n1<=1000){
    if(n1%2==0){
        sum1 += n1;
        ++n1;
    } else{
        sum2 += n1;
        ++n1;
    }
}
console.log(("짝수의 합: "+sum1)+(", 홀수의 합: "+sum2));


//배열 
//표현 arr=[ , , , , , ]; arr[]; (배열은 0부터 시작!)
let array=[1,2,3,4,5];
sum=0;
for(let i=0; i<array.length; i++){       //array.length는 배열의 크기 : 5
    sum += array[i];
} console.log("배열의 합은? " +sum);

//예제1
for(let i=array.length-1; i>=0; i--){
    console.log(array[i]);
}

//for문의 in의 i는 index 순번   [결과] 0 1 2
array=["apple","banana", "orange"];
for(let i in array){
    console.log(i)
}

//for문의 of의 o는 데이터       [결과] apple banana orange
for(let o of array){
    console.log(o);
}


//중첩반복문(이중반복문)
/*
let stars='';
for(let a=0; a<3; a++){
    for(let b=0; b<4; b++){
        stars += '*';
    }
    stars += '\n';
} console.log(stars);
*/

//예제1
/*
let stars='';
let cnt=5;
for(let a=0; a<cnt; a++){
    for(let b=0; b<a+1; b++){
        stars += '*';
    }
    stars += '\n';
} console.log(stars);
*/

//예제2
/*
let stars='';
let cnt=5;
for(let a=0; a<cnt; a++){
    for(let b=0; b<cnt-a; b++){
        stars += '*';
    }
    stars += '\n';
} console.log(stars);
*/

//예제3
let stars='';
let cnt=5;
for(let a=0; a<cnt; a++){
    for(let b=0; b<cnt-a; b++){
        stars += ' ';
    }
    for(b=0; b<a+1; b++){
        stars += '*';
    }
    stars += '\n';
} console.log(stars);

//예제4
let sta='';
for(let i=1; i<10; i++){
    for(let j=2; j<10; j++){
        sta  += `${i}x${j}=${i*j}\t`
    }
    sta += '\n';
} console.log(sta);


//break (조건문과 상관없이 반복을 빠져나옴. *자기와 가장 가까운 반복문만 빠져나옴)
let sum=0;
for(let i=1; i<=100; i++){
    sum+=i;
    if(sum>=50){
        console.log(`${i}:${sum}`);
        break;
    }
}

//continue (짝수만 더한 값 : if문장이 성립되면 continue로 다시 for문으로 돌아감. sum하지않고)
sum=0;
for(let i=1; i<=100; i++){
    if(i%2==1) continue;
    sum += i;
} console.log(sum);


//[변수의 영역]변수는 블록{}과 연관이 많음. 
//블록에서 변수를 선언했는데 블록밖에서 그 값을 사용한다? error 
let a = 100;    //전역변수
{let a = 10;}   //스택
console.log(a);

//블록안에서 콘솔할 때 안에 변수가 없다? 가장 가까운 밖의 변수를 가져온다. 
let b=77;
{console.log(b)};