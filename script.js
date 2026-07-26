//create array for female, male and days of the week
const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
const femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
const daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]; 

document.getElementById("akanForm").addEventListener("submit", function (event) {
  event.preventDefault();

  const dateInput = document.getElementById("birthdate").value;
  const genderInput = document.querySelector('input[name="gender"]:checked');

  // Input Validation
  if (!dateInput) {
    alert("Please fill in all fields.");
    return;
  }

   if (!genderInput) {
    alert("Please fill in all fields.");
    return;
  }

  const birthDate = new Date(dateInput);
  const DD = birthDate.getDate();
  const MM = birthDate.getMonth() + 1; 

  // Validate range manually to fulfill prompt requirements
  if (DD < 1 || DD > 31 || MM < 1 || MM > 12) {
    alert("Invalid date or month entered!");
    return;
  }

  // Extract CC (century) and YY (year within century)
  const yearStr = birthDate.getFullYear().toString();
  const CC = parseInt(yearStr.substring(0, 2), 10);
  const YY = parseInt(yearStr.substring(2, 4), 10);
  
  // Formula calculation provided in prompt
  let d = Math.floor(
    Math.floor(CC / 4) - 2 * CC - 1 + Math.floor((5 * YY) / 4) + Math.floor((26 * (MM + 1)) / 10) + DD
  ) % 7;

  // JavaScript modulo
  if (d < 0) {
    d = (d + 7) % 7;
  }

  // Assign Akan name based on gender selection
  const gender = genderInput.value;
  let akanName = "";

  if (gender === "male") {
    akanName = maleNames[d];
  } else if (gender === "female") {
    akanName = femaleNames[d];
  }

  // Display the result
  const resultDiv = document.getElementById("result");
  resultDiv.innerHTML = `You were born on a ${daysOfWeek[d]}. Your Akan name is ${akanName}`;
});