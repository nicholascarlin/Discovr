window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('sign-up-button').addEventListener("click", function() {

        const email = $("#email-signup-input").val();

        if (validateEmail(email)) {
            //CONTINUE
            console.log("VALID");
        } else {
            alert("Please enter a valid email");
            console.log("INVALID");
        }
        return false;

    })
});

function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

