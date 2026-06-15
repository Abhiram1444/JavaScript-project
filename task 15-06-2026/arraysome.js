// array some()
const ages = [12, 15, 17, 20];

const hasAdult = ages.some(age => age >= 18);

console.log(hasAdult);
// array every()
const numbers = [10, 20, 30, -5];

console.log(numbers.some(num => num < 0));   // true
console.log(numbers.every(num => num > 0));  // false

//array join()
// default separator 
const fruits1 = ["Apple", "Banana", "Mango"];

const result = fruits1.join();

console.log(result);
//space separator 
const fruits2 = ["Apple", "Banana", "Mango"];

console.log(fruits2.join(" "));

//hyphen seprator
const fruits3= ["Apple", "Banana", "Mango"];

console.log(fruits3.join(" - "));

//create a sentence 
const words = ["JavaScript", "is", "easy", "to", "learn"];

const sentence = words.join(" ");

console.log(sentence);

//sort()
//sorting strings ()
const fruits4 = ["Mango", "Apple", "Banana"];

fruits4.sort();

console.log(fruits4);

//sorting numbers ()
const numbers1 = [100, 20, 5, 40];

numbers1.sort();

console.log(numbers1);

// flattening array 
//flat()
const arr = [1, [2, 3], [4, 5]];

const results= arr.flat();

console.log(results);

//multiple levels flattening 
const numbers3 = [1,[2,3],[4,4],[5,6]];
const results1 = numbers3. flat();
console.log(numbers3);

// removing duplicate using the set()
const numbers5 = [1, 2, 2, 3, 4, 4, 5];

const unique = [...new Set(numbers5)];

console.log(unique);

//indexOf()
const frui = ["Apple", "Banana", "Mango"];

console.log(frui.indexOf("Banana"));

//lastIndexOf()
const nums = [10, 20, 30, 20, 40];

console.log(nums.lastIndexOf(20));

//map()
const employees1 = [
  {name: "John"},
  {name: "Alice"},
  {name: "Bob"}
];

const names = employees1.map(emp => emp.name);

console.log(names);

// filter()
const employees4 = [
  {name: "John", salary: 30000},
  {name: "Alice", salary: 60000},
  {name: "Bob", salary: 50000}
];

const highSalary = employees4.filter(emp => emp.salary > 40000);

console.log(highSalary);

//reduce()
const nums1= [1, 2, 3, 4];

const resulttt = nums1.reduce((acc, curr) => {
    return acc + curr;
}, 0);
// sorting without built in methods
const arry = [5, 3, 8, 1, 2];

for (let i = 0; i < arry.length; i++) {

    for (let j = 0; j < arry.length - i - 1; j++) {

        if (arry[j] > arry[j + 1]) {

            let temp = arry[j];
            arry[j] = arry[j + 1];
            arry[j + 1] = temp;
        }
    }
}

console.log(arry);

//ForEach()
const fruits = ["Apple", "Banana", "Mango"];

fruits.forEach(function(fruit) {
    console.log(fruit);
});

//