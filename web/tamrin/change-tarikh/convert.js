function gregorianToSolarHijri(gregorianDate) {
  // Extract the year, month, and day from the Gregorian date
  const gYear = gregorianDate.getFullYear();
  const gMonth = gregorianDate.getMonth() + 1; // Months are 0-based in JavaScript Date
  const gDay = gregorianDate.getDate();

  // Create a new date object for the given Gregorian date
  const gD = new Date(gYear, gMonth - 1, gDay);
  // Calculate the day of the year for the Gregorian date
  const gDayOfYear =
    Math.floor((gD - new Date(gYear, 0, 1)) / (24 * 60 * 60 * 1000)) + 1;

  let shYear, shMonth, shDay;

  // Check if the Gregorian year is a leap year
  if (gYear % 4 === 0) {
    if (gDayOfYear <= 80) {
      // Check if the day is within the first 80 days of the year
      shYear = gYear - 622;
      if (gDayOfYear <= 20) {
        shMonth = 10;
        shDay = gDayOfYear + 10;
      } else {
        shMonth = 11;
        shDay = gDayOfYear - 20;
      }
    } else {
      shYear = gYear - 621;
      const dayOfYear = gDayOfYear - 80;
      if (dayOfYear <= 186) {
        // Check if the day is within the first 186 days after Nowruz
        shMonth = Math.ceil(dayOfYear / 31);
        shDay = dayOfYear % 31 === 0 ? 31 : dayOfYear % 31;
      } else {
        const dayOfYearMod = dayOfYear - 186;
        shMonth = Math.ceil(dayOfYearMod / 30) + 6;
        shDay = dayOfYearMod % 30 === 0 ? 30 : dayOfYearMod % 30;
      }
    }
  } else {
    // Non-leap year calculation
    if (gDayOfYear <= 79) {
      shYear = gYear - 622;
      if (gDayOfYear <= 19) {
        shMonth = 10;
        shDay = gDayOfYear + 11;
      } else {
        shMonth = 11;
        shDay = gDayOfYear - 19;
      }
    } else {
      shYear = gYear - 621;
      const dayOfYear = gDayOfYear - 79;
      if (dayOfYear <= 186) {
        shMonth = Math.ceil(dayOfYear / 31);
        shDay = dayOfYear % 31 === 0 ? 31 : dayOfYear % 31;
      } else {
        const dayOfYearMod = dayOfYear - 186;
        shMonth = Math.ceil(dayOfYearMod / 30) + 6;
        shDay = dayOfYearMod % 30 === 0 ? 30 : dayOfYearMod % 30;
      }
    }
  }

  // Return the Solar Hijri date as an object
  return { year: shYear, month: shMonth, day: shDay };
}

// Example usage:
// Create a Gregorian date (June 6, 2024; months are 0-based)
const gregorianDate = new Date(2024, 5, 6);
// Convert the Gregorian date to Solar Hijri
const solarHijriDate = gregorianToSolarHijri(gregorianDate);
// Print the Solar Hijri date
console.log(
  `Solar Hijri Date: ${solarHijriDate.year}/${solarHijriDate.month}/${solarHijriDate.day}`
);
