function multiplication(number) {
    let sum = 1;
    for (let i = 1; i <= number; i++) {
        sum = sum * i;
        console.log(i, sum);
    }
    return sum;
}
const input = (7)
multiplication(input)