window.addEventListener('DOMContentLoaded', (event) => {
    var mdClickable = document.getElementsByClassName("md-clickable");
    var chevron = document.getElementById("md-chevron");

    console.log(mdClickable);
    console.log(chevron);

    for (var i = 0; i < mdClickable.length; i++) {
        mdClickable[i].addEventListener("click", function() {
            console.log("clicked");
            chevron.classList.toggle("active");
        });
    }
});