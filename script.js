const info = document.querySelector(".info");
const passfield = document.getElementById("password");

function copytext(){
//copy password to clipboard
navigator.clipboard.writeText(passfield.value);
//display info on page
info.style.opacity=100;
//hide the info on page
setTimeout(()=>{
info.style.opacity=0;
},5000);
}

function generatePassword(){
let password="";
let length=8;
let chars=`abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789#@!&%`;

//Generating password
for(let i=0;i<length;i++){
  password += chars.charAt(Math.floor(Math.random()*chars.length));
}
//Assign password value to passfield
passfield.value = password;
}
