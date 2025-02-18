const fullMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

function getOrdinal(n) {
  if (n >= 11 && n <= 13) return "th";
  switch (n % 10) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}
/**
 * Formats the current date based on the given format string.
 *
 * Supported format tokens:
 * - `mn`: Short month name (e.g., "Jan")
 * - `fmn`: Full month name (e.g., "January")
 * - `dn`: Short day name (e.g., "Wed")
 * - `fdn`: Full day name (e.g., "Wednesday")
 * - `dd`: Two-digit day (e.g., "02")
 * - `d`: Day of the month (e.g., "2")
 * - `do`: Day with ordinal (e.g., "2nd")
 * - `yy`: Two-digit year (e.g., "21")
 * - `yyyy`: Four-digit year (e.g., "2021")
 * - `mm`: Two-digit month (e.g., "06")
 * - `m`: Month as a number (e.g., "6")
 *
 * @param {string} format - The format string using supported tokens.
 * @returns {string|Error} The formatted date string or an error message if the format is invalid.
 *
 * @example
 * // Short month, two-digit day, four-digit year
 * useDate1('mn dd yyyy'); // "Jun 02 2021"
 *
 * @example
 * // Full month name, full day name, two-digit day, four-digit year
 * useDate1('fdn, fmn dd yyyy'); // "Wednesday, June 02 2021"
 *
 * @example
 * // Month and day in numeric format
 * useDate1('m/d/yyyy'); // "6/2/2021"
 *
 * @example
 * // Year-first format
 * useDate1('yyyy-mm-dd'); // "2021-06-02"
 *
 * @example
 * // Full month and full day name with ordinal
 * useDate1('fdn, fmn do yyyy'); // "Wednesday, June 2nd 2021"
 *
 * @example
 * // Invalid input
 * useDate1(123); // Error: "Invalid Format"
 */
module.exports = function (format) {
  try {
    if (typeof format !== "string") throw new Error("Invalid Format");
    const date = new Date();

    const day = date.getDate();
    const monthIndex = date.getMonth();
    const year = date.getFullYear();
    const shortYear = year.toString().slice(-2);

    // Create an object mapping format codes to their corresponding values
    const formatMap = {
      mn: fullMonths[monthIndex].substring(0,3),
      fmn: fullMonths[monthIndex],
      dn: days[date.getDay()].substring(0, 3),
      fdn: days[date.getDay()],
      dd: String(day).padStart(2, "0"),
      d: day,
      do: day + getOrdinal(day),
      yy: shortYear,
      yyyy: year,
      mm: String(monthIndex + 1).padStart(2, "0"),
      m: monthIndex + 1,
    };

    Object.keys(formatMap).forEach((key) => {
      if (!format.includes(key)) {
        return false;
      }
    });

    // Split the format into parts and replace each part with its corresponding value
    const parts = format.split(/([^\w])/); // Split on non-word characters to preserve separators
    let formattedDate = "";

    for (let i = 0; i < parts.length; i++) {
      if (formatMap[parts[i]]) {
        formattedDate += formatMap[parts[i]];
      } else {
        formattedDate += parts[i];
      }
    }
    return formattedDate;
  } catch (err) {
    return err;
  }
};
