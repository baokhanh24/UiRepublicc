var nameInput = document.querySelector(".name");
var emailInput = document.querySelector(".email");
var submitButton = document.querySelector(".submitButton");

function checkInputs() {
  if (nameInput.value.trim() !== "" && emailInput.value.trim() !== "") {
    submitButton.removeAttribute("disabled");
  } else {
    submitButton.setAttribute("disabled", "disabled");
  }
}

nameInput.addEventListener("input", checkInputs);
emailInput.addEventListener("input", checkInputs);

//menu

function toggleMenu() {
  var iconMenu = document.querySelector(".icon_menu");
  var iconDelete = document.querySelector(".icon_delete");
  var navResponsive = document.querySelector(".nav_reponsive");

  if (iconMenu.style.display === "none") {
    iconMenu.style.display = "block";
    iconDelete.style.display = "none";
    navResponsive.style.display = "none";
  } else {
    iconMenu.style.display = "none";
    iconDelete.style.display = "block";
    navResponsive.style.display = "block";
  }
}
