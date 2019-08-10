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

/* selectors for all them buttons*/
const numButtons = document.querySelectorAll(".number");
const operator = document.querySelectorAll(".operator");
const resultBox = document.querySelector("#result");
const storedResult = document.querySelector("#previous");
const clear = document.querySelector(".clear");
const invert = document.querySelector(".invert");
const backspace = document.querySelector(".delete");
const dot = document.querySelector(".decimal");
const equals = document.querySelector(".evaluate");


var r = resultBox.textContent;
var sr = storedResult.textContent;
let currOp = "";
let equaled = false;

resultBox.textContent = "0";
storedResult.textContent = "";

function calculate() {
    r = resultBox.textContent;
    sr = storedResult.textContent;

    //so that the regex doesn't replace the negative sign
    if (r.indexOf("-") != 0 && sr.indexOf("-") != 0) {
        r = r.toString().replace(/[^0-9.]/g, '');
        sr = sr.toString().replace(/[^0-9.]/g, '');
    } else {
        if (r.indexOf("-") == 0) {
            var negR = r.substring(1, r.length);
            negR = negR.toString().replace(/[^0-9.]/g, '');
            r = negR * -1;
        } else {
            r = r.toString().replace(/[^0-9.]/g, '');
        }
        if (sr.indexOf("-") == 0) {
            var negSR = sr.substring(1, sr.length);
            negSR = negSR.toString().replace(/[^0-9.]/g, '');
            sr = negSR * -1;
        } else {
            sr = sr.toString().replace(/[^0-9.]/g, '');
        }
    }
    if (storedResult.textContent.indexOf("+") > -1 && r != "") {
        sr = add(Number(r), Number(sr));
        return sr;
    } else if (storedResult.textContent.indexOf("-") > 0 && r != "") {
        sr = subtract(Number(sr), Number(r));
        return sr;
    } else if (storedResult.textContent.indexOf("*") > -1 && r != "") {
        sr = multiply(Number(r), Number(sr));
        return sr;
    } else if (storedResult.textContent.indexOf("÷") > -1 && r != "") {
        sr = divide(Number(sr), Number(r));
        return sr;
    }

}

numButtons.forEach(num => {
    num.addEventListener('click', e => {
        if (equaled == true) {
            r = '';
            sr = '';
            resultBox.textContent = '';
            storedResult.textContent = '';
            r += num.value;
            resultBox.textContent = r;
            equaled = false;
        } else {
            if (resultBox.textContent == "0" && String(num.value) == "0") {
                resultBox.textContent = "0";
            } else if (resultBox.textContent.indexOf(".") > -1) {
                r = resultBox.textContent;
                r += num.value;
                resultBox.textContent = r;
            } else {
                if (resultBox.textContent == "0") {
                    resultBox.textContent = num.value;
                    r = num.value;
                } else {
                    r += num.value;
                    resultBox.textContent = r;
                }
            }
        }
    });
});

operator.forEach(op => {
    op.addEventListener('click', e => {
        currOp = op.value;
        if (storedResult.textContent == "") {
            sr = r;
            storedResult.textContent = r + String(op.value);
            resultBox.textContent = "0";
            r = resultBox.textContent;
            return;
        } else if ((currOp == "+" || currOp == "-" || currOp == "*" || currOp == "÷") && sr != "") {
            sr = calculate();
            console.log(sr);
            storedResult.textContent = sr + String(op.value);
            resultBox.textContent = "0";
            r = resultBox.textContent;
        }
    });
});

invert.addEventListener('click', e => {
    r = resultBox.textContent * -1;
    resultBox.textContent = r;
});

dot.addEventListener('click', e => {
    if (resultBox.textContent.indexOf(".") > -1) {
        return;
    } else {
        r += String(dot.value);
        resultBox.textContent = r;
    }
})

backspace.addEventListener('click', e => {
    r = resultBox.textContent.slice(0, -1);
    resultBox.textContent = r;
});

clear.addEventListener('click', e => {
    resultBox.textContent = "0";
    storedResult.textContent = "";
    sr = "";
    r = "";
});

equals.addEventListener('click', e => {
    if (storedResult.textContent == "") {
        return;
    } else {
        resultBox.textContent = calculate();
        storedResult.textContent = '';
        r = resultBox.textContent;
        equaled = true;
        //sr = '';
    }
})