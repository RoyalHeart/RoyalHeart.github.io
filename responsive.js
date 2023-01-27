function responsiveNavigation() {
  var x = document.getElementById("nav");
  console.log(x);
  if (x.className === "navigation") {
    x.className += " responsive";
  } else {
    x.className = "navigation";
  }
}
