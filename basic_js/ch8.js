//화살표 함수
let af = ()=> {
    console.log(this);
};
let nf = function(){
    console.log(this);
};

af();
nf();