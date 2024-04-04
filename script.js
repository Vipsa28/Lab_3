document.getElementById("tipForm").addEventListener("input", function (e) {
  const billTotal = parseFloat(document.getElementById("billTotal").value);
  const tipPercentage = parseInt(
    document.getElementById("tipPercentageRange").value,
    10
  );

  if (isNaN(billTotal) || billTotal <= 0) {
    // Display error message for invalid bill total
    alert("Please enter a valid number for the total bill amount.");
    return;
  }

  if (isNaN(tipPercentage) || tipPercentage < 0 || tipPercentage > 100) {
    // Display error message for invalid tip percentage
    alert("Please enter a valid number for the total bill amount.");
    return;
  }

  // Update the disabled input field to show the tip percentage
  document.getElementById("tipPercentageInput").value = `${tipPercentage}%`;

  const tipAmount = (billTotal * (tipPercentage / 100)).toFixed(2);
  const totalWithTip = (billTotal + parseFloat(tipAmount)).toFixed(2);

  document.getElementById("tipAmount").value = `$${tipAmount}`;
  document.getElementById("totalWithTip").value = `$${totalWithTip}`;
});
