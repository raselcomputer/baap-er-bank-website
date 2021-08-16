
// only for deposit 
document.getElementById('deposit-button').addEventListener('click', function(){
    const depositInput = document.getElementById('deposit-input');
    const newDepositInput = depositInput.value;
    const depositAmount = parseFloat(newDepositInput);
    console.log(depositAmount);

    const depositTotal = document.getElementById('deposit-total');
    const previousDepositTotal = depositTotal.innerText;
    const currentDepositTotal = parseFloat(previousDepositTotal);
    console.log(currentDepositTotal);  

    const totalDeposit = currentDepositTotal + depositAmount;

    depositTotal.innerText = totalDeposit;
    depositInput.value = '';

    // set balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceText);

    // show balance 
    const totalBalance = newBalanceTotal + depositAmount;
    balanceTotal.innerText = totalBalance;
});

// only for withdraw 

document.getElementById('withdraw-button').addEventListener('click', function(){
    const withdrawInput = document.getElementById('withdraw-input');
    const newWithdrawInput = withdrawInput.value;
    const withdrawAmount = parseFloat(newWithdrawInput);
    console.log(withdrawAmount);

    const withdrawTotal = document.getElementById('withdraw-total');
    const previousWithdrawTotal = withdrawTotal.innerText;
    const currentWithdrawTotal = parseFloat(previousWithdrawTotal);
    console.log(currentWithdrawTotal);

    const totalWithdraw = currentWithdrawTotal + withdrawAmount;
    withdrawTotal.innerText = totalWithdraw;

    withdrawInput.value = '';

    // update balance 
    const balanceTotal = document.getElementById('balance-total');
    const balanceText = balanceTotal.innerText;
    const newBalanceTotal = parseFloat(balanceText);

    const updateBalance = newBalanceTotal - withdrawAmount;
    balanceTotal.innerText = updateBalance;
});




