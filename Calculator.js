var value;
var monthlyPaymentTotal;


const borrowAmount = document.querySelector("#borrowAmount");
const interestRate = document.querySelector("#interestRate");
const timePeriod = document.querySelector("#period");

const monthlyAmountPayable = document.querySelector("#monthlyPayment");
var totalAmountPayable = document.querySelector("#totalPayment");

const button = document.querySelector(".button");

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
                if(period >= 11 && period < 601){

    let result1 = Math.round(payment*100)/100;
    monthlyAmountPayable.textContent = "$ " + result1;
    let result2 = Math.round(period * (payment*100))/100;
    totalAmountPayable.textContent = "$ " + result2;}}}
    else{
        monthlyAmountPayable.textContent = "$ 0.00";
        totalAmountPayable.textContent = "$ 0.00";
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