var enteredMoney= document.getElementById("bills-text");
var peopleNullMessage = document.querySelector(".error-message");
var percentButtons = document.querySelectorAll(".percent-buttons");
var customPercent = document.getElementById("custom-percent");
var peopleNum= document.getElementById("people-num");

var personTax = document.getElementById("person-tax");
var peopleTax = document.getElementById("people-tax");
var resetButton = document.getElementById("reset-btn");
var peopleNumMin= document.getElementById("people-num-min");
var billError =document.querySelector(".error-message-2");
var currentPercent = 0.07;

var currentBill= 0;

enteredMoney.addEventListener("input", moneyChecking);

percentButtons.forEach( button => {
    button.addEventListener("click", applyPercent);
});

customPercent.addEventListener("input", applyCustomPercent);

peopleNum.addEventListener("keyup", applyPeopleNum );

resetButton.addEventListener("click",reseting);

function moneyChecking(){
       let billString = enteredMoney.value;
       const word ="-";
        if(billString[0] == "0"){
           enteredMoney.value = billString.substring(0, billString.length-1)
        }else if(billString.includes(word)){
            billError.style.visibility="visible";
            reseting();


        }else{billError.style.visibility="hidden"; }

            
        
        
        
       
     currentBill = parseFloat(enteredMoney.value);
    
    calculateTip();
}

function applyPercent(event){
    percentButtons.forEach(button => {
            button.classList.remove("active-button");
            
            if(event.target.innerHTML == button.innerHTML){
                button.classList.add("active-button");
                
                currentPercent = parseFloat(button.innerHTML)/100;
                

            }
            
    });
    calculateTip();
}



function applyCustomPercent(){
    percentButtons.forEach(button => {
            button.classList.remove("active-button");
    })
    currentPercent=parseFloat(customPercent.value)/100;
    calculateTip();
}




function applyPeopleNum(){
    var peopleToInt = parseInt(peopleNum.value);
    if(peopleToInt == 0){
        peopleNullMessage.style.visibility="visible";
        peopleNumMin.innerHTML = "-";
        personTax.innerHTML = "0.00";
        peopleTax.innerHTML = "0.00";

    }else if(peopleToInt < 0 ){
        peopleNullMessage.style.visibility="visible";
        peopleNullMessage.innerText="can't be negative";
        personTax.innerHTML = "0.00";
        peopleNumMin.innerHTML = "-";
        peopleTax.innerHTML = "0.00";

    }else if(peopleToInt >8700){

        peopleNumMin.innerText="@";
    }else{
        peopleNullMessage.style.visibility="hidden";
        peopleNumMin.innerText = peopleNum.value.toString();
    }
    calculateTip();
}


function calculateTip(){
    let personTip = Math.round((currentBill*currentPercent)/parseInt(peopleNum.value));
    let peopleTip = Math.round((currentBill*currentPercent)).toString();
    let personTipToString = personTip.toString();
    
    personTax.innerHTML = personTipToString;
    peopleTax.innerHTML = peopleTip;
    if(personTip>80000000 ){
        personTax.innerHTML ='@';
        peopleTax.innerHTML = "@";
    }else if(Number.isNaN(personTip)){

        personTax.innerHTML = "0.00";
        peopleTax.innerHTML = "0.00";

    }
    

}

function reseting(){

    currentBill = 0;
    currentPercent = 0.07;
    peopleNum.value = 0;

    customPercent.value ="";
    enteredMoney.value = "";
    peopleNum.value = "";
    peopleNumMin.innerHTML = "-";
    personTax.innerHTML = "0.00";
    peopleTax.innerHTML ="0.00";

    percentButtons.forEach(button => {
        button.classList.remove("active-button");
    })
    percentButtons[1].classList.add("active-button");

}
























