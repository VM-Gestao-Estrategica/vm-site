document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar componentes HTML reutilizáveis
    const loadComponent = (elementId, url, callback) => {
        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Não foi possível carregar o componente: ${url}`);
                }
                return response.text();
            })
            .then(data => {
                const element = document.getElementById(elementId);
                if (element) {
                    element.innerHTML = data;
                    if (callback) {
                        callback();
                    }
                }
            })
            .catch(error => console.error(error));
    };

    // Carregar cabeçalho e, em seguida, inicializar o menu de navegação
    loadComponent("header-placeholder", "/templates/_header.html", initializeMobileNav);
});

function initializeMobileNav() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');
    const nav = document.querySelector('.nav');

    if (navToggle && navLinks) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });

        // Close mobile menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navToggle.classList.remove('active');
                navLinks.classList.remove('active');
            });
        });
    }

    // Lógica para Header Sólido vs Transparente (Global)
    const hasHero = document.querySelector('.hero');

    const handleScroll = () => {
        // Se for tablet ou mobile (<= 992px), o header deve ser sempre sólido
        if (window.innerWidth <= 992) {
            nav.classList.add('scrolled');
            return;
        }

        if (window.scrollY > 25) {
            nav.classList.add('scrolled');
        } else {
            // Só remove o 'scrolled' se houver um hero na página e for Desktop
            if (hasHero) {
                nav.classList.remove('scrolled');
            } else {
                nav.classList.add('scrolled');
            }
        }
    };

    if (nav) {
        handleScroll(); // Estado Inicial
        window.addEventListener('scroll', handleScroll, { passive: true });
        window.addEventListener('resize', handleScroll); // Garante ajuste se a tela redimensionar
    }
}
