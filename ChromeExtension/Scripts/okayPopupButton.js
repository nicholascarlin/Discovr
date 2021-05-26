window.addEventListener('DOMContentLoaded', (event) => {

    okButton = document.getElementById("popup-save-ok-button");

    okButton.addEventListener("click", function() {
        
        closeSUSPopup();

        resetValues();

    });
});

function resetValues() {
    document.getElementById("title-input").value = "";
    document.getElementById("link-input").value = "";
}

function closeSUSPopup() {
    susPopup = document.getElementsByClassName("sus");

    bg = document.getElementById("bg");
    popup = document.getElementById("popup");

    bg.classList.remove("active");
    popup.classList.remove("active");

    for(var i = 0; i < susPopup.length; i++) {
        susPopup[i].classList.remove("active");
    }
}