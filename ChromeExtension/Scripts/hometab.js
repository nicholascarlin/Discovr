document.addEventListener("DOMContentLoaded", function(event) {

let btn = document.getElementById("submit-button");

btn.addEventListener("click", active);

function active() {
  btn.classList.toggle("is_active");
  setTimeout(inactive, 2000);
}

function inactive() {
    btn.classList.toggle("is_active");
}

});