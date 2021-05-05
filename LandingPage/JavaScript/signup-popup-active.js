window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('join-wl-button').addEventListener("click", function() {
        
        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.add("sup-active");
        }

        document.getElementById('email-signup-input').value = document.getElementById('first-signup-input').value;

        let pg = document.getElementById('pg');

        pg.style.visibility = "visible";
        pg.style.opacity = .6;

        document.getElementById("password-signup-input").value = "";

        console.log(document.getElementById('first-signup-input').value);

        if(document.getElementById('first-signup-input').value == "") {
            document.getElementById('email-signup-input').focus()
        } else {
            document.getElementById("password-signup-input").focus();
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