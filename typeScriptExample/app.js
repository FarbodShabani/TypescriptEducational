"use strict";
const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const resultButton = document.querySelector("button");
resultButton.addEventListener("click", () => {
    const firstValue = firstInput.value;
    const secondValue = secondInput.value;
    const result = adding(+firstValue, +secondValue);
    console.log(result);
});
const adding = (a, b) => {
    return a + b;
};
