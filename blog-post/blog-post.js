// blog/blog-post.js - Script para a PÁGINA DE POST INDIVIDUAL (blog-post.html)

document.addEventListener('DOMContentLoaded', async () => {
    const postContainer = document.getElementById('blogPost');
    if (!postContainer) return;

    // Lendo o slug a partir do parâmetro da URL (ex: ?post=o-slug-do-post)
    const urlParams = new URLSearchParams(window.location.search);
    const postSlug = urlParams.get('post');

    if (!postSlug) {
        postContainer.innerHTML = '<p>Post não encontrado. <a href="../blog/">Voltar para o blog</a>.</p>';
        return;
    }

    try {
        const post = await window.blogAPI.getBlogPostBySlug(postSlug);

        if (post) {
            renderSinglePost(post);
        } else {
            postContainer.innerHTML = '<p>Post não encontrado. <a href="../blog/">Voltar para o blog</a>.</p>';
        }
    } catch (error) {
        console.error("Erro ao carregar o post:", error);
        postContainer.innerHTML = '<p>Erro ao carregar o post. <a href="../blog/">Voltar para o blog</a>.</p>';
    }

    function renderSinglePost(post) {
        document.title = `${post.titulo} - VM Gestão Estratégica`;

        // O título e categoria agora são renderizados dentro do postContainer diretamente


        // Usando o campo correto 'data_publicacao'
        const formattedDate = new Date(post.data_publicacao).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' });

        let imageUrl = post.imagem_url;
        // Validação da URL da imagem
        if (!imageUrl || (!imageUrl.startsWith('http') && !imageUrl.startsWith('assets'))) {
            imageUrl = null;
        }

        // Usa a URL completa se for externa, ou monta o caminho relativo se for local
        const imageSrc = imageUrl ? (imageUrl.startsWith('http') ? imageUrl : `../${imageUrl}`) : null;

        postContainer.innerHTML = `
            <div class="blog-post-full">
                <a href="../blog/" class="back-link" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: var(--text-muted); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 2rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Voltar para o blog
                </a>
                
                <div class="blog-date" style="margin-bottom: 2rem;">
                    <span style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Publicado em ${formattedDate}</span>
                </div>

                ${imageSrc ? `<img src="${imageSrc}" alt="${post.titulo}" class="post-main-image" style="width: 100%; height: auto; margin-bottom: 3rem;">` : ''}
                
                <div class="post-content">
                    <h1 style="font-family: 'Outfit', sans-serif; font-size: clamp(2.5rem, 5vw, 4rem); font-weight: 800; color: var(--primary); margin-bottom: 2rem; line-height: 1.1; letter-spacing: -0.02em;">
                        ${post.titulo}
                    </h1>
                    <p class="lead" style="font-size: 1.4rem; line-height: 1.6; color: var(--primary); margin-bottom: 3rem; font-weight: 500; border-left: 4px solid var(--accent); padding-left: 2rem;">
                        ${post.resumo}
                    </p>
                    <div class="post-body-text" style="font-size: 1.15rem; line-height: 1.8; color: #444;">
                        ${post.conteudo}
                    </div>
                </div>
            </div>`;
    }
});
