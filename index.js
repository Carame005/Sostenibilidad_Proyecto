// Animación de scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, {threshold: 0.1});

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Carga contenido dinámico
const strategies = [
    'Virtualización de servidores',
    'Enfriamiento eficiente en centros de datos',
    'Optimización de algoritmos',
    'Energías renovables para infraestructura TI'
];

document.querySelector('.grid').innerHTML = strategies
    .map(str => `<div class="card">${str}</div>`)
    .join('');

// Service Worker para caché
if('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .catch(err => console.log('SW registration failed:', err));
    });
}