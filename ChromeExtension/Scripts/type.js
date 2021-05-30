window.addEventListener('DOMContentLoaded', (event) => {
    
    let input = document.getElementById("type-input");

    input.addEventListener("keypress", function(e){

        if(e.key === "Enter") {
            var isInputEvent = (Object.prototype.toString.call(e).indexOf("InputEvent") > -1);

        if(!isInputEvent)
            console.log("Selected: " + e.target.value);
            AddElement(e.target.value);
        }
        }
    
        , false);
});

function AddElement(text) {
    let menu = document.getElementById("type-menu");

    let entry = document.createElement('li');
    let span = document.createElement('span');

    span.setAttribute('class', 'close');
    span.innerHTML = "x";

    entry.innerHTML = text;
    entry.appendChild(span);
    entry.classList.add("type");

    menu.appendChild(entry);
}