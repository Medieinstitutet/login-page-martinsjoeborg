//Kopplar startsidans html taggar med javascript
const page0 = document.getElementById('page0');
const Btn1 = document.getElementById('Btn1');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');

//Kopplar login sidan html taggar med javascript
const page1 = document.getElementById('page1');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const err = document.getElementById('err');

//Kopplar andra sidans html taggar med javascript
const page2 = document.getElementById('page2');
const logoutBtn = document.getElementById('logoutBtn');

//Spara användare i localStorage
const a = localStorage.getItem('username');
if (a === "janne") {
    page0.hidden = true;
    page1.hidden = true;
    page2.hidden = false;
    err.hidden = true;
    header1.hidden = true;
    header2.hidden = false;
}

//Klick på knapp hänvisar användaren till login sidan
function startClick() {
    console.log('Klick på knapp1');
    
    page0.hidden = true;
    page1.hidden = false;
    page2.hidden = true;
    
}

//Funktion första sida
function validLogin() {
    console.log("Klick på knapp");
    if (username.value === "janne" && password.value === "test") {
        page0.hidden = true;
        page1.hidden = true;
        page2.hidden = false;
        err.hidden = true;
        header1.hidden = true;
        header2.hidden = false;
        
        localStorage.setItem('username', username.value);
    } else {
        page1.hidden = false;
        page2.hidden = true;
        err.hidden = false;
        alert("Username and/or password is invalid!")
    }
}

function logout() {
    page1.hidden = false;
    page2.hidden = true;
    header1.hidden = false;
    header2.hidden = true;
    localStorage.setItem('username', '');
}

// Funktioner för knappar
Btn1.addEventListener('click', startClick);
loginBtn.addEventListener('click', validLogin);
logoutBtn.addEventListener('click', logout);


