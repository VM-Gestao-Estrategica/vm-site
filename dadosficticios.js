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
      whatsapp: "5551996353096",
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
      whatsapp: "5551984538987",
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
        "Defesa e Recurso",
        "Receita Federal",
        "Secretaria da Fazenda Estadual",
        "Prefeitura",
        "Regularização Fiscal Estratégica",
        "Levantamento de débitos",
        "Diagnóstico de risco",
        "Estratégia de parcelamento",
        "Pedido de transação tributária",
        "Revisão de multa e juros",
        "Diagnóstico Fiscal Estratégico",
        "Revisão fiscal e Compliance",
        "Transação Tributária",
        "Planejamento Tributário Preventivo",
        "Revisão estratégica de regime tributário",
        "Defesa de IRPF em Malha Fina",
        "Regularização de CPF com pendência fiscal",
        "Parcelamento e negociação de dívida ativa",
        "Procuradoria-Geral da Fazenda Nacional",
        "Dívida ativa estadual",
        "Municipal",
        "Diagnóstico Fiscal Estratégico em 7 dias",
        "Defesa Administrativa Especializada",
        "Recuperação de Tributos Pagos Indevidamente"
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
        "DEFESA EM AÇÕES DE BUSCA E APREENSÃO DE VEÍCULO",
        "REVISIONAL DE FINANCIAMENTO DE VEÍCULOS",
        "REVISIONAL DE FINANCIAMENTO IMOBILIÁRIO",
        "AÇÃO DE RESCISÃO CONTRATUAL DE FINANCIAMENTO IMOBILIÁRIO",
        "DESBLOQUEIO DE VALORES (PF e PJ)",
        "DEFESA EM EXECUÇÃO DE TÍTULO EXTRAJUDICIAL (EXECUÇÕES BANCÁRIAS)",
        "SUPERENDIVIDAMENTO (Lei 14.181/2021)"
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
        "Planejamento Tributário",
        "Diagnóstico Fiscal Estratégico",
        "Planejamento Tributário Preventivo",
        "Reestruturação Societária",
        "Holding Familiar e Patrimonial",
        "Compliance & Revisão",
        "Revisão Fiscal e Compliance",
        "Auditoria de Obrigações Acessórias",
        "Parcelamentos e Transações (PGFN)",
        "Regularização de CPF e Malha Fina"
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
      id: "VM_atendimento_bancario",
      nome: "Atendimento Bancário",
      numero: "51984538987",
      formatado: "(51) 98453-8987"
    },
    tributario: {
      id: "VM_atendimento_tributario",
      nome: "Atendimento Tributário",
      numero: "51996353096",
      formatado: "(51) 99635-3096"
    }
  }
};

// Export para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = dadosGrupoVM;
}