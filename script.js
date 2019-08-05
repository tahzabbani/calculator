const div = '÷';
const mult = '×';
const ad = '+';
const sub = '-';

const add = (x, y) => x + y;

const subtract = (x, y) => x - y;

const multiply = (x, y) => x * y;

const divide = (x, y) => {
    if (y != 0) {
        return x / y;
    } else {
        return "yeah you can't do that";
    }
}

const numButtons = document.querySelector(".number");
const resultBox = document.querySelector("#result");
const addOp = document.querySelector(".add");
const subtractOp = document.querySelector(".subtract");
const divideOp = document.querySelector(".divide");
const multiplyOp = document.querySelector(".multiply");
const clear = document.querySelector(".clear");
const invert = document.querySelector(".invert");
const backspace = document.querySelector(".delete");
const dot = document.querySelector(".decimal");
const equals = document.querySelector(".evaluate");

var displayNumStorage = 0;

console.log(divide(3, 0));