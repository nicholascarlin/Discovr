window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('join-wl-button').addEventListener("click", function() {
        
        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.add("sup-active");
        }

        let bg = document.getElementById('bg');

        bg.style.visibility = "visible";
        bg.style.opacity = .6;

    })

    document.getElementById('close-button').addEventListener("click", function() {
        
        let signupPopup = document.getElementsByClassName("sign-up-popup");

        for(var i = 0; i < signupPopup.length; i++) {
            signupPopup[i].classList.remove("sup-active");
        }

        let bg = document.getElementById('bg');

        bg.style.visibility = "hidden";
        bg.style.opacity = 0;

    })

});