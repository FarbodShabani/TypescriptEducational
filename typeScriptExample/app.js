var firstInput = document.getElementById("num1");
var secondInput = document.getElementById("num2");
var resultButton = document.querySelector("button");
resultButton.addEventListener("click", function () {
    var firstValue = firstInput.value;
    var secondValue = secondInput.value;
    var result = adding(+firstValue, +secondValue);
    var stringResult = adding(firstValue, secondValue);
    console.log(result);
});
var adding = function (a, b) {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    }
    else {
        return a + "" + b;
    }
    return +a + +b;
};
