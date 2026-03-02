document.addEventListener("DOMContentLoaded", function () {
    // Função para carregar componentes HTML reutilizáveis
    const loadComponent = (elementId, url, callback) => {
        // Garante que o caminho seja absoluto em relação à raiz do site
        const absoluteUrl = url.startsWith('/') ? url : `/${url}`;
        fetch(absoluteUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Não foi possível carregar o componente: ${absoluteUrl}`);
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
        initializeGlobalSearch();
        // Carrega os contatos após o header (que pode ter contatos)
        if (typeof dadosGrupoVM !== 'undefined') {
            loadContacts();
        }
    });

    // Carregar rodapé
    loadComponent("footer-placeholder", "/templates/_footer.html");
});

function initializeGlobalSearch() {
    const trigger = document.querySelector('.search-trigger');
    const overlay = document.querySelector('.search-overlay');
    const closeBtn = document.querySelector('.search-close');
    const searchInput = document.getElementById('globalSearchInput');
    const resultsList = document.getElementById('globalSearchResults');

    if (!trigger || !overlay || !closeBtn || !searchInput) return;

    // Função auxiliar para normalizar strings (remover acentos)
    const normalize = (str) => {
        return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
    };

    const openSearch = () => {
        overlay.classList.add('active');
        // Pequeno delay para garantir que o input já está visível para ganhar foco
        setTimeout(() => searchInput.focus(), 300);
        document.body.style.overflow = 'hidden';
    };

    const closeSearch = () => {
        overlay.classList.remove('active');
        searchInput.value = '';
        resultsList.innerHTML = '';
        document.body.style.overflow = '';
    };

    trigger.addEventListener('click', openSearch);
    closeBtn.addEventListener('click', closeSearch);

    // Fechar com ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('active')) {
            closeSearch();
        }
    });

    // Lógica de Busca
    searchInput.addEventListener('input', (e) => {
        const queryRaw = e.target.value.trim();
        const termNormalized = normalize(queryRaw);

        resultsList.innerHTML = '';

        if (queryRaw.length < 1) {
            resultsList.style.display = 'none';
            return;
        }

        const results = [];
        if (typeof dadosGrupoVM !== 'undefined' && dadosGrupoVM.scopos) {
            dadosGrupoVM.scopos.forEach(scopo => {
                // Busca no Nome do Scopo
                if (normalize(scopo.nome_scopo).includes(termNormalized)) {
                    results.push({ type: 'Escopo', title: scopo.nome_scopo, slug: scopo.slug, item: '' });
                }

                // Busca nos Serviços Individuais
                if (scopo.servicos) {
                    scopo.servicos.forEach(servico => {
                        if (normalize(servico).includes(termNormalized)) {
                            results.push({ type: scopo.nome_scopo, title: servico, slug: scopo.slug, item: servico });
                        }
                    });
                }
            });
        }

        if (results.length > 0 || queryRaw.length >= 2) {
            resultsList.style.display = 'block';

            if (results.length > 0) {
                results.forEach(res => {
                    const item = document.createElement('div');
                    item.className = 'search-result-item';
                    item.innerHTML = `
                        <div class="res-type">${res.type}</div>
                        <div class="res-title">${res.title}</div>
                    `;
                    item.addEventListener('mousedown', (e) => e.preventDefault());
                    item.addEventListener('click', () => {
                        const searchUrl = `/servicos/?filter=${res.slug}${res.item ? '&search=' + encodeURIComponent(res.item) : ''}`;
                        window.location.href = searchUrl;
                    });
                    resultsList.appendChild(item);
                });
            } else if (queryRaw.length >= 2) {
                resultsList.innerHTML = '<div class="search-no-results">Nenhum serviço encontrado.</div>';
            }
        } else {
            resultsList.style.display = 'none';
        }
    });
}

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
