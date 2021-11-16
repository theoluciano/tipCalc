const totalBeforeTip = () => {
  var billInput;
  billInput = document.getElementById("bill-input").value;
  twoPlaceTotal = parseFloat(billInput);
  // console.log(twoPlaceTotal);
  return twoPlaceTotal;
}

const numberOfPeople = () => {
  var peopleInput = document.getElementById("people-input").value;
  peopleTotal = parseInt(peopleInput);
  // console.log(peopleTotal);
  return peopleTotal;
}

const clickReset = () => {
  var billInput = document.getElementById("bill-input");
  var peopleInput = document.getElementById("people-input");
  var radioValue = document.getElementById("custom");
  billInput.value = "";
  peopleInput.value = "";
  radioValue.value = "";
  document.getElementById("tip-total").textContent = "$0.00";
  document.getElementById("per-person-total").textContent = "$0.00";

  //document.getElementById("tip-total").textContent="$45.00"
}
 
const clearCustomInput = () => {
  var radioValue = document.getElementsByClassName("radio-button");
  for(i=0;i<radioValue.length;i++){
    radioValue[i].checked = false;
  }
  
}

const customTipPercentage = () =>{
  var inputValue = document.getElementById("custom").value
  var inputOutput = parseFloat("0." + inputValue).toFixed(2);
  return inputOutput;
  // console.log(inputOutput);

}

const tipPercentage = () => {
  var radioValue = document.querySelector('input[name="tip-percent"]:checked').value;
  var customInputValue = document.getElementById("custom");
  customInputValue.value = "";
  return radioValue;
  // console.log(radioValue);
}

const postTip = () =>{
  const tipPercentage = window.tipPercentage();
  const customTipPercentage = window.customTipPercentage();
  const numberOfPeople = window.numberOfPeople();
  const totalBeforeTip = window.totalBeforeTip();

  var totalOutput = (totalBeforeTip * tipPercentage) / numberOfPeople;
  var totalPerPerson = (totalBeforeTip + (totalBeforeTip * tipPercentage)) / numberOfPeople;
  document.getElementById("tip-total").textContent = "$" + parseFloat(totalOutput).toFixed(2);
  document.getElementById("per-person-total").textContent = "$" + parseFloat(totalPerPerson).toFixed(2);
}

window.totalBeforeTip = totalBeforeTip
window.numberOfPeople = numberOfPeople
window.clickReset = clickReset
window.clearCustomInput = clearCustomInput
window.customTipPercentage = customTipPercentage
window.tipPercentage = tipPercentage


