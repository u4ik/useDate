module.exports = function(format, sep = '/') {

    let first;
    let second;
    let third;
    let fourth;
    let fifth;
    let sixth;
    let seventh;
    let eigth;
    let ninth;
    let tenth;
    
    if (format) {
        first = format[0]
        second = format[1]
        third = format[2]
        fourth = format[3]
        fifth = format[4]
        sixth = format[5]
        seventh = format[6]
        eigth = format[7]
        ninth = format[8]
        tenth = format[9]

    };
    let months = {
        1: 'Jan',
        2: 'Feb',
        3: 'Mar',
        4: 'Apr',
        5: 'May',
        6: 'Jun',
        7: 'Jul',
        8: 'Aug',
        9: 'Sep',
        10: 'Oct',
        11: 'Nov',
        12: 'Dec'
    };

    let dateObj = new Date();
    let monthNum = Object.keys(months)[dateObj.getMonth()];
    let monthName = months[dateObj.getMonth() + 1];
    let day = String(dateObj.getDate()).padStart(2, '0');
    let year = dateObj.getFullYear();

    if (format === 'mn/dd/yyyy') {
        return monthName + sep + day + sep + year;
    }
    else if (format === 'm/dd/yyyy') {
        return monthNum + sep + day + sep + year;
    } else if (format === 'mm/dd/yyyy') {
        if (parseInt(monthNum) < 10) {
            monthNum = '0' + Object.keys(months)[dateObj.getMonth()];
        };
        return monthNum + sep + day + sep + year;
    } else if (format === 'm/d/yyyy') {
        if (parseInt(day) < 10) {
            day = String(dateObj.getDate()).padStart(2, '');
        };
        return monthNum + sep + day + sep + year;
    } else if (format === 'm/d/yy') {
        let shortYear;
        if (parseInt(day) < 10) {
            day = String(dateObj.getDate()).padStart(2, '');
        };
        shortYear = String(year)[2] + String(year)[3];
        return monthNum + sep + day + sep + shortYear;
    } else if (format === '' || format === undefined || format === null) {
        if (parseInt(day) < 10) {
            day = String(dateObj.getDate()).padStart(2, '');
        };
        return monthNum + sep + day + sep + year;
    } else {
        return 'Invalid Format'
    };

};