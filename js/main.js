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
    loadComponent("header-placeholder", "/templates/_header.html", () => {
        initializeMobileNav();
        // Carrega os contatos após o header (que pode ter contatos)
        if (typeof dadosGrupoVM !== 'undefined') {
            loadContacts();
        }
    });
});

// Configuração de Contatos Dinâmicos
function loadContacts() {
    if (typeof dadosGrupoVM === 'undefined' || !dadosGrupoVM.contatos) return;

    const contatos = dadosGrupoVM.contatos;

    // 1. Número de contato geral (VM_telefone_contato)
    const telGeral = contatos.geral;
    if (telGeral) {
        document.querySelectorAll('.vm-contato-geral-tel').forEach(el => {
            el.textContent = telGeral.formatado;
            if (el.tagName === 'A') el.href = `tel:+55${telGeral.numero}`;
        });
        document.querySelectorAll('.vm-contato-geral-wa').forEach(el => {
            if (el.tagName === 'A') {
                try {
                    const currentHref = el.href;
                    if (currentHref.includes('wa.me')) {
                        const url = new URL(currentHref);
                        const text = url.searchParams.get('text') || '';
                        el.href = `https://wa.me/55${telGeral.numero}?text=${encodeURIComponent(text)}`;
                    } else {
                        el.href = `https://wa.me/55${telGeral.numero}`;
                    }
                } catch (e) {
                    el.href = `https://wa.me/55${telGeral.numero}`;
                }
            }
        });
    }

    // 2. Atendimento bancário (VM_atendimento_bancario)
    const telBancario = contatos.bancario;
    if (telBancario) {
        document.querySelectorAll('.vm-contato-bancario-tel').forEach(el => {
            el.textContent = telBancario.formatado;
            if (el.tagName === 'A') el.href = `tel:+55${telBancario.numero}`;
        });
        document.querySelectorAll('.vm-contato-bancario-wa').forEach(el => {
            if (el.tagName === 'A') {
                try {
                    const currentHref = el.href;
                    if (currentHref.includes('wa.me')) {
                        const url = new URL(currentHref);
                        const text = url.searchParams.get('text') || '';
                        el.href = `https://wa.me/55${telBancario.numero}?text=${encodeURIComponent(text)}`;
                    } else {
                        el.href = `https://wa.me/55${telBancario.numero}`;
                    }
                } catch (e) {
                    el.href = `https://wa.me/55${telBancario.numero}`;
                }
            }
        });
    }

    // 3. Atendimento tributário (VM_atendimento_tributario)
    const telTributario = contatos.tributario;
    if (telTributario) {
        document.querySelectorAll('.vm-contato-tributario-tel').forEach(el => {
            el.textContent = telTributario.formatado;
            if (el.tagName === 'A') el.href = `tel:+55${telTributario.numero}`;
        });
        document.querySelectorAll('.vm-contato-tributario-wa').forEach(el => {
            if (el.tagName === 'A') {
                try {
                    const currentHref = el.href;
                    if (currentHref.includes('wa.me')) {
                        const url = new URL(currentHref);
                        const text = url.searchParams.get('text') || '';
                        el.href = `https://wa.me/55${telTributario.numero}?text=${encodeURIComponent(text)}`;
                    } else {
                        el.href = `https://wa.me/55${telTributario.numero}`;
                    }
                } catch (e) {
                    el.href = `https://wa.me/55${telTributario.numero}`;
                }
            }
        });
    }
}


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
