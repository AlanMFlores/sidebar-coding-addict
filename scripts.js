const hamb = document.getElementById('hamb-btn');
const closeBtn = document.getElementById('close-btn');
const sidebar = document.querySelector('.sidebar');

hamb.addEventListener('click', () => {
    sidebar.classList.toggle('toggle-menu')
})

closeBtn.addEventListener('click', () => {
    sidebar.classList.toggle('toggle-menu');
})