const numberButtons = document.querySelectorAll("[data-number]");
const operatorButtons = document.querySelectorAll("[data-operation]");
const equalButton = document.querySelector("[data-equals]");
const clearButton = document.querySelector("[data-clear]");
const deleteButton = document.querySelector("[data-delete]");
const previousOperandTextElement = document.querySelector(
  "[data-previous-operand]"
);
const currentOperandTextElement = document.querySelector(
  "[data-current-operand]"
);

// variables
let currentOperand = "";
let previousOperand = "";
let operator = "";
// update display
function updateDisplay() {
  previousOperandTextElement.innerHTML = previousOperand;
  currentOperandTextElement.innerHTML = currentOperand;
}
// append number
function appendNumber(num) {
  if (num == "." && currentOperand.includes(".")) {
    return;
  }
  currentOperand += num;
}
// operation function
function operation() {
  if (previousOperand != "" && currentOperand != "") {
    compute();
  }
  previousOperand = currentOperand;
  currentOperand = "";
}
// compute values
function compute() {
  if (currentOperand == "") {
    currentOperand = 0;
  }
  switch (operator) {
    case "+":
      currentOperand = parseFloat(currentOperand) + parseFloat(previousOperand);
      break;
    case "-":
      currentOperand = parseFloat(currentOperand) - parseFloat(previousOperand);
      break;
    case "*":
      currentOperand = parseFloat(currentOperand) * parseFloat(previousOperand);
      break;
    case "÷":
      currentOperand = parseFloat(currentOperand) / parseFloat(previousOperand);
      break;
  }
  previousOperand = "";
  return currentOperand.toString();
}
// event listeners
numberButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    appendNumber(btn.innerHTML);
    updateDisplay();
  });
});
// operation events
operatorButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    operator = btn.innerHTML;
    operation();
    updateDisplay();
  });
});

// equals event
equalButton.addEventListener("click", () => {
  compute();
  updateDisplay();
});

// clear event
clearButton.addEventListener("click", () => {
  currentOperand = "";
  previousOperand = "";
  updateDisplay();
});

// delete event
deleteButton.addEventListener("click", () => {
  currentOperand = currentOperand
    .split("")
    .splice(0, currentOperand.length - 1)
    .join("");
  updateDisplay();
});
