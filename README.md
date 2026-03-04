# 🏢 VM Gestão Estratégica - Site Corporativo

Site institucional com integração completa ao Supabase para gerenciamento de conteúdo (Blog), Serviços e Leads de Contato.

---

## 🔒 Segurança e Configuração

Este projeto utiliza **variáveis de ambiente** para armazenar credenciais do Supabase de forma segura, evitando a exposição de dados sensíveis no código-fonte.

### ✅ Melhores Práticas de Segurança
- **Não Hardcoded**: Credenciais não ficam expostas no código.
- **Variáveis de Ambiente**: Suporte total para desenvolvimento local (.env) e produção (Netlify).
- **Ignorados pelo Git**: Arquivos sensíveis como `.env`, `sdk/config.js`, e pastas de rascunhos são mantidos fora do repositório.

---

## 🚀 Início Rápido

### 💻 Desenvolvimento Local

O projeto já vem configurado para rodar imediatamente!

1. **Abra o site**: Basta abrir `index.html` ou usar um servidor local (como *Live Server* do VS Code).
2. **Personalizar Credenciais (Opcional)**:
   - Se precisar usar outro banco Supabase, crie um arquivo `.env` na raiz.
   - Execute `npm run build:config` para regenerar o `sdk/config.js`.

### 🌐 Produção (Netlify)

1. **Configure as Variáveis**: No painel do Netlify, adicione `VITE_SUPABASE_URL` e `VITE_SUPABASE_ANON_KEY`.
2. **Build Automático**: O arquivo `netlify.toml` já está configurado para gerar as credenciais seguras durante o deploy.

---

## 📁 Estrutura do Projeto

```
projeto/
├── sdk/                # Integrações com Supabase
├── blog/               # Listagem de artigos
├── servicos/           # Detalhamento de serviços
├── assets/             # Imagens e identidade visual
├── scripts/            # Scripts de automação e build
├── templates/          # Componentes reutilizáveis (Header/Footer)
└── netlify.toml        # Configuração de Deploy
```

---

## 🛠️ Comandos Disponíveis

```bash
# Gerar configuração a partir do .env
npm run build:config

# Verificar integridade do setup
npm run verify

# Alias para setup completo
npm run setup
```

---

## 🔍 SEO e Performance

O site foi otimizado seguindo as melhores práticas de SEO moderno:
- **Meta Tags Estratégicas**: Títulos e descrições otimizados para conversão.
- **Microformatos/Open Graph**: Pronto para compartilhamento em redes sociais.
- **Sitemap Dinâmico**: Localizado em `sitemap.xml`.

---

## 📞 Suporte e Desenvolvimento

Desenvolvido com excelência técnica pela **TOPSTACK**.

> **O futuro pertence a quem transforma tecnologia em vantagem.** A TOPSTACK conecta inovação e propósito, criando soluções personalizadas, automações e software sob medida que liberam o seu potencial. 
> 
> ✅ Desenvolvimento de Software Sob Medida  
> ✅ Automações de Processos e Marketing  
> ✅ Agentes de IA e Chatbots  
> ✅ Business Intelligence (Análise de Dados)  
> 
> [Visite a TOPSTACK](https://topstack.com.br)

---
© 2025 VM Gestão Estratégica.
