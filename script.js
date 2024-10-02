
$(".card").tilt({
  maxTilt: 5,
  perspective: 1400,
  easing: "cubic-bezier(.03,.98,.52,.99)",
  speed: 1200,
  glare: false,
  maxGlare: 0,
  scale: 1.01
});


var printerbtn = document.getElementById("3dprinterlink");
var chembtn = document.getElementById("chemlink");
var gdbtn = document.getElementById("gdlink");
var roboticsbtn = document.getElementById("roboticslink");
var vwbtn = document.getElementById("vwlink");
var thiokolbtn = document.getElementById("thiokollink");

var modalopen

// Get the button that opens the modal
var btn = document.getElementById("3dprinterlink");



// When the user clicks on the button, open the modal
printerbtn.onclick = function () {
  document.getElementById("3dprinter").style.display = "block";
  setTimeout(() => {
    modalopen = "3dprinter"
    document.getElementById(modalopen + "content").style.scale = "1"
    document.getElementById(modalopen + "content").style.opacity = "1"
  }, 200);
}
chembtn.onclick = function () {
  document.getElementById("chem").style.display = "block";
  setTimeout(() => {
    modalopen = "chem"
    document.getElementById(modalopen + "content").style.scale = "1"
    document.getElementById(modalopen + "content").style.opacity = "1"
  }, 200);
}
gdbtn.onclick = function () {
  document.getElementById("gd").style.display = "block";
  setTimeout(() => {
    modalopen = "gd"
    document.getElementById(modalopen + "content").style.scale = "1"
    document.getElementById(modalopen + "content").style.opacity = "1"
  }, 200);
}
roboticsbtn.onclick = function () {
  document.getElementById("robotics").style.display = "block";
  setTimeout(() => {
    modalopen = "robotics"
    document.getElementById(modalopen + "content").style.scale = "1"
    document.getElementById(modalopen + "content").style.opacity = "1"
  }, 200);
}
vwbtn.onclick = function () {
  document.getElementById("vw").style.display = "block";
  setTimeout(() => {
    modalopen = "vw"
    document.getElementById(modalopen + "content").style.scale = "1"
    document.getElementById(modalopen + "content").style.opacity = "1"
  }, 200);
}
thiokolbtn.onclick = function () {
  document.getElementById("thiokol").style.display = "block";
  setTimeout(() => {
    modalopen = "thiokol"
    document.getElementById(modalopen + "content").style.scale = "1"
    document.getElementById(modalopen + "content").style.opacity = "1"
  }, 200);
}

// When the user clicks on <span> (x), close the modal

var spans = document.getElementsByClassName("close");
for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  span.onclick = function () {
    document.getElementById(modalopen + "content").style.scale = "0"
    document.getElementById(modalopen + "content").style.opacity = "0"
    console.log("hello!")
    setTimeout(function () {
      document.getElementById(modalopen).style.display = "none";
      modalopen = ""
    }, 200)
  }
} 

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == document.getElementById(modalopen) && modalopen != "") {
    document.getElementById(modalopen + "content").style.scale = "0"
    document.getElementById(modalopen + "content").style.opacity = "0"
    console.log("yay!")
    setTimeout(function () {
      document.getElementById(modalopen).style.display = "none";
      modalopen = ""
    }, 200)
  }
}