sessionStorage.setItem(
    "loggedInUser",
    "Abhiram"
);

const user =
sessionStorage.getItem(
    "loggedInUser"
);

console.log(user);

//error handling
try {
    console.log(name);
}
catch(error) {
    console.log(error.message);
}
// try catch finally
try {
    console.log("Try Block");
}
catch(error) {
    console.log("Catch Block");
}
finally {
    console.log("Finally Block");
}

// finally block
try {
    console.log("Processing...");
}
finally {
    console.log("Cleanup Completed");
}

//custom error handling scenarios 
// age validation
function checkAge(age) {

    try {

        if(age < 18) {
            throw new Error(
                "Age must be 18 or above"
            );
        }

        console.log("Access Granted");

    }
    catch(error) {

        console.log(
            error.message
        );

    }
}

checkAge(15);