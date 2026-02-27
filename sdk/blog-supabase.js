// sdk/blog-supabase.js

// 1. Função Auxiliar para Verificação Interna
function checkSupabaseConfig() {
    if (!window.SUPABASE_CONFIG || !window.SUPABASE_CONFIG.url || !window.SUPABASE_CONFIG.anonKey) {
        console.warn('⚠️ Supabase não configurado corretamente. Verifique sdk/config.js.');
        return false;
    }
    return true;
}

// 2. Função para Buscar Posts do Blog com Categoria
async function getBlogPosts() {
    try {
        if (!checkSupabaseConfig()) return [];

        const supabase = window.getSupabaseClient();
        let { data: posts, error } = await supabase
            .from('blog_posts')
            .select('*, categoria:blog_categorias(nome)');

        if (error) {
            console.error('Erro ao buscar posts:', error);
            return [];
        }

        return posts;
    } catch (error) {
        console.error('Erro na requisição blog:', error);
        return [];
    }
}

// 3. Função para Buscar um ÚNICO Post pelo SLUG com Categoria
async function getBlogPostBySlug(slug) {
    if (!slug) return null;

    try {
        if (!checkSupabaseConfig()) return null;

        const supabase = window.getSupabaseClient();
        let { data, error } = await supabase
            .from('blog_posts')
            .select('*, categoria:blog_categorias(nome)')
            .eq('slug', slug)
            .single();

        if (error) {
            console.error('Erro ao buscar post por slug:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Erro na requisição post slug:', error);
        return null;
    }
}

// 4. Exportar as funções para uso externo
window.blogAPI = {
    getBlogPosts,
    getBlogPostBySlug
};
