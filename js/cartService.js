function agregarAlCarrito (producto) {
    const memoria = JSON.parse(localStorage.getItem ("libreria"));
    console.log (memoria);
    if (!memoria) {
        const nuevoProducto = getNuevoProductoMemoria(producto);
        localStorage.setItem("libreria", JSON.stringify([nuevoProducto]));
    } else{
        const indiceProducto = memoria.findIndex(librerias => librerias.id === producto.id);
        console.log(indiceProducto); 
        const nuevaMemoria = memoria;
        if (indiceProducto === -1) {
            nuevaMemoria.push(getNuevoProductoMemoria(producto));
        }else{
            nuevaMemoria[indiceProducto].cantidad ++;
        }
        localStorage.setItem("libreria", JSON.stringify(nuevaMemoria));
    }
    actualizarNumeroCarrito();  
}

// Toma un producto, le agrega cantidad 1 y lo devuelve
function getNuevoProductoMemoria (producto){
    const nuevoProducto = producto;
    nuevoProducto.cantidad = 1;
    return nuevoProducto;
}

function actualizarNumeroCarrito () {
    const memoria = JSON.parse(localStorage.getItem ("libreria"));
    const cuenta = memoria.reduce ((acum, current) => acum+current.cantidad,0);
}
