window.addEventListener('DOMContentLoaded', (event) => {


    chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
        document.getElementById('title-input').value = tabs[0].title;
        document.getElementById("link-input").value = tabs[0].url;
    });

});