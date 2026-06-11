let num=[12,45,67,89,34,78];

let largest = num [0];
let secondlargest = num[0];
for (let i=1; i<num.length;i++){
    if (num [i]> largest){
        secondlargest=largest;
        largest= num[i];
     } else if (num[i]>secondlargest)
{
    secondlargest = num[i]

}
}
console.log("largestnumber;",largest);
console.log("second largest;", secondlargest)
