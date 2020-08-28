//1. 변수 선언: var, let, const
var n=10;
var n=20;  //o

let m=10;
//let m=20;  //x, 중복 변수 선언 불가능

const l=10;
//l=20;      //x, 변경 불가능


// 2. 변수 작성 규칙
// 대소문자 구분
// 영문, 숫자, _, $의 조합으로만 가능(단, 숫자로 시작 불가능)
// 키워드를 변수로 선언 불가능


// 3. 주석: 한줄://, 여러줄: /* */
// 4. 기본 자료형: 숫자, 문자, 논리, 객체
let nnum=10;
let fnum=3.14;
let b = true;
let svar = 'hong gil dong';
let tm = new Date();


//5. 연산자
// 1) 산술연산자: + - * / %(나머지 연산자)
let r = 10%3;   //결과: 1
let t = 10/3;  //결과: 3

// 2) 비교연산자: > >= < <= == != === !==
let lo = 10>5;
console.log(lo);  //결과: true

// 3) 대입연산자: = += -= *=
let a = 10;
a += 20;  //a=a+20
a -= 10;  //a=a-10
a *= 4;   //a=a*4
a /= 2;   //a=a/2
a %= 3;   //a=a%3
console.log(a);

a=10;
a *= 3+5;  //a=a*(3+5)   연산자 우선순위 때문에 35가 나오지 않음
console.log(a);

// 4) 증감연산자: ++ --
a=10;
a++;  //a=a+1
++a;  //a=a+1

b=a++;   //b=a, a=a+1
c=++a;   //a=a+1, c=a

a=10; 
console.log(a++);
a=10; 
console.log(++a);


// 5) 논리연산자: || && !
let n1=10, n2=20, n3=30;
let m1= n1>=10 || n2<=10;  //true || false 이기때문에 둘 중 하나라도 true라서 결과: true
console.log(m1);
let m2= n1>=10 && n2<=10;  //true && false 이기때문에 둘 중 하나만 true라서 결과: false
console.log(m2);
let m3= !(n>=5);  //true지만 반대로 나와야하기에 결과: false
console.log(m3);

let m4= ++n2<=10 || n1 >= 10;  //두개의 순서가 바뀌면 이미 n1>=10이 true이기 때문에 뒤에 n2결과를 실행하지 않고 결과값을 출력함.
console.log(m4);
console.log(n2);

console.log('hong'+'gil'+'dong');
console.log('honggildong'+':'+23); //문자와 숫자가 만나면 모두 문자열로 인식
console.log(123+7);
console.log('123'+7);    //문자열로 인식         (결과: 1237)
console.log('123'+7+7);  //모두 문자열로 인식    (결과: 12377)
console.log(7+7+'123');  //숫자의 합 + 문자열    (결과: 14123)

let path= 'c:\\temp:\\';
console.log(path);
let vstr2= 'I\'m a boy';
console.log(vstr2);
let vstr3= "I'm a boy";
console.log(vstr3);

//  \t: 수평탭
//  \n: 줄바꿈
//  \b: beep 소리
//  \'' : 따옴표를 문자열로 사용하고 싶을 때 

console.log('honggildong'[0]);    //honggildong의 0번째(첫번째) 단어 가져오기
console.log(vstr2[6]);            //vstr2의 여섯번째 단어 가져오기

let age=23;
console.log(`gildong age: ${age}`);    // ` 사용 (싱글쿼터아님)
console.log(`올해는 ${new Date().getFullYear()}년 입니다.`);


//6. typeof
let v1=10;
let v2='hong';
let v3=new Date();
let v4=true;
let v5=function(){};
let v6;
console.log(typeof(v1));
console.log(typeof(v2));
console.log(typeof(v3));
console.log(typeof(v4));
console.log(typeof(v5));
console.log(typeof(v6));


//7. 강제 형변환 함수 : Number(), Boolean(), String()
let nv1= Number("anc");             //숫자로 변환
console.log(typeof(nv1));
console.log(Number(true));

console.log(typeof(Boolean(1)));    //boolean으로 변환 (데이터가 있으면 true, 없거나 비어있으면 false)
console.log(Boolean(123));   
console.log(Boolean(0));
console.log(Boolean("hong"));
console.log(Boolean(null));
console.log(Boolean(NaN));
console.log(Boolean(undefined));

console.log(typeof(String(12)));    //String으로 변환
console.log(String(true));