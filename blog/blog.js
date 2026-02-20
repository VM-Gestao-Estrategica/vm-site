// blog/blog.js - Script exclusivo para a página de listagem (blog/index.html)

document.addEventListener('DOMContentLoaded', async () => {
    const blogGrid = document.getElementById('blogGrid');
    if (!blogGrid) return;

    let allPosts = [];
    try {
        // A única fonte de dados agora é a API do Supabase
        allPosts = await window.blogAPI.getBlogPosts();
    } catch (e) {
        console.error("Erro ao buscar posts do blog via API:", e);
        blogGrid.innerHTML = '<p class="error-message">Não foi possível carregar os artigos. Tente novamente mais tarde.</p>';
        return;
    }

    renderPosts(Array.isArray(allPosts) ? allPosts : []);

    function renderPosts(posts) {
        blogGrid.innerHTML = '';
        if (posts.length === 0) {
            blogGrid.innerHTML = '<p>Nenhum artigo encontrado.</p>';
            return;
        }

        // Mudando o container para lista
        blogGrid.className = 'blog-list';

        posts.forEach(post => {
            blogGrid.appendChild(createPostRow(post));
        });
    }

    function createPostRow(post) {
        const row = document.createElement('a');
        row.className = 'blog-row';
        if (post.slug) {
            row.href = `../blog-post/?post=${post.slug}`;
        }

        const formattedDate = new Date(post.data_publicacao).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });
        const categoryName = post.categoria && post.categoria.nome ? post.categoria.nome : 'Blog';

        let imageUrl = post.imagem_url;
        if (!imageUrl || (!imageUrl.startsWith('http') && !imageUrl.startsWith('assets'))) {
            imageUrl = null;
        }

        const imageSrc = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `../${imageUrl}`) : null;
        const imageHTML = imageSrc ? `<div class="blog-row-image"><img src="${imageSrc}" alt="${post.titulo}"></div>` : '';

        row.innerHTML = `
            <div class="blog-row-content">
                <span class="section-tag">${categoryName}</span>
                <h2>${post.titulo}</h2>
                <p class="excerpt">${post.resumo}</p>
                <div class="read-more">
                    Ler artigo completo
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </div>
            </div>
            ${imageHTML}`;
        return row;
    }
});
