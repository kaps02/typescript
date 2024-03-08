"use strict";
<<<<<<< HEAD
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.listen(3000);
=======
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
>>>>>>> 76f57b8060b52c9d25ecdce1af07d18685da17e7
