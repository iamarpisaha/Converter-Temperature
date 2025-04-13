const tempForm = document.getElementById("converter-form");
const tempInputBox = document.getElementById("temperature-input");
const resultBox = document.getElementById("result");
const fromUnitSelect = document.getElementById("from-unit");
const toUnitSelect = document.getElementById("to-unit");
const swapBtn = document.getElementById("swap-btn");

const conversion = {
  celsius: {
    celsius: (input) => input,
    fahrenheit: (input) => (input * 9) / 5 + 32,
    kelvin: (input) => input + 273.15,
  },
  fahrenheit: {
    celsius: (input) => ((input - 32) * 5) / 9,
    fahrenheit: (input) => input,
    kelvin: (input) => (input - 32) * (5 / 9) + 273.15,
  },
  kelvin: {
    celsius: (input) => input - 273.15,
    fahrenheit: (input) => (input - 273.15) * (9 / 5) + 32,
    kelvin: (input) => input,
  },
};
const units = {
  celsius: "°C",
  fahrenheit: "°F",
  kelvin: "°K",
};

tempForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const tempInput = Number.parseInt(tempInputBox.value);
  const tempOutput =
    conversion[fromUnitSelect.value][toUnitSelect.value](tempInput);
  const unitOutput = units[toUnitSelect.value];
  resultBox.innerText = tempOutput.toFixed(2) + unitOutput;
});

const swap = function (selectBox1, selectBox2) {
  const selectBox1Value = selectBox1.value;
  const selectBox2Value = selectBox2.value;

  selectBox1.querySelector(
    `option[value='${selectBox2Value}']`
  ).selected = true;

  selectBox2.querySelector(
    `option[value='${selectBox1Value}']`
  ).selected = true;
};
swapBtn.addEventListener("click", () => {
  swap(fromUnitSelect, toUnitSelect);
});
// const tempForm = document.getElementById("converter-form");
// const tempInputBox = document.getElementById("temperature-input");
// const resultBox = document.getElementById("result");
// const fromUnitSelect = document.getElementById("from-unit");
// const toUnitSelect = document.getElementById("to-unit");

// tempForm.addEventListener("submit", (e) => {
//   e.preventDefault();

//   const tempInput = Number.parseInt(tempInputBox.value);

//   let tempOutput;
//   let unitOutput;

//   if (fromUnitSelect.value === "celsius") {
//     if (toUnitSelect.value === "celsius") {
//       tempOutput = tempInput;
//       unitOutput = "°C";
//     } else if (toUnitSelect.value === "fahrenheit") {
//       tempOutput = (tempInput * 9) / 5 + 32;
//       unitOutput = "°F";
//     } else if (toUnitSelect.value === "kelvin") {
//       tempOutput = tempInput + 273.15;
//       unitOutput = "°K";
//     }
//   } else if (fromUnitSelect.value === "fahrenheit") {
//     if (toUnitSelect.value === "celsius") {
//       tempOutput = ((tempInput - 32) * 5) / 9;
//       unitOutput = "°C";
//     } else if (toUnitSelect.value === "fahrenheit") {
//       tempOutput = tempInput;
//       unitOutput = "°F";
//     } else if (toUnitSelect.value === "kelvin") {
//       tempOutput = (tempInput - 32) * (5 / 9) + 273.15;
//       unitOutput = "°K";
//     }
//   } else if (fromUnitSelect.value === "kelvin") {
//     if (toUnitSelect.value === "celsius") {
//       tempOutput = tempInput - 273.15;
//       unitOutput = "°C";
//     } else if (toUnitSelect.value === "fahrenheit") {
//       tempOutput = (tempInput - 273.15) * (9 / 5) + 32;
//       unitOutput = "°F";
//     } else if (toUnitSelect.value === "kelvin") {
//       tempOutput = tempInput;
//       unitOutput = "°K";
//     }
//   }

//   resultBox.innerText = tempOutput.toFixed(3) + unitOutput;
// });
