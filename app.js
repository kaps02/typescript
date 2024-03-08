"use strict";
const val1 = document.getElementById('value1');
const val2 = document.getElementById('value2');
const btn = document.getElementById('addbtn');
const numResult = [];
const strResult = [];
function addTwo(num1, num2) {
    if (typeof num1 === 'number' && typeof num2 === 'number') {
        return num1 + num2;
    }
    else if (typeof num1 === 'string' && typeof num2 === 'string') {
        return num1 + ' ' + num2;
    }
    return +num1 + +num2;
}
function printResult(resultObj) {
    console.log(resultObj.val);
}
if (btn) {
    btn.addEventListener('click', function () {
        const value1 = val1.value;
        const value2 = val2.value;
        const result = addTwo(parseFloat(value1), parseFloat(value2));
        console.log(result);
    });
}
