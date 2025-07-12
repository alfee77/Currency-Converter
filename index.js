// TODO
import FetchWrapper from "./fetch-wrapper.js";

const APIKey = "378b351748bb91e95ce6dc4e";

const conversionAPI = new FetchWrapper(
  `https://v6.exchangerate-api.com/v6/${APIKey}`
);

const baseCurrency = document.querySelector("#base-currency");
const baseCurrencyInput = document.querySelector("#base-currency-input");
const targetCurrency = document.querySelector("#target-currency");
const conversionResult = document.querySelector("#conversion-result");

const getConversionRates = () => {
  console.log(baseCurrency.value);
  conversionAPI.get(`/latest/${baseCurrency.value}`).then((data) => {
    conversionResult.textContent = (
      data.conversion_rates[targetCurrency.value] * baseCurrencyInput.value
    ).toFixed(2);
  });
};

baseCurrency.innerHTML = ``;
targetCurrency.innerHTML = ``;

conversionAPI.get(`/codes`).then((data) => {
  data.supported_codes.forEach((code) => {
    //console.log(code);
    if (code[0] === "GBP") {
      baseCurrency.innerHTML += `<option value="${code[0]}" selected>${code[0]}: ${code[1]}</option>`;
    } else {
      baseCurrency.innerHTML += `<option value="${code[0]}">${code[0]}: ${code[1]}</option>`;
    }
    targetCurrency.innerHTML += `<option value="${code[0]}">${code[0]}: ${code[1]}</option>`;
  });
  targetCurrency.innerHTML =
    `<option value=""> -->Please select a target currency<-- </option>` +
    targetCurrency.innerHTML;
});

baseCurrency.addEventListener("change", (event) => {
  getConversionRates();
});

targetCurrency.addEventListener("change", (event) => {
  getConversionRates();
});

baseCurrencyInput.addEventListener("keyup", (event) => {
  getConversionRates();
});

baseCurrencyInput.addEventListener("keyup", (event) => {
  getConversionRates();
});
