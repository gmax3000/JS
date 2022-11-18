
let result = 0;

const calculate = function(){
    const firstNum = document.getElementById("numberFirst");
    const secondNum = document.getElementById("numberSecond");
    const operationType = document.getElementById("selectInput");
    // const result = firstNum.valueAsNumber + secondNum.valueAsNumber;
    // console.dir("secondNum");
    // console.log(firstNum.valueAsNumber + secondNum.valueAsNumber);
    // console.log("Calculate result btn is pushed")

    const operation = operationType.value;
    const firstNumber = firstNum.valueAsNumber;
    const secondNumber = secondNum.valueAsNumber;

    //let result = 0;
    if(operation == "+"){
        result = firstNumber + secondNumber;
    }else if(operation == "-"){
        result = firstNumber - secondNumber;
    }else if(operation == "*"){
        result = firstNumber * secondNumber;
    }else if(operation == "/"){
        if(secondNumber == 0) {
            alert("Can not divid to 0")
        }
        result = firstNumber / secondNumber;  
    }

    const divResult = document.getElementById("resultDiv");
    divResult.innerHTML = result;
}

const enableButton = function(){
    const firstNum = document.getElementById("numberFirst");
    const secondNum = document.getElementById("numberSecond");

    const firstNumber = firstNum.valueAsNumber;
    const secondNumber = secondNum.valueAsNumber;

    const calculatButton = document.getElementById("calculateBtn");
    if(firstNumber && secondNumber){
        calculatButton.disabled = false;
    }
    if(!firstNumber || !secondNumber){
        calculatButton.disabled = true; 
    }
    if(firstNumber == 0 || secondNumber == 0){
        calculatButton.disabled = false; 
    }
}

const cleanResult = function(){
    const r = document.getElementById("resultDiv");
    r.value = "Result";
    const firstNum = document.getElementById("numberFirst");
    const secondNum = document.getElementById("numberSecond");
    firstNum.valueAsNumber = 0;
    secondNum.valueAsNumber = 0;
}

const saveResult = function(){
    const r = document.getElementById("resultDiv");
    firstNum = document.getElementById("numberFirst");
    const secondNum = document.getElementById("numberSecond");
    firstNum.valueAsNumber = r.value;
    secondNum.valueAsNumber = 0;
    r.value = 0;
}