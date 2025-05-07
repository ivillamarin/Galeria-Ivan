/*---- ANIMACIONES ----*/
window.addEventListener("scroll", function () {
    const flecha = document.querySelector(".flecha-abajo");
    if (window.scrollY > 100) {                                    /*---- animacion flecha ----*/
        flecha.style.opacity = "0";
        flecha.style.transition = "opacity 0.5s ease";
    } else {
        flecha.style.opacity = "1";
    }
});

window.addEventListener("scroll", function () {
    const cont1 = document.querySelector(".container1");
    if (window.scrollY > 150) {
        cont1.style.opacity = "0";
        cont1.style.transition = "opacity 0.5s ease";
    } else {
        cont1.style.opacity = "1";
    }
});

window.addEventListener("scroll", function () {
    const cont2 = document.querySelector(".container2");
    if (window.scrollY > 1000) {
        cont2.style.opacity = "0";
        cont2.style.transition = "opacity 0.5s ease";
    } else {
        cont2.style.opacity = "1";
    }
});



// ---- RELOJ ----
function actualizarReloj() {
    const ahora = new Date();
    const opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const fechaTexto = ahora.toLocaleDateString('es-ES', opcionesFecha);

    let horas = ahora.getHours();
    let minutos = ahora.getMinutes();
    let segundos = ahora.getSeconds();

    horas = horas < 10 ? '0' + horas : horas;
    minutos = minutos < 10 ? '0' + minutos : minutos;
    segundos = segundos < 10 ? '0' + segundos : segundos;

    document.getElementById('fecha').textContent = fechaTexto;
    document.getElementById('hora').innerHTML = `${horas}<span class="parpadeo"> : </span>${minutos}<span class="parpadeo"> : </span>${segundos}`;
}
setInterval(actualizarReloj, 1000);
actualizarReloj();



/*---- LOGIN ----*/
function iniciarSesion() {
    const usuario = document.getElementById('login-usuario').value;
    const password = document.getElementById('login-password').value;

    const usuarioGuardado = localStorage.getItem('usuario');
    const passwordGuardada = localStorage.getItem('password');

    if (usuario === usuarioGuardado && password === passwordGuardada) {
        localStorage.setItem('usuarioLogueado', usuario);
        window.location.href = '../index.html';
    } else {
        alert('Usuario o contraseña incorrectos');
    }
}


/*---- REGISTRO ----*/

function registrarUsuario() {
    const email = document.getElementById('registro-email').value;
    const usuario = document.getElementById('registro-usuario').value;
    const password = document.getElementById('registro-password').value;

    if (email && usuario && password) {
        localStorage.setItem('email', email);
        localStorage.setItem('usuario', usuario);
        localStorage.setItem('password', password);
        alert('Registro exitoso, ahora puedes iniciar sesión.');
        window.location.href = './login.html';
    } else {
        alert('Completa todos los campos.');
    }
}




/*---- GESTIÓN DE USUARIO ----*/

document.addEventListener('DOMContentLoaded', function () {
    const usuarioLogueado = localStorage.getItem('usuarioLogueado');
    if (usuarioLogueado) {
        const contenedorBienvenida = document.getElementById('mensaje-bienvenida');
        contenedorBienvenida.innerHTML = `Bienvenido/a, ${usuarioLogueado} !`;
    }
});


// Evita que el navegador recuerde el scroll al volver o recargar
if ('scrollRestoration' in history) {
    history.scrollRestoration = 'manual';
}

// Forzamos scroll al tope de forma estable
window.scrollTo(0, 0);

// Iniciar cuando todo (incluyendo imágenes) esté cargado
window.addEventListener('load', () => {
    // Scroll al top asegurado tras carga completa
    setTimeout(() => {
        window.scrollTo(0, 0);

        // Ahora sí iniciamos AOS
        AOS.init({
            duration: 1000,
            once: true,
            offset: 200,
            anchorPlacement: 'top-bottom'
        });

        // Forzar un recalculo por si algo aún no está visible
        AOS.refreshHard();
    }, 100); // usar delay breve garantiza el layout completo
});








