let numbers = [1, 4, 7, 8, 10];

for (let i = 0; i < numbers.length; i++) {

    if (numbers[i] % 2 === 0) {
        console.log("Even Number:", numbers[i]);
        break;
    }
}