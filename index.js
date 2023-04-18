const btn = document.getElementById("button");
const birthdayElement = document.getElementById("birthday");
const resultElement = document.getElementById("result");

function calculateAge() {
  const birthdayValue = birthdayElement.value;
  if (birthdayValue === "") {
    alert("Please enter your birthday");
  } else {
    const age = getAge(birthdayValue);
    resultElement.innerText = `Your age is ${age} ${
      age > 1 ? "years" : "year"
    } old`;
    console.log(age);
  }
}

function getAge(birthdayValue) {
  const currentDate = new Date();
  const birthdayDate = new Date(birthdayValue);
  let age = currentDate.getFullYear() - birthdayDate.getFullYear();
  const month = currentDate.getMonth() - birthdayDate.getMonth();
  if (
    month < 0 ||
    (month === 0 && currentDate.getDate() < birthdayDate.getDate())
  ) {
    if (age !== 0) {
      age--;
    }
  }

  return age;
}

btn.addEventListener("click", calculateAge);
