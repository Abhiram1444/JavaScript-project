const marks = [85, 70, 92, 70, 60, 85, 45];

// 1. Array Creation and Accessing Elements
console.log("First mark:", marks[0]);
console.log("Last mark:", marks[marks.length - 1]);

// 2. Array Methods Revision

// map() - creates a new array by changing each element
const bonusMarks = marks.map(mark => mark + 5);
console.log("Bonus Marks:", bonusMarks);

// filter() - returns elements that satisfy a condition
const passedMarks = marks.filter(mark => mark >= 50);
console.log("Passed Marks:", passedMarks);

// reduce() - reduces array to a single value
const total = marks.reduce((sum, mark) => sum + mark, 0);
console.log("Total Marks:", total);

// find() - returns the first matching element
const firstHighMark = marks.find(mark => mark > 90);
console.log("First mark above 90:", firstHighMark);

// findIndex() - returns the index of the first matching element
const index = marks.findIndex(mark => mark === 92);
console.log("Index of 92:", index);

// some() - checks if at least one element satisfies condition
const hasFailed = marks.some(mark => mark < 50);
console.log("Any failed mark:", hasFailed);

// every() - checks if all elements satisfy condition
const allPassed = marks.every(mark => mark >= 40);
console.log("All students passed:", allPassed);

// sort() - sorts the array
const sortedMarks = [...marks].sort((a, b) => a - b);
console.log("Sorted Marks:", sortedMarks);

// 3. Removing Duplicate Elements
const uniqueMarks = [...new Set(marks)];
console.log("Unique Marks:", uniqueMarks);