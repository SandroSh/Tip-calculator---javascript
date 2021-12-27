var enteredMoney= document.getElementById("bills-text");
var peopleNullMessage = document.querySelector(".error-message");
var percentButtons = document.querySelectorAll("percent-buttons");
var customPercent = document.getElementById("custom-percent");
var peopleNum= document.getElementById("people-num");
var peopleNumMin= document.getElementById("people-num-min");
var personTax = document.getElementById("person-tax");
var PeopleTax = document.getElementById("peopleTax");
var resetButton = document.getElementById("reset-btn");


var currentPercent = 0.1;

var currentBill= 0;

enteredMoney.addEventListener("input", () =>{
   currentBill = enteredMoney.value;
   console.log(currentBill);
});














peopleNum.addEventListener("keyup", function(){
    if(peopleNum.value == 0){
        peopleNullMessage.style.visibility="visible";
        peopleNumMin.innerText="-";
    }else if( peopleNum.value < 0 ){
        peopleNullMessage.innerText="can't be negative";
        
        peopleNumMin.innerText="-";
    }else if(peopleNum.value >10000000){

        peopleNumMin.innerText="@";
    }else{
        peopleNullMessage.style.visibility="hidden";
        peopleNumMin.innerText = peopleNum.value.toString();
    }
   
});
