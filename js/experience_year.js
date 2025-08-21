const startMonth = 5;
const startYear = 2020;

const now = new Date();
let years = now.getFullYear() - startYear;
let months = now.getMonth() + 1 - startMonth;

if (months < 0) {
  years--;
  months += 12;
}

const experienceText = months > 0 ? `${years}+ Years` : `${years} Years`;

document.getElementById('experience-years').textContent = experienceText;