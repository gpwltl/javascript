//Date()
let dateA=new Date();
let dateB=new Date(64543515343544);
let dateC=new Date("December 8, 1991 21:30:00");
let dateD=new Date(1991, 12-1, 8, 21, 30, 0, 0);
console.log(dateA);
console.log(dateB);
console.log(dateC);
console.log(dateD);

//----------------------------------
// 배열 선언
let array=[{
    name: '감자',
    price: 1000
}, {
    name: '고구마',
    price: 1200
}, {
    name: '바나나', 
    price: 1500
}];

//배열 요소 꺼내기 (스택)
let popped = array.pop();
console.log('- 배열에서 꺼낸 요소');
console.log(popped);
console.log('- pop() 메소드를 호출한 이후의 배열');
console.log(array);

//배열에 요소 넣기
array.push(popped);
array.push({
    name: '사과',
    price: 1000
});
console.log('- push() 메소드를 호출한 이후의 배경');
console.log(array);


//--------------------------------
//arraySort
let arr=[20, 4, 5, 8, 14];
arr.sort((a,b)=>{               //반대로 하고싶으면 부등호 바꿔주면 됨
    if(a>b) return 1; 
    else if(a<b) return -1;
    else return 0;
});
console.log(arr);

/*
//객체 내부의 숫자로 정렬 후 출력
arrB.sort((itemA, itemB)=> {
    return itemA.itemB - itemB.price;
});
console.log('- 객체 내부의 숫자로 정렬');
console.log(arrB);
console.log();


//객체 내부 문자열로 정렬하고 출력
arrC.sort((itemA, itemB)=> {
    if(itemA.name < itemB.name){
        return -1;
    } else if(itemA.name > itemB.name){
        return 1;
    } else{
        return 0;
    }
});
console.log('- 객체 내부의 문자열로 정렬');
console.log(arrC);
*/

//------------------------------
let arrD=[1,2,3,4,5];
let totar=arrD.concat([6,7,8]);
console.log(arrD);
console.log(totar);

//reverse()
arrD.reverse();
console.log(arrD);

//splice()
let num=arrD.splice(0,2,100);   //0번 자리에서 2개를 (묶어) 100으로 변경
console.log(num);
console.log(arrD);

console.log(typeof arrD);
let sarr=arrD.join();
console.log(sarr);
console.log(typeof sarr);


//------------------------------
//forEach()
let arrE=[52,273,32,63,72];
console.log('--forEach() 메소드--');
let tot=0;
arrE.forEach((item, index)=>{
    tot += item;
});
console.log(tot);

//map()
console.log('--map() 메소드--');
let outputA=arrE.map((item, index)=>{
    return item*item;       //배열의 모든 요소를 제곱해서 새로운 배열 만듬
});
console.log(outputA);

//filter()
console.log('--filter() 메소드--');
let outputB=arrE.filter((item, index)=>{
    return item%2==0;       //짝수만 추출
});
console.log(outputB);


//-----------------------------
let string='안녕하세요. 좋은 아침';
// if(string.indexOf('아침')>=0){
//     ;console.log(아침이에요!!);
// }

//String객체에 contain 함추 추가 및 활용
String.prototype.contain=function(input){
    return this.indexOf(input)>-1;
}
console.log(string.contain('아침'));
console.log(string.contain('저녁'));