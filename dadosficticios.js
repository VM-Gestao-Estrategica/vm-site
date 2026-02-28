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
      titulo: "Gestão Tributária Estratégica",
      descricao: "Soluções completas para otimização fiscal e defesa administrativa de empresas e pessoas físicas.",
      detalhes: [
        "Defesa e Recurso (Receita, SEFAZ e Prefeitura)",
        "Transação Tributária (Lei 13.988/20)",
        "Recuperação de Tributos Pagos Indevidamente",
        "Regularização de CPF e Malha Fina IRPF"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M3 13h8V3H3v10zm0 8h8v-6H3v6zm10 0h8V11h-8v10zm0-18v6h8V3h-8z"/></svg>'
    },
    {
      id: 2,
      titulo: "Consultoria Preventiva",
      descricao: "Foco em economia futura e mitigação de riscos através de diagnósticos e planejamento antecipado.",
      detalhes: [
        "Diagnóstico Fiscal Estratégico",
        "Planejamento Tributário Preventivo",
        "Revisão Fiscal e Compliance",
        "Revisão Estratégica de Regime Tributário"
      ],
      categoria: "preventivo",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z"/></svg>'
    },
    {
      id: 3,
      titulo: "Gestão Bancária & Dívidas",
      descricao: "Proteção contra abusividades bancárias e reorganização financeira estratégica.",
      detalhes: [
        "Defesa em Busca e Apreensão de Veículos",
        "Revisionais de Financiamento (Veículos e Imóveis)",
        "Desbloqueio de Valores (SISBAJUD)",
        "Lei do Superendividamento (Lei 14.181/21)"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 10h3v7H4zm6.5 0h3v7h-3zM2 19h20v3H2zm15-9h3v7h-3zm-5-9L2 6v2h20V6z"/></svg>'
    },
    {
      id: 4,
      titulo: "Compliance & Defesa Fiscal",
      descricao: "Implementação de processos de conformidade e atuação em litígios administrativos.",
      detalhes: [
        "Defesa Administrativa Especializada",
        "Regularização Fiscal Estratégica",
        "Parcelamento e Negociação de Dívida Ativa",
        "Auditoria de Obrigações Acessórias"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>'
    },
    {
      id: 5,
      titulo: "Direito Bancário Imobiliário",
      descricao: "Segurança jurídica em contratos de financiamento e proteção do patrimônio familiar.",
      detalhes: [
        "Ação de Rescisão Contratual Imobiliária",
        "Defesa contra Leilão de Imóveis",
        "Análise de Cláusulas Abusivas no SFH",
        "Negociação de Saldo Devedor"
      ],
      categoria: "bancario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h14v-8h3L12 3zm0 10c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"/></svg>'
    },
    {
      id: 6,
      titulo: "Assessoria em Transações",
      descricao: "Suporte especializado para quitação e parcelamento de grandes passivos tributários.",
      detalhes: [
        "Transação Federal (PGFN)",
        "Acordos de Débitos Estaduais e Municipais",
        "Redução de Multa e Juros",
        "Estratégias de Parcelamento Longo"
      ],
      categoria: "tributario",
      icone: '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 7V3H2v18h20V7H12zM6 19H4v-2h2v2zm0-4H4v-2h2v2zm0-4H4V9h2v2zm0-4H4V5h2v2zm4 12H8v-2h2v2zm0-4H8v-2h2v2zm0-4H8V9h2v2zm0-4H8V5h2v2zm10 12h-8v-2h2v-2h-2v-2h2v-2h-2V9h8v10zm-2-8h-2v2h2v-2zm0 4h-2v2h2v-2z"/></svg>'
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