window.addEventListener('DOMContentLoaded', (event) => {

    saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", function() {
        let post = {
            //type = 
            title : document.getElementById("title-input").value,
            link : document.getElementById("link-input").value
        };

        isEmailValid = validateEmail(document.getElementById("link-input").value);
        
        if(isEmailValid) {
            setPopUpActive();
        } else {
            console.log("Error Popup");
            setErrorPopupActive();
        }
    });
});

function setPopUpActive() {
    susPopup = document.getElementsByClassName("sus");

    bg = document.getElementById("bg");
    popup = document.getElementById("popup");

    bg.classList.add("active");
    popup.classList.add("active");

    for(var i = 0; i < susPopup.length; i++) {
        susPopup[i].classList.add("active");
    }
}

function setErrorPopupActive() {
    errPopup = document.getElementsByClassName("err-pop");

    bg = document.getElementById("bg");
    popup = document.getElementById("popup");

    bg.classList.add("active");
    popup.classList.add("active");

    for(var i = 0; i < errPopup.length; i++) {
        errPopup[i].classList.add("active");
    }
}

function validateEmail(url) {
    var expression = /[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi;
    var regex = new RegExp(expression);

    if (url.match(regex)) {
        return true;
    } else {
        return false;
    }
}