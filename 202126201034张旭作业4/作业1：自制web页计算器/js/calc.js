//  请根据题目要求完成JS代码文件
function clickAC() {
    let x = document.getElementById("showScreen");
    x.value = '0';
}
function clickBack() {
    let x = document.getElementById("showScreen");
    if(x.value=='NaN'||x.value=='Infinity'||x.value=='-Infinity')
        x.value='00';
    x.value = x.value.substring(0, x.value.length - 1);
    if(x.value=='')//如果回退导致空串则补上0
    x.value='0';
}
function clicknegative() {
    let x = document.getElementById("showScreen");
    x.value = -x.value;
}

function numberShow(num) {
    let x = document.getElementById("showScreen");
    if (x.value == 0) {
        x.value = num;
    }
    else {
        x.value = x.value + num;
    }
}
function checkSign(x){
    str=x.value
    switch(str.charAt(str.length-1)){
        case '+':
        case '-':
        case '*':
        case '/':
        case '.':
        return true;  
    }
    return false;
}   
function clickSign(num) {
    let x = document.getElementById("showScreen");
    if (checkSign(x))
        x.value = x.value.substring(0, x.value.length - 1) + num;
    else
     x.value = x.value + num;
}

function clickDot(){
    if(checkSign())
        x.value = x.value.substring(0, x.value.length - 1) + '.';
    else
        show.value+='.'

}

function clickResult(num) {
    let x = document.getElementById("showScreen");
    x.value = eval(x.value);
}