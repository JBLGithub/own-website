
function headerClicked() {
    var header = document.getElementById("header");
    var links = document.getElementById("headerlinks");
    var main = document.getElementById("main");
    if (links.style.display == "flex") {
        links.style.display = "none";
        header.style.height = "10vh";
        main.style.display = "block";
    } else {
        links.style.display = "flex";
        header.style.height = "100vh";
        main.style.display = "none";
    }
}

function linkClicked() {
    var header = document.getElementById("header");
    var links = document.getElementById("headerlinks");
    var main = document.getElementById("main");
    if (window.innerWidth < 800){
        links.style.display = "none";
        header.style.height = "10vh";
        main.style.display = "block";
    }
}