class UserError extends Error {
    constructor(message) {
        super(message);
        this.name = "UserError";
    }
}

function saveUser() {

    try {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;

        // throw custom error
        if (name === "" || email === "") {
            throw new UserError("Please enter both name and email.");
        }

        const user = {
            name: name,
            email: email
        };

        // Convert object into JSON string
        localStorage.setItem("user", JSON.stringify(user));

        document.getElementById("message").textContent =
            "User information saved successfully.";

    } catch (error) {

        document.getElementById("message").textContent =
            "Error: " + error.message;

    } finally {

        console.log("Save operation completed.");
    }
}


function getUser() {

    try {
        const data = localStorage.getItem("user");

        if (data === null) {
            throw new UserError("No user information found.");
        }

        // Convert JSON string back into object
        const user = JSON.parse(data);

        document.getElementById("message").textContent =
            `Name: ${user.name}, Email: ${user.email}`;

    } catch (error) {

        document.getElementById("message").textContent =
            "Error: " + error.message;

    } finally {

        console.log("Get operation completed.");
    }
}


function removeUser() {

    try {
        localStorage.removeItem("user");

        document.getElementById("message").textContent =
            "User information removed.";

    } catch (error) {

        document.getElementById("message").textContent =
            "Error: " + error.message;

    } finally {

        console.log("Remove operation completed.");
    }
}