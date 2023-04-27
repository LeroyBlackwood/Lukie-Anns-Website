
const typeOfLoan = document.querySelector("#loanType");

const personalLoan = document.querySelector("#personalLoan");
const autoLoan = document.querySelector("#autoLoan");
const payDay = document.querySelector("#payDayLoan");
const studentLoan = document.querySelector("#studentLoan");
const schoolSupply = document.querySelector("#schoolSupplyLoan");
const other = document.querySelector("#other");

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

autoLoan.addEventListener("click", assign1);
payDay.addEventListener("click", assign2);
studentLoan.addEventListener("click", assign3);
schoolSupply.addEventListener("click", assign4);
personalLoan.addEventListener("click", assign5);
other.addEventListener("click", assign6);


    let defaultMessage = "Please select a loan from the loan list.";

if(typeOfLoan.textContent = defaultMessage){
    typeOfLoan.style.color = "red";
}

typeOfLoan.classList.toggle("typeOfLoan");

///Using JSON///
const obj =`[
    {
    "name": "Auto Loan",
    "percentage": 10,
    "months": 120
},
{
    "name": "Pay Day Loan",
    "percentage": 30,
    "months": 3
},
{
    "name": "Student Loan",
    "percentage": 15,
    "months": 60
},
{
    "name": "School Supplies Loan",
    "percentage": 20,
    "months": 12
},
{
    "name": "Personal Loan",
    "percentage": 30,
    "months": 36
},
{
    "name": "Other",
    "percentage": 35,
    "months": 36
}

]`

function assign1(){
if(autoLoan){
    if(typeOfLoan.textContent = JSON.parse(obj)[0].name){
        typeOfLoan.style.color = "black";
        typeOfLoan.style.fontSize = "large";
        typeOfLoan.style.display = "flex";
        typeOfLoan.style.alignItems = "center";
        
    }
   interestRate.value = JSON.parse(obj)[0].percentage;
   timePeriod.value = JSON.parse(obj)[0].months;
   typeOfLoan.classList.remove("typeOfLoan");

    }
}

function assign2(){
    if(payDay){
        if(typeOfLoan.textContent = JSON.parse(obj)[1].name){
            typeOfLoan.style.color = "black";
            typeOfLoan.style.fontSize = "large";
            typeOfLoan.style.display = "flex";
            typeOfLoan.style.alignItems = "center";
            
        }
        interestRate.value = JSON.parse(obj)[1].percentage;
        timePeriod.value = JSON.parse(obj)[1].months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}
function assign3(){
    if(studentLoan){
        if(typeOfLoan.textContent = JSON.parse(obj)[2].name){
            typeOfLoan.style.color = "black";
            typeOfLoan.style.fontSize = "large";
            typeOfLoan.style.display = "flex";
            typeOfLoan.style.alignItems = "center";
            
        }
        interestRate.value = JSON.parse(obj)[2].percentage;
        timePeriod.value = JSON.parse(obj)[2].months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}
function assign4(){
    if(schoolSupply){
            if(typeOfLoan.textContent = JSON.parse(obj)[3].name){
                typeOfLoan.style.color = "black";
                typeOfLoan.style.fontSize = "large";
                typeOfLoan.style.display = "flex";
                typeOfLoan.style.alignItems = "center";
                
            }
        interestRate.value = JSON.parse(obj)[3].percentage;
        timePeriod.value = JSON.parse(obj)[3].months;
        typeOfLoan.classList.remove("typeOfLoan");
    }
}

function assign5(){
    if(personalLoan){
        if(typeOfLoan.textContent = JSON.parse(obj)[4].name){
            typeOfLoan.style.color = "black";
            typeOfLoan.style.fontSize = "large";
            typeOfLoan.style.display = "flex";
            typeOfLoan.style.alignItems = "center";
            
        }
       interestRate.value = JSON.parse(obj)[4].percentage;
       timePeriod.value = JSON.parse(obj)[4].months;
       typeOfLoan.classList.remove("typeOfLoan");
       
        }
    }
    function assign6(){
        if(other){
          // typeOfLoan.textContent = other.textContent;
        if(typeOfLoan.textContent = JSON.parse(obj)[5].name){
            typeOfLoan.style.color = "black";
            typeOfLoan.style.fontSize = "large";
            typeOfLoan.style.display = "flex";
            typeOfLoan.style.alignItems = "center";
            
        }
           interestRate.value = JSON.parse(obj)[5].percentage;
           timePeriod.value = JSON.parse(obj)[5].months;
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

    if(borrowAmountText >=9999 && borrowAmountText < 5000001 && interestRateText >= 8 && interestRateText < 49 && period >= 3 && period < 601){

    result1 = Math.round(payment*100)/100;
    monthlyAmountPayable.textContent = "$ " + result1;
    result2 = Math.round(period * (payment*100))/100;
    totalAmountPayable.textContent = "$ " + result2;}
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
        if(typeOfLoan.textContent === defaultMessage){
            typeOfLoan.textContent = 'No loan type was selected!';
        }else{
            loanInfo.textContent = typeOfLoan.textContent;
        }

        loanInfo.textContent = typeOfLoan.textContent;
                loanDetails1.textContent = `
                Your Monthly payment will be
                $${result1} per month for a period of ${period}
                months or ${Math.round((period / 12)*100)/100} year/s
                `
            loanDetails2.textContent = `
            The amount borrowed is $${borrowAmountText}`
    
            loanDetails3.textContent = `
            The interest is ${interestRate.value}
            which amounts to
            $${Math.round(((result2 - borrowAmountText)*100))/100}
            `
    
            loanDetails4.textContent =
            `
            The total amount to repay is $${result2}
            `
     };  
})



