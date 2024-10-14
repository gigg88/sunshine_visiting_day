"use strict";

// get the current date
// Subtract the 28.09.2024 from the current date
function currentDate() {
  var today = new Date();
  var dayOfMonth = today.getDate();
  var monthOfYear = today.getMonth() + 1;
  var year = today.getFullYear();
  console.log("".concat(dayOfMonth, " ").concat(monthOfYear, " ").concat(year));
}

currentDate();

function daysUntil(futureDate) {
  var now = new Date();
  var future = new Date(futureDate);
  var differenceInMilliseconds = future - now;
  var differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
  return differenceInDays;
}

var daysUntilSeptember28 = daysUntil("2024-12-22");
document.getElementById("day").textContent = daysUntilSeptember28;