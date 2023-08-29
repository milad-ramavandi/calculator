"use strict";
const screenCalculatorElement = document.querySelector(".screenCalculator");
let powFlag = false;
function addToScreenCalculator(value) {
    if (screenCalculatorElement.innerHTML == "0") {
        screenCalculatorElement.innerHTML = value;
    }
    else {
        screenCalculatorElement.innerHTML += value;
    }
}
function calculate() {
    if (powFlag) {
        const numbers = screenCalculatorElement.innerHTML.split("^");
        const result = Math.pow(Number(numbers[0]), Number(numbers[1]));
        screenCalculatorElement.innerHTML = result.toString();
        powFlag = false;
    }
    screenCalculatorElement.innerHTML = eval(screenCalculatorElement.innerHTML);
}
function clearScreenCalculator() {
    screenCalculatorElement.innerHTML = "0";
}
function squrtCalculate() {
    const result = Math.sqrt(Number(screenCalculatorElement.innerHTML));
    screenCalculatorElement.innerHTML = String(result);
}
function absoluteCalculate() {
    const result = Math.abs(Number(screenCalculatorElement.innerHTML));
    screenCalculatorElement.innerHTML = String(result);
}
function powerCalculate() {
    screenCalculatorElement.innerHTML += "^";
    powFlag = true;
}
function sinCalculate() {
    const radian = (Number(screenCalculatorElement.innerHTML) * Math.PI) / 180;
    screenCalculatorElement.innerHTML = Math.sin(radian).toString();
}
function cosCalculate() {
    const radian = (Number(screenCalculatorElement.innerHTML) * Math.PI) / 180;
    screenCalculatorElement.innerHTML = Math.cos(radian).toString();
}
function factorialCalculate() {
    let result = 1;
    if (screenCalculatorElement.innerHTML === '0' || screenCalculatorElement.innerHTML === '1') {
        screenCalculatorElement.innerHTML = result.toString();
    }
    else {
        for (let index = Number(screenCalculatorElement.innerHTML); index >= 1; index--) {
            result *= index;
        }
        screenCalculatorElement.innerHTML = result.toString();
    }
}
