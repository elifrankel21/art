
function dealWithClasses(thingClicked) {
  $(".modal").addClass("block");


}

// This will figure out which is which.
$(".gallery").click(function(event) {
  var text = event.target.id;
  var thing_clicked_src = document.getElementById(text).src;
  dealWithClasses(thing_clicked_src)
  console.log(thing_clicked_src)
});


// change
/* https://coolors.co/30343f-fafaff-e4d9ff-273469-1e2749*/
/* #30343f #FAFAFF #e4d9ff #273469 #1E2749*/
function myFunction() {
  var x = Math.floor(Math.random() * 256);
  var y = Math.floor(Math.random() * 256);
  var z = Math.floor(Math.random() * 256);
  var bgColor = "rgb(" + x + "," + y + "," + z + ")";
  console.log(bgColor);

  document.body.style.background = bgColor;
};


window.onclick = function(event) {
  // console.log(event.target)
  if (event.target == document.getElementById("modal")) {
    modal.style.display = "none";
    $(".modal").removeClass("block")
  }
}

// rotate images
var element = document.getElementById("gallery-2");
element.classList.add("a.rotate-1");