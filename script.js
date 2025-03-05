document.addEventListener("DOMContentLoaded", () => {
    const productos = [
        { nombre: "Producto 1", precio: "$10", imagen: "Imagenes/producto1.webp" },
        { nombre: "Producto 2", precio: "$20", imagen: "Imagenes/producto2.webp" },
        { nombre: "Producto 3", precio: "$30", imagen: "Imagenes/producto3.png" }
    ];

    const contenedorProductos = document.getElementById("productos-container");
    
    // Limpiar productos existentes antes de agregar nuevos
    contenedorProductos.innerHTML = "";

    productos.forEach(producto => {
        const productoDiv = document.createElement("div");
        productoDiv.classList.add("producto");

        productoDiv.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}">
            <h3>${producto.nombre}</h3>
            <p>Precio: ${producto.precio}</p>
            <button>Agregar al Carrito</button>
        `;

        contenedorProductos.appendChild(productoDiv);
    });
});
