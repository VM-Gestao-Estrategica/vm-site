// sdk/contact-supabase.js

// 1. Função Auxiliar para Verificação Interna
function checkSupabaseConfig() {
    if (!window.SUPABASE_CONFIG || !window.SUPABASE_CONFIG.url || !window.SUPABASE_CONFIG.anonKey) {
        console.warn('⚠️ Supabase não configurado corretamente. Verifique sdk/config.js.');
        return false;
    }
    return true;
}

// 2. Função para Enviar Solicitação de Contato
async function submitContactForm(formData) {
    try {
        if (!checkSupabaseConfig()) {
            throw new Error('Configuração do Supabase ausente.');
        }

        // Validação dos campos obrigatórios
        if (!formData.nome || !formData.email || !formData.telefone || !formData.assunto || !formData.mensagem) {
            throw new Error('Campos obrigatórios não preenchidos.');
        }

        const supabase = window.getSupabaseClient();

        // Chama a RPC
        const { data, error } = await supabase.rpc('enviar_contato', {
            p_nome: formData.nome,
            p_email: formData.email,
            p_telefone: formData.telefone,
            p_empresa: formData.empresa || null,
            p_assunto: formData.assunto,
            p_mensagem: formData.mensagem
        });

        if (error) {
            console.error('Erro de conexão/RPC:', error);
            throw error;
        }

        // Verifica se a função interna do SQL retornou erro
        if (data && data.success === false) {
            console.error('Erro interno na função SQL:', data.error);
            throw new Error(data.error || 'Falha ao processar contato no banco.');
        }

        return { success: true, data };
    } catch (error) {
        console.error('Erro na requisição contato:', error);
        throw error;
    }
}

// 3. Exportar a função para uso externo
window.contactAPI = {
    submitContactForm
};

