// functions with adding numbers
function addNumbers() {
    let a = 10;
    let b = 20;
    console.log("Sum =", a + b);
}

addNumbers();

// single parameter
function greet(name) {
    console.log("Hello " + name);
}

greet("Abhiram");

// multiple parameters
function employee(empName, department) {
    console.log("Employee Name:", empName);
    console.log("Department:", department);
}

employee("Abhiram", "Development");

// argument 
function display(city) {
    console.log("City:", city);
}

display("Hyderabad");
display("Mumbai");

// default parameters
function greet(name="guest"){
    console.log("hello"+name);
}
greet();
greet("abhiram");

// parametr priority order
function showCity(city = "Hyderabad") {
    console.log(city);
}

showCity("Bangalore");
showCity();

function add(a = 10, b = 20) {
    console.log(a + b);
}

add(5, 6);    // 11
add(5);       // 25
add();        // 30

//argument object
function displayArguments() {
    console.log(arguments);
}

displayArguments(10, 20, 30);

function countArguments() {
    console.log("Total Arguments:", arguments.length);
}

countArguments(1, 2, 3, 4, 5);

// comparing and all in one above topics
function employeeDetails(
    empId = 0,
    empName = "Unknown",
    department = "Not Assigned"
) {
    console.log("Employee ID:", empId);
    console.log("Employee Name:", empName);
    console.log("Department:", department);

    console.log("Arguments Passed:", arguments.length);

    for (let i = 0; i < arguments.length; i++) {
        console.log("Argument", i, "=", arguments[i]);
    }
}

employeeDetails(101, "Abhiram", "Development");

// var
if (true) {
    var x = 10;
}

console.log(x);
// 
let city = "Hyderabad";
 city = "Chennai";