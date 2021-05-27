window.addEventListener('DOMContentLoaded', (event) => {

    okButton = document.getElementById("popup-save-ok-button");

    okButton.addEventListener("click", function() {

        closeSUSPopup();

        resetValues();        

    });

    okErrButton = document.getElementById("error-ok-button");

    okErrButton.addEventListener("click", function() {

        console.log("Err Ok Clicked");

        closeERRPopup();       

    });
});

function resetValues() {
    document.getElementById("title-input").value = "";
    document.getElementById("link-input").value = "";

    clearStars();
}

function closeERRPopup() {
    errPopup = document.getElementsByClassName("err-pop");

    bg = document.getElementById("bg");
    popup = document.getElementById("popup");
    x = document.getElementById("err-check");

    bg.classList.remove("active");
    popup.classList.remove("active");
    x.classList.remove("active");

    for(var i = 0; i < errPopup.length; i++) {
        errPopup[i].classList.remove("active");
    }
}

function closeSUSPopup() {
    susPopup = document.getElementsByClassName("sus");

    bg = document.getElementById("bg");
    popup = document.getElementById("popup");
    check = document.getElementById("succ-check");

    bg.classList.remove("active");
    popup.classList.remove("active");
    check.classList.remove("active");

    for(var i = 0; i < susPopup.length; i++) {
        susPopup[i].classList.remove("active");
    }
}

function clearStars() {

    for(i = 1; i <= 5; i++) {
        star = document.getElementById(`star${i}`);
        star.style.background = "#b9b9b9";
    }

    index = 0;
}