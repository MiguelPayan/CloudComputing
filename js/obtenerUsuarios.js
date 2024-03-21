//const { rejects } = require("assert");


const container = document.querySelector(".container");


fetch('http://localhost:3000/usuarios')
.then((response) => response.json())
.then((users)=>{
    let ptl = users.map(user => `<li>${user.email} ✉️ ${user.name}</li>`);
    ptl = ptl.join('');
    container.innerHTML = `<ul>${ptl}</ul>`;
    
})


console.log('FIN')