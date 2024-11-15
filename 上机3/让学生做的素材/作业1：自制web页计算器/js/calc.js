//  请根据题目要求完成JS代码文件


let result=0;
function numberShow(num) {
    let x = document.getElementById("showScreen");
    if(x.value == 0){
        x.value = num;
    }
    else{
    x.value = x.value+num;
    }
}
function clickSign(num) {
    let x = document.getElementById("showScreen");
    x.value = x.value+num;
}

function clickResult(num) {
    let x = document.getElementById("showScreen");
    x.value = x.value+num;
}