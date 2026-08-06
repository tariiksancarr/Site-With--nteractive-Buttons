let button =document.getElementById("button");
let music = document.getElementById("bg-music");

button.addEventListener("click", function() {
    let RandomRenk = "#" + Math.floor(Math.random() *16777215).toString(16).padStart(6, "0");
    document.body.style.backgroundColor = RandomRenk;
    button.innerHTML = "Awesome, press again!";
    music.
    music.play();
    
});