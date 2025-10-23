const productos = [
    {
    nombre: 'Camisa local Barcelona 25/26',
    descripcion: 'Camisa del Futbol Club Barcelona de la temporada 2025/2026',
    precio: 1700,
    imagen: 'img1.jpg',
    },
    {
    nombre: 'Balon Trionda Mundial 2026',
    descripcion: 'Balon de Futbol Trionda del proximo mundial del 2026 (tamano 5)',
    precio: 2000,
    imagen: 'img2.jpg'
    },
    {
    nombre: 'Camisa local PSG',
    descripcion: 'Camisa local del PSG temporada 2025/2026',
    precio: 1700,
     imagen: 'img3.jpg'
    }, 
    {
    mombre: 'Camisa local Real Madrid 25/26',
    descripcion: 'Camisa local del Real Madrid temporada 2025/2026',
    precio: 1700,
    imagen: 'img4.jpg'
    }
    ];
    const catalogo = document.getElementById('catalogo');
function crearTarjetaProducto(producto) {
const card = document.createElement('div');
card.className = 'producto-card';
const imagen = document.createElement('img');
imagen.src = producto.imagen;
imagen.alt = producto.nombre;
const titulo = document.createElement('h2');
titulo.textContent = producto.nombre;
const descripcion = document.createElement('p');
descripcion.textContent = producto.descripcion;
const precio = document.createElement('span');
precio.className = 'precio';
precio.textContent = `$${producto.precio.toFixed(2)}`;
const boton = document.createElement('button');
boton.className = 'btn-comprar';
boton.textContent = 'Comprar';
card.appendChild(imagen);
card.appendChild(titulo);
card.appendChild(descripcion);
card.appendChild(precio);
card.appendChild(boton);
return card;
}
function renderizarCatalogo() {
    productos.forEach(producto => {
    const tarjeta = crearTarjetaProducto(producto);
    catalogo.appendChild(tarjeta);
    });
    }
    window.onload = renderizarCatalogo;