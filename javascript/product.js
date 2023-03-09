
const typeOfLoan = document.querySelector("#loanType");

const vehicle = document.querySelector("#vehicleLoan");
const payDay = document.querySelector("#payDayLoan");
const tuition = document.querySelector("#tuitionLoan");
const schoolSupply = document.querySelector("#schoolSupplyLoan");
const other = document.querySelector("#other");

const borrowAmount = document.querySelector("#borrowAmount");
const interestRate = document.querySelector("#interestRate");
const timePeriod = document.querySelector("#period");

const monthlyAmountPayable = document.querySelector("#monthlyPayment");
var totalAmountPayable = document.querySelector("#totalPayment");

const button = document.querySelector(".button");

vehicle.addEventListener("click", assign1);
payDay.addEventListener("click", assign2);
tuition.addEventListener("click", assign3);
schoolSupply.addEventListener("click", assign4);
other.addEventListener("click", assign5);


    let defaultMessage = "Please select a loan from the loan list above.";
typeOfLoan.textContent = defaultMessage;

typeOfLoan.classList.toggle("typeOfLoan");

function assign1(){
if(vehicle){
   typeOfLoan.textContent = vehicle.textContent;
   console.log(typeOfLoan.textContent);
   value = "  40";
   months = "  144";
   interestRate.value = value;
   timePeriod.value = months;
   typeOfLoan.classList.remove("typeOfLoan");

    }
}

function assign2(){
    if(payDay){
        typeOfLoan.textContent = payDay.textContent;
        console.log(typeOfLoan.textContent);
        value = "  30";
        months = "  6";
        interestRate.value = value;
        timePeriod.value = months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}
function assign3(){
    if(tuition){
        typeOfLoan.textContent = tuition.textContent;
        console.log(typeOfLoan.textContent);
        value = "  20";
        months = "  60";
        interestRate.value = value;
        timePeriod.value = months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}
function assign4(){
    if(schoolSupply){
        typeOfLoan.textContent = schoolSupply.textContent;
        console.log(typeOfLoan.textContent);
        value = "  15";
        months = "  12";
        interestRate.value = value;
        timePeriod.value = months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}

function assign5(){
    if(other){
       typeOfLoan.textContent = other.textContent;
       console.log(typeOfLoan.textContent);
       value = "  35";
       interestRate.value = value;
       months = "  36";
       timePeriod.value = months;
       typeOfLoan.classList.remove("typeOfLoan");
       
        }
    }

var value;
var monthlyPaymentTotal;




let borrowAmountText = parseFloat(borrowAmount).value;
let interestRateText = parseFloat(interestRate.value);
let period = parseFloat(timePeriod.value);

let interest = interestRateText / 12 /100;


const calculate = () => {
    let payment =
    borrowAmountText *
    interest *
    (Math.pow(1 + interest, period) / 
    (Math.pow(1 + interest, period)-1));

    return payment;
}


const updateData = (payment) => {

    if(borrowAmountText >=9999 && borrowAmountText < 5000001){
        if(interestRateText >= 8 && interestRateText < 49){
                if(period >= 3 && period < 601){

    let result1 = Math.round(payment*100)/100;
    monthlyAmountPayable.textContent = "$ " + result1;
    let result2 = Math.round(period * (payment*100))/100;
    totalAmountPayable.textContent = "$ " + result2;}}}
    else{
        monthlyAmountPayable.textContent = "Invalid Values";
        totalAmountPayable.textContent = "Invalid Values";
    }
}
const refreshInputValues = () => {
    borrowAmountText = parseFloat(borrowAmount.value);
    interestRateText = parseFloat(interestRate.value);
    period = parseFloat(timePeriod.value);

    interest = interestRateText / 12 / 100;
}

const result = () => {
    refreshInputValues();
    let result1 = calculate();
    updateData(result1);
};

button.addEventListener("click", () => {
        result();
})

