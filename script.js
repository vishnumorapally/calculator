let firstnumber
let secondnumber
let operation
let step = 0
let result = 0
var numArray = []
var secondNumArray = []
const display = document.getElementById("result");



function getNumber(nums){
    if(step === 0 || step === 1){
        numArray.push(nums);
        step = 1
        firstnumber = Number(numArray.join(''))
        display.value = firstnumber
    }
    else if(step == 2){
        secondNumArray.push(nums); 
        secondnumber = Number(secondNumArray.join(''))
        display.value = secondnumber
    }
}

function getoperator(op){
    step = 2;
    operation = op
    display.value = op
}

function clearResult(){
    display.value = 0
    firstnumber = null
    secondnumber = null
    operation = null
    numArray = []
    step = 0
    secondNumArray = []
    result = 0
}

const calculateResult = () =>{
    if (operation === "+") {
        result = Number(firstnumber)+Number(secondnumber)
        display.value=result
    }else if(operation === "-"){
        result = Number(firstnumber)-Number(secondnumber)
        display.value=result
    }else if(operation === "*"){
        result = firstnumber * secondnumber
        display.value=result
    }else if(operation === "/"){
        result = firstnumber / secondnumber
        display.value=result
    }
    else{
        display.value = "Enter correct numbers"
    }
    
}