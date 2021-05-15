

window.addEventListener('DOMContentLoaded', (event) => {
    document.getElementById('join-wl-button').addEventListener("click", function() {
        const email = $("#first-signup-input").val();
        console.log(email)
        if (validateEmail(email)) {
            //CONTINUE
            submitSignup(email)
            console.log("VALID");
           
        } else {
            alert("Please enter a valid email");
            console.log("INVALID");
        }
        
    })
});
function submitSignup(email){
    data = {
        "email":email,
    }
    $.ajax({
        url: '/addToWaitlist',
        type: 'POST',
        async: false,
        data:data,
        dataType: 'json',
        success: function (data) {
            console.log(data.position)
            if(data.isCurrUser){
                document.getElementById("waitlist-position").innerHTML = "Welcome back! Your current waitlist position is: "+ data.position
            } else {
                document.getElementById("waitlist-position").innerHTML = "Thank you for joining Discovr, your position is: "+data.position
            }
        }, 
        error: function (data) {
            console.log(data)
            console.log("error")
        }
    })
}
function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

