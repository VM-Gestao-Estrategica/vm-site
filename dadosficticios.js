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
      descricao: "Especialista em Direito Bancário e área cível, com mais de 15 anos de experiência. Lidera a equipe técnica e garante a excelência na entrega dos serviços.",
      email: "leandromendonca@vmgestaoestrategica.com.br",
      whatsapp: "5551984538987",
      linkedin: "https://www.linkedin.com/company/vmgestaoestrategica/",
      instagram: "https://www.instagram.com/vmgestaoestrategica/"
    }
  ],

  // Serviços
  servicos: [
    {
      id: 1,
      titulo: "Recuperação de Créditos",
      descricao: "Recupere impostos pagos indevidamente e melhore o fluxo de caixa.",
      detalhes: [
        "Identificação de Créditos Acumulados",
        "Recuperação de Tributos Federais e Estaduais",
        "Compensação Tributária Estratégica",
        "Revisão de Bases de Cálculo"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 4V1L8 5l4 4V6c3.31 0 6 2.69 6 6 0 1.01-.25 1.97-.7 2.8l1.46 1.46C19.54 15.03 20 13.57 20 12c0-4.42-3.58-8-8-8zm-1.25 11.48c.88.42 1.95.14 2.52-.63.57-.77.42-1.85-.34-2.45-.75-.6-1.83-.45-2.4.32-.57.77-.42 1.85.34 2.45zM4 12c0 1.57.46 3.03 1.24 4.26L3.78 17.74C3.25 16.03 3 14.01 3 12c0-4.42 3.58-8 8-8v3l4-4-4-4v3c-4.42 0-8 3.58-8 8zm9 0c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z"/></svg>'
    },
    {
      id: 2,
      titulo: "Defesa e Recursos",
      descricao: "Proteja-se contra autuações fiscais e cobranças indevidas.",
      detalhes: [
        "Defesa de Autos de Infração",
        "Recursos Administrativos (CARF, TIT)",
        "Contencioso Tributário Judicial",
        "Ações Anulatórias de Débito"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>'
    },
    {
      id: 3,
      titulo: "Gestão Bancária & Dívidas",
      descricao: "Proteção contra abusividades bancárias e reorganização financeira.",
      detalhes: [
        "Defesa em Busca e Apreensão de Veículos",
        "Revisionais de Financiamento",
        "Desbloqueio de Valores (SISBAJUD)",
        "Lei do Superendividamento"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"/></svg>'
    },
    {
      id: 4,
      titulo: "Planejamento Tributário",
      descricao: "Reduza sua carga tributária de forma legal e estratégica.",
      detalhes: [
        "Diagnóstico Fiscal Estratégico",
        "Planejamento Tributário Preventivo",
        "Reestruturação Societária",
        "Holding Familiar e Patrimonial"
      ],
      categoria: "preventivo",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z"/></svg>'
    },
    {
      id: 5,
      titulo: "Compliance & Revisão",
      descricao: "Evite riscos e otimize sua tributação com conformidade total.",
      detalhes: [
        "Revisão Fiscal e Compliance",
        "Auditoria de Obrigações Acessórias",
        "Parcelamentos e Transações (PGFN)",
        "Regularização de CPF e Malha Fina"
      ],
      categoria: "preventivo",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>'
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