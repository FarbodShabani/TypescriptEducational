"use strict";
const firstInput = document.getElementById("num1");
const secondInput = document.getElementById("num2");
const resultButton = document.querySelector("button");
const numericResultArray = [];
const stringResultArray = [];
;
resultButton.addEventListener("click", () => {
    const firstValue = firstInput.value;
    const secondValue = secondInput.value;
    const result = adding(+firstValue, +secondValue);
    numericResultArray.push(result);
    const stringResult = adding(firstValue, secondValue);
    stringResultArray.push(stringResult);
    printResult({ val: result, type: "numberic" });
    printResult({ val: stringResult, type: "string" });
    console.log("array numeric", numericResultArray);
    console.log("array string", stringResultArray);
});
const adding = (a, b) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else if (typeof a === "string" && typeof b === "string") {
        return a + "" + b;
    }
    return +a + +b;
};
const printResult = (result) => {
    console.log("result: ", result.val, "type: ", result.type);
};
const myPromise = new Promise((resolve, err) => {
    setTimeout(() => {
        resolve("it's worked !!!");
    }, 1000);
});
myPromise.then((result) => console.log(result.split("w")));
