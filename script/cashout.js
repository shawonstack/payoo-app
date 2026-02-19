// console.log('done');

document.getElementById('cashout-btn').addEventListener('click', function () {
  // getthe agent number and validate
  const cashoutNumberInput = document.getElementById('cashout-number');
  const cashoutNumber = cashoutNumberInput.value;
  console.log(cashoutNumber);
  if (cashoutNumber.lenght !== 11) {
    alert('number invalid');
    return;
  }
  // get the ammount validate, convert to number,
  const cashoutAmmountInput = document.getElementById('cashout-ammount');
  const cashoutAmmount = cashoutAmmountInput.value;
  console.log(cashoutAmmount);
  // get the current balance  validate, convert to number,
  const balanecElement = document.getElementById('balance');
  const balance = balanecElement.innerText;
  console.log(balance);
  // calculate new balance
  const newBalance = Number(balance) - Number(cashoutAmmount);

  if (newBalance < 0) {
    alert('invalid ammount');
    return;
  }
  // get the pin and verify
  const cashoutPinInput = document.getElementById('cashout-pin');
  const cashoutPin = cashoutPinInput.value;
  if (cashoutPin === '1213') {
    alert('cashout successfull');
    console.log('new balance', newBalance);
    balanecElement.innerText = newBalance;
  } else {
    alert('invalid pin');
    return;
  }
  // console.log(cashoutPin);
  // true::: show and aleart>set balane
  // false:: error and return
});
