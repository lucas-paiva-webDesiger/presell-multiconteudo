/**
 * SCRIPT - MEGA ACERVO MULTI-CONTEÚDO TELEGRAM VIP
 * Filtros de categorias, busca interativa, cosmos canvas, FAQ e redirecionamento
 */

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PRESELL_CONFIG || {};

  // 1. APLICAR CONFIGURAÇÕES
  applyConfiguration(config);

  // 2. FILTRO DE CATEGORIAS E BUSCA
  initCategoryFilterAndSearch();

  // 3. FUNDO CÓSMICO INTERATIVO
  if (config.enableCosmosBackground !== false) {
    initCosmosCanvas();
  }

  // 4. CORAÇÕES AO CLICAR/TOCAR
  if (config.enableClickHearts !== false) {
    initClickHearts();
  }

  // 5. FAQ ACCORDION
  initFaqAccordion();

  // 6. BARRA STICKY MOBILE
  initStickyBar();

  // 7. GERENCIAMENTO DE LINKS TELEGRAM E IDADE (+18)
  initTelegramLinksAndAgeGate(config);
});

/**
 * Aplica variáveis do config.js nos elementos
 */
function applyConfiguration(config) {
  // Ano atual
  const yearEl = document.getElementById("current-year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Nome do Hub / Acervo
  if (config.hubName) {
    const headerName = document.getElementById("header-hub-name");
    const footerName = document.getElementById("footer-hub-name");
    if (headerName) headerName.textContent = config.hubName;
    if (footerName) footerName.textContent = config.hubName;
  }

  // Tagline e Descrição
  if (config.hubTagline) {
    const taglineEl = document.getElementById("hero-tagline");
    if (taglineEl) taglineEl.textContent = config.hubTagline;
  }
  if (config.hubDescription) {
    const descEl = document.getElementById("hero-desc");
    if (descEl) descEl.textContent = config.hubDescription;
  }

  // Logo
  if (config.logoImage) {
    const headerLogo = document.getElementById("header-logo");
    const heroLogo = document.getElementById("hero-logo");
    if (headerLogo) headerLogo.src = config.logoImage;
    if (heroLogo) heroLogo.src = config.logoImage;
  }

  // Estatísticas
  if (config.stats) {
    const statMedias = document.getElementById("stat-medias");
    const statModels = document.getElementById("stat-models");
    const statMembers = document.getElementById("stat-members");
    const headerOnline = document.getElementById("header-online-count");
    if (statMedias && config.stats.totalMedias) statMedias.textContent = config.stats.totalMedias;
    if (statModels && config.stats.totalModels) statModels.textContent = config.stats.totalModels;
    if (statMembers && config.stats.activeMembers) statMembers.textContent = config.stats.activeMembers;
    if (headerOnline && config.stats.onlineNow) headerOnline.textContent = `${config.stats.onlineNow} online`;
  }

  // Preço Promocional
  if (config.promoPrice) {
    const priceEl = document.getElementById("promo-price");
    const comparePrice = document.getElementById("compare-price");
    if (priceEl) priceEl.textContent = config.promoPrice;
    if (comparePrice) comparePrice.innerHTML = `${config.promoPrice} <span>taxa única</span>`;
  }
  if (config.promoNote) {
    const noteEl = document.getElementById("promo-note");
    if (noteEl) noteEl.textContent = config.promoNote;
  }

  // Atualizar Packs com Imagens e Textos do Config
  if (config.packs && Array.isArray(config.packs)) {
    const cards = document.querySelectorAll(".packs-grid .pack-card");
    config.packs.forEach((pack, idx) => {
      if (cards[idx]) {
        const card = cards[idx];
        if (pack.category) card.setAttribute("data-cat", pack.category);
        if (pack.title) card.setAttribute("data-name", pack.title);
        
        const img = card.querySelector(".pack-cover-img");
        if (img && pack.image) img.src = pack.image;

        const badge = card.querySelector(".pack-badge");
        if (badge && pack.badge) badge.textContent = pack.badge;

        const catTag = card.querySelector(".pack-cat-tag");
        if (catTag && pack.categoryLabel) catTag.textContent = pack.categoryLabel;

        const titleEl = card.querySelector(".pack-title");
        if (titleEl && pack.title) titleEl.textContent = pack.title;

        const metaEl = card.querySelector(".pack-meta");
        if (metaEl && pack.meta) metaEl.textContent = pack.meta;
      }
    });
  }
}

/**
 * Filtros de categorias e campo de busca interativo
 */
function initCategoryFilterAndSearch() {
  const tabs = document.querySelectorAll(".category-tabs .tab-btn");
  const searchInput = document.getElementById("pack-search");
  const packCards = document.querySelectorAll(".packs-grid .pack-card");

  let currentCategory = "all";
  let currentSearch = "";

  const filterCards = () => {
    packCards.forEach(card => {
      const cardCat = card.getAttribute("data-cat") || "";
      const cardName = (card.getAttribute("data-name") || "").toLowerCase();
      const cardText = card.textContent.toLowerCase();

      const matchesCat = currentCategory === "all" || cardCat === currentCategory;
      const matchesSearch = currentSearch === "" || cardName.includes(currentSearch) || cardText.includes(currentSearch);

      if (matchesCat && matchesSearch) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
  };

  // Clique nas abas de categoria
  tabs.forEach(tab => {
    tab.addEventListener("click", () => {
      tabs.forEach(t => t.classList.remove("active"));
      tab.classList.add("active");
      currentCategory = tab.getAttribute("data-category") || "all";
      filterCards();
    });
  });

  // Digitação na busca
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearch = e.target.value.trim().toLowerCase();
      filterCards();
    });
  }
}

/**
 * Preserva parâmetros UTM e de anúncios (fbclid)
 */
function getTelegramDestinationUrl(baseUrl) {
  if (!baseUrl) return "#";
  try {
    const currentParams = window.location.search;
    if (!currentParams) return baseUrl;

    const url = new URL(baseUrl);
    const pageParams = new URLSearchParams(window.location.search);
    
    pageParams.forEach((val, key) => {
      if (!url.searchParams.has(key)) {
        url.searchParams.set(key, val);
      }
    });
    return url.toString();
  } catch (e) {
    return baseUrl;
  }
}

/**
 * Gerenciador dos links do Telegram com Age Gate (+18)
 */
function initTelegramLinksAndAgeGate(config) {
  const tgLinks = document.querySelectorAll(".js-tg-link");
  const ageModal = document.getElementById("age-modal");
  const btnConfirm = document.getElementById("btn-age-confirm");
  const btnDeny = document.getElementById("btn-age-deny");

  const targetUrl = getTelegramDestinationUrl(config.telegramUrl || "https://t.me/");

  tgLinks.forEach(link => {
    if (link.tagName.toLowerCase() === "a") {
      link.href = targetUrl;
    }
  });

  const isAgeVerified = () => localStorage.getItem("presell_hub_age_verified") === "true";

  const openTelegram = () => {
    window.open(targetUrl, "_blank", "noopener,noreferrer");
  };

  tgLinks.forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();

      if (config.enableAgeGate && !isAgeVerified()) {
        if (ageModal) {
          ageModal.classList.add("active");
          ageModal.setAttribute("aria-hidden", "false");
        }
      } else {
        openTelegram();
      }
    });
  });

  if (btnConfirm) {
    btnConfirm.addEventListener("click", () => {
      localStorage.setItem("presell_hub_age_verified", "true");
      if (ageModal) {
        ageModal.classList.remove("active");
        ageModal.setAttribute("aria-hidden", "true");
      }
      openTelegram();
    });
  }

  if (btnDeny) {
    btnDeny.addEventListener("click", () => {
      if (ageModal) {
        ageModal.classList.remove("active");
        ageModal.setAttribute("aria-hidden", "true");
      }
      alert("Acesso restrito a maiores de 18 anos.");
      window.location.href = "https://www.google.com";
    });
  }
}

/**
 * FAQ Accordion
 */
function initFaqAccordion() {
  const faqItems = document.querySelectorAll(".faq-item");
  faqItems.forEach(item => {
    const questionBtn = item.querySelector(".faq-question");
    if (!questionBtn) return;

    questionBtn.addEventListener("click", () => {
      const isActive = item.classList.contains("active");

      faqItems.forEach(other => {
        if (other !== item) {
          other.classList.remove("active");
          const btn = other.querySelector(".faq-question");
          if (btn) btn.setAttribute("aria-expanded", "false");
        }
      });

      if (isActive) {
        item.classList.remove("active");
        questionBtn.setAttribute("aria-expanded", "false");
      } else {
        item.classList.add("active");
        questionBtn.setAttribute("aria-expanded", "true");
      }
    });
  });
}

/**
 * Barra flutuante sticky
 */
function initStickyBar() {
  const stickyBar = document.getElementById("mobile-sticky-bar");
  if (!stickyBar) return;

  const onScroll = () => {
    if (window.scrollY > 400) {
      stickyBar.classList.add("visible");
    } else {
      stickyBar.classList.remove("visible");
    }
  };

  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

/**
 * Canvas cósmico
 */
function initCosmosCanvas() {
  const canvas = document.getElementById("cosmos-canvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  if (!ctx) return;

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  let stars = [];
  let sparks = [];
  let pointerX = window.innerWidth * 0.5;
  let pointerY = window.innerHeight * 0.5;

  const resize = () => {
    const ratio = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.round(window.innerWidth * ratio);
    canvas.height = Math.round(window.innerHeight * ratio);
    ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

    const count = window.innerWidth < 768 ? 35 : 110;
    stars = Array.from({ length: count }, (_, i) => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: 0.4 + Math.random() * (i % 8 === 0 ? 1.8 : 0.9),
      depth: 0.2 + Math.random() * 0.8,
      phase: Math.random() * Math.PI * 2,
      driftX: (Math.random() - 0.5) * 0.4,
      driftY: 0.4 + Math.random() * 0.8,
      isPink: i % 6 === 0
    }));
  };

  const addSpark = (x, y) => {
    if (sparks.length > 20) sparks.shift();
    sparks.push({
      x,
      y,
      life: 1,
      speed: 1.2 + Math.random() * 1.8,
      color: Math.random() > 0.4 ? "#ff3f9d" : "#ffffff"
    });
  };

  const draw = (time) => {
    ctx.clearRect(0, 0, window.innerWidth, window.innerHeight);

    const shiftX = (pointerX / window.innerWidth - 0.5) * 15;
    const shiftY = (pointerY / window.innerHeight - 0.5) * 10;

    stars.forEach(star => {
      const pulse = 0.4 + Math.sin(time * 0.0015 + star.phase) * 0.35;
      const x = (star.x + time * 0.008 * star.driftX * star.depth + shiftX * star.depth + window.innerWidth) % window.innerWidth;
      const y = (star.y + time * 0.02 * star.driftY * star.depth + shiftY * star.depth + window.scrollY * 0.04 + window.innerHeight) % window.innerHeight;

      ctx.beginPath();
      ctx.fillStyle = star.isPink
        ? `rgba(255, 113, 190, ${Math.max(0.1, pulse)})`
        : `rgba(255, 255, 255, ${Math.max(0.1, pulse * 0.85)})`;
      ctx.arc(x, y, star.radius, 0, Math.PI * 2);
      ctx.fill();
    });

    sparks = sparks.filter(spark => {
      spark.life -= 0.025;
      spark.y -= spark.speed;
      ctx.beginPath();
      ctx.fillStyle = spark.color === "#ff3f9d" 
        ? `rgba(255, 63, 157, ${spark.life})` 
        : `rgba(255, 255, 255, ${spark.life})`;
      ctx.arc(spark.x, spark.y, 1.5 * spark.life, 0, Math.PI * 2);
      ctx.fill();
      return spark.life > 0;
    });

    if (!document.hidden && !reducedMotion) {
      requestAnimationFrame(draw);
    }
  };

  window.addEventListener("pointermove", (e) => {
    pointerX = e.clientX;
    pointerY = e.clientY;
    if (Math.random() < 0.15) {
      addSpark(e.clientX, e.clientY);
    }
  }, { passive: true });

  window.addEventListener("resize", resize, { passive: true });
  resize();

  if (!reducedMotion) {
    requestAnimationFrame(draw);
  }
}

/**
 * Corações suaves ao toque ou clique
 */
function initClickHearts() {
  const heartLayer = document.getElementById("heart-layer");
  if (!heartLayer) return;

  const reducedMotion = matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reducedMotion) return;

  const spawnHearts = (x, y) => {
    const count = window.innerWidth < 768 ? 4 : 6;
    for (let i = 0; i < count; i++) {
      const heart = document.createElement("span");
      heart.className = "click-heart";
      heart.textContent = i % 2 === 0 ? "♥" : "♡";
      heart.style.left = `${x}px`;
      heart.style.top = `${y}px`;
      heart.style.setProperty("--heart-x", `${(Math.random() - 0.5) * 90}px`);
      heart.style.setProperty("--heart-y", `${40 + Math.random() * 80}px`);
      heart.style.setProperty("--heart-r", `${(Math.random() - 0.5) * 45}deg`);
      heart.style.setProperty("--heart-size", `${14 + Math.random() * 12}px`);
      heart.style.animationDelay = `${i * 35}ms`;

      heartLayer.appendChild(heart);

      setTimeout(() => {
        heart.remove();
      }, 1100);
    }
  };

  window.addEventListener("pointerdown", (e) => {
    if (e.button > 0) return;
    spawnHearts(e.clientX, e.clientY);
  }, { passive: true });
}
