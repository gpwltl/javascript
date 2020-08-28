const foo = require('./ch7.js');
console.log(foo.a);

/*
let require = function(src){
    let fileAsStr=readFile(src);
    let module.exports={};
    eval(fileAsStr);
     //const a=10;
     //exports.a=a;
    return module.exports;
}
*/