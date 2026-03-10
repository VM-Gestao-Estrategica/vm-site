// blog/blog-post.js - Script para a PÁGINA DE POST INDIVIDUAL (blog-post.html)

document.addEventListener('DOMContentLoaded', async () => {
    const postContainer = document.getElementById('blogPost');
    if (!postContainer) return;

    // Renderiza o componente de Newsletter
    if (typeof renderNewsletter === 'function') {
        renderNewsletter('newsletter-placeholder');
    }

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

        const currentUrl = encodeURIComponent(window.location.href);
        const shareText = encodeURIComponent(`Confira este artigo: ${post.titulo}`);

        postContainer.innerHTML = `
            <div class="blog-post-full">
                <a href="../blog/" class="back-link" style="display: flex; align-items: center; gap: 0.5rem; text-decoration: none; color: var(--text-muted); font-weight: 700; text-transform: uppercase; font-size: 0.85rem; margin-bottom: 2rem;">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                    Voltar para o blog
                </a>
                
                <div class="blog-date" style="margin-bottom: 2rem;">
                    <span style="text-transform: uppercase; letter-spacing: 0.1em; font-size: 0.85rem; font-weight: 700; color: var(--text-muted);">Publicado em ${formattedDate}</span>
                </div>

                <img src="${post.imagem_url && (post.imagem_url.startsWith('http') || post.imagem_url.startsWith('assets')) ? post.imagem_url : '../assets/site-imagens/vm-banner-blog.jpg'}" 
                     alt="${post.titulo}" 
                     class="post-main-image"
                     onerror="this.onerror=null; this.src='../assets/site-imagens/vm-banner-blog.jpg';">

                <div class="post-content">
                    <h1 style="font-family: 'Lexend', sans-serif; font-size: clamp(2rem, 4vw, 2.8rem); font-weight: 800; color: var(--primary); margin-bottom: 2rem; line-height: 1.15; letter-spacing: -0.02em;">
                        ${post.titulo}
                    </h1>
                    <p class="lead" style="font-size: 1.15rem; line-height: 1.6; color: var(--primary); margin-bottom: 2.5rem; font-weight: 500; border-left: 4px solid var(--accent); padding-left: 2rem;">
                        ${post.resumo}
                    </p>

                    <div class="post-share">
                        <span class="share-label">Compartilhar:</span>
                        <div class="share-btns-wrapper">
                            <a href="https://wa.me/?text=${shareText}%20${currentUrl}" target="_blank" class="share-btn whatsapp" title="WhatsApp">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
                            </a>
                            <a href="https://www.linkedin.com/sharing/share-offsite/?url=${currentUrl}" target="_blank" class="share-btn linkedin" title="LinkedIn">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
                            </a>
                            <a href="https://www.facebook.com/sharer/sharer.php?u=${currentUrl}" target="_blank" class="share-btn facebook" title="Facebook">
                                <svg fill="currentColor" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
                            </a>
                            <button onclick="copyToClipboard('${window.location.href}')" class="share-btn" title="Copiar Link">
                                <svg fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24"><path d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z"/></svg>
                            </button>
                        </div>
                    </div>
                </div>

                <div class="post-content">
                    <div class="post-body-text" style="font-size: 1.1rem; line-height: 1.8; color: #444; white-space: pre-wrap;">
                        ${post.conteudo}
                    </div>
                </div>
            </div>`;

        // Função global para copiar link (para ser acessada pelo botão onclick)
        window.copyToClipboard = function (text) {
            navigator.clipboard.writeText(text).then(() => {
                alert('Link copiado para a área de transferência!');
            }).catch(err => {
                console.error('Erro ao copiar link:', err);
            });
        };
    }
});
