window.addEventListener('DOMContentLoaded', (event) => {

    star1 = document.getElementById("star1");
    star2 = document.getElementById("star2");
    star3 = document.getElementById("star3");
    star4 = document.getElementById("star4");
    star5 = document.getElementById("star5");

    star1.addEventListener("click", function() {
        setStars(1);
    });

    star2.addEventListener("click", function() {
        setStars(2);
    });

    star3.addEventListener("click", function() {
        setStars(3);
    });

    star4.addEventListener("click", function() {
        setStars(4);
    });

    star5.addEventListener("click", function() {
        setStars(5);
    });


});

function setStars(index) {
    for(i = index; i >= 1; i--) {
        star = document.getElementById(`star${i}`);
        star.style.background = "#2596be";
    }
}
