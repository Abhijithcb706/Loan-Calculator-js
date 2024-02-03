function calculateLoan() {
const loanAmount = document.getElementById("loanAmountid").value;
const interestRate = document.getElementById("interestRateid").value;
const loanDuration = document.getElementById("loanDurationid").value;
// console.log(loanAmount, interestRate, loanDuration);



const monthlyInterestRate = interestRate / 100 / 12;
const numberOfPayments = loanDuration * 12;

const emi =
(loanAmount * monthlyInterestRate) /
(1 - Math.pow(1 + monthlyInterestRate, -numberOfPayments));
console.log(emi);
const totalAmountPaid = emi * numberOfPayments;
const totalInterestPaid = totalAmountPaid - loanAmount;

document.getElementById("monthlyPayment").innerHTML =
"Monthly EMI Payment ₹:" + emi.toFixed(2);
document.getElementById("totalInterest").innerHTML =
"Total Interest Paid ₹:" + totalInterestPaid.toFixed(2);
document.getElementById("totalAmount").innerHTML =
"Total Amount Paid ₹: " + totalAmountPaid.toFixed(2);
}