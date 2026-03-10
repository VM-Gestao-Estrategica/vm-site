// sdk/newsletter-supabase.js

// 1. Função para se inscrever na Newsletter
async function subscribeToNewsletter(email) {
    try {
        if (!email) {
            throw new Error('Email é necessário.');
        }

        const supabase = window.getSupabaseClient();

        // Chama a RPC criada via SQL
        const { data, error } = await supabase.rpc('inscrever_newsletter', {
            p_email: email
        });

        if (error) {
            console.error('Erro de conexão/RPC:', error);
            throw error;
        }

        // Verifica se a função interna do SQL retornou erro
        if (data && data.success === false) {
            console.error('Erro interno na função SQL:', data.error);
            throw new Error(data.error || 'Falha ao processar inscrição no banco.');
        }

        return { success: true, data };
    } catch (error) {
        console.error('Erro na requisição newsletter:', error);
        throw error;
    }
}

// 2. Exportar a função para uso externo
window.newsletterAPI = {
    subscribeToNewsletter
};
