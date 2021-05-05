window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('join-wl-button').addEventListener("click", function() {

        if(document.getElementById('first-signup-input').validity.valid) {
        
        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.add("sup-active");
        }

        document.getElementById('email-signup-input').value = document.getElementById('first-signup-input').value;

        let pg = document.getElementById('pg');

        pg.style.visibility = "visible";
        pg.style.opacity = .6;

        console.log(document.getElementById('first-signup-input').value);

        document.getElementById("first-name-signup-input").focus();

    } else {
        console.log("REEFED");
    }
    })

    document.getElementById('close-button').addEventListener("click", function() {
        
        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.remove("sup-active");
        }

        let pg = document.getElementById('pg');

        pg.style.visibility = "hidden";
        pg.style.opacity = 0;

    })
});