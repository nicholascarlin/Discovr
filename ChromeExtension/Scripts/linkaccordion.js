document.addEventListener("DOMContentLoaded", function(event) {

    let linkTabs = document.getElementsByClassName("link-tab");
    let i;
    
    for(i = 0; i < linkTabs.length; i++) {
        linkTabs[i].addEventListener("click", function() {
            console.log("Method Called");

            this.classList.toggle("active");
        });
    }
});