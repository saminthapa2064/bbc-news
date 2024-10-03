document.getElementById("menu-btn").addEventListener("click", function(){
    document.querySelector("#menu").classList.add("visible");
    document.getElementById("close-btn").style.display="inline-block";
    document.getElementById("menu-btn").style.display="none";
});




document.getElementById("close-btn").addEventListener("click", function(){
    document.querySelector("#menu").classList.remove("visible");
    document.getElementById("close-btn").style.display="none";
    document.getElementById("menu-btn").style.display="inline-block";
});


document.getElementById("drop-link").addEventListener("click", function(){
    document.getElementById("dropdown").classList.toggle("visible");
})
