/*
이름에 대한 불변함 : const vs. var
    - const: 고정 값으로 지정해놓는 변수 (값을 변경하려하면 typeerror발생)
    - var: 기본적으로 지정하는 변수
*/

var v = 1;
v = 2;
console.log('v: ', v);  //값을 두번 받았으니까 v는 헷갈릴 것

//그렇다면 값을 못 변하게 할 수 없을까? 'const'사용
const c = 1;
console.log('c: ', c)
//c = 2;  //TypeError: Assignment to constant variable. (이유는 const로 지정했는데 값을 또 지정했으니까.)
