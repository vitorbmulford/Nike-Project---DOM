const snkr1 = document.querySelector(".sneaker-1 img");
const snkrVerde = document.querySelector(".sneaker-1-copia img");
const snkr2 = document.querySelector(".sneaker-2 img");
const snkr3 = document.querySelector(".sneaker-3 img");
const snkr4 = document.querySelector(".sneaker-4 img");
const titulo = document.querySelector(".product-title");

snkrVerde.addEventListener("click", () => {
  snkr1.src = snkrVerde.src;
  snkr1.parentElement.style.backgroundColor = "rgb(2, 54, 28)";
  titulo.innerHTML = `Nike Dunk <br /> Green`;
});

snkr2.addEventListener("click", () => {
  snkr1.src = snkr2.src;
  snkr1.parentElement.style.backgroundColor = "rgb(107, 107, 107)";
  titulo.innerHTML = `Nike Dunk <br /> White`;
});

snkr3.addEventListener("click", () => {
  snkr1.src = snkr3.src;
  snkr1.parentElement.style.backgroundColor = "rgb(58, 29, 16)";
  titulo.innerHTML = `Nike Dunk <br /> Cacau`;
});

snkr4.addEventListener("click", () => {
  snkr1.src = snkr4.src;
  snkr1.parentElement.style.backgroundColor = "rgb(93, 153, 140)";
  titulo.innerHTML = `Nike Dunk <br /> Ice`;
});
