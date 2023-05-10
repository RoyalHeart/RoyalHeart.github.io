function responsiveNavigation() {
  var x = document.getElementById("nav");
  x.top;
  console.log(x);
  x.classList.toggle("responsive");
}

function setAppearance() {
  var element = document.body;
  var appearance = localStorage.getItem("appearance");
  console.log(appearance);
  if (appearance == "light") {
    element.classList.remove("dark");
  } else if (appearance == "dark") {
    element.classList.add("dark");
  }
}
function toggleDarkMode() {
  var element = document.body;
  var appearance = localStorage.getItem("appearance");
  if (appearance == null) {
    localStorage.setItem("appearance", "light");
    appearance = "light";
  }
  if (appearance == "light") {
    localStorage.setItem("appearance", "dark");
    element.classList.add("dark");
  } else if (appearance == "dark") {
    localStorage.setItem("appearance", "light");
    element.classList.remove("dark");
  }
}
