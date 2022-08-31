const productos = [
    { id: 1, nombre: "hamburguesa", precio: 1300, img: "./img/hamburguesa.jpg" },
    { id: 2, nombre: "milanesa", precio: 1200, img: "./img/milanesa.jpg" },
    { id: 3, nombre: "pizza", precio: 950, img: "./img/pizza.jpg" },
    { id: 4, nombre: "ravioes", precio: 750 },
    { id: 5, nombre: "picada", precio: 2200 },
    { id: 6, nombre: "lomito", precio: 1300 },
    { id: 7, nombre: "panchos", precio: 430 },
    { id: 8, nombre: "sorrentinos", precio: 800 },
    { id: 9, nombre: "ravioles", precio: 950 },
    { id: 10, nombre: "plato principal", precio: 1150 },

];

let cantindadCarrito = 0;
const carrito = [];


const productoCatalogoHTML = (producto) => {
    return `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src=${producto.img} class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${producto.nombre}</h3>
                      <p class="card-text">${producto.precio}</p>
                      <button id="btn-catalogo-${producto.id}" class="btn btn-success">agregar</button> 
                    </div>
                  </div> 
            </div> `;
};

const productoCarritoHTML = (producto) => {
    return `
            <div class="col">
                <div class="card" style="width: 18rem;">
                    <img src="./img/hamburguesa.jpg" class="card-img-top" alt="...">
                    <div class="card-body">
                      <h3 class="card-title">${producto.nombre}</h3>
                      <button id="btn-carrito-${producto.idCompra}" class="btn btn-danger">eliminar</button> 
                    </div>
                  </div> 
            </div>`;
};

const mostrarCatalogo = () => {
    const catalogoNodo = document.getElementById("catalogo");
    let catalogoHTML = "";

    for (const producto of productos) {
        catalogoHTML += productoCatalogoHTML(producto);
    }

    catalogoNodo.innerHTML = catalogoHTML;
    botonCatalogo();
};
const mostrarCarrito = () => {
    const carritoNodo = document.getElementById("carrito");
    let carritoHTML = "";

    for (const producto of productos) {
        carritoHTML += productoCarritoHTML(producto);
    }

    carritoNodo.innerHTML = carritoHTML;
    botonCarrito();

};

const botonCatalogo = () => {
    for (const producto of productos) {
        const botonId = `btn-catalogo-${producto.id}`;
        const botonNodo = document.getElementById(botonId);

        botonNodo.addEventListener("click", () => {
            const productoCarrito = {
                nombre: producto.nombre,
                idCompra: cantindadCarrito,
            };

    cantindadCarrito += 1;
    carrito.push(productoCarrito);
    mostrarCarrito();
        });
    }
};


const botonCarrito = () => {
    for (const producto of carrito) {
        const botonId = `btn-carrito-${producto.idCompra}`;
        const botonNodo = document.getElementById(botonId);

        botonNodo.addEventListener("click", () => {
            const index = carrito.findIndex((p) => p.idCompra == producto.idCompra);
            carrito.splice(index, 1);
            mostrarCarrito();
        });
    }
};

mostrarCatalogo();




