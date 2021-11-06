function getBillInput(){
  var billInput;
  billInput = document.getElementById("bill-input").value;
  twoPlaceTotal = parseFloat(billInput);
  // console.log(twoPlaceTotal);
  return twoPlaceTotal;
}

function getPeopleInput(){
  var peopleInput = document.getElementById("people-input").value;
  peopleTotal = parseInt(peopleInput);
  // console.log(peopleTotal);
  return peopleTotal;
}

function clickReset(){
  var billInput = document.getElementById("bill-input");
  var peopleInput = document.getElementById("people-input");
  billInput.value = "";
  peopleInput.value = "";
  //document.getElementById("tip-total").textContent="$45.00"
}
 
function clearRadio(){
    var customInputValue = document.getElementById("custom").value;
    if (customInputValue.active = true){
      var radioValue = document.getElementsByClassName("radio-button");
      for(i=0;i<radioValue.length;i++){
        radioValue[i].checked = false;
      }
    }else{
      // return customInputValue; need to figure out how to return the value of the custom input
      console.log(customInputValue.value);
    }
  }

  function clearCustomInput(){
    const radiovalue = document.getElementsByClassName("radio-button");
    if (radiovalue.active = true){
      var customInputValue = document.getElementById("custom");
      customInputValue.value = "";
    }else{
      // return radiovalue;
      console.log(radiovalue)
    }
  }


