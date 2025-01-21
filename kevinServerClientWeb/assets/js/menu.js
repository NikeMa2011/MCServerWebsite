document.getElementById("menu").innerHTML = menuHTML;

window.addEventListener("keydown", function(event) {
    if(event.key == '/') {
        window.location.href = "main.html";
    }
});