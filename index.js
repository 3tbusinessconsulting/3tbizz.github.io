
var message = alert("Welcome to ABM (Automated Banking Machine) Program! \nPlease login to perform your banking transactions.");

var bankCustomer = [
{
		custName: "David Trump",
		cardNum: 234654,
		cardPin: 1234,
		acctType1: "Savings",
		acctType2: "Checking",
		acctBal1: 10000,
		acctBal2: 5000
},
{
		custName: "Justin Mell",
		cardNum: 234098,
		cardPin: 0861,
		acctType1: "Savings",
		acctType2: "Checking",
		acctBal1: 25000,
		acctBal2: 6700
},
{
		custName: "Toyin George",
		cardNum: 234102,
		cardPin: 7620,
		acctType1: "Savings",
		acctType2: "Checking",
		acctBal1: 51000,
		acctBal2: 2000
},
{ 
		custName: "Toni Davids",
		cardNum: 234181,
		cardPin: 2807,
		acctType1: "Savings",
		acctType2: "Checking",
		acctBal1: 100000,
		acctBal2: 18000
},
{
		custName: "Debs Gwales",
		cardNum: 234441,
		cardPin: 1401,
		acctType1: "Savings",
		acctType2: "Checking",
		acctBal1: 600000,
		acctBal2: 92000
}
]

function validate(){
var cardNum = document.getElementById("cardNum").value;
var cardPin = document.getElementById("cardPin").value;
for (i = 0; i < bankCustomer.length; i++){
if(cardNum == bankCustomer[i].cardNum && cardPin == bankCustomer[i].cardPin){
alert("Welcome! \nClick any of the following tabs to carry out your transaction;");{break;}// valid input
} else {
    alert("Incorrect card number and/or pin. Please try again!"); {break;}
}}
var removeLogin = document.getElementById("demo").innerHtml="";
}

// Make deposit
function makeDeposit () {
var accountType = prompt("Which account do you want to deposit into? \nType 1 for Checking account \nType 2 for savings account");
var validAcct =prompt("Enter the account number");
var depAmount = +prompt("Enter the amount you would like to deposit");
var validAcct = document.getElementById("validAcct").value;
alert("Success! \nYour balance is now" + bankCustomer.acctTypel + depAmount);

}

// Make withdrawal
function withdrawCash () {
var accountType = prompt("Which account do you want to withdraw from? \nType 1 for Checking account \nType 2 for savings account");
var withAmount = +prompt("Enter the amount you would like to withdraw");
if (amount > accountBal){ 
            alert("You can't withdraw that amount!");
   } else if (amount <= accountBal) {
    withdrawCash(withAmount);
    alert("Success! \nYour balance is now" + accountBal - withAmount);
   }
}
// Get balance
function checkBalance(){
var accountType = prompt("Which account do you want to check the balance? \nType 1 for Checking account \nType 2 for savings account");
alert(currentBalance());
}

