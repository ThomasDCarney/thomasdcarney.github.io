var overlay = document.getElementById("headerOverlay");
var condensed = overlay.classList.contains("condensed");

document.addEventListener("scroll", function() {

    if(!condensed && window.pageYOffset > 25) {

        headerOverlay.classList.add("condensed");
        condensed = !condensed;

    } else if(condensed && window.pageYOffset <= 25) {

        headerOverlay.classList.remove("condensed");
        condensed = !condensed;

    }

});
