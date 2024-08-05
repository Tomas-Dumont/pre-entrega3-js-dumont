function agregarAlCarrito(producto) {
    // Obtener los productos almacenados en localStorage
    let productosStorage = localStorage.getItem("libreria");
    productosStorage = productosStorage ? JSON.parse(productosStorage) : [];

    console.log(productosStorage);

    // Encontrar el índice del producto en el almacenamiento
    const indiceProducto = productosStorage.findIndex(librerias => librerias.id === producto.id);
    console.log(indiceProducto);

    // Si el producto no existe en el almacenamiento, agregarlo
    if (indiceProducto === -1) {
        productosStorage.push(getNuevoProductoMemoria(producto));
    } else {
        // Si el producto ya existe, incrementar su cantidad
        productosStorage[indiceProducto].cantidad++;
    }

    // Guardar el array actualizado en localStorage
    localStorage.setItem("libreria", JSON.stringify(productosStorage));
    actualizarCuentaCarrito();
}

function getNuevoProductoMemoria(producto) {
    // Crear un nuevo objeto de producto con la cantidad inicial de 1
    return {
        id: producto.id,
        nombre: producto.nombre,
        cantidad: 1
    };
};

function actualizarCuentaCarrito() {
    const productosStorage = localStorage.getItem("libreria");
    const productosArray = productosStorage ? JSON.parse(productosStorage) : [];
    const cuentaCarrito = productosArray.reduce((acc, producto) => acc + producto.cantidad, 0);
    document.getElementById("cuenta-carrito").textContent = cuentaCarrito;
}

