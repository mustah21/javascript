
const targetimage = document.getElementById("target")
const triggerimage = document.getElementById("trigger")

triggerimage.addEventListener("mouseover", function() {
  targetimage.src = "picB.jpg";

})

triggerimage.addEventListener("mouseout", function() {
  targetimage.src = "picA.jpg";

})