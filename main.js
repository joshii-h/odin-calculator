document.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById("display").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            calculate();
        } else if (event.key === "Backspace") {
            deleteLast();
        } else if (event.key === "Escape") {
            clearDisplay();
        }
    });
});

function clearDisplay() {
    document.getElementById("display").value = "";    
}
function deleteLast() {
    document.getElementById("display").value = document.getElementById("display").value.slice(0, -1);
}
function append(character) {
    document.getElementById("display").value += character;
}

function calculate() {
    let calculation = document.getElementById("display").value;
    try {
        let x = operate(calculation);
        document.getElementById("display").value = x;
    } catch (error) {
        document.getElementById("display").value = "Error";
    }
}

const regexc = /[/*\-+]/;
const regexn = /[0123456789.]/;

function operate(cc){
    const numbers = cc.split(regexc).map(Number);
    let arrc = cc.split(regexn);
    let symbols = arrc.filter(str => str !== "");
    let answer = numbers[0];
    symbols.forEach((element, index) => {
        switch (element) {
            case "+":
                answer = add(answer, numbers[index + 1]);
                break;
            case "-":
                answer = subtract(answer, numbers[index + 1]);
                break;
            case "*":
                answer = multiply(answer, numbers[index + 1]);
                break;
            case "/":
                answer = divide(answer, numbers[index + 1]);
                break;
            default:
                break;
        }
    });
    return answer;
}

const add = function(a, b){
    return a + Number(b);
}

const subtract = function(a, b){
    return a - Number(b);
}

const multiply = function(a, b){
    return a * Number(b);
}

const divide = function(a, b){
    return a / Number(b);
}