const inputValue = document.querySelector('#input');
const resultValue = document.querySelector('#result');
const selectCurrI = document.querySelector('#selectCurrency');
const selectCurrR = document.querySelector('#resultCurrency');

const btnSubm = document.querySelector('#btnSubmit');

fetch('https://v6.exchangerate-api.com/v6/6ffa86bb845eccf0af906135/latest/USD')
.then(response => response.json())
.then(data => {
   for(var curr in data.conversion_rates){
      let option = document.createElement('option');
      selectCurrR.append(option);
      option.value = curr; 
      option.innerHTML = curr; 
   }
   for(var curr in data.conversion_rates){
      let option = document.createElement('option');
      selectCurrI.append(option);
      option.value = curr; 
      option.innerHTML = curr; 
   }

   btnSubm.addEventListener('click', convertation);
   selectCurrR.addEventListener('change', convertation);
   selectCurrI.addEventListener('change', convertation);

   function convertation() {
      const rateR = data.conversion_rates[selectCurrR.value];
      const rateL = data.conversion_rates[selectCurrI.value];
      const resultOut = (inputValue.value / rateL) * rateR;
      resultValue.value = resultOut.toFixed(3);
   }

   
})
.catch('Error');