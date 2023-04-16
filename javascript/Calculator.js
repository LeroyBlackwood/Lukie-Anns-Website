
const typeOfLoan = document.querySelector("#loanType");

const personalLoan = document.querySelector("#personalLoan");
const vehicle = document.querySelector("#autoLoan");
const payDay = document.querySelector("#payDayLoan");
const tuition = document.querySelector("#studentLoan");
const schoolSupply = document.querySelector("#schoolSupplyLoan");

const borrowAmount = document.querySelector("#borrowAmount");
const interestRate = document.querySelector("#interestRate");
const timePeriod = document.querySelector("#period");

const monthlyAmountPayable = document.querySelector("#monthlyPayment");
var totalAmountPayable = document.querySelector("#totalPayment");

const button = document.querySelector("#button");

const loanInfo = document.querySelector(".loanTypeDisplay");
const loanDetails1 = document.querySelector("#p1");
const loanDetails2 = document.querySelector("#p2");
const loanDetails3 = document.querySelector("#p3");
const loanDetails4 = document.querySelector("#p4");

vehicle.addEventListener("click", assign1);
payDay.addEventListener("click", assign2);
tuition.addEventListener("click", assign3);
schoolSupply.addEventListener("click", assign4);
personalLoan.addEventListener("click", assign5);


    let defaultMessage = "Please select a loan from the loan list.";
typeOfLoan.textContent = defaultMessage;

typeOfLoan.classList.toggle("typeOfLoan");

function assign1(){
if(vehicle){
   typeOfLoan.textContent = vehicle.textContent;
   console.log(typeOfLoan.textContent);
   value = "  10";
   months = "  120";
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
        months = "  3";
        interestRate.value = value;
        timePeriod.value = months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}
function assign3(){
    if(tuition){
        typeOfLoan.textContent = tuition.textContent;
        console.log(typeOfLoan.textContent);
        value = "  35";
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
        value = "  20";
        months = "  12";
        interestRate.value = value;
        timePeriod.value = months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}

function assign5(){
    if(personalLoan){
       typeOfLoan.textContent = personalLoan.textContent;
       console.log(typeOfLoan.textContent);
       value = "  30";
       interestRate.value = value;
       months = "  36";
       timePeriod.value = months;
       typeOfLoan.classList.remove("typeOfLoan");
       
        }
    }

    
var value;
var monthlyPaymentTotal;

let borrowAmountText = parseFloat(borrowAmount.value);
let interestRateText = parseFloat(interestRate.value);
let period = parseFloat(timePeriod.value);

let interest = interestRateText / 12 /100;

let result2;
let result1;

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

    result1 = Math.round(payment*100)/100;
    monthlyAmountPayable.textContent = "$ " + result1;
    result2 = Math.round(period * (payment*100))/100;
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
    
    if(monthlyAmountPayable.textContent != "Invalid Values"){
        if(monthlyAmountPayable.textContent != "$ 0.00")
                loanInfo.textContent = typeOfLoan.textContent;
                loanDetails1.textContent = `
                Your Monthly payment will be
                $${result1} per month for a period of ${period}
                months or ${period / 12} year/s
                `
            loanDetails2.textContent = `
            The amount borrowed is $${borrowAmountText}`
    
            loanDetails3.textContent = `
            The interest is ${interestRate.value}%
            which amounts to
            $${Math.round(((result2 - borrowAmountText)*100))/100}
            `
    
            loanDetails4.textContent =
            `
            The total amount to repay is $${result2}
            `
     };  
})



