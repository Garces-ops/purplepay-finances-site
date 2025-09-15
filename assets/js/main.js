const btn = document.querySelector('.nav-toggle');
const nav = document.querySelector('#nav');
if (btn && nav) {
  btn.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    btn.setAttribute('aria-expanded',open);
  });
}
const y = document.getElementById('year');
if (y) y.textContent = new Date().getFullYear();
