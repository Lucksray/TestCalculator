let setNum1;
let setNum2;
let operate;
let total;
$ = "Calc.html";


function showAnswer(a){
    document.getElementById("answer").innerHTML = a;
}


function editEquation(input){
    if(isNaN(input)){
        setNum1 += "" + input;
        document.getElementById("number--first").innerHTML = setNum1;
    } else if(input == "=") {
        if(setNum2 && setNum2 != 0){
            if(operate == "+"){
                total = add(setNum2,setNum1);
                setNum2 = total;
            } else if(operate == "-"){
                total = sub(setNum2, setNum1);
                setNum2 = total;
            } else if(operate == "*"){
                total = mult(setNum2,setNum1);
                setNum2 = total;
            } else if(operate == "/"){
                total = div(setNum2,setNum1);
                setNum2 = total;
            } else if(operator == "**"){
                total = pow(setNum2,setNum1);
                setNum2 = total;
            }
            
        }
    }
}

function add(x,y){
    return x + y;
}
function sub(x,y){
    return x - y;
}
function mult(x,y){
    return x * y;
}
function div(x,y){
    return parseFloat(x / y);
}
function pow(x,y){
    return x ** y;
}