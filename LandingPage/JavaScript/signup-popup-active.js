window.addEventListener('DOMContentLoaded', (event) => {

    function runEmail() {
        const email = $("#first-signup-input").val();

        if (validateEmail(email)) {
            //CONTINUE
            console.log("VALID");
            return true;
        } else {
            alert("Please enter a valid email");
            console.log("INVALID");
        }
        return false;
    }

    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    document.getElementById('join-wl-button').addEventListener("click", function() {
        
        if(runEmail()) {

        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.add("sup-active");
        }

        document.getElementById('email-signup-input').value = document.getElementById('first-signup-input').value;

        let pg = document.getElementById('pg');

        pg.style.visibility = "visible";
        pg.style.opacity = .6;

        document.getElementById("first-name-signup-input").value = "";
        document.getElementById("last-name-signup-input").value = "";

        console.log(document.getElementById('first-signup-input').value);

        document.getElementById("first-name-signup-input").focus();
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