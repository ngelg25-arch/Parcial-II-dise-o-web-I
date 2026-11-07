/* aqui abajo esta toda la logica simple con javascript */

// abrir y cerrar el menu en celular
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// filtrar los cuadros de la galeria de forma sencilla
const filterButtons = document.querySelectorAll('.filter-btn');
const cards = document.querySelectorAll('.gallery-grid .card');

filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        // quitamos la clase active a todos y se la ponemos al que tocamos
        filterButtons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const categoria = btn.getAttribute('data-filter');

        cards.forEach(card => {
            const catCard = card.getAttribute('data-category');
            // si es 'todos' o coincide la categoria, lo mostramos; si no, lo ocultamos
            if (categoria === 'all' || catCard === categoria) {
                card.style.display = 'block';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// alerta simple al comprar un cuadro
document.querySelectorAll('.btn-buy').forEach(btn => {
    btn.addEventListener('click', (e) => {
        const obra = e.target.getAttribute('data-title');
        alert('¡Buena elección! apartaste la obra: ' + obra);
    });
});
