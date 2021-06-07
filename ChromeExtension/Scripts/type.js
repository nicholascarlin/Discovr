window.addEventListener('DOMContentLoaded', (event) => {
    
    let input = document.getElementById("type-input");

    input.addEventListener("keypress", function(e){

        if(e.key === "Enter" && document.getElementById("type-input").value != "") {
            var isInputEvent = (Object.prototype.toString.call(e).indexOf("InputEvent") > -1);

            if(CheckDuplicates(e.target.value)) {
                if(!isInputEvent) {
                    AddElement(e.target.value);
                    UpdateCloseEventListeners();
                    e.target.value = "";
                }
            }
        }
    }, false);
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

function RemoveDatalistOption(text) {

}

function CheckDuplicates(text) {

    let types = document.getElementsByClassName("type");

    for(let i = 0; i < types.length; i++) {
        
        var spanPattern = '<span class="close">x</span>';
        var str = (types[i].innerHTML.toString());

        var truncateAfter = function(str, spanPattern) {
            return str.slice(0, str.indexOf(spanPattern));
        };

        var addedText = (truncateAfter(str, spanPattern));

        if(addedText.toUpperCase() === text.toUpperCase()) {
            return false;
        }
    }

    return true;
}

function UpdateCloseEventListeners() {

    let closeButtons = document.getElementsByClassName("close");

    for(let i = 0; i < closeButtons.length; i++) {
        closeButtons[i].addEventListener("click", function(e) {
            e.currentTarget.parentNode.remove();
        });
    }
}