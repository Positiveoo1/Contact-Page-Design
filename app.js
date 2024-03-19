const btn = document.getElementById('send');
const module = document.getElementById('module');
const box = document.getElementById('box');

module.style.display = 'none';
btn.addEventListener('click', () => {
box.style.display = 'none'
module.style.display = 'block';
});