const contenedorTarjetas = document.getElementById("productos-container");


function crearTarjetasProductosInicio(productos){
  productos.forEach(producto => {
    const productCard = document.createElement("div");
    productCard.classList = "tarjeta-producto"
    productCard.innerHTML = `
    <img src="./img/productos/${producto.id}.png">
    <h3>${producto.nombre}</h3>
    <p>${producto.precio}</p>
    <button>Comprar</button>
    `
    
    contenedorTarjetas.appendChild(productCard);
    productCard.getElementsByTagName("button")[0].addEventListener("click", () => agregarAlCarrito(producto));
  });
};
crearTarjetasProductosInicio(libreria);