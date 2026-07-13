async function loadUsers(){

const usersDiv=document.getElementById("users");

usersDiv.innerHTML="Loading...";

try{

const response=await fetch("https://jsonplaceholder.typicode.com/users");

if(!response.ok){

throw new Error("Failed to fetch");

}

const users=await response.json();

usersDiv.innerHTML="";

users.forEach(user=>{

const card=document.createElement("div");

card.className="card";

card.innerHTML=`

<h3>${user.name}</h3>

<p>Email : ${user.email}</p>

<p>Phone : ${user.phone}</p>

<p>Website : ${user.website}</p>

`;

usersDiv.appendChild(card);

});

}

catch(error){

usersDiv.innerHTML="Error Loading Data";

}

}