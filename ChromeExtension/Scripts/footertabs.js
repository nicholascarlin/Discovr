document.addEventListener("DOMContentLoaded", function(event) {

    var btnContainer = document.getElementById("container");
    var btns = btnContainer.getElementsByClassName("link");

    for (var i = 0; i < btns.length; i++) {
        btns[i].addEventListener("click", function() {
            var current = document.getElementsByClassName("active");
            current[0].className = current[0].className.replace(" active", "");
            this.className += " active";
        });
    }
});
