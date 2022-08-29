let display = document.querySelector(".display");

// default settings
display.textContent = "0";
let firstDig = "";
let secondDig = "";
let operator = "";

const btns = document.querySelectorAll(".btn");
btns.forEach((btn) =>
  btn.addEventListener("click", () => {
    if (display.textContent == "0") {
      display.textContent = "";
    }
    if (btn.classList[1] == "digInput") {
      display.textContent += btn.textContent;
    }
    if (btn.classList[1] == "opeInput") {
      firstDig = display.textContent;
      operator = btn.textContent;
      display.textContent = "";
      console.log(`${firstDig}, ${operator}`);
    }
    if (btn.classList[1] == "equalInput" && operator) {
      secondDig = display.textContent;
      showResult(firstDig, secondDig, operator);
    }
    if (btn.classList[1] == "clearInput") {
      display.textContent = "0";
      firstDig = "";
      secondDig = "";
      operator = "";
    }
  })
);

const showResult = (firstDig, secondDig, operator) => {
  switch (operator) {
    case "+":
      result = Number(firstDig) + Number(secondDig);
      break;
    case "-":
      result = Number(firstDig) - Number(secondDig);
      break;
    case "*":
      result = Number(firstDig) * Number(secondDig);
      break;
    case "/":
      result = Number(firstDig) / Number(secondDig);
      break;
  }
  display.textContent = "";
  display.textContent = result;
};
