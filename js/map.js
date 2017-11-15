
/* Toggle "hidden" class for current element */
function toggleHidden(currentElement) {
  if (currentElement.classList.contains("hidden")) {
    currentElement.classList.remove("hidden");
  } else {
    currentElement.classList.add("hidden");
  }
}


/* Toggle Layer Selection Window */
var toggleLayers = function toggleLayers(event) {
  var arrowNode = event.currentTarget.getElementsByClassName("fa")[0];
  if (arrowNode.classList.contains("fa-arrow-right")) {
    arrowNode.classList.remove("fa-arrow-right");
    arrowNode.classList.add("fa-arrow-left");
  } else {
    arrowNode.classList.remove("fa-arrow-left");
    arrowNode.classList.add("fa-arrow-right");
  }
  toggleHidden(document.getElementById("layer-select"));
}

/* Toggle orange logos in hamburger menu */
var colorOn = function colorOn(event) {
  var logo = event.currentTarget.getElementsByTagName("I")[0];
  logo.style["color"] = "#DC4405";
}
var colorOff = function colorOff(event) {
  var logo = event.currentTarget.getElementsByTagName("I")[0];
  logo.style["color"] = "#fff";
}

/* Toggle orange logos in layer select menu */
var svgColorOn = function svgColorOn(event) {
  var current = event.currentTarget.getElementsByTagName("I")[0];
  current.setAttribute("data-prev-color", current.style["color"]);
  current.style["color"] = "#DC4405";
}
var svgColorOff = function svgColorOff(event) {
  var current = event.currentTarget.getElementsByTagName("I")[0];
  current.style["color"] = current.getAttribute("data-prev-color");
}

/* Toggle Hamburger Menu */
var toggleMenu = function toggleMenu(event) {
  toggleHidden(document.getElementById('hamburger-menu'));
}

/* Listener for layer select */
var layerSelect = document.getElementById('layer-select-button');
layerSelect.addEventListener("click", toggleLayers);

/* Listener for hamburger menu button */
var menu = document.getElementById('menu');
menu.addEventListener("click", toggleMenu);

/* Color Change Listener for links in hamburger menu */
var hamburgerMenu = document.getElementById('hamburger-menu');
for (var i = 0; i < hamburgerMenu.getElementsByTagName("A").length; i++) {
  hamburgerMenu.getElementsByTagName("a")[i].addEventListener("mouseover", colorOn);
  hamburgerMenu.getElementsByTagName("a")[i].addEventListener("mouseout", colorOff);
}

/* Color Change Listener for layer-select links */
var layerSelect = document.getElementsByClassName("layer-choice");
for (var i = 0; i < layerSelect.length; i++) {
  layerSelect[i].addEventListener("mouseover", svgColorOn);
  layerSelect[i].addEventListener("mouseout", svgColorOff);
}
