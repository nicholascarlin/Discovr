window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('join-wl-button').addEventListener("click", function() {
        
        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.add("sup-active");
        }

        let pg = document.getElementById('pg');

        pg.style.visibility = "visible";
        pg.style.opacity = .6;

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