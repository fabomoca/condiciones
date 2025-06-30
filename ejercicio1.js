const imagen = document.querySelector("#hulk-img");

imagen.addEventListener("click", () => {
  if (imagen.style.border) {
    imagen.style.border = "";
  } else {
    imagen.style.border = "10px solid green";
  }
});
