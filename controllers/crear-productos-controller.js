import { productoServices } from "../servicios/productos-servicios.js";

const form = document.querySelector("[data-form]");


form.addEventListener("submit", (evento) => {
    evento.preventDefault();
    const nombre = document.querySelector("[data-nome]").value;
    const url = document.querySelector("[data-url]").value;
    const description = document.querySelector("[data-descricao]").value;
    const precio = document.querySelector("[data-preco]").value;

    productoServices.creaProducto(nombre, url, precio, description).then(respuesta => {
        window.location.href = "/index.html"
        alert("EL PRODUCTO FUE CREADO CON EXITO")

        console.log(respuesta)
    }).catch(error => {
        console.log(error)
    });

});