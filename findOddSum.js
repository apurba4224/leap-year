function getSumofAnArray(numbers) {
    let sum = 0;
    let odd = 0;
    const oddNumber = [];
    for (let i = 0; i < numbers.length; i++) {
        const index = i;
        const element = numbers[i];
        const oddelement = element % 2;
        if (oddelement == 0) {
            console.log(index, element);
            oddNumber.push(element);
        }

    }
    return oddNumber;
}
const input = [12, 1, 51, 15, 74, 55, 50, 12, 36, 49]
const oddNumber = getSumofAnArray(input);
console.log(oddNumber);
getSumofAnArray(input);
