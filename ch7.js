//input

/*
// repl
const repl = require('repl');
repl.start({
    prompt: '숫자입력>>> ',
    eval: (command, context, filename, callback) => {
        let number = Number(command);
        if(isNaN(number)){
            console.log('숫자가 아닙니다.');
        } else { 
            console.log('숫자입니다.');
        }
        callback();
    }
});
*/


// readline 
const readline=require("readline");
const r1=readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

r1.on('line', function(line){
    let number=Number(line);
    if(isNaN(number)){
        console.log('숫자가 아닙니다.');
    } else { 
        console.log('숫자입니다.');
    }
    r1.prompt();                        //계속 입력받을 때 사용
}).on('close', function(){
    process.exit();
});


//-----------------------------------------
//exports
const a=10;
exports.a=a;