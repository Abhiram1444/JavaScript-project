async function getUsers() {

    const usersDiv = document.getElementById("users");
    const loading = document.getElementById("loading");
    const error = document.getElementById("error");

    // Clear previous data
    usersDiv.innerHTML = "";
    error.innerHTML = "";

    // Show loading message
    loading.innerHTML = "Loading...";

    try {

        // GET request
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        // Check if response is successful
        if (!response.ok) {
            throw new Error("Failed to fetch users");
        }

        // Convert response to JSON
        const users = await response.json();

        // Hide loading message
        loading.innerHTML = "";

        // Display data
        users.forEach(user => {

            usersDiv.innerHTML += `
                <div>
                    <h3>${user.name}</h3>
                    <p>Email: ${user.email}</p>
                    <p>City: ${user.address.city}</p>
                    <hr>
                </div>
            `;

        });

    } catch (err) {

        // Handle error
        loading.innerHTML = "";
        error.innerHTML = "Error: " + err.message;

    }
}