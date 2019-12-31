function isLeapYear(date) {
    const year = new Date(date).getFullYear();

    const leapYearFormula = ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
    if (isNaN(year)) {
        console.log('Invalid Date')
    } else if (leapYearFormula) {
        console.log(`${year} is a leap year`);
    } else {
        console.log(`${year} is not a leap year`);
    }
}
isLeapYear('2020-01-01 00:00:00777');
isLeapYear('2020-01-01 00:00:00');