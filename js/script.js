const toggleButton = document.getElementById('toggleMenu');
const menu = document.getElementById('menu');

toggleButton.addEventListener('click', () => {
    menu.classList.toggle('visible');
    toggleButton.innerHTML = menu.classList.contains('visible') ? '&#10005;' : '&#9776;'; // Cambia el ícono del botón de menú
}); 

const menuLinks = document.querySelectorAll('#menu a');
menuLinks.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.remove('visible');
        toggleButton.innerHTML = '&#9776;'; // Restaura el ícono del botón de menú a la barra de navegación
    });
});





// const menuItems = document.querySelectorAll('#menu ul li');

// menuItems.forEach(item => {
//     item.addEventListener('click', () => {
//         menu.classList.remove('visible');
//     });
// });