// listen for submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

// Calculate Results function
function calculateResults(e) {

  //UI Vars
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');
  
  // Calculate interest vars
  const principal = parseFloat(amount.value);
  const calculatedInterest = parsefloat(interest.value) / 100 / 12;
  const calculatedPayments = parsefloat(years.value) * 12;

  // Compute monthly payments
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principal).toFixed(2);
  } else {
    console.log('Please check your numbers');
  }

  e.preventDefault();
}