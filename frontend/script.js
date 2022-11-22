// Lista med användare.
const users = [
    {
        username: "janne",
        password: "test"
    },
    
]

// Kopplar html tag med javascript.



// Vid klick på knapp hänvisas man till inloggningsformulär.
btn.addEventListener('click', () => {
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    for(i = 0; i < users.length; i++) {
        if(username == users[i].username && password == users[i].password) {
            //VISA SIDA NÄR INLOGGAD
            console.log("Ure in!");
        } else {
            //ALERT
            alert("Username and/or password is not valid!")
        }
    }
})

// Funktionen leter igenom arrayn "users" och kollar om användaren existerar.

