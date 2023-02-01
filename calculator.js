window.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById("calc-form");
  if (form) {
  setupIntialValues();
  form.addEventListener("submit", function(e) {
  e.preventDefault();
  });
  const submitButton = document.getElementById("calc-submit");
  submitButton.addEventListener("click", update);
  }
  });
  
  function getCurrentUIValues() {
  return {
  amount: +(document.getElementById("loan-amount").value),
  years: +(document.getElementById("loan-years").value),
  rate: +(document.getElementById("loan-rate").value),
  }
  }
  
  // Get the inputs from the DOM.
  // Put some default values in the inputs
  // Call a function to calculate the current monthly payment
  function setupIntialValues() {
  // Default values
  document.getElementById("loan-amount").value = "15000";
  document.getElementById("loan-years").value = "5";
  document.getElementById("loan-rate").value = "5";
  update();
  }
  
  // Get the current values from the UI
  // Update the monthly payment
  function update() {
  const values = getCurrentUIValues();
  const monthly = calculateMonthlyPayment(values);
  updateMonthly(monthly);
  }
  
  // Given an object of values (a value has amount, years and rate ),
  // calculate the monthly payment. The output should be a string
  // that always has 2 decimal places.
  function calculateMonthlyPayment(values) {
    const P = values.amount;
    const i = (values.rate/100)/12;
    const n = values.years*12;
    const monthlyPayment = (P*i) / (1-(1+i)**(-n));
    return monthlyPayment.toFixed(2);
  }
  
  
  // Given a string representing the monthly payment value,
  // update the UI to show the value.
  function updateMonthly(monthly) {
  document.getElementById("monthly-payment").innerHTML = "$" + monthly;
  }

