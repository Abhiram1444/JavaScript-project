console.log("Hello JavaScript");
console.log(100);
console.log(true);

//fetch API
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {
        console.log(users);
    })
    .catch(error => {
        console.log(error);
    });

    //async await version
    async function getUsers() {
    try {
        const response = await fetch(
            "https://jsonplaceholder.typicode.com/users"
        );

        const users = await response.json();

        console.log(users);
    }
    catch(error) {
        console.log(error);
    }
}

getUsers();

//display api data dynamically
fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => response.json())
    .then(users => {

        let output = "";

        users.forEach(user => {
            output += `
                <div>
                    <h3>${user.name}</h3>
                    <p>${user.email}</p>
                </div>
            `;
        });

        document.getElementById("users").innerHTML = output;
    });

    // api sucess scenario
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response => {

        if(response.ok){
            return response.json();
        }

        throw new Error("Request Failed");
    })
    .then(data => {
        console.log(data);
    })
    .catch(error => {
        console.log(error.message);
    });

    //