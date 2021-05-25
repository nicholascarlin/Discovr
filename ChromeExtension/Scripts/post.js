window.addEventListener('DOMContentLoaded', (event) => {

    saveButton = document.getElementById("save-button");

    saveButton.addEventListener("click", function() {
        let post = {
            //type = 
            title : document.getElementById("title-input").value,
            link : document.getElementById("link-input").value
        };

        resetValues();

    });
});

function resetValues() {
    document.getElementById("title-input").value = "";
    document.getElementById("link-input").value = "";
}