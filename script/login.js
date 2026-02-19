document.getElementById('login-btn').addEventListener('click', function () {
  console.log('login successfull');
  // get the mobile number
  // get the pin
  // match pin and mobile number
  //
  const numberInput = document.getElementById('input-number');
  const contactNumber = numberInput.value;
  // console.log(contactNumber);
  // get the pin
  const pinInput = document.getElementById('input-pin');
  const pinNumber = pinInput.value;
  // console.log(pinNumber);

  // match the pin and number
  if (contactNumber == 01234567890 && pinNumber == 1213) {
    alert('login sccess');
    window.location.assign('/home.html');
  } else {
    alert('login Failed');
    return;
  }
});
