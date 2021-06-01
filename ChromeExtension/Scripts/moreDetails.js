window.addEventListener('DOMContentLoaded', (event) => {
    var mdClickable = document.getElementsByClassName("md-clickable");
    var chevron = document.getElementById("md-chevron");
    var body = document.getElementById("body");
    var moreElements = document.getElementsByClassName("more-details-div");

    console.log(mdClickable);
    console.log(chevron);

    for (var i = 0; i < mdClickable.length; i++) {
        mdClickable[i].addEventListener("click", function() {
            console.log("clicked");
            chevron.classList.toggle("active");
            body.classList.toggle("active");
            for(var j = 0; j < moreElements.length; j++) {
                moreElements[j].classList.toggle("active");
            }
        });
    }
});