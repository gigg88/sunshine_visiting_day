// get the current date
// Subtract the 28.09.2024 from the current date

function currentDate() {
    const today = new Date();

    const dayOfMonth = today.getDate();
    const monthOfYear = today.getMonth() + 1;
    const year = today.getFullYear();

    console.log(`${dayOfMonth} ${monthOfYear} ${year}`);

}

currentDate();

function daysUntil(futureDate) {
    const now = new Date();
    const future = new Date(futureDate);
    const differenceInMilliseconds = future - now;
    const differenceInDays = Math.ceil(differenceInMilliseconds / (1000 * 60 * 60 * 24));
    return differenceInDays;
  }
  
  const daysUntilSeptember28 = daysUntil("2024-12-22");
  document.getElementById("day").textContent = daysUntilSeptember28;