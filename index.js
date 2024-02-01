const header__buttons = document.querySelector("#header__buttons");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click",() => {
    header__buttons.classList.add("header__Buttons-visible");
})

cerrar.addEventListener("click",() => {
    header__buttons.classList.remove("header__Buttons-visible");
})