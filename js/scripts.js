/* ============================================
   Bioparque Yasuní - JavaScript
   ============================================ */

/* ---------- Filtro de animales por categoría ---------- */
function filtrarAnimales(categoria, boton) {
    var tarjetas = document.querySelectorAll(".animal");

    for (var i = 0; i < tarjetas.length; i++) {
        var cat = tarjetas[i].getAttribute("data-categoria");
        if (categoria === "todos" || cat === categoria) {
            tarjetas[i].style.display = "";
        } else {
            tarjetas[i].style.display = "none";
        }
    }

    /* Marcar el botón activo */
    var botones = document.querySelectorAll(".filtro");
    for (var j = 0; j < botones.length; j++) {
        botones[j].classList.remove("activo");
    }
    if (boton) {
        boton.classList.add("activo");
    }
}

/* ---------- Validación del formulario de contacto ---------- */
function enviarContacto() {
    var nombre = document.getElementById("nombre").value.trim();
    var correo = document.getElementById("correo").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var mensaje = document.getElementById("mensaje").value.trim();
    var aviso = document.getElementById("aviso");

    if (nombre === "" || correo === "" || mensaje === "") {
        mostrar(aviso, "error", "Complete nombre, correo y mensaje.");
        return;
    }

    if (correo.indexOf("@") === -1 || correo.indexOf(".") === -1) {
        mostrar(aviso, "error", "El correo no tiene un formato valido.");
        return;
    }

    if (telefono !== "" && !/^[0-9]{7,10}$/.test(telefono)) {
        mostrar(aviso, "error", "El telefono debe tener entre 7 y 10 digitos.");
        return;
    }

    mostrar(aviso, "ok",
        "Gracias " + nombre + ". Su mensaje fue recibido. Le responderemos a " + correo + ".");
}

function mostrar(caja, tipo, texto) {
    caja.className = "mensaje " + tipo;
    caja.textContent = texto;
}

/* ---------- Saludo dinámico en el inicio ---------- */
function saludoInicio() {
    var caja = document.getElementById("saludo");
    if (!caja) return;

    var hora = new Date().getHours();
    var abierto = hora >= 9 && hora < 17;

    if (abierto) {
        caja.textContent = "Estamos abiertos ahora. ¡Te esperamos hasta las 17:00!";
    } else {
        caja.textContent = "Ahora estamos cerrados. Nuestro horario es de 09:00 a 17:00.";
    }
}

document.addEventListener("DOMContentLoaded", saludoInicio);
