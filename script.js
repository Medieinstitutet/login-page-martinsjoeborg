//Connects first page tags with js
const page0 = document.getElementById('page0');
const Btn1 = document.getElementById('Btn1');
const header1 = document.getElementById('header1');
const header2 = document.getElementById('header2');

//Connects login page tags with js
const page1 = document.getElementById('page1');
const username = document.getElementById('username');
const password = document.getElementById('password');
const loginBtn = document.getElementById('loginBtn');
const err = document.getElementById('err');

//Connects logged in page tags with js
const page2 = document.getElementById('page2');
const logoutBtn = document.getElementById('logoutBtn');
const hiName = document.getElementById('hiName');

//Saving user in localStorage
const a = localStorage.getItem('username');
const b = localStorage.getItem('username');

if (a === "janne" || b === "martin") {
    page0.hidden = true;
    page1.hidden = true;
    page2.hidden = false;
    err.hidden = true;
    header1.hidden = true;
    header2.hidden = false;
    hiName.innerHTML = "Welcome " + username.value + "!";
}

//Clikc on button directs user to login page
function startClick() {
    console.log('Klick på knapp1');
    
    page0.hidden = true;
    page1.hidden = false;
    page2.hidden = true;
    
}

//Function login 
function validLogin() {
    console.log("Klick på knapp");
    if (username.value === "janne" && password.value === "test" || username.value === "martin" && password.value === "123") {
        page0.hidden = true;
        page1.hidden = true;
        page2.hidden = false;
        err.hidden = true;
        header1.hidden = true;
        header2.hidden = false;
        hiName.innerHTML = "Welcome " + username.value + "!";

        
        localStorage.setItem('username', username.value);
    } else {
        page1.hidden = false;
        page2.hidden = true;
        err.hidden = false;
    }
}

//Function logout
function logout() {
    page1.hidden = false;
    page2.hidden = true;
    header1.hidden = false;
    header2.hidden = true;
    localStorage.setItem('username', '');
}

// Function buttons
Btn1.addEventListener('click', startClick);
loginBtn.addEventListener('click', validLogin);
logoutBtn.addEventListener('click', logout);


