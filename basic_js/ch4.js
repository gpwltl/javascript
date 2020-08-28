//함수(function)
function greet(){           //함수 정의
    console.log("hello~");
}

greet();                    //함수 호출 : 함수 실행
greet();

//예제1
function add(x,y){
    return x+y;
}

let s = add(10,20);
console.log(s);


//익명 함수(일회성 함수) : 마지막 블록에 ; 꼭 찍어줘야 함.
let func=function(){
    console.log("익명 함수");
};
func();

function outerFunc(fn){           //outerFunc
    fn();
}
outerFunc(function(){
    console.log("즉석 함수");
});


//예제2
function ff(){
    return 100;
}
let f1=ff;
let f2=ff();
console.log(f1);
console.log(f2);
console.log(f1());


//버블정렬
let arr=[7,8,2,5,4];
function bubble_sort(com){
    for(i=0; i<arr.length-1; i++){
        for(j=0; j<arr.length-1-i; j++){
            if(com(arr[j],arr[j+1])){
                let max=arr[j];
                arr[j]=arr[j+1];
                arr[j+1]=max;
            } 
        }
    } console.log(arr);
}

function compare(x,y){
    if(x>y) return true;
    else return false;
}

bubble_sort(compare);
bubble_sort(function(x,y){
    if(x<y) return true;
    return false;
});


//예제3
function f(x,y){
    x=x||0;
    if(!y){             //undefined를 해결하기 위해서
        y=0;
    }
    console.log(`x:${x}, y:${y}`);
}
f(10,20);
f(100);     //출력은 undefined로 무리없지만 계산을 해야한다면 error가 발생할 수 있음


//숫자 변환
let val = parseInt("84.5");  
console.log(val);               //parseInt는 정수형으로 출력 (소수점 자르고 싶을 때)
console.log(typeof val);
console.log(Number(84.5));      //Number로 형변환 [결과] 숫자 55

let float = parseFloat("65.5");
console.log(float);             //parseFloat는 소수점까지 출력
console.log(typeof float);

let val2="55.5A";
console.log(Number(val2));
console.log(parseInt(val2));    //앞에서부터 숫자가 있으면 변환해주고 뒤에는 무시 (하지만 문자부터 나온다면 모두 무시될 것 NaN)

//내장함수 
//setTimeout : 1초 후 한번만 실행
setTimeout(function(){
    console.log("1s 지남");
}, 1000);

//setInterval : 1초마다 계속 실행
/*
setInterval(function(){
    console.log('Interval func');
}, 1000);
*/

//clearInterval: 인터벌 함수를 멈추게 하는 함수
let id=setInterval(function(){
    console.log("1초 마다 출력합니다.");
}, 1000);
setTimeout(function(){
    clearInterval(id);
}, 3000);  //setTimeout(()=> {clearInterval(id)}, 3000); 동일한 결과 but, 6버전 이상


//화살표 함수
let af=()=> console.log("arrow Function");;
af();

//함수명도 식별자! 
let fa=function(){console.log("A")}
fa=function(){console.log("B")};
fa();   //B출력

//정의하자마자 호출한 화살표 함수
((x,y)=> console.log(x+y))(10,20);