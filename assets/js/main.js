let username = prompt("Enter your name:");
let accountBal = 1500;
const ACCOUNT_LIMIT = 100;

let balSpan = document.getElementById("balance");
let nameSpan = document.getElementById("name");
let withdraw = document.getElementById("withdraw-field");
let withdrawn = document.getElementById("amount-withdrawn");
nameSpan.innerHTML = username;
balSpan.innerHTML = accountBal;

function withdrawMoney() {
  let value = withdraw.value;
  if(isNaN(value)){
    alert("Please enter a number!");
    withdraw.value = "";
    return;
  }
  if (accountBal - value >= ACCOUNT_LIMIT) {
    accountBal = accountBal - value;
    balSpan.innerHTML = accountBal;
    withdrawn.innerHTML = "$" + value;
  } else {
    alert("You cannot withdraw $"+ value +", it is over the account limit!");
  }
  withdraw.value = "";
  return;
}