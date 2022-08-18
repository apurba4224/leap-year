function leapYear(year) {
    const number = year % 4;
    if (number == 0) {
        console.log('Yes this is a leap year')
        return true;

    }
    else {
        console.log('No! its not a leap year')
        return false;
    }

}
const output = leapYear(2024);
console.log(output);
