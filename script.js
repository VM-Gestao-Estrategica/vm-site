// Global error handler for DataCloneError from browser recording tools
window.addEventListener('error', (event) => {
    if (event.message && event.message.includes('DataCloneError')) {
        event.preventDefault();
        console.warn('DataCloneError caught and suppressed (likely from browser recording tool)');
    }
});

window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && event.reason.toString().includes('DataCloneError')) {
        event.preventDefault();
        console.warn('Unhandled DataCloneError caught and suppressed');
    }
});

// NOTE: The mobile navigation logic has been moved to /js/main.js
// to ensure it runs after the header is dynamically loaded.

// Add shadow to nav on scroll
let lastScroll = 0;

// O scroll dinâmico agora é gerenciado pelo main.js para funcionar em todas as páginas


// Smooth scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 80;
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.value-item, .practice-item, .contact-method').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Load dynamic content from dadosficticios.js
document.addEventListener('DOMContentLoaded', () => {
    if (typeof dadosGrupoVM !== 'undefined') {
        loadServices();
        setupServiceFilters();
        loadTeam();
        loadBlog();
    }

    // Contact form handling
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', handleFormSubmit);

        // Formatação automática do telefone
        const telefoneInput = document.getElementById('telefone');
        if (telefoneInput) {
            telefoneInput.addEventListener('input', formatPhoneNumber);
            telefoneInput.addEventListener('keydown', handlePhoneKeydown);
        }
    }

    // Check for filter in URL
    const urlParams = new URLSearchParams(window.location.search);
    const filterParam = urlParams.get('filter');
    if (filterParam && (filterParam === 'tributario' || filterParam === 'bancario')) {
        setTimeout(() => {
            const filterBtn = document.querySelector(`.filter-btn[data-filter="${filterParam}"]`);
            if (filterBtn) {
                filterBtn.click();
            }
        }, 300); // Small delay to ensure items are loaded
    }
});

// Load Services
async function loadServices(filter = 'todos') {
    const servicesGrid = document.getElementById('servicesGrid');
    if (!servicesGrid) return;

    // Adiciona classe de loading em vez de limpar o HTML
    servicesGrid.classList.add('loading');

    let services = [];
    try {
        // Tenta buscar da API do Supabase
        if (window.servicesAPI && typeof window.servicesAPI.getServices === 'function') {
            const apiServices = await window.servicesAPI.getServices();
            if (apiServices && apiServices.length > 0) {
                services = apiServices.map(s => ({
                    id: s.id,
                    titulo: s.nome,
                    descricao: s.descricao || 'Sem descrição disponível.',
                    detalhes: s.detalhes || [],
                    categoria: s.categoria || 'tributario',
                    icone: s.icone || '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2L2 7l10 5 10-5-10-5z"/></svg>'
                }));
            } else {
                services = dadosGrupoVM.servicos;
            }
        } else {
            services = dadosGrupoVM.servicos;
        }
    } catch (error) {
        console.error("Erro ao carregar serviços via API:", error);
        services = dadosGrupoVM.servicos;
    }

    if (!services || services.length === 0) {
        servicesGrid.innerHTML = '<p>Nenhum serviço disponível no momento.</p>';
        servicesGrid.classList.remove('loading');
        return;
    }

    const filteredServices = filter === 'todos'
        ? services
        : services.filter(s => s.categoria === filter);

    // Renderiza o novo conteúdo
    const fragment = document.createDocumentFragment();
    filteredServices.forEach(servico => {
        const serviceCard = document.createElement('div');
        serviceCard.className = 'service-card fade-in';
        serviceCard.style.borderRadius = '0'; // Força roundness 0

        const detailsHTML = (servico.detalhes && servico.detalhes.length > 0)
            ? servico.detalhes.map(detalhe => `<li>${detalhe}</li>`).join('')
            : '<li>Consulte nossos especialistas para mais detalhes.</li>';

        const encodedMsg = encodeURIComponent(`Olá! Quero saber mais sobre ${servico.titulo} (Vim pela seção de serviços do site)`);
        const waLink = `https://wa.me/5551996353096?text=${encodedMsg}`;

        serviceCard.innerHTML = `
            <span class="service-icon">${servico.icone}</span>
            <h3>${servico.titulo}</h3>
            <p class="service-description">${servico.descricao}</p>
            <ul class="service-details">
                ${detailsHTML}
            </ul>
            <a href="${waLink}" target="_blank" class="service-link">
                Saiba mais
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </a>
        `;
        fragment.appendChild(serviceCard);
    });

    // Limpa e aplica o fragmento de uma vez
    setTimeout(() => {
        servicesGrid.innerHTML = '';
        servicesGrid.appendChild(fragment);
        servicesGrid.classList.remove('loading');
    }, 100);
}

// Setup Filters
function setupServiceFilters() {
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Update active states
            filterBtns.forEach(b => {
                b.classList.remove('active', 'border-azul-acao', 'text-azul-acao');
                b.classList.add('border-gray-200', 'text-gray-500');
            });
            btn.classList.add('active', 'border-azul-acao', 'text-azul-acao');
            btn.classList.remove('border-gray-200', 'text-gray-500');

            // Filter
            const filter = btn.getAttribute('data-filter');
            loadServices(filter);

            // Clean URL filter without reloading the page
            if (window.location.pathname.includes('/servicos/')) {
                const newUrl = window.location.pathname;
                window.history.replaceState({}, document.title, newUrl);
            }
        });
    });
}

// Load Team
function loadTeam() {
    const teamGrid = document.getElementById('teamGrid');
    if (!teamGrid || !dadosGrupoVM.equipe) return;

    dadosGrupoVM.equipe.forEach((membro, index) => {
        // Bloco da Foto
        const photoBlock = document.createElement('div');
        photoBlock.className = 'team-photo-block';
        photoBlock.innerHTML = `<img src="${membro.foto}" alt="${membro.nome}">`;

        // Bloco de Informações
        const infoBlock = document.createElement('div');
        infoBlock.className = 'team-info-block';
        infoBlock.innerHTML = `
            <div class="team-info-content">
                <h3 class="team-name">${membro.nome}</h3>
                <p class="team-role">${membro.cargo}</p>
                <p class="team-description">${membro.descricao}</p>
                <div class="team-social">
                    <a href="${membro.linkedin}" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                    </a>
                    <a href="${membro.instagram}" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                    </a>
                </div>
            </div>
        `;

        // Bloco de Marca (Filler)
        const brandBlock = document.createElement('div');
        brandBlock.className = 'team-brand-block';
        brandBlock.innerHTML = `
            <div class="logo-text">VM<span> Gestão Estratégica</span></div>
            <p>Excelência Jurídica</p>
        `;

        if (index === 0) {
            // Linha 1: Marca, Foto Nathalia, Info Nathalia
            teamGrid.appendChild(brandBlock);
            teamGrid.appendChild(photoBlock);
            teamGrid.appendChild(infoBlock);
        } else {
            // Linha 2: Info Leandro, Foto Leandro, Marca (Inverte para o checkerboard)
            teamGrid.appendChild(infoBlock);
            teamGrid.appendChild(photoBlock);
            teamGrid.appendChild(brandBlock.cloneNode(true));
        }
    });
}

// Load Blog Posts for Homepage
async function loadBlog() {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    let posts = [];
    try {
        // A única fonte de dados agora é a API do Supabase
        posts = await window.blogAPI.getBlogPosts();
    } catch (error) {
        console.error("Erro ao buscar posts do blog via API:", error);
        // Exibe uma mensagem de erro no lugar dos posts
        blogGrid.innerHTML = '<p class="error-message">Não foi possível carregar os artigos. Tente novamente mais tarde.</p>';
        return;
    }

    // Pega os 3 posts mais recentes
    let recentPosts = Array.isArray(posts) ? posts.slice(0, 3) : [];

    // Limpa e prepara o container
    blogGrid.innerHTML = '';
    blogGrid.className = 'blog-list';

    if (recentPosts.length === 0) {
        blogGrid.innerHTML = '<p>Nenhum artigo publicado recentemente.</p>';
        return;
    }

    recentPosts.forEach(post => {
        const blogRow = document.createElement('a');
        blogRow.className = 'blog-row';
        if (post.slug) {
            blogRow.href = `/blog-post/?post=${post.slug}`;
        }

        const formattedDate = new Date(post.data_publicacao).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
        const categoryName = post.categoria && post.categoria.nome ? post.categoria.nome : 'Blog';

        let imageUrl = post.imagem_url;
        if (!imageUrl || (!imageUrl.startsWith('http') && !imageUrl.startsWith('assets'))) {
            imageUrl = null;
        }

        const imageSrc = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `/${imageUrl}`) : null;
        const imageHTML = imageSrc ? `<div class="blog-row-image"><img src="${imageSrc}" alt="${post.titulo}"></div>` : '';

        blogRow.innerHTML = `
            <div class="blog-row-content">
                <span class="section-tag">${categoryName}</span>
                <h3>${post.titulo}</h3>
                <p class="excerpt">${post.resumo}</p>
                <div class="read-more">
                    Ler artigo completo
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </div>
            ${imageHTML}`;
        blogGrid.appendChild(blogRow);
    });
}

// Statistics Counter Animation
function animateCounter(element, target, duration = 2000) {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(current);
        }
    }, 16);
}

// Observe stats section for counter animation
const statsObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            entry.target.classList.add('animated');
            const statNumbers = entry.target.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.getAttribute('data-target'));
                animateCounter(stat, target);
            });
        }
    });
}, { threshold: 0.5 });

// Observe stats section
const statsSection = document.querySelector('.stats');
if (statsSection) {
    statsObserver.observe(statsSection);
}

// Função para formatar telefone automaticamente
function formatPhoneNumber(e) {
    let value = e.target.value.replace(/\D/g, ''); // Remove tudo que não é dígito

    // Limita a 11 dígitos (DDD + 9 dígitos para celular)
    if (value.length > 11) {
        value = value.slice(0, 11);
    }

    // Formata baseado no tamanho
    let formattedValue = '';
    if (value.length === 0) {
        formattedValue = '';
    } else if (value.length <= 2) {
        // Apenas DDD
        formattedValue = `(${value}`;
    } else if (value.length <= 7) {
        // DDD + início do número (até 5 dígitos após DDD)
        formattedValue = `(${value.slice(0, 2)}) ${value.slice(2)}`;
    } else if (value.length <= 10) {
        // Telefone fixo completo: (XX) XXXX-XXXX
        formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`;
    } else {
        // Celular completo: (XX) XXXXX-XXXX
        formattedValue = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7)}`;
    }

    e.target.value = formattedValue;
}

// Função para lidar com teclas especiais no campo telefone
function handlePhoneKeydown(e) {
    // Permite backspace, delete, tab, escape, enter
    if ([8, 9, 27, 13, 46].indexOf(e.keyCode) !== -1 ||
        // Permite Ctrl+A, Ctrl+C, Ctrl+V, Ctrl+X
        (e.keyCode === 65 && e.ctrlKey === true) ||
        (e.keyCode === 67 && e.ctrlKey === true) ||
        (e.keyCode === 86 && e.ctrlKey === true) ||
        (e.keyCode === 88 && e.ctrlKey === true) ||
        // Permite home, end, left, right
        (e.keyCode >= 35 && e.keyCode <= 39)) {
        return;
    }
    // Bloqueia se não for um número
    if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
        e.preventDefault();
    }
}

// Handle form submission
async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitButton = form.querySelector('button[type="submit"]');
    const formSuccess = document.getElementById('formSuccess');
    const formError = document.getElementById('formError');
    const errorMessage = document.getElementById('errorMessage');

    // Esconde mensagens anteriores
    if (formSuccess) formSuccess.classList.remove('active');
    if (formError) formError.classList.remove('active');

    // Desabilita o botão durante o envio
    if (submitButton) {
        submitButton.disabled = true;
        submitButton.textContent = 'Enviando...';
    }

    try {
        // Coleta os dados do formulário
        // Remove formatação do telefone antes de enviar (apenas números)
        const telefoneValue = document.getElementById('telefone').value.replace(/\D/g, '');

        const formData = {
            nome: document.getElementById('nome').value.trim(),
            email: document.getElementById('email').value.trim(),
            telefone: telefoneValue,
            empresa: document.getElementById('empresa').value.trim() || null,
            assunto: document.getElementById('assunto').value.trim(),
            mensagem: document.getElementById('mensagem').value.trim()
        };

        // Verifica se a API está disponível
        if (!window.contactAPI || !window.contactAPI.submitContactForm) {
            throw new Error('API de contato não está disponível. Verifique se contact-supabase.js está carregado.');
        }

        // Envia os dados via SDK
        await window.contactAPI.submitContactForm(formData);

        // Sucesso: mostra mensagem de sucesso
        if (formSuccess && form) {
            form.style.display = 'none';
            formSuccess.classList.add('active');

            // Reset form and hide success message after 5 seconds
            setTimeout(() => {
                form.style.display = 'block';
                formSuccess.classList.remove('active');
                form.reset();
            }, 5000);
        }
    } catch (error) {
        console.error('Erro ao enviar formulário:', error);

        // Mostra mensagem de erro da aplicação
        if (formError && form && errorMessage) {
            // Mensagem personalizada baseada no tipo de erro
            let errorText = 'Por favor, tente novamente ou entre em contato diretamente pelo telefone/WhatsApp.';

            if (error.message && error.message.includes('API de contato')) {
                errorText = 'Erro de configuração. Por favor, recarregue a página e tente novamente.';
            } else if (error.message && error.message.includes('Campos obrigatórios')) {
                errorText = 'Por favor, preencha todos os campos obrigatórios.';
            } else if (error.message && error.message.includes('network') || error.message && error.message.includes('fetch')) {
                errorText = 'Erro de conexão. Verifique sua internet e tente novamente.';
            }

            errorMessage.textContent = errorText;
            form.style.display = 'none';
            formError.classList.add('active');

            // Esconde mensagem de erro e mostra formulário novamente após 8 segundos
            setTimeout(() => {
                form.style.display = 'block';
                formError.classList.remove('active');
            }, 8000);
        }

        // Reabilita o botão
        if (submitButton) {
            submitButton.disabled = false;
            submitButton.textContent = 'Enviar mensagem';
        }
    }
}