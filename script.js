// DOM selectors
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const numberButton = document.querySelectorAll("[data-number]");
const operationbutton = document.querySelectorAll("[data-operation]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const equalsButton = document.querySelector("[data-equals]");
// local variables
let currentOperand = "";
let previousOperand = "";
let operation = "";
function updateDisplay() {
  currentOperandTextElement.innerText = currentOperand;
  if (operation != null) {
    previousOperandTextElement.innerText = `${previousOperand} ${operation}`;
  }
}
function appendNumber(number) {
  if (number === "." && currentOperand.includes(".")) {
    return;
  }
  currentOperand += number;
}
function chooseOperation(oper) {
  if (currentOperand === "") return;
  if (previousOperand !== "") {
    compute();
  }
  operation = oper;
  previousOperand = currentOperand;
  currentOperand = "";
}
function clear() {
  operation = "";
  previousOperand = "";
  currentOperand = "";
  previousOperandTextElement.innerText = "";
  currentOperandTextElement.innerText = "";
}
function compute() {
  let result = 0;
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return;

  switch (operation) {
    case "+":
      result = prev + current;
      break;
    case "-":
      result = prev - current;
      break;
    case "*":
      result = prev * current;
      break;
    case "÷":
      result = prev / current;
      break;
    default:
      return;
  }

  console.log(result);
  previousOperand = "";
  currentOperand = result.toString();
  operation = "";
}
// get number input
numberButton.forEach((button) => {
  button.addEventListener("click", () => {
    appendNumber(button.innerText);
    updateDisplay();
  });
});

// get operation input
operationbutton.forEach((button) => {
  button.addEventListener("click", () => {
    chooseOperation(button.innerText);
    updateDisplay();
  });
});

// clear button eventlistener
clearButton.addEventListener("click", () => {
  clear();
});
// delete button event listener
deleteButton.addEventListener("click", () => {});

// equals button
equalsButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});
