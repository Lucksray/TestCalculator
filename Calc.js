let currentEvent = "null";
let 
$ = "Calc.html";

function changeEvent(x){
    if(x == 1){
        currentEvent = "add";
    } else if (x == 2){
        currentEvent = "subtract"
    } else if (x == 3){
        currentEvent = "multiply";
    } else if (x == 4){
        currentEvent = "divide";
    }
    console.log(currentEvent);
    getEvent();
}

function getEvent(){
    document.getElementById("curEvent").innerHTML = currentEvent;
    return currentEvent;
}

function addition(x,y){
    let a = x + y;
    return a;
}

function subtraction(x,y){
    let a = x - y;
    return a;
}

function multiplication(x,y){
    let a = x * y;
    return a;
}

function dividation(x,y){
    let a = x / y;
    let b = x % y;
    return a + " remainder" + b;
}

function showAnswer(a){
    document.getElementById("answer").innerHTML = a;
}

function submit(x,y){
    if(currentEvent === "add"){
        let a = addition(x,y);
    } else if (currentEvent === "subtract"){
        let a = subtraction(x,y);
    } else if (currentEvent === "multiply"){
        let a = multiplication(x,y);
    } else {
        let a = dividation(x,y);
    }

    showAnswer(a);
}

