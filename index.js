/**
 * Formats the current date based on the provided format string.
 *
 * @param {string} format - The desired format (e.g., "mn/dd/yyyy", "m/d/yy").
 * @param {string} [separator="/"] - Optional separator (default is "/").
 * @returns {string} - The formatted date.
 *
 * @example
 * useDate("mn/dd/yyyy"); // "Jun/02/2021"
 *
 * @example
 * useDate("mm/dd/yyyy"); // "06/02/2021"
 *
 * @example
 * useDate("m/d/yy"); // "6/2/21"
 *
 * @example
 * useDate("yyyy-mm-dd"); // "2021-06-02"
 *
 * @example
 * useDate("dn, mn dd yyyy"); // "Wednesday, Jun 02 2021"
 *
 * @example
 * useDate(123); // "Invalid Format"
 */  
module.exports = function (format = 'mm/dd/yyyy', sep = '/') {
    const months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
    ];
    const fullMonths = [
        'January', 'February', 'March', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'
    ];
    const days = [
        'Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'
    ];
    
    const dateObj = new Date();
    const monthNum = dateObj.getMonth() + 1;
    const monthName = months[dateObj.getMonth()];
    const fullMonthName = fullMonths[dateObj.getMonth()];
    const day = dateObj.getDate();
    const dayName = days[dateObj.getDay()];
    const year = dateObj.getFullYear();
    const shortYear = year.toString().slice(-2);

    const formattedDay = day < 10 ? `0${day}` : day;
    const formattedMonthNum = monthNum < 10 ? `0${monthNum}` : monthNum;
    
    switch (format) {
        case 'mn/dd/yyyy':
            return `${monthName}${sep}${formattedDay}${sep}${year}`;
        case 'm/dd/yyyy':
            return `${monthNum}${sep}${formattedDay}${sep}${year}`;
        case 'mm/dd/yyyy':
            return `${formattedMonthNum}${sep}${formattedDay}${sep}${year}`;
        case 'm/d/yyyy':
            return `${monthNum}${sep}${day}${sep}${year}`;
        case 'm/d/yy':
            return `${monthNum}${sep}${day}${sep}${shortYear}`;
        case 'mn-dn-yyyy':
            return `${monthName}-${dayName} the ${day}${getOrdinal(day)}-${year}`;
        case 'mn/dd/yy':
            return `${monthName}${sep}${formattedDay}${sep}${shortYear}`;
        case 'dn, mn dd yyyy':
            return `${dayName}, ${monthName} ${formattedDay} ${year}`;
        case 'dn, m/d/yy':
            return `${dayName}, ${monthNum}${sep}${day}${sep}${shortYear}`;
        case 'yyyy-mm-dd':
            return `${year}${sep}${formattedMonthNum}${sep}${formattedDay}`;
        case 'yy/mm/dd':
            return `${shortYear}${sep}${formattedMonthNum}${sep}${formattedDay}`;
        case 'lmn/dd/yyyy':
            return `${fullMonthName}${sep}${formattedDay}${sep}${year}`;
        case 'lmn-dn-yyyy':
            return `${fullMonthName}-${dayName} the ${day}${getOrdinal(day)}-${year}`;
        default:
            return 'Invalid Format';
    }
};

function getOrdinal(n) {
    if (n >= 11 && n <= 13) return 'th';
    switch (n % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}
