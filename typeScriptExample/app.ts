const firstInput = document.getElementById("num1") as HTMLInputElement;
const secondInput = document.getElementById("num2") as HTMLInputElement;
const resultButton = document.querySelector("button")!;

const numericResultArray: Array<number> = [];
const stringResultArray: string[] = []; 

type strOrNum = number | string;
interface resultObj  {val : strOrNum , type: string};

resultButton.addEventListener("click", () => {

    const firstValue = firstInput.value;
    const secondValue = secondInput.value;
    const result = adding(+firstValue, +secondValue) as number;
    numericResultArray.push(result);
    const stringResult = adding(firstValue, secondValue) as string;
    stringResultArray.push(stringResult);

    printResult({val: result, type: "numberic"});
    printResult({val: stringResult, type: "string"});

    console.log("array numeric", numericResultArray);
    console.log("array string", stringResultArray);
    

});

const adding = (a: strOrNum, b: strOrNum) => {
    if (typeof a === "number" && typeof b === "number") {
        return a + b;
    } else if (typeof a === "string" && typeof b === "string") {
        return a + "" +b
    }
    return +a+ +b;
}

const printResult = ( result : resultObj) => {
    console.log("result: ", result.val, "type: ", result.type)
}

const myPromise = new Promise<string> ((resolve, err) => {
    setTimeout(() => {
        resolve("it's worked !!!")
    }, 1000)
});


myPromise.then((result) => console.log(result.split("w")));