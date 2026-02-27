// sdk/services-supabase.js

// 1. Configuração do Cliente Supabase
// As credenciais são carregadas do arquivo config.js que deve ser incluído antes deste script

// Verifica se a configuração foi carregada
if (!window.SUPABASE_CONFIG) {
    console.error('❌ Erro: SUPABASE_CONFIG não encontrado. Certifique-se de que config.js está sendo carregado antes deste script.');
    // Não lançamos erro aqui para não travar a página, apenas avisamos
}

// 2. Função para Buscar Serviços
async function getServices() {
    try {
        // Verifica se temos o cliente
        if (typeof window.getSupabaseClient !== 'function') {
            console.error('Função getSupabaseClient não encontrada. Verifique se sdk/config.js está carregado.');
            return null;
        }

        const supabase = window.getSupabaseClient();

        // Busca da tabela 'servicos' explicitando o schema 'business'
        const { data, error } = await supabase
            .schema('business')
            .from('servicos')
            .select('*');

        if (error) {
            console.error('Erro ao buscar serviços do Supabase:', error);
            return null;
        }

        return data;
    } catch (error) {
        console.error('Erro na requisição de serviços:', error);
        return null;
    }
}

// 3. Exportar a função para uso externo
window.servicesAPI = {
    getServices
};
