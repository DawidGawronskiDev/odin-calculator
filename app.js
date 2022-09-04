let prevOutput = document.querySelector(".calculator--prevOutput");
let output = document.querySelector(".calculator--output");
let jumpscare = document.querySelector(".jumpscare");

let firstDigit;
let secondDigit;
let operator;
let dotBoolean = false;

let btns = document.querySelectorAll(".calculator--button");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    checkFirstDigit(btn);
    addDigit(btn);
    addOperator(btn);
    addEqual(btn);
    addDebug();

    prevOutputDisplay();
  })
);

const defaltSetup = () => {};

const prevOutputDisplay = () => {
  if (firstDigit && operator) {
    prevOutput.textContent = `${firstDigit} ${operator}`;
  }
  if (firstDigit && secondDigit && operator) {
    prevOutput.textContent = `${firstDigit} ${operator} ${secondDigit} =`;
  }
};

const checkFirstDigit = (btn) => {
  if (output.textContent == "0" && btn.textContent != ".") {
    output.textContent = "";
  }
};

const addDigit = (btn) => {
  switch (btn.classList[1]) {
    case "digInput":
      output.textContent += btn.textContent;
  }
};

const addOperator = (btn) => {
  switch (btn.classList[1]) {
    case "opeInput":
      if (output.textContent != "") {
        firstDigit = output.textContent;
      }
      operator = btn.textContent;
      output.textContent = 0;
  }
};

const addEqual = (btn) => {
  switch (btn.classList[1]) {
    case "equInput":
      secondDigit = output.textContent;
      showResult(firstDigit, secondDigit, operator);
      break;
  }
};

const addDebug = () => {
  if (output.textContent == "NaN" || output.textContent == "Infinity") {
    jumpscare.style.display = "block";
    output.textContent = "";
  }
};

const showResult = (firstDigit, secondDigit, operator) => {
  let result;
  firstDigit = Number(firstDigit);
  secondDigit = Number(secondDigit);

  switch (operator) {
    case "+":
      result = firstDigit + secondDigit;
      break;
    case "-":
      result = firstDigit - secondDigit;
      break;
    case "*":
      result = firstDigit * secondDigit;
      break;
    case "/":
      result = firstDigit / secondDigit;
      break;
  }
  output.textContent = result;
};
