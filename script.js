// Navegação suave para links internos
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Menu mobile toggle
const menuToggle = document.querySelector('.menu-toggle');
const navmenu = document.querySelector('.navmenu');

menuToggle.addEventListener('click', () => {
    navmenu.classList.toggle('active');
    menuToggle.classList.toggle('active');
});

// Fechar menu ao clicar em um link
document.querySelectorAll('.navmenu a').forEach(link => {
    link.addEventListener('click', () => {
        navmenu.classList.remove('active');
        menuToggle.classList.remove('active');
    });
});

// Scroll suave para o botão "Scroll Down"
document.querySelector('.scroll-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
        aboutSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
});

// Formulário de contato
const contatoForm = document.querySelector('.contato-form');

if (contatoForm) {
  contatoForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const formData = new FormData(contatoForm);

    const dados = {
      nome: formData.get("nome"),
      email: formData.get("email"),
      mensagem: formData.get("mensagem")
    };

    const resposta = await fetch("/api/contato", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(dados)
    });

    const resultado = await resposta.json();

    alert(resultado.message);
    contatoForm.reset();
  });
}


// Animação de scroll para elementos
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate');
        }
    });
}, observerOptions);

// Observar elementos para animação
document.querySelectorAll('.skill-item, .projeto-item, .contato-item').forEach(el => {
    observer.observe(el);
});

// Header com background ao scroll
window.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
}); 
