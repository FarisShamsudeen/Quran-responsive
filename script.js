// navbar hide
var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("headerContainerPositionFixed").style.top = "0";
  } else {
    document.getElementById("headerContainerPositionFixed").style.top = "-65px";
  }
  prevScrollpos = currentScrollPos;
}