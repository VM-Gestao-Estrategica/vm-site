# Documentação de Efeitos de Interação - Cards de Serviços

Este documento registra os estilos de hover e interação que foram aplicados aos cards de serviços (`.service-card`) antes de sua remoção programada.

## 1. Grid de Serviços Principal (Tema Escuro)
Aplicado na página inicial e seções padrão com fundo escuro.

### Hover no Card (`.service-card:hover`)
- **Fundo:** `rgba(255, 255, 255, 0.03)` (leve clareamento).
- **Borda:** Cor de destaque selecionada (`var(--accent)`).
- **Z-Index:** Ajustado para `2` para sobrepor cartões vizinhos.

### Barra Lateral de Destaque (`.service-card:hover::before`)
- **Efeito:** Uma barra vertical de 6px aparece no lado esquerdo do card com animação de `scaleY(1)`.
- **Cor:** `var(--accent)`.

### Ícone do Serviço (`.service-card:hover .service-icon`)
- **Movimento:** Deslocamento lateral de 10px (`translateX(10px)`).
- **Cor:** Transição para branco (`var(--bg-white)`).

---

## 2. Página de Serviços (Tema Claro)
Aplicado na seção `.services-page-section`.

### Hover no Card (`.services-page-section .service-card:hover`)
- **Fundo:** Alterna para o cinza claro de fundo do site (`var(--bg-light)`).
- **Sombra (Box Shadow):** Adição de uma sombra suave e profunda (`0 20px 40px rgba(0,0,0,0.05)`).

---

## Histórico de Decisões
- **Data:** 27 de Fevereiro de 2026.
- **Ação:** Documentação dos efeitos para futura referência visual e remoção dos estilos ativos para simplificar a interface conforme solicitado pelo usuário.



## IMAGEM DO BLO

TIP

Dica para o Cloudinary: Embora o site já faça o ajuste visual, para economizar banda e garantir a melhor qualidade, você pode configurar o Cloudinary para entregar a imagem já nesse formato adicionando os parâmetros c_fill,ar_2:1,w_2240 na URL que você cadastra no banco de dados.