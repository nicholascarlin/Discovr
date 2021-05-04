window.addEventListener('DOMContentLoaded', (event) => {
    
    document.getElementById('hamburger-menu-button').addEventListener("click", function() {
        
        let hButton = document.getElementById('hamburger-menu-button');
        let bg = document.getElementById('bg');

        if(hButton.classList.contains('hb-active')) {
            console.log("Contais");
            hButton.classList.remove("hb-active");
            bg.style.visibility = "hidden";
            bg.style.opacity = 0;
        } else {
            console.log("does ot contati");
            hButton.classList.add("hb-active");
            bg.style.visibility = "visible";
            bg.style.opacity = .6;
        }
    })
});