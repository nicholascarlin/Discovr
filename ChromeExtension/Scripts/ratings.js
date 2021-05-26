window.addEventListener('DOMContentLoaded', (event) => {

    star1 = document.getElementById("star1");
    star2 = document.getElementById("star2");
    star3 = document.getElementById("star3");
    star4 = document.getElementById("star4");
    star5 = document.getElementById("star5");

    index = 0;

    star1.addEventListener("click", function() {
        if(index == 1) {
            clearStars();
        } else {
            index = 1;
            setStars(1);
        }
    });

    star2.addEventListener("click", function() {
        if(index == 2) {
            clearStars();
        } else {
            index = 2;
            setStars(2);
        }
    });

    star3.addEventListener("click", function() {
        if(index == 3) {
            clearStars();
        } else {
            index = 3;
            setStars(3);
        }
    });

    star4.addEventListener("click", function() {
        if(index == 4) {
            clearStars();
        } else {
            index = 4;
            setStars(4);
        }
    });

    star5.addEventListener("click", function() {
        if(index == 5) {
            clearStars();
        } else {
            index = 5;
            setStars(5);
        }
    });


});

function setStars(index) {

    for(i = index; i >= 1; i--) {
        star = document.getElementById(`star${i}`);
        star.style.background = "#0084ff";
    }

    for(i = index + 1; i <= 5; i++) {
        star = document.getElementById(`star${i}`);
        star.style.background = "#b9b9b9";
    }
}

function clearStars() {

    for(i = 1; i <= 5; i++) {
        star = document.getElementById(`star${i}`);
        star.style.background = "#b9b9b9";
    }

    index = 0;
}
