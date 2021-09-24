var billAmount = document.querySelector("#bill-amount");
var cashGiven = document.querySelector("#cash-given");
var checkButton = document.querySelector("#check-button");
var noOfNotes = document.querySelectorAll(".no-of-notes");
const message = document.querySelector("#error-message");
var nextButton = document.querySelector("#next-button");
var cashDisplay = document.querySelector(".cash-display")
var tableDisplay= document.querySelector("#table-display")
const availableNotes = [2000, 500, 100, 50, 10, 5, 1];
cashDisplay.style.display="none";
tableDisplay.style.display="none";

nextButton.addEventListener("click", function validateBillAmount() {
    hideMessage();
    if(billAmount.value > 0){
        nextButton.style.display = "none";
        cashDisplay.style.display = "block";
        
    }
    else {
        showMessage("Invalid Number");
    }
});


checkButton.addEventListener("click", function validateBillAndCashAmount() {
    hideMessage();
    if(Number(cashGiven.value) <0 || Number(billAmount.value) <0){
        showMessage("Invalid Number")
    }
    else if(Number(cashGiven.value) >= Number(billAmount.value)) {
        const amountToBeReturned = cashGiven.value - billAmount.value;
        showMessage("Return Amount: " + amountToBeReturned);
        calculateReturnChange(amountToBeReturned);
        
    }
    else {
        showMessage("Cash input should be greater than bill amount");
    }

});


function calculateReturnChange(amountToBeReturned){
    for(let i=0; i<availableNotes.length; i++){

        const numOfNotes = Math.trunc(amountToBeReturned / availableNotes[i]);

        amountToBeReturned = amountToBeReturned % availableNotes[i];

        noOfNotes[i].innerText = numOfNotes;
        
    }
    tableDisplay.style.display = "block";
}

function hideMessage() {
    message.style.display = "none";
  }
  
  function showMessage(msg) {
    message.style.display = "block";
    message.innerText = msg;
  }
  


