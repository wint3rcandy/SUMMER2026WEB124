const bmiForm = document.getElementById("bmi-form");
const calorieForm = document.querySelector("#calorie-form");
const bmiResult = document.getElementById("bmi-result");
const calorieResult = document.querySelector("#calorie-result");

bmiForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const height = Number(document.getElementById("bmi-height").value);
  const weight = Number(document.querySelector("#bmi-weight").value);
  const bmi = (weight * 703) / (height * height);
  const bmiMessage =
    bmi >= 18.5 && bmi < 25
      ? "This is in a generally healthy range."
      : "This is outside the usual healthy range.";

  bmiResult.textContent =
    `At ${height} inches and ${weight} pounds, your BMI is ${bmi.toFixed(1)}. ${bmiMessage}`;
});

calorieForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const age = Number(document.getElementById("calorie-age").value);
  const height = Number(document.querySelector("#calorie-height").value);
  const weight = Number(document.getElementById("calorie-weight").value);
  const gender = document.querySelector("#calorie-gender").value;
  const genderLabel =
    gender === "rather-not-say"
      ? "Rather not say"
      : gender.charAt(0).toUpperCase() + gender.slice(1);
  const heightInCentimeters = height * 2.54;
  const weightInKilograms = weight * 0.453592;

  let restingCalories = 10 * weightInKilograms + 6.25 * heightInCentimeters - 5 * age;
  if (gender === "male") {
    restingCalories += 5;
  } else if (gender === "female") {
    restingCalories -= 161;
  } else {
    restingCalories -= 78;
  }

  calorieResult.textContent =
    `For the ${genderLabel} selection, at age ${age}, a height of ${height} inches, and a weight of ${weight} pounds, you burn roughly ${Math.round(restingCalories)} calories per day at rest.`;
});

document.getElementById("bmi-height").addEventListener("focus", () => {
  bmiResult.textContent = "Enter your height and weight, then submit the form.";
});
