function verificar() {

  const s1 = Number(document.querySelector("#sticker1").value);
  const s2 = Number(document.querySelector("#sticker2").value);
  const s3 = Number(document.querySelector("#sticker3").value);

  const total = s1 + s2 + s3;

  const resultado = document.querySelector("#resultado");

  if (total <= 10) {
    resultado.innerHTML = `Llevas ${total} stickers`;
  } else {
    resultado.innerHTML = "Llevas demasiados stickers";
  }
}
