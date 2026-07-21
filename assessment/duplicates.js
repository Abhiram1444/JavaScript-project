const arr = [1, 2, 3, 2, 4, 5, 1];

const duplicates = arr.filter((item, index) => {
    return arr.indexOf(item) !== index && arr.lastIndexOf(item) === index;
});

console.log(duplicates);