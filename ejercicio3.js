for (let i = 1; i <= 9; i++) {
  document.querySelector("#digito1").innerHTML += `<option value="${i}">${i}</option>`;
  document.querySelector("#digito2").innerHTML += `<option value="${i}">${i}</option>`;
  document.querySelector("#digito3").innerHTML += `<option value="${i}">${i}</option>`;
}

function verificar() {
  const d1 = document.querySelector("#digito1").value;
  const d2 = document.querySelector("#digito2").value;
  const d3 = document.querySelector("#digito3").value;

  const password = d1 + d2 + d3;

  const resultado = document.querySelector("#resultado");

  if (password === "911") {
    resultado.innerHTML = "password 1 correcto";
  } else if (password === "714") {
    resultado.innerHTML = "password 2 correcto";
  } else {
    resultado.innerHTML = "password incorrecto";
  }
}
