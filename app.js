"use strict";
const screenCalculatorElement = document.querySelector(".screenCalculator");
let powFlag = false;
function addToScreenCalculator(value) {
    screenCalculatorElement.value += value;
}
function calculate() {
    if (powFlag) {
        const numbers = screenCalculatorElement.value.split("^");
        const result = Math.pow(Number(numbers[0]), Number(numbers[1]));
        screenCalculatorElement.value = result.toString();
        powFlag = false;
    }
    screenCalculatorElement.value = eval(screenCalculatorElement.value);
}
function clearScreenCalculator() {
    screenCalculatorElement.value = "";
}
function squrtCalculate() {
    const result = Math.sqrt(Number(screenCalculatorElement.value));
    screenCalculatorElement.value = String(result);
}
function absoluteCalculate() {
    const result = Math.abs(Number(screenCalculatorElement.value));
    screenCalculatorElement.value = String(result);
}
function powerCalculate() {
    screenCalculatorElement.value += "^";
    powFlag = true;
}
function sinCalculate() {
    const radian = (Number(screenCalculatorElement.value) * Math.PI) / 180;
    screenCalculatorElement.value = Math.sin(radian).toString();
}
function cosCalculate() {
    const radian = (Number(screenCalculatorElement.value) * Math.PI) / 180;
    screenCalculatorElement.value = Math.cos(radian).toString();
}
