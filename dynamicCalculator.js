// const { CalculatorNumberButton } = require("./CalculatorNumberButton");
import { CalculatorOperationButton } from "./CalculatorOperationButton.js";
import { CalculatorNumberButton } from "./CalculatorNumberButton.js";
import { Calculator } from "./calculatorReducer.js";
const buttonValues = [
  ["/", "*", "-", "AC"],
  ["Sin", "Cos", "^", "%"],
  ["7", "8", "9", "+"],
  ["4", "5", "6"],
  ["1", "2", "3", "-"],
  ["0", ".", "="],
];

window.addEventListener("load", () => {
  // get document data
  const previousOperandTextElement = document.querySelector(
    "#data-previous-operand"
  );
  const currentOperandTextElement = document.querySelector(
    "#data-current-operand"
  );
  const tableBody = document.getElementById("table__body");

  // initialize class
  const calculator = new Calculator(
    previousOperandTextElement,
    currentOperandTextElement
  );

  // render the cells
  for (const buttonArr of buttonValues) {
    const currentRow = document.createElement("tr");
    tableBody.appendChild(currentRow);

    for (const button of buttonArr) {
      if (!isNaN(button) || button === ".") {
        CalculatorNumberButton(button, currentRow);
      } else {
        CalculatorOperationButton(button, currentRow);
      }
    }
  }
  // add number buttons event listener
  document.querySelectorAll(".button--number").forEach((button) =>
    button.addEventListener("click", (e) => {
      calculator.appendNumber(button.value);
      calculator.updateDisplay();
    })
  );

  document.querySelectorAll(".button--operation").forEach((button) => {
    if (button.value === "AC") {
      button.addEventListener("click", (button) => {
        calculator.clear();
        calculator.updateDisplay();
      });
    } else if (button.value === "=") {
      button.addEventListener("click", (button) => {
        calculator.compute();
        calculator.updateDisplay();
      });
    } else {
      button.addEventListener("click", (e) => {
        calculator.chooseOperation(button.value);
        calculator.updateDisplay();
      });
    }
  });

  // add custom styling

  const equalsCell = document.getElementById("table__cell-=");
  const plusCell = document.getElementById("table__cell-+");

  equalsCell.colSpan = "2";
  plusCell.rowSpan = "2";
});
