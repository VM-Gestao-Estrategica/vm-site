// Dados Fictícios - VM Gestão Estratégica - Gestão Empresarial
const dadosGrupoVM = {
  // Equipe
  equipe: [
    {
      id: 1,
      nome: "Nathalia Bins Voigt",
      cargo: "COO - Diretora Comercial",
      foto: "/assets/equipe/nathalia-bins-voigt.jpeg",
      descricao: "Especialista em Direito Tributário, desenvolvimento de negócios e relacionamento com clientes. Lidera a equipe comercial, impulsiona resultados e fortalece parcerias.",
      email: "nathaliavoigt@vmgestaoestrategica.com.br",
      whatsapp: "5551993917403",
      linkedin: "https://www.linkedin.com/company/vmgestaoestrategica/",
      instagram: "https://www.instagram.com/vmgestaoestrategica/"
    },
    {
      id: 2,
      nome: "Leandro Souza Mendonça",
      cargo: "CLO - Diretor Jurídico",
      foto: "/assets/equipe/leandro-souza-mendonca.jpeg",
      descricao: "Especialista em Advocacia Cível, com mais de 10 anos de atuação nas áreas bancária e jurídica. Lidera a equipe técnica, supervisiona estratégias e padroniza processos para garantir a excelência na entrega aos clientes.",
      email: "leandromendonca@vmgestaoestrategica.com.br",
      whatsapp: "5551993917403",
      linkedin: "https://www.linkedin.com/company/vmgestaoestrategica/",
      instagram: "https://www.instagram.com/vmgestaoestrategica/"
    }
  ],

  // Scopos (Novos dados de serviços e áreas)
  scopos: [
    {
      nome_scopo: "Gestão Tributária",
      slug: "tributario",
      areas: [
        "Revisão da dívida ativa",
        "Parcelamentos e Transações",
        "Contencioso Tributário",
        "Defesa e Recursos"
      ],
      servicos: [
        { nome: "Defesa e Recurso", descricao: "Defesa técnica contra autuações fiscais e recursos administrativos especializados." },
        { nome: "Receita Federal", descricao: "Regularização de pendências, malha fina e certidões junto ao fisco federal." },
        { nome: "Secretaria da Fazenda Estadual", descricao: "Gestão de débitos e obrigações junto aos órgãos fazendários estaduais." },
        { nome: "Prefeitura", descricao: "Regularização de ISS, IPTU e taxas municipais com foco em economia fiscal." },
        { nome: "Regularização Fiscal Estratégica", descricao: "Diagnóstico completo e plano de ação para regularidade fiscal total." },
        { nome: "Levantamento de débitos", descricao: "Mapeamento detalhado de todas as pendências junto aos órgãos públicos." },
        { nome: "Diagnóstico de risco", descricao: "Avaliação técnica de passivos e mapeamento de riscos fiscais iminentes." },
        { nome: "Estratégia de parcelamento", descricao: "Planejamento da melhor forma de parcelar débitos com parcelas que cabem no caixa." },
        { nome: "Pedido de transação tributária", descricao: "Negociação direta com o fisco para descontos significativos em multas e juros." },
        { nome: "Revisão de multa e juros", descricao: "Análise técnica para redução de encargos abusivos em débitos fiscais." },
        { nome: "Diagnóstico Fiscal Estratégico", descricao: "Relatório gerencial com panorama completo da situação fiscal da empresa." },
        { nome: "Revisão fiscal e Compliance", descricao: "Auditoria preventiva para evitar multas e garantir conformidade com a legislação." },
        { nome: "Transação Tributária", descricao: "Aproveitamento de editais para liquidação de dívidas com até 70% de desconto." },
        { nome: "Planejamento Tributário Preventivo", descricao: "Estratégias legais para redução da carga tributária futura do negócio." },
        { nome: "Revisão estratégica de regime tributário", descricao: "Análise entre Simples, Lucro Presumido ou Real para menor tributação." },
        { nome: "Defesa de IRPF em Malha Fina", descricao: "Suporte especializado para regularizar Declaração de Renda retida." },
        { nome: "Regularização de CPF com pendência fiscal", descricao: "Limpeza de restrições no CPF vinculadas a débitos com o fisco." },
        { nome: "Parcelamento e negociação de dívida ativa", descricao: "Acompanhamento completo de negociações em fase de execução fiscal." },
        { nome: "Procuradoria-Geral da Fazenda Nacional", descricao: "Negociações de débitos já inscritos em dívida ativa da união." },
        { nome: "Dívida ativa estadual", descricao: "Soluções para débitos estaduais em cobrança judicial ou administrativa." },
        { nome: "Municipal", descricao: "Regularização de débitos inscritos na dívida ativa do município." },
        { nome: "Diagnóstico Fiscal Estratégico em 7 dias", descricao: "Análise expressa da situação fiscal para tomada de decisão rápida." },
        { nome: "Defesa Administrativa Especializada", descricao: "Impugnações técnicas de autos de infração em todas as esferas." },
        { nome: "Recuperação de Tributos Pagos Indevidamente", descricao: "Identificação e compensação de valores pagos a mais ao fisco." }
      ],
      icone: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8z" /></svg>'
    },
    {
      nome_scopo: "Gestão Bancária",
      slug: "bancario",
      areas: [
        "Gestão Preventiva de Contratos Garantidos",
        "Auditoria Financeira de Operações Bancárias",
        "Reorganização Financeira e Plano Administrativo de Endividamento",
        "Gestão de Ocorrências Bancárias e Compliance Operacional"
      ],
      servicos: [
        { nome: "Defesa em Ações de Busca e Apreensão de Veículo", descricao: "Atuação técnica imediata para evitar a perda do bem e revisar o contrato." },
        { nome: "Revisional de Financiamento de Veículos", descricao: "Redução de juros abusivos e eliminação de taxas ilegais no financiamento." },
        { nome: "Revisional de Financiamento Imobiliário", descricao: "Adequação de parcelas habitacionais à capacidade financeira real do cliente." },
        { nome: "Ação de Rescisão Contratual de Financiamento Imobiliário", descricao: "Suporte jurídico para cancelamento de contratos com devolução de valores." },
        { nome: "Desbloqueio de Valores (PF e PJ)", descricao: "Medidas urgentes para liberação de contas bancárias e fluxos de caixa." },
        { nome: "Defesa em Execução de Título Extrajudicial (Execuções Bancárias)", descricao: "Proteção patrimonial e defesa técnica contra cobranças bancárias judiciais." },
        { nome: "Superendividamento (Lei 14.181/2021)", descricao: "Reorganização de todas as dívidas sob a proteção da Lei do Mínimo Existencial." }
      ],
      icone: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 21h18" /><path d="M3 10h18" /><path d="M5 6l7-3 7 3" /><path d="M4 10v11" /><path d="M20 10v11" /><path d="M8 14v3" /><path d="M12 14v3" /><path d="M16 14v3" /></svg>'
    },
    {
      nome_scopo: "Consultoria Preventiva",
      slug: "preventivo",
      areas: [
        "Planejamento Tributário",
        "Revisão Fiscal e Compliance",
        "Gestão fiscal recorrente",
        "Diagnóstico Estratégico"
      ],
      servicos: [
        { nome: "Planejamento Tributário", descricao: "Estruturação legal para reduzir a carga tributária e aumentar o lucro." },
        { nome: "Diagnóstico Fiscal Estratégico", descricao: "Análise profunda da saúde fiscal para prevenção de riscos e multas." },
        { nome: "Planejamento Tributário Preventivo", descricao: "Ações contínuas para manter a empresa sempre na melhor rota fiscal." },
        { nome: "Reestruturação Societária", descricao: "Organização estratégica da estrutura da empresa para proteção e economia." },
        { nome: "Holding Familiar e Patrimonial", descricao: "Proteção de bens e planejamento sucessório com máxima eficiência tributária." },
        { nome: "Compliance & Revisão", descricao: "Garantia de que todos os processos internos seguem as normas vigentes." },
        { nome: "Revisão Fiscal e Compliance", descricao: "Varredura completa em tributos pagos para identificar erros e oportunidades." },
        { nome: "Auditoria de Obrigações Acessórias", descricao: "Conferência de SPED, DCTF e outras guias para evitar multas por inconsistência." },
        { nome: "Parcelamentos e Transações (PGFN)", descricao: "Gestão estratégica de acordos de longo prazo com o governo federal." },
        { nome: "Regularização de CPF e Malha Fina", descricao: "Consultoria dedicada para sócios e diretores em pendências de pessoa física." }
      ],
      icone: '<svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" /></svg>'
    }
  ],

  // Contatos de Atendimento
  contatos: {
    geral: {
      id: "VM_telefone_contato",
      nome: "Contato Geral VM",
      numero: "51993917403",
      formatado: "(51) 99391-7403"
    },
    bancario: {
      id: "VM_telefone_contato",
      nome: "Atendimento Bancário",
      numero: "51993917403",
      formatado: "(51) 99391-7403"
    },
    tributario: {
      id: "VM_telefone_contato",
      nome: "Atendimento Tributário",
      numero: "51993917403",
      formatado: "(51) 99391-7403"
    }
  },

  // Paleta de Cores Brand
  cores: {
    principal: "#779be8", // Azul da Logo
    variacoes: {
        base: "#769ae7",
        escuro: "#5276c6",
        claro: "#96b2e4",
        acao: "#789feb",
        suave: "#c7d6f0",
        medio: "#6e8edb"
    }
  }
};

// Export para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = dadosGrupoVM;
}