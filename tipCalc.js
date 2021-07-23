function getTipPercentage() {
  var tipPercentage = document.getElementsByName('tip-percent');
  var finalTip;
  for(var i=0; i < tipPercentage.length; i++) {
    if (tipPercentage[i].checked) {
      finalTip = tipPercentage[i].id;

      return parseInt(finalTip)
    }
  }
} 

function getBillInput(){
  var billInput;
  billInput = document.getElementById("bill-input").value;
  twoPlaceTotal = parseFloat(billInput);
  // console.log(twoPlaceTotal);
  return twoPlaceTotal;
}

function getPeopleInput(){
  var peopleInput;
  peopleInput = document.getElementById("people-input").value;
  peopleTotal = parseInt(peopleInput);
  // console.log(peopleTotal);
  return peopleTotal;
}

// function calculate() {
// var tipPercentage = getTipPercentage();

// tipPercentage
// }

// getTipPercentage()
// var tipPercentInt = parseInt(tipPercentage)
