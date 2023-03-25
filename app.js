let prikaz = document.querySelector(".divzaprikaz");
let dugme = document.querySelector(".btn");
let text = document.createElement('p');
async function preuzmi(){
    const resp = await fetch("https://api.chucknorris.io/jokes/random");
    const sala = await resp.json();
    text.innerText = sala.value;
    console.log(prikaz);
    prikaz.appendChild(text);
    prikaz="";
    
}
dugme.addEventListener("click", preuzmi);