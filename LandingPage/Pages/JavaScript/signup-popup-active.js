window.addEventListener('DOMContentLoaded', (event) => {


    function validateEmail(email) {
        const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(email);
    }
    
    // document.getElementById('join-wl-button').addEventListener("click", function() {
        
    //     let signupPopup = document.getElementsByClassName("sign-up-popup");
    //     for(var i = 0; i < signupPopup.length; i++) {
    //         signupPopup[i].classList.add("sup-active");
        
    // }
    // })

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