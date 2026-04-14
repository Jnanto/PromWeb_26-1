
AOS.init({
    duration: 800,
    once: false,
    offset: 80
});


lightbox.option({
    resizeDuration: 600,
    wrapAround: true,
    albumLabel: 'Imagen %1 de %2',
    fadeDuration: 500,
    disableScrolling: true
});


var navbar = document.getElementById('mainNav');

window.addEventListener('scroll', function () {
    if (window.scrollY > 60) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});


var secciones = document.querySelectorAll('section[id]');
var links = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', function () {
    var actual = '';

    for (var i = 0; i < secciones.length; i++) {
        if (window.scrollY >= secciones[i].offsetTop - 120) {
            actual = secciones[i].getAttribute('id');
        }
    }

    for (var j = 0; j < links.length; j++) {
        links[j].classList.remove('active');
        if (links[j].getAttribute('href') === '#' + actual) {
            links[j].classList.add('active');
        }
    }
});


var menuMovil = document.getElementById('navMenu');
var botonMenu = document.querySelector('.navbar-toggler');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', function () {
        if (menuMovil.classList.contains('show') && botonMenu) {
            botonMenu.click();
        }
    });
}


var linksInternos = document.querySelectorAll('a[href^="#"]');

for (var i = 0; i < linksInternos.length; i++) {
    linksInternos[i].addEventListener('click', function (e) {
        var destino = document.querySelector(this.getAttribute('href'));
        if (destino) {
            e.preventDefault();
            var posicion = destino.getBoundingClientRect().top + window.scrollY - 80;
            window.scrollTo({
                top: posicion,
                behavior: 'smooth'
            });
        }
    });
}


var numeros = document.querySelectorAll('.stat-number');
var contadoresYaAnimados = [];


for (var i = 0; i < numeros.length; i++) {
    contadoresYaAnimados.push(false);
}




window.addEventListener('scroll', function () {
    for (var i = 0; i < numeros.length; i++) {
        if (contadoresYaAnimados[i] === false) {
            var rect = numeros[i].getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                animarContador(numeros[i]);
                contadoresYaAnimados[i] = true;
            }
        }
    }
});

var botonesDescarga = document.querySelectorAll('.btn-download');

for (var i = 0; i < botonesDescarga.length; i++) {
    botonesDescarga[i].addEventListener('click', function (e) {
        e.preventDefault();
        var boton = this;
        var textoOriginal = boton.innerHTML;
        boton.innerHTML = '<i class="fa-solid fa-check"></i> Descargado';
        setTimeout(function () {
            boton.innerHTML = textoOriginal;
        }, 1800);
    });
}
