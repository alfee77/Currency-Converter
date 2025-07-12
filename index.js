// TODO
import FetchWrapper from "./fetch-wrapper.js";

const APIKey = "378b351748bb91e95ce6dc4e";
const exampleRequest =
  "https://v6.exchangerate-api.com/v6/378b351748bb91e95ce6dc4e/latest/USD";
const conversionAPI = new FetchWrapper(`https://v6.exchangerate-api.com/v6/`);
const baseCurrency = document.querySelector("#base-currency");
const targetCurrency = document.querySelector("#target-currency");
const conversionResult = document.querySelector("#conversion-result");

console.log(baseCurrency.toString());
console.log(conversionResult.toString());

baseCurrency.addEventListener("change", (event) => {
  conversionAPI
    .get(`${APIKey}/pair/${baseCurrency.value}/${targetCurrency.value}`)
    .then((data) => {
      conversionResult.innerHTML = data.conversion_rate;
    });
});

targetCurrency.addEventListener("change", (event) => {
  conversionAPI
    .get(`${APIKey}/pair/${baseCurrency.value}/${targetCurrency.value}`)
    .then((data) => {
      conversionResult.innerHTML = data.conversion_rate;
    });
});
