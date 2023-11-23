//let num = 42;
//let firstName = "pasha";
//const isProgrammer = true;

/* Restricted
//let 33num = '122'
//let my-num = 12
let const*/

//firstName = "Nastya";

//alert(fisrtName);
//console.log("Test:", num, isProgrammer);

//console.log(num + 10);
//console.log(num - 10);
//console.log(num * 10);
//console.log(num / 10);
//console.log(num);

/*let num2 = num + 10;
console.log(num, num2);
num = num2 - num;
num2 = num2 + 1;
console.log(num, num2);*/

//let num3 = (num + 10 * 2) / (5 - 1);
//console.log(num3);

//const fullName = firstName + " Simonova";
//console.log(fullName);

const resultElement = document.getElementById("result");
const input1 = document.getElementById("input1");
const input2 = document.getElementById("input2");
const submitBtn = document.getElementById("submit");
const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
let action = "+";

//console.log(resultElement.textContent);
//resultElement.textContent = 42;

//console.log(typeof sum);

plusBtn.onclick = function () {
  action = "+";
};

minusBtn.onclick = function () {
  action = "-";
};

function printResult(result) {
  console.log("Result of print", result);
  if (result < 0) {
    resultElement.style.color = "red";
  } else {
    resultElement.style.color = "green";
  }
  resultElement.textContent = result;
}

function computeNumberWithAction(inp1, inp2, actionSymbol) {
  const num1 = +inp1.value;
  const num2 = +inp2.value;
  //if (actionSymbol == "+") {
  //  return num1 + num2;
  // } else if (actionSymbol == "-") {
  //  return num1 - num2;
  // }

  debugger;

  const result = actionSymbol == "+" ? num1 + num2 : num1 - num2;

  return result;
}

submitBtn.onclick = function () {
  const result = computeNumberWithAction(input1, input2, action);
  printResult(result);
  //if (action == "+") {
  //const sum = Number(input1.value) + Number(input2.value);
  // printResult(sum);
  //} else {
  // const sum = Number(input1.value) - Number(input2.value);
  //  printResult(sum);
  //}
};
