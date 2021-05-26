window.addEventListener('DOMContentLoaded', (event) => {


    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        console.log(tabs[0].url);
        document.getElementById("link-input").value = tabs[0].url;
    });

});