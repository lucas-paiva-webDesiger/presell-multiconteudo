# 👑 Mega Acervo VIP - Presell Multi-Conteúdo (Telegram)

Página de presell de **altíssima conversão** projetada especificamente para vender acesso a **Mega Canais, Vaults e Acervos Multi-Criadoras** no Telegram (reunindo OnlyFans, Privacy, amadoras, famosinhas do TikTok e vazados).

---

## 🎯 Diferença desta página para a página de modelo única

| Recurso | Página de Modelo Única (`/presell`) | **Esta Página Multi-Conteúdo (`/presell-multiconteudo`)** |
|---|---|---|
| **Foco** | Uma criadora/influencer específica | **+500 criadoras reunidas em um só canal** |
| **Ângulo de Venda** | Exclusividade com a criadora | **Economia absurda vs assinar dezenas de perfis separados** |
| **Vitrine** | Prévias de um único ensaio/vídeo | **Filtros por categorias (Top Privacy, Amadoras, TikTok, 4K)** |
| **Busca Interativa** | Não necessária | **Barra de pesquisa em tempo real para o usuário buscar criadoras** |
| **Ticker de Lançamentos** | Não possui | **Barra superior animada com novos packs adicionados ao vivo** |

---

## 🚀 Como testar no seu computador
Basta dar **dois cliques no arquivo `index.html`** dentro desta pasta.

---

## ⚙️ Como Personalizar (Leva 1 minuto)

Abra o arquivo **[`config.js`](config.js)** em qualquer editor de texto (Bloco de Notas ou VS Code):

```javascript
window.PRESELL_CONFIG = {
  // 1. Coloque o link do seu Telegram aqui (todos os botões mudam automaticamente):
  telegramUrl: "https://t.me/seucanalvip",

  // 2. Nome do seu Acervo / Hub:
  hubName: "MEGA ACERVO VIP",
  hubTagline: "O MAIOR ACERVO DE CONTEÚDOS EXCLUSIVOS DO TELEGRAM",

  // 3. Preço promocional (ou deixe "" se não quiser preço fixo):
  promoPrice: "Apenas R$ 19,90",
  promoNote: "Acesso Vitalício ao Acervo Completo • Pagamento Único no PIX",

  // 4. Verificação de maioridade (+18):
  enableAgeGate: true // Mude para false se quiser ir direto ao Telegram sem perguntar
};
```

---

## 📁 Estrutura de Arquivos Criada

- [**`index.html`**](index.html) - Página principal com vitrine de packs, tabela comparativa, busca e CTA do Telegram.
- [**`config.js`**](config.js) - Arquivo central de configuração para você alterar link, nome e preço.
- [**`style.css`**](style.css) - Estilo luxo/cyber dark com bordas neon, modo escuro e responsividade mobile total.
- [**`script.js`**](script.js) - Filtros dinâmicos de categorias, busca em tempo real, canvas cósmico e corações ao toque.
- [**`assets/`**](assets/) - Logotipo do Hub, ícone do Telegram e imagens de prévia dos packs.

---

## 🌐 Como Colocar no Ar Grátis (Hospedagem)

1. **Cloudflare Pages (Recomendado):**
   - Acesse [dash.cloudflare.com](https://dash.cloudflare.com) > *Workers & Pages* > *Upload assets*.
   - Arraste a pasta `presell-multiconteudo`.
   - Seu site ganha link com SSL gratuito `https://` e carregamento ultrarrápido mundial.

2. **Netlify Drop:**
   - Acesse [app.netlify.com/drop](https://app.netlify.com/drop) e solte a pasta inteira lá.
