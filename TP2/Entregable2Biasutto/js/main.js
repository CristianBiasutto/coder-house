//lista de productos
const productos = [
    { categoria: "accesorio_auto", nombre: "Aspiradora de Auto", precio: 45000, descripcion: "Compacta y potente, ideal para limpiar tu vehículo.", imagen: "img/accesorio_auto/aspiradora/aspiradora-1-a.webp", descripcionExtendida: "Esta aspiradora portátil para auto ofrece gran potencia de succión en un diseño compacto. Ideal para eliminar suciedad, migas y polvo de asientos, alfombras y rincones difíciles. Funciona conectándola al encendedor del coche, perfecta para mantener tu vehículo impecable en todo momento." },
    { categoria: "accesorio_auto", nombre: "Bolso para el Auto", precio: 30000, descripcion: "Organizador de múltiples compartimentos para tu coche.", imagen: "img/accesorio_auto/bolso/bolso-1-a.webp", descripcionExtendida: "Este bolso organizador es ideal para mantener el interior de tu auto ordenado. Cuenta con varios compartimentos para guardar objetos pequeños, botellas, documentos y más. Se coloca fácilmente en el respaldo del asiento y es perfecto para viajes largos o el uso diario." },
    { categoria: "accesorio_auto", nombre: "Cubre Volante para el Auto", precio: 15000, descripcion: "Mejora el agarre y protege el volante del desgaste.", imagen: "img/accesorio_auto/volante/volante-1-a.webp", descripcionExtendida: "Este cubre volante antideslizante mejora el agarre mientras manejas, aportando mayor seguridad. Además, protege el volante del desgaste diario y le da un toque de estilo al interior de tu vehículo. Fabricado con materiales resistentes y fáciles de limpiar." },
    { categoria: "decoracion", nombre: "Cuadro DBZ a color", precio: 40000, descripcion: "Cuadro decorativo de Dragon Ball Z a todo color para fanáticos.", imagen: "img/decoracion/cuadro/cuadro-1-a.webp", descripcionExtendida: "Este cuadro de Dragon Ball Z a color es ideal para decorar espacios con estilo geek. Presenta una impresión de alta calidad de tus personajes favoritos, perfecto para dormitorios, salas de estar o zonas de gaming. Un regalo ideal para cualquier fan de la saga." },
    { categoria: "decoracion", nombre: "Cuadro DBZ Goku negro", precio: 38000, descripcion: "Cuadro en blanco y negro de Goku, ideal para decorar tu espacio geek.", imagen: "img/decoracion/cuadro/cuadro-2-a.webp", descripcionExtendida: "Con un estilo minimalista en blanco y negro, este cuadro de Goku añade carácter a cualquier ambiente. Su diseño moderno lo convierte en una excelente opción para oficinas, habitaciones juveniles o coleccionistas del universo Dragon Ball." },
    { categoria: "decoracion", nombre: "Mapamundi Planisferio Pared Madera Grabada Negro", precio: 70000, descripcion: "Mapa decorativo de madera grabada, elegante y educativo.", imagen: "img/decoracion/cuadro/cuadro-3-a.webp", descripcionExtendida: "Este mapamundi grabado en madera negra es una pieza decorativa sofisticada y educativa. Ideal para oficinas, salas de estudio o espacios modernos. Sus detalles grabados resaltan las formas de los continentes y océanos, convirtiéndolo en un excelente punto de conversación." },
    { categoria: "decoracion", nombre: "Vinilo para Puerta", precio: 25000, descripcion: "Dale un toque único a tus puertas con diseños personalizados.", imagen: "img/decoracion/vinilo/vinilo-1-a.webp", descripcionExtendida: "Transforma cualquier puerta con este vinilo decorativo autoadhesivo. Fácil de colocar y remover, permite personalizar ambientes con un estilo moderno y único. Ideal para hogares, oficinas o habitaciones juveniles." },
    { categoria: "electrodomestico", nombre: "Batidora Eléctrica", precio: 60000, descripcion: "Prepara tus recetas favoritas con esta batidora de alta potencia.", imagen: "img/electrodomestico/batidora/batidora-1-a.webp", descripcionExtendida: "Esta batidora eléctrica de alto rendimiento es ideal para mezclar, batir y preparar todo tipo de recetas. Cuenta con múltiples velocidades y accesorios intercambiables que facilitan su uso en la cocina, desde postres hasta platos elaborados." },
    { categoria: "electrodomestico", nombre: "Freidora de Aire", precio: 120000, descripcion: "Cocina sin aceite de manera saludable y rápida.", imagen: "img/electrodomestico/freidora/freidora-1-a.webp", descripcionExtendida: "Cocina tus comidas favoritas sin una gota de aceite con esta freidora de aire. Ofrece resultados crujientes y sabrosos, pero con menos grasa. Cuenta con control de temperatura, temporizador y una canasta extraíble fácil de limpiar." },
    { categoria: "electrodomestico", nombre: "Pava Eléctrica", precio: 35000, descripcion: "Hierve agua en segundos con esta pava de diseño elegante.", imagen: "img/electrodomestico/pava/pava-1-a.webp", descripcionExtendida: "Esta pava eléctrica hierve agua en cuestión de minutos, ideal para preparar infusiones, café o mate. Su diseño moderno con apagado automático y base giratoria la hace práctica y segura para el uso diario en cualquier cocina." },
    { categoria: "fitness", nombre: "Banco Fitness", precio: 90000, descripcion: "Banco ajustable para ejercicios en casa o el gimnasio.", imagen: "img/fitness/banco/banco-1-a.webp", descripcionExtendida: "Este banco de musculación es ajustable en múltiples posiciones, ideal para entrenamientos de fuerza como press de banca, abdominales y más. Su estructura resistente y acolchado cómodo lo hacen perfecto para uso doméstico o profesional." },
    { categoria: "fitness", nombre: "Barra Dominadas pared", precio: 40000, descripcion: "Ideal para entrenamiento de fuerza y resistencia.", imagen: "img/fitness/barra/barra-1-a.webp", descripcionExtendida: "Esta barra de dominadas se instala fácilmente en la pared y permite realizar ejercicios de tracción, abdominales y fortalecimiento del tren superior. Ideal para rutinas de calistenia o entrenamiento funcional en casa." },
    { categoria: "fitness", nombre: "Estructura Estacion Dominadas Barra Multifuncional Gimnasio", precio: 180000, descripcion: "Equipo multifunción para dominadas, dips y ejercicios de cuerpo completo.", imagen: "img/fitness/barra/barra-2-a.webp", descripcionExtendida: "Una estación multifuncional robusta que permite realizar dominadas, dips, fondos y más. Perfecta para entrenamientos completos de cuerpo en casa, con estructura estable y soportes acolchados para mayor comodidad." },
    { categoria: "fitness", nombre: "Grip para Muñeca", precio: 20000, descripcion: "Mejora tu agarre y rendimiento en entrenamientos de pesas.", imagen: "img/fitness/grip/grip-1-a.webp", descripcionExtendida: "Estos grips para muñeca ofrecen soporte adicional durante levantamientos pesados. Ayudan a mejorar el agarre, reducir el riesgo de lesiones y aumentar la seguridad en ejercicios como peso muerto, dominadas o remo." },
    { categoria: "fitness", nombre: "Muñequera para el Gym", precio: 18000, descripcion: "Brinda soporte a tus muñecas durante el ejercicio.", imagen: "img/fitness/muñequera/muñequera-1-a.webp", descripcionExtendida: "Muñequeras diseñadas para brindar estabilidad y protección durante entrenamientos exigentes. Son ajustables, cómodas y útiles para prevenir lesiones en ejercicios de fuerza o crossfit." },
    { categoria: "gaming", nombre: "Auriculares", precio: 80000, descripcion: "Sonido envolvente y diseño ergonómico para largas sesiones de uso.", imagen: "img/gaming/auriculares/auriculares-1-a.webp", descripcionExtendida: "Auriculares diseñados para gamers exigentes, con sonido envolvente 7.1, micrófono con cancelación de ruido y almohadillas acolchadas para máxima comodidad durante horas de juego." },
    { categoria: "gaming", nombre: "Notebook", precio: 800000, descripcion: "Rendimiento óptimo para trabajo y entretenimiento.", imagen: "img/gaming/notebook/notebook-1-a.webp", descripcionExtendida: "Notebook versátil con procesador de alto rendimiento, gran capacidad de almacenamiento y gráficos integrados, ideal para trabajo, gaming ligero y consumo multimedia." },
    { categoria: "gaming", nombre: "PC Gamer, procesador Ryzen 5", precio: 1500000, descripcion: "Potente equipo con tarjeta gráfica de última generación.", imagen: "img/gaming/pc/pc-1-a.webp", descripcionExtendida: "PC Gamer de alto rendimiento con procesador Ryzen 5, GPU potente, memoria RAM de última generación y refrigeración avanzada. Diseñada para ofrecer una experiencia fluida en los juegos más exigentes." },
    { categoria: "gaming", nombre: "PC Gamer, motherboard Asus Prime A520M-K A520", precio: 1350000, descripcion: "PC Gamer con placa base Asus A520M-K, excelente para gaming y streaming.", imagen: "img/gaming/pc/pc-2-a.webp", descripcionExtendida: "Computadora diseñada para entusiastas del gaming y el streaming. Incluye motherboard Asus Prime A520M-K, excelente compatibilidad con componentes actuales, y una configuración balanceada entre potencia y estabilidad." },
    { categoria: "gaming", nombre: "Silla Gamer", precio: 200000, descripcion: "Ergonómica y cómoda para largas sesiones de juego.", imagen: "img/gaming/silla/silla-1-a.webp", descripcionExtendida: "Silla gamer con soporte lumbar, reposabrazos ajustables y respaldo reclinable. Ideal para mantener una postura cómoda durante largas sesiones frente al monitor." },
    { categoria: "gaming", nombre: "Silla de escritorio, Gamer, reclinable", precio: 185000, descripcion: "Silla ergonómica y reclinable, ideal para largas jornadas frente a la pantalla.", imagen: "img/gaming/silla/silla-2-a.webp", descripcionExtendida: "Silla con diseño ergonómico y respaldo reclinable que permite ajustar la posición para mayor confort. Excelente para gamers o para quienes trabajan muchas horas frente al PC." },
    { categoria: "gaming", nombre: "Silla escritorio cómoda reclinable para gaming", precio: 190000, descripcion: "Silla con soporte lumbar y diseño cómodo para gamers.", imagen: "img/gaming/silla/silla-3-a.webp", descripcionExtendida: "Silla de escritorio con acolchado premium, soporte lumbar reforzado y sistema reclinable suave. Combinación ideal entre comodidad y estilo gamer." },
    { categoria: "herramienta", nombre: "Kit herramiento completo", precio: 25000, descripcion: "Set completo para cualquier reparación en casa.", imagen: "img/herramienta/herramienta/herramienta-1-a.webp", descripcionExtendida: "Kit multifuncional que incluye llaves, destornilladores, alicates y más. Ideal para reparaciones domésticas, bricolaje o mantenimiento general." },
    { categoria: "herramienta", nombre: "Set De Destornilladores Westul 18pz Philips Planos Imantados", precio: 22000, descripcion: "Set de destornilladores imantados, ideal para trabajos precisos.", imagen: "img/herramienta/herramienta/herramienta-2-a.webp", descripcionExtendida: "Set de 18 piezas con destornilladores planos y Philips, con puntas imantadas para facilitar el trabajo en espacios reducidos. Mango ergonómico para mejor agarre y precisión." },
    { categoria: "herramienta", nombre: "Cambios de cabezales de destornillador", precio: 15000, descripcion: "Set de cabezales intercambiables compatibles con múltiples herramientas.", imagen: "img/herramienta/herramienta/herramienta-3-a.webp", descripcionExtendida: "Juego de cabezales intercambiables para destornilladores eléctricos o manuales. Incluye variedad de puntas para diferentes usos, almacenados en estuche compacto." },
    { categoria: "juguete", nombre: "Bloques de minecraft para Jugar", precio: 35000, descripcion: "Juego educativo y divertido para niños.", imagen: "img/juguete/bloque/bloque-1-a.webp", descripcionExtendida: "Set de bloques inspirado en Minecraft que permite a los niños construir su propio mundo pixelado. Ideal para estimular la creatividad y la motricidad fina." },
    { categoria: "juguete", nombre: "Bloques magnéticos para Jugar", precio: 30000, descripcion: "Bloques imantados para construir y aprender jugando.", imagen: "img/juguete/bloque/bloque-2-a.webp", descripcionExtendida: "Bloques de construcción magnéticos en formas geométricas, ideales para fomentar la lógica, coordinación y la imaginación en niños de todas las edades." },
    { categoria: "juguete", nombre: "Figura Funko Pop Harry Potter brazo sin huesos", precio: 20000, descripcion: "Figura coleccionable de Harry Potter en versión divertida y detallada.", imagen: "img/juguete/funko/funko-1-a.webp", descripcionExtendida: "Figura Funko Pop de Harry Potter en una pose icónica y divertida. Hecha de vinilo, ideal para coleccionistas o fans del universo mágico." },
    { categoria: "juguete", nombre: "Figura Funko Pop Spider-man", precio: 20000, descripcion: "Figura coleccionable de Spider-man con diseño clásico.", imagen: "img/juguete/funko/funko-2-a.webp", descripcionExtendida: "Figura coleccionable de Spider-man en su versión clásica. Ideal para fanáticos del universo Marvel y coleccionistas de figuras Funko." },
    { categoria: "juguete", nombre: "Pelota para Mascotas", precio: 10000, descripcion: "Diversión asegurada para tu mascota.", imagen: "img/juguete/pelota/pelota-1-a.webp", descripcionExtendida: "Pelota resistente y segura para el entretenimiento de tu mascota. Diseñada para juegos activos y para fomentar el ejercicio diario." },
    { categoria: "libro", nombre: "Libro Gabriel Rolón: La Felicidad", precio: 25000, descripcion: "Un análisis profundo sobre la búsqueda de la felicidad.", imagen: "img/libro/libro/libro-1-a.webp", descripcionExtendida: "En este libro, Gabriel Rolón explora la complejidad emocional del ser humano en su camino hacia la felicidad, con relatos terapéuticos y reflexiones profundas." },
    { categoria: "libro", nombre: "Libro Este dolor no es mío de Mark Wolynn", precio: 25000, descripcion: "Explora cómo el trauma heredado puede afectar nuestra vida actual.", imagen: "img/libro/libro/libro-2-a.webp", descripcionExtendida: "Mark Wolynn revela cómo los traumas familiares no resueltos pueden heredarse, y ofrece herramientas terapéuticas para sanar heridas invisibles de generación en generación." },
    { categoria: "libro", nombre: "Libro Brasil intercultural, ciclo báscio 1 e 2", precio: 20000, descripcion: "Material educativo para el aprendizaje intercultural del portugués.", imagen: "img/libro/libro/libro-3-a.webp", descripcionExtendida: "Libro didáctico enfocado en el aprendizaje del portugués en un contexto intercultural. Ideal para docentes y estudiantes del ciclo básico." },
    { categoria: "libro", nombre: "Libro `El Monje que Vendió su Ferrari, una fábula espiritual` de Robin Sharma", precio: 25000, descripcion: "Inspiradora historia sobre la transformación personal y el éxito verdadero.", imagen: "img/libro/libro/libro-4-a.webp", descripcionExtendida: "Una historia inspiradora sobre un exitoso abogado que redescubre la felicidad y el propósito de vida a través de enseñanzas espirituales y prácticas de sabiduría ancestral." },
    { categoria: "ropa", nombre: "Conjunto Ropa Deportiva para Fútbol", precio: 50000, descripcion: "Equipación completa para jugadores y aficionados.", imagen: "img/ropa/futbol/futbol-1-a.webp", descripcionExtendida: "Este conjunto deportivo incluye camiseta, pantalón y medias confeccionadas en materiales livianos y transpirables, ideales para rendir al máximo en el campo de juego. Diseñado para brindar libertad de movimiento y confort, ya seas amateur o profesional." },
    { categoria: "ropa", nombre: "Conjunto de Ropa para Invierno para Hombre", precio: 70000, descripcion: "Abrigo y comodidad en los días fríos.", imagen: "img/ropa/invierno/invierno-1-a.webp", descripcionExtendida: "Conjunto térmico especialmente pensado para los días de bajas temperaturas. Incluye abrigo con interior afelpado y pantalón térmico. Estilo moderno combinado con practicidad para mantener el cuerpo cálido y cómodo durante el invierno." },
    { categoria: "ropa", nombre: "Conjunto de Ropa para Mujer", precio: 65000, descripcion: "Estilo y confort para cualquier ocasión.", imagen: "img/ropa/mujer/mujer-1-a.webp", descripcionExtendida: "Este conjunto femenino combina diseño elegante y materiales suaves al tacto. Perfecto para salidas casuales o uso diario. Corte moderno que realza la figura sin sacrificar comodidad." },
    { categoria: "tecnologia", nombre: "Smartwatch", precio: 150000, descripcion: "Monitoriza tu actividad y recibe notificaciones en tu muñeca.", imagen: "img/tecnologia/smartwatch/smartwatch-1-a.webp", descripcionExtendida: "Reloj inteligente multifunción que permite monitorear tu ritmo cardíaco, pasos, calorías quemadas y mucho más. Recibe notificaciones de mensajes, llamadas y redes sociales. Compatible con Android y iOS. Diseño elegante y resistente al agua." },
    { categoria: "tecnologia", nombre: "Smartwatch, poco uso", precio: 120000, descripcion: "Smartwatch usado en excelentes condiciones, con funciones inteligentes completas.", imagen: "img/tecnologia/smartwatch/smartwatch-2-a.webp", descripcionExtendida: "Smartwatch de segunda mano en óptimo estado. Pantalla táctil, múltiples funciones deportivas, monitoreo de salud y notificaciones. Excelente opción para quienes buscan tecnología avanzada a menor precio." },
    { categoria: "tecnologia", nombre: "Televisor 24''", precio: 600000, descripcion: "Pantalla de alta definición para disfrutar tus series y películas.", imagen: "img/tecnologia/televisor/televisor-1-a.webp", descripcionExtendida: "Televisor LED de 24 pulgadas con resolución HD. Ideal para espacios pequeños como dormitorios o cocinas. Cuenta con entradas HDMI y USB, menú intuitivo y excelente calidad de imagen y sonido." },
    { categoria: "tecnologia", nombre: "Televisor 55'', poco uso", precio: 850000, descripcion: "TV de gran tamaño, poco uso, excelente calidad de imagen y sonido.", imagen: "img/tecnologia/televisor/televisor-2-a.webp", descripcionExtendida: "Televisor Smart de 55 pulgadas en perfecto estado. Resolución 4K, conectividad Wi-Fi, múltiples entradas HDMI/USB y compatibilidad con apps de streaming. Ideal para experiencias inmersivas en películas y videojuegos." }
];

// Renderizar productos en index.html con filtros y orden por precios
if (window.location.pathname.includes("index.html") || window.location.pathname === "/" || window.location.pathname === "") {
    const productSection = document.querySelector(".lista-productos");
    const filtrarSelect = document.getElementById("filtrar");
    const ordenarSelect = document.getElementById("ordenar");
    const busquedaInput = document.getElementById("busqueda");

    function renderizarProductos() {
        const categoriaSeleccionada = filtrarSelect.value;
        const ordenSeleccionado = ordenarSelect.value;
        const textoBusqueda = busquedaInput.value.toLowerCase();

        let filtrados = productos.filter(producto => {
            const coincideCategoria = categoriaSeleccionada === "todos" || producto.categoria === categoriaSeleccionada;
            const coincideBusqueda = producto.nombre.toLowerCase().includes(textoBusqueda);
            return coincideCategoria && coincideBusqueda;
        });

        // Ordenamiento
        if (ordenSeleccionado === "meno-mayor") {
            filtrados.sort((a, b) => a.precio - b.precio);
        } else if (ordenSeleccionado === "mayor-menor") {
            filtrados.sort((a, b) => b.precio - a.precio);
        }

        // Limpiar antes de volver a renderizar
        productSection.innerHTML = "";

        // Renderizar los productos filtrados
        filtrados.forEach(producto => {
            const id = generarId(producto.nombre);
            const div = document.createElement("div");
            div.className = "producto";
            div.innerHTML = `
                <img src="${producto.imagen}" alt="${producto.nombre}">
                <h2>${producto.nombre}</h2>
                <p class="precio">$${producto.precio}</p>
                <p class="descripcion">${producto.descripcion}</p>
            `;
            const boton = crearBotonAccion("Ver más", "", () => {
                localStorage.setItem("productoSeleccionado", id);
                window.location.href = "producto.html";
            });
            div.appendChild(boton);
            productSection.appendChild(div);
        });

        actualizarContadorCarrito();
    }

    // Escuchamos eventos en los controles
    filtrarSelect.addEventListener("change", renderizarProductos);
    ordenarSelect.addEventListener("change", renderizarProductos);
    busquedaInput.addEventListener("input", renderizarProductos);

    // Primera carga
    renderizarProductos();
}


// Renderizar producto producto.html
if (window.location.pathname.includes("producto.html")) {
    const id = localStorage.getItem("productoSeleccionado");
    const producto = productos.find(p => generarId(p.nombre) === id);

    if (producto) {
        document.querySelector(".lista-productos img").src = producto.imagen;
        document.querySelector(".lista-productos img").alt = producto.nombre;
        document.querySelector(".lista-productos h2").textContent = producto.nombre;
        document.querySelector(".lista-productos .precio").textContent = `$${producto.precio}`;
        document.querySelector(".lista-productos .descripcion").textContent = producto.descripcionExtendida;

        document.querySelector(".boton-comprar").addEventListener("click", () => {
            const productoComprado = [{
                nombre: producto.nombre,
                imagen: producto.imagen,
                precio: producto.precio,
                cantidad: 1
            }];
            localStorage.setItem("compraRealizada", JSON.stringify(productoComprado));
            window.location.href = "compra.html";
            document.querySelector(".boton-comprar").addEventListener("click", () => {
                const productoComprado = [{
                    nombre: producto.nombre,
                    imagen: producto.imagen,
                    precio: producto.precio,
                    cantidad: 1
                }];
                localStorage.setItem("compraRealizada", JSON.stringify(productoComprado));

                // Quitar solo este producto del carrito
                const carrito = obtenerCarrito().filter(item => item.id !== id);
                guardarCarrito(carrito);

                window.location.href = "compra.html";
            });

        });


        document.querySelector(".boton-agregar-carrito").addEventListener("click", () => {
            const carrito = obtenerCarrito();
            const existente = carrito.find(item => item.id === id);
            if (existente) {
                existente.cantidad += 1;
            } else {
                carrito.push({ id, cantidad: 1 });
            }
            guardarCarrito(carrito);
            actualizarContadorCarrito();
        });
    }

    actualizarContadorCarrito();
}

// Renderizar productos en carrito.html
if (window.location.pathname.includes("carrito.html")) {
    const carrito = obtenerCarrito();
    const productSection = document.querySelector(".lista-productos");

    if (!productSection || carrito.length === 0) {
        document.querySelector("main").innerHTML = `
            <p>Tu carrito está vacío.</p>
            <button class="boton-accion" onclick="window.location.href='index.html'">← Seguir comprando</button>
        `;
    } else {
        let total = 0;

        carrito.forEach(item => {
            const productoOriginal = productos.find(p => generarId(p.nombre) === item.id);
            if (!productoOriginal) return;

            const div = document.createElement("div");
            div.className = "producto";
            div.innerHTML = `
                <img src="${productoOriginal.imagen}" alt="${productoOriginal.nombre}">
                <h2>${productoOriginal.nombre}</h2>
                <p class="precio">$${productoOriginal.precio} x ${item.cantidad} = $${productoOriginal.precio * item.cantidad}</p>
            `;
            total += productoOriginal.precio * item.cantidad;

            const botonEliminar = crearBotonAccion("Eliminar del carrito", "", () => {
                const carritoActualizado = obtenerCarrito().map(p =>
                    p.id === item.id ? { ...p, cantidad: p.cantidad - 1 } : p
                ).filter(p => p.cantidad > 0);

                guardarCarrito(carritoActualizado);
                location.reload();
            });

            div.appendChild(botonEliminar);
            productSection.appendChild(div);
        });

        const totalDiv = document.createElement("div");
        totalDiv.className = "resumen-total";
        totalDiv.innerHTML = `
    Total a pagar: $${total}
    <button class="boton-accion boton-comprar-carrito">Comprar</button>
    <button class="boton-regreso" onclick="window.location.href='index.html'">regresar</button>
`;
        productSection.appendChild(totalDiv);

        // Acción del botón "Comprar"
        const botonComprar = totalDiv.querySelector(".boton-comprar-carrito");
        botonComprar.addEventListener("click", () => {
            const productosComprados = carrito.map(item => {
                const productoOriginal = productos.find(p => generarId(p.nombre) === item.id);
                return {
                    nombre: productoOriginal.nombre,
                    imagen: productoOriginal.imagen,
                    precio: productoOriginal.precio,
                    cantidad: item.cantidad
                };
            });

            localStorage.setItem("compraRealizada", JSON.stringify(productosComprados));
            localStorage.removeItem("listaCarrito");
            window.location.href = "compra.html";
        });

        actualizarContadorCarrito();
    }

}

// Renderizar productos en compra.html
if (window.location.pathname.includes("compra.html")) {
    const productosComprados = JSON.parse(localStorage.getItem("compraRealizada")) || [];
    const section = document.querySelector(".lista-productos");

    if (productosComprados.length === 0) {
        section.innerHTML = "<p>No se encontró una compra reciente.</p>";
    } else {
        productosComprados.forEach(p => {
            const div = document.createElement("div");
            div.className = "producto";
            div.innerHTML = `
                <img src="${p.imagen}" alt="${p.nombre}">
                <h2>${p.nombre}</h2>
                <p class="precio">$${p.precio} x ${p.cantidad} = $${p.precio * p.cantidad}</p>
            `;
            section.appendChild(div);
        });
    }

    actualizarContadorCarrito(); // resetea a 0 si no hay productos
}


//-------------------------------------funciones----------------------------------------------------

// Utilidad para convertir nombre a ID URL-safe
function generarId(nombre) {
    return nombre.toLowerCase().replace(/\s+/g, "-");
}

// Guardar en localStorage
function guardarCarrito(carrito) {
    localStorage.setItem("listaCarrito", JSON.stringify(carrito));
}

function obtenerCarrito() {
    return JSON.parse(localStorage.getItem("listaCarrito")) || [];
}

function actualizarContadorCarrito() {
    const carrito = obtenerCarrito();
    const total = carrito.reduce((acc, item) => acc + item.cantidad, 0);
    const contador = document.getElementById("contador-carrito");
    if (contador) contador.textContent = total;
}

function crearBotonAccion(texto, claseExtra = "", onClick) {
    const boton = document.createElement("button");
    boton.textContent = texto;
    boton.className = `boton-accion ${claseExtra}`.trim();
    boton.addEventListener("click", onClick);
    return boton;
}