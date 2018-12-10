var small = true

function resizeSB() {
  if (small == true) {
    document.getElementById("grid-container").style.animationName = "expandSidebar";
    document.getElementById("grid-container").style.animationDuration = "0.1s";
    document.getElementById("grid-container").style.gridTemplateColumns = "200px auto";
    document.getElementById("resizeButton").innerHTML = '<i class="fas fa-2x fa-arrow-left"></i>';
    document.getElementById("logo").innerHTML = '<b>One</b>Plan';
    small = false;
  } else {
    document.getElementById("grid-container").style.animationName = "minimizeSidebar";
    document.getElementById("grid-container").style.animationDuration = "0.1s";
    document.getElementById("grid-container").style.gridTemplateColumns = "50px auto";
    document.getElementById("resizeButton").innerHTML = '<i class="fas fa-2x fa-arrow-right"></i>';
    document.getElementById("logo").innerHTML = '<b>O</b>P';
    small = true;
  }
};
