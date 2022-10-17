import { productoServices } from "../servicios/productos-servicios.js";

const nuevoProducto = (name, price, imageUrl) => {

    const card = document.createElement("div");
    const contenido = `
    <div>
        <img src="${imageUrl}" alt=""> 
        <h3>${name}</h3>
        <p>${price}</p>
        <a href="">Ver producto</a> 
    </div>

    `;
    /* llamamos a la card */
    card.innerHTML = contenido;
    card.classList.add("card");
    return card;
};

const productos = document.querySelector("[datos-productos]")

/* trabajamos con las promesas */
const render = async () => {
    try {
        const listaProductos = await productoServices.listaProductos()
        listaProductos.forEach(elemento => {
            productos.appendChild(nuevoProducto(elemento.name,elemento.price,elemento.imageUrl))
        });
    }catch(error){
        console.log(error)
    }
}

render()