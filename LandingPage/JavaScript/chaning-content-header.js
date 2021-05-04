window.addEventListener('DOMContentLoaded', (event) => {
    let text = document.getElementById("changing-content-header");

    let headerArray = ["Crowdsourced curation for... everything", "We live in an information overload... we're changing that", "The world's first social discovery platform", "Changing the way you discover new information"];

    let textIndex = Math.floor(Math.random() * headerArray.length);

    setInterval(function(){ 
        text.innerHTML = headerArray[textIndex];

        if(textIndex >= headerArray.length - 1) {
            textIndex = 0;
        } else {
            textIndex++;
        }
    }, 10000);

});