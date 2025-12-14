var loader = document.getElementById("preloader");
window.addEventListener("load", function () {
  loader.style.display = "none";
});

//Fade out, optional
var s = document.getElementById("preloader").style;
s.opacity = 1;
(function fade() {
  (s.opacity -= 0.1) < 0 ? (s.display = "none") : setTimeout(fade, 40);
})();