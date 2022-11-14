const firstInput = document.getElementById("num1") as HTMLInputElement;
const secondInput = document.getElementById("num2") as HTMLInputElement;
const resultButton = document.querySelector("button")!;


resultButton.addEventListener("click", () => {

    const firstValue = firstInput.value;
    const secondValue = secondInput.value;
    const result = adding(+firstValue, +secondValue);
    const stringResult = adding(firstValue, secondValue)

    console.log(result);

});

const adding = (a: number | string, b: number | string) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else {
        return a + "" +b
    }
    return +a+ +b;
}

