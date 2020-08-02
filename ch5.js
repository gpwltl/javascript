//객체
let account={
    id:100,
    name:'hong',
    balance:  100000,
    print: function(){
        console.log(`계좌번호: ${this.id}, 이름:${this.name}, 잔액:${this.balance}`)
    }
};
account.print();

//다른 방법 2가지 (account 객체 안에 id, name, balance 값만 넣었을 때)
console.log(`계좌번호: ${account.id}, 이름:${account.name}, 잔액:${account.balance}`);
console.log(`계좌번호: ${account['id']}, 이름:${account['name']}, 잔액:${account['balance']}`);


//예제1
//일반 변수는 소문자로 시작하는 것 추천
let person={
    name: '홍길동',
    age: 23,
    info(){
        console.log(`이름: ${this.name}, 나이: ${this.age}`);
    }
};
person.info();

person.name='김길동';   //값을 변수 밖에서 사용하여 데이터 추가
person.age=25;
person.info();


//여러 객체를 배열에 넣고 함수를 만들어 for of를 이용해 배열의 데이터 자체를 가져와 출력
//좋은 방법은 아님
let pers=[{name:'hong', age:20}, {name:'cha', age:25},{name:'park', age:23}, {name:'lee', age:30}];
let info = function(p){
    console.log(`이름: ${p.name}, 나이: ${p.age}`)
}
for(let per of pers){
    info(per);
}


//객체에서 함수 사용
function Fruit(name, price){        //생성자 함수 
    this.name=name;
    this.price=price;
}
Fruit.prototype.info = function(){  //메소드 추가
    console.log(`과일명: ${this.name}, 가격: ${this.price}`);
};
let fr1 = new Fruit('사과', 1000);  //new 연산자를 이용하여 객체 추가
let fr2 = new Fruit('바나나', 1200);
let frs = [new Fruit('오렌지', 800), new Fruit('자두', 900), new Fruit('귤', 1000)];
fr1.info();
fr2.info();

for(let f of frs){
    f.info();
}


//내장객체
console.log(new Date().getMonth()+"월");
console.log(new Date().getDate()+"일");
console.log(new Date().getDay()+"(0:일요일)");
console.log(new Date().getHours()+"시");
console.log(new Date().getMinutes()+"분");
console.log(new Date().getSeconds()+"초");

let num = new Number(123);      //객체 (함수x)
console.log(typeof num);
console.log(num.toString());    //toString: 숫자를 문자열로 변환

let str = new String("string~~");
console.log(typeof str);        //결과: object
let vstr = "I am a string";
console.log(typeof vstr);       //결과: string

//string.prototype.myfunc = function() {}  //error
Number.prototype.myfunc = function() {}

/*
내장 객체는 객체 취급 new Number.. 메소드 추가 가능
기본 자료형(언어 자체에서 제공하는 자료형: int, double,,,)은 객체 취급x 내부적으로 객체임에도 불구하고 
객체(Number, string)가 달라서 myfunc 반복 사용 가능
string은 기본 메소드를 많이 가지고 있음 

*/

let fs = 'banana|orange|apple|kiwi';
let is = fs.split('|');
//console.log(is);
for(let f of is){
    console.log(f);
}
console.log(fs.toUpperCase());          //대문자로 변환
console.log(fs.toLowerCase());          //소문자로 변환
console.log(fs.charAt(3)); //fs[3]      //4번째 있는 문자의 앞자리 출력
console.log(fs.concat('|melon'));
console.log(fs);                        //추가한 것은 한 번만 : melon을 계속 사용하고 싶으면 배열에 추가할 것.
console.log(fs.slice(7,13));            //8번째에서 14번째까지만 잘라서 출력(end는 내가 원하는 끝나는 부분의 다음자리까지 출력 요청)
console.log(fs.substr(7,6));            //8번째부터 6개의 문자열을 출력
console.log(fs.substring(7,13));        //slice와 동일
console.log(fs.indexOf('orange'));      //해당 문자열의 첫글자가 어느 위치에 있는지 출력
console.log(fs.indexOf('orangt'));      //단, 해당 문자가 존재해야 함
console.log(fs.indexOf('|'), fs.length);        //|의 위치와 총 문자의 위치 출력
