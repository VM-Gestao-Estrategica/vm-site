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
      titulo: "Planejamento Tributário Estratégico",
      descricao: "Análise completa da estrutura tributária da empresa para otimização fiscal dentro da legalidade.",
      detalhes: [
        "Estudo de regime tributário mais adequado",
        "Identificação de oportunidades de economia fiscal",
        "Análise de impactos tributários em operações",
        "Planejamento de reorganizações societárias"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>'
    },
    {
      id: 2,
      titulo: "Consultoria Preventiva",
      descricao: "Assessoria contínua para prevenção de passivos e adequação às normas tributárias vigentes.",
      detalhes: [
        "Acompanhamento de mudanças legislativas",
        "Revisão periódica de conformidade",
        "Orientação sobre obrigações acessórias",
        "Análise de riscos fiscais"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>'
    },
    {
      id: 3,
      titulo: "Direito Bancário Empresarial",
      descricao: "Orientação especializada sobre operações bancárias e contratos financeiros.",
      detalhes: [
        "Análise de contratos bancários",
        "Negociação com instituições financeiras",
        "Revisão de operações de crédito",
        "Orientação sobre garantias"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"/></svg>'
    },
    {
      id: 4,
      titulo: "Compliance Tributário",
      descricao: "Implementação e monitoramento de processos de conformidade fiscal.",
      detalhes: [
        "Desenvolvimento de políticas fiscais",
        "Treinamento de equipes",
        "Auditoria de conformidade",
        "Implementação de controles internos"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
    },
    {
      id: 5,
      titulo: "Due Diligence Tributária",
      descricao: "Análise detalhada de aspectos tributários em fusões, aquisições e investimentos.",
      detalhes: [
        "Levantamento de passivos tributários",
        "Análise de contingências fiscais",
        "Avaliação de estrutura tributária",
        "Relatórios executivos para tomada de decisão"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"/></svg>'
    },
    {
      id: 6,
      titulo: "Assessoria em Operações Estruturadas",
      descricao: "Suporte jurídico-tributário em operações complexas e reestruturações empresariais.",
      detalhes: [
        "Planejamento de reorganizações societárias",
        "Análise tributária de operações especiais",
        "Estruturação de holdings",
        "Orientação em sucessão empresarial"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>'
    },
    {
      id: 7,
      titulo: "Defesa em Busca e Apreensão",
      descricao: "Proteção jurídica estratégica para evitar a perda do veículo e renegociar dívidas bancárias.",
      detalhes: [
        "Defesa imediata contra liminares",
        "Negociação de débitos em atraso",
        "Análise de abusividades contratuais",
        "Ações para recuperação de bens apreendidos"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z"/></svg>'
    },
    {
      id: 8,
      titulo: "Revisão de Financiamentos",
      descricao: "Análise técnica para redução de juros abusivos e parcelas elevadas em contratos de veículos e imóveis.",
      detalhes: [
        "Identificação de juros acima da média de mercado",
        "Cálculo de valores pagos indevidamente",
        "Redução estratégica do saldo devedor",
        "Recuperação de taxas bancárias abusivas"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-5 14H7v-2h7v2zm3-4H7v-2h10v2zm0-4H7V7h10v2z"/></svg>'
    },
    {
      id: 9,
      titulo: "Lei do Superendividamento",
      descricao: "Reorganização das dívidas para preservar o mínimo existencial e garantir a dignidade financeira.",
      detalhes: [
        "Elaboração de plano de pagamento unificado",
        "Negociação coletiva com todos os credores",
        "Proteção contra descontos abusivos em folha",
        "Preservação da renda básica familiar"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z"/></svg>'
    },
    {
      id: 10,
      titulo: "Desbloqueio de Valores",
      descricao: "Ações urgentes para liberação de contas bancárias bloqueadas via SISBAJUD (PF e PJ).",
      detalhes: [
        "Defesa contra penhoras online indevidas",
        "Liberação de conta salário e poupança",
        "Proteção de capital de giro empresarial",
        "Atendimento com máxima prioridade e agilidade"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 17c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6-9h-1V6c0-2.76-2.24-5-5-5S7 3.24 7 6v2H6c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V10c0-1.1-.9-2-2-2zM9 6c0-1.66 1.34-3 3-3s3 1.34 3 3v2H9V6z"/></svg>'
    }
  ],


  // Blog Mock para Desenvolvimento
  blog: [
    {
      id: 1,
      titulo: "As principais mudanças tributárias para 2026",
      resumo: "Entenda como as novas regulamentações podem impactar o planejamento fiscal da sua empresa e como se preparar.",
      categoria: "Tributário",
      data: "10 Jan 2026",
      imagem: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&w=800&q=80",
      slug: "mudancas-tributarias-2026"
    },
    {
      id: 2,
      titulo: "Gestão de Passivos: Estratégias de Recuperação",
      resumo: "Como identificar créditos acumulados e transformar passivos tributários em fluxo de caixa para sua operação.",
      categoria: "Gestão",
      data: "15 Jan 2026",
      imagem: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&q=80",
      slug: "gestao-de-passivos"
    },
    {
      id: 3,
      titulo: "Direito Bancário para Médias e Grandes Empresas",
      resumo: "A importância da revisão contratual em operações de crédito estruturadas e financiamentos de longo prazo.",
      categoria: "Jurídico",
      data: "20 Jan 2026",
      imagem: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
      slug: "direito-bancario-empresarial"
    }
  ]
};

// Export para uso global
if (typeof module !== 'undefined' && module.exports) {
  module.exports = dadosGrupoVM;
}