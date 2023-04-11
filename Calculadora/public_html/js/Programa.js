const inputNumbers = document.getElementById("input-numbers");
const inputResult = document.getElementById("input-result");
const addBtn = document.getElementById("button-add");
const subtractBtn = document.getElementById("button-subtract");
const multiplyBtn = document.getElementById("button-multiply");
const divideBtn = document.getElementById("button-divide");
const calculateBtn = document.getElementById("button-calculate");
let firstNumber = null;
let selectedOperator = null;

addBtn.addEventListener("click", () => {
  saveFirstNumber();
  selectedOperator = "+";
});

subtractBtn.addEventListener("click", () => {
  saveFirstNumber();
  selectedOperator = "-";
});

multiplyBtn.addEventListener("click", () => {
  saveFirstNumber();
  selectedOperator = "*";
});

divideBtn.addEventListener("click", () => {
  saveFirstNumber();
  selectedOperator = "/";
});

calculateBtn.addEventListener("click", () => {
  const secondNumber = parseFloat(inputNumbers.value);
  const result = calculate(firstNumber, selectedOperator, secondNumber);
  inputResult.value = result;
});

function saveFirstNumber() {
  firstNumber = parseFloat(inputNumbers.value);
  inputNumbers.value = "";
  inputResult.value = firstNumber;
}

function calculate(firstNumber, operator, secondNumber) {
  switch (operator) {
    case "+":
      return firstNumber + secondNumber;
    case "-":
      return firstNumber - secondNumber;
    case "*":
      return firstNumber * secondNumber;
    case "/":
      return firstNumber / secondNumber;
  }
}
