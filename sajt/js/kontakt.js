console.log("Povezivanje uspesno");

let pasus = document.getElementById("nekiPasus");
console.log(pasus.textContent);

let btnContact = document.getElementById("contact-btn");
btnContact.addEventListener("click", doSomething);

function doSomething(){
    let naziv = document.getElementById("name");
    alert("Popunio: "+naziv.value);
    let form = document.forms['contact-form'];
    let mail = form['mail'];
    alert("Mail: "+mail.value);
}

