
function toggleMenu() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
}

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.querySelector('input[placeholder="Nome"]');
    const email = document.querySelector('input[placeholder="E-mail"]');
    const message = document.querySelector('textarea[placeholder="Mensagem"]');

    if (name.value.trim() === '' || email.value.trim() === '' || message.value.trim() === '') {
        alert('Por favor, preencha todos os campos.');
    } else if (!validateEmail(email.value)) {
        alert('Por favor, insira um e-mail válido.');
    } else {
        alert('Mensagem enviada com sucesso!');
          name.value = '';
        email.value = '';
        message.value = '';
    }
});

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}
function clickMenu() {
    var itens = document.getElementById('itens');
    if (itens.style.display === 'block') {
        itens.style.display = 'none';
    } else {
        itens.style.display = 'block';
    }
}