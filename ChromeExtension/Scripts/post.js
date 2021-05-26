window.addEventListener('DOMContentLoaded', (event) => {

    saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", function() {
        let post = {
            //type = 
            title : document.getElementById("title-input").value,
            link : document.getElementById("link-input").value
        };

        setPopUpActive();

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