/**
 * SCRIPT - MEGA ACERVO MULTI-CONTEÚDO TELEGRAM VIP
 * Sistema Multilíngue Automático (PT / ES / EN), Filtros, Cosmos Canvas e Redirecionamento
 */

// DICIONÁRIO DE TRADUÇÕES COMPLETAS (ZERO MENÇÕES DE PREÇO)
const TRANSLATIONS = {
  pt: {
    brand_tagline: "CANAL OFICIAL TELEGRAM",
    header_online: "312 online",
    header_badge_18: "+18 ANOS",
    header_btn: "Entrar no VIP",
    ticker_1: "<strong>Novo Pack Top Privacy</strong> adicionado há 9 minutos",
    ticker_2: "<strong>+180 Fotos de Amadoras</strong> atualizadas hoje",
    ticker_3: "<strong>Vídeo Exclusivo 4K (32 min)</strong> liberado no canal",
    ticker_4: "<strong>Famosinhas do TikTok</strong> pack completo atualizado",
    hero_tagline: "+500 CRIADORAS REUNIDAS • PRIVACY & ONLYFANS",
    hero_title: "Tudo o que você procura em um <br><span class=\"gradient-text\">único canal secreto.</span>",
    hero_desc: "Não perca tempo em links caídos ou grupos com spam. Tenha acesso completo ao maior acervo de conteúdos exclusivos, criadoras famosas, amadoras e vazados sem censura direto no seu Telegram.",
    hero_cta_headline: "LIBERAR ACERVO COMPLETO NO TELEGRAM",
    hero_cta_subtext: "+50.000 Fotos e Vídeos • Acesso Imediato • 100% Sigiloso",
    trust_anon: "🔒 100% Sigiloso e Anônimo",
    trust_instant: "⚡ Liberação Automática no Bot",
    trust_age: "🔞 +18 Anos",
    stat_medias_label: "Fotos & Vídeos",
    stat_models_label: "Criadoras VIP",
    stat_members_label: "Membros Ativos",
    stat_sat_label: "Satisfação",
    showcase_tag: "👑 COLEÇÃO VIP DISPONÍVEL",
    showcase_title: "O que está liberado dentro do canal",
    showcase_desc: "Packs completos organizados por pastas e nomes, prontos para assistir ou baixar sem travar.",
    tab_all: "🔥 Todas as Categorias",
    tab_privacy: "👑 Top OnlyFans & Privacy",
    tab_amadoras: "🔞 Amadoras & Universitárias",
    tab_famosinhas: "💃 Famosinhas do TikTok",
    tab_longos: "🎥 Vídeos Longos 4K",
    search_placeholder: "Buscar modelo, categoria ou pack desejado...",
    search_badge: "Buscar no VIP",
    lock_label: "Desbloquear no Telegram",
    pack_status_1: "🟢 Pack Atualizado Hoje",
    pack_status_2: "🟢 Alta Resolução",
    pack_status_3: "🟢 100% Sem Censura",
    pack_status_4: "🟢 Download Liberado",
    pack_status_5: "🟢 Sem Tarjas",
    pack_status_6: "🟢 Conteúdo Raro",
    pack_cta: "Acessar ➔",
    showcase_bot_banner: "Ver Todas as +50.000 Mídias no Telegram VIP",
    compare_tag: "⚡ ACERVO EXCLUSIVO",
    compare_title: "Por que nosso Bot VIP é a melhor escolha?",
    compare_desc: "Veja a diferença entre navegar em grupos comuns da web versus usar nosso robô VIP oficial.",
    compare_bad_badge: "❌ OUTROS GRUPOS DA WEB",
    compare_bad_title: "Links & Grupos Gratuitos",
    compare_bad_tag: "⚠️ Links Quebrados & Cheios de Vírus",
    compare_bad_1: "❌ Vírus e propagandas que travam o celular",
    compare_bad_2: "❌ Prévias de baixa qualidade e marcas d'água enormes",
    compare_bad_3: "❌ Grupos fakes que somem do Telegram",
    compare_bad_4: "❌ Pastas incompletas e arquivos corrompidos",
    compare_bad_5: "❌ Sem suporte e sem atualização de novas criadoras",
    compare_good_badge: "👑 BOT VIP OFICIAL",
    compare_good_title: "Nosso Robô VIP no Telegram",
    compare_good_tag: "⚡ Acesso Imediato • 100% Automático",
    compare_good_1: "✅ <strong>+500 Criadoras Reunidas</strong> em pastas organizadas",
    compare_good_2: "✅ Fotos e Vídeos em 4K Ultra HD sem censura",
    compare_good_3: "✅ <strong>Liberação Instantânea</strong> e automática pelo robô",
    compare_good_4: "✅ Downloads liberados no seu celular ou computador",
    compare_good_5: "✅ 100% Sigiloso, Seguro e Anônimo",
    compare_good_6: "✅ Novos packs e criadoras adicionados diariamente",
    compare_btn: "Acessar Bot Oficial no Telegram ➔",
    how_tag: "⚡ SIMPLES & DISCRETO",
    how_title: "Como funciona o seu acesso",
    how_desc: "Em menos de 1 minuto você já está assistindo aos conteúdos no Telegram.",
    step1_title: "Clique no Botão VIP",
    step1_desc: "Toque em qualquer botão da página para abrir nosso robô oficial no Telegram.",
    step2_title: "Inicie o Robô",
    step2_desc: "Clique em \"Começar\" ou \"Start\" dentro do Telegram para interagir com o robô oficial.",
    step3_title: "Acesso Liberado",
    step3_desc: "O robô envia o convite exclusivo do canal VIP com todas as pastas e vídeos liberados na hora.",
    reviews_tag: "💬 AVALIAÇÃO DA COMUNIDADE",
    reviews_title: "O que os membros estão dizendo",
    reviews_desc: "Feedbacks reais retirados do grupo de comentários no Telegram.",
    rev1_name: "Eduardo M.",
    rev1_time: "Hoje às 15:40",
    rev1_text: "Melhor canal que já entrei. As pastas são super organizadas e o robô no Telegram libera o acesso na hora sem enrolação! Valeu demais.",
    rev2_name: "Lucas V.",
    rev2_time: "Hoje às 14:12",
    rev2_text: "A qualidade dos vídeos em 4K é absurda. Já baixei mais de 50GB no celular e roda liso. Top demais!",
    rev3_name: "Rodrigo F.",
    rev3_time: "Ontem às 22:05",
    rev3_text: "Tudo muito discreto e rápido. O robô explica tudo direto e já cai no canal com todas as modelos. 10/10.",
    offer_badge: "🟢 VAGAS DISPONÍVEIS NO BOT HOJE",
    offer_title: "Desbloqueie o Maior Acervo do Telegram Hoje",
    offer_subtitle: "+50.000 fotos e vídeos das melhores criadoras em um bot 100% automático e sigiloso.",
    feat_1: "Acesso a <strong>mais de 500 criadoras diferentes</strong>",
    feat_2: "Novos lançamentos e vazados postados diariamente",
    feat_3: "Downloads ilimitados em alta velocidade",
    feat_4: "Canal VIP secreto e 100% privado",
    status_badge: "SISTEMA ONLINE & LIBERADO",
    status_title: "Acesso Exclusivo via Bot Oficial",
    status_desc: "Toque abaixo para iniciar a conversa com nosso robô e desbloquear os conteúdos.",
    final_btn_headline: "QUERO ENTRAR NO ACERVO VIP",
    final_btn_subtext: "Acesso imediato no Telegram",
    urgency_counter: "⚡ Atenção: Vagas limitadas para manter a velocidade dos downloads no canal.",
    faq_tag: "❓ PERGUNTAS FREQUENTES",
    faq_title: "Tire suas dúvidas",
    faq_desc: "Tudo explicado de forma transparente para você ter segurança.",
    faq_q1: "Como recebo o acesso ao canal VIP?",
    faq_a1: "Ao clicar no botão de entrada, você será direcionado para o nosso robô oficial no Telegram (@isabelavip13_bot). Ele te guiará passo a passo e enviará o convite exclusivo do canal VIP automaticamente.",
    faq_q2: "O acesso é seguro e anônimo?",
    faq_a2: "100% seguro e anônimo. Sua navegação e interação com o robô são criptografadas pelo próprio Telegram. Ninguém sabe o que você acessa ou assiste.",
    faq_q3: "Como encontro as criadoras que quero assistir?",
    faq_a3: "O canal conta com um índice de busca organizado em ordem alfabética e por categorias (Famosas, Amadoras, Novinhas, Vazados). Você pode digitar o nome da criadora na barra de busca do Telegram e ir direto para o pack dela!",
    faq_q4: "O canal recebe atualizações frequentes?",
    faq_a4: "Sim! Todos os dias são adicionados novos packs, ensaios e gravações vazadas das criadoras mais pedidas, mantendo o acervo sempre atualizado.",
    faq_q5: "Posso baixar as mídias no meu celular?",
    faq_a5: "Sim! Os downloads são liberados diretamente no Telegram para você salvar na galeria do seu celular ou no seu computador quando quiser.",
    footer_rights: "Todos os direitos reservados.",
    footer_legal: "Acesso estritamente destinado a maiores de 18 anos. Todo o material é compartilhado para fins de entretenimento entre membros adultos.",
    sticky_headline: "LIBERAR ACERVO COMPLETO",
    sticky_subtext: "+50.000 Fotos e Vídeos no Telegram",
    modal_title: "Confirmação de Maioridade",
    modal_desc: "O acervo contém conteúdos adultos e sensuais restritos. Você confirma que possui <strong>18 anos ou mais</strong>?",
    modal_confirm: "Sim, tenho 18+ anos (Acessar Acervo)",
    modal_deny: "Sair do site",
    modal_note: "Sua navegação e identidade são 100% anônimas."
  },

  es: {
    brand_tagline: "CANAL OFICIAL TELEGRAM",
    header_online: "312 en línea",
    header_badge_18: "+18 AÑOS",
    header_btn: "Entrar al VIP",
    ticker_1: "<strong>Nuevo Pack Top Privacy</strong> añadido hace 9 minutos",
    ticker_2: "<strong>+180 Fotos Caseras & Reales</strong> actualizadas hoy",
    ticker_3: "<strong>Video Exclusivo 4K (32 min)</strong> liberado en el canal",
    ticker_4: "<strong>TikTok & Instagram</strong> pack completo actualizado",
    hero_tagline: "+500 CREADORAS REUNIDAS • ONLYFANS & PRIVACY",
    hero_title: "Todo lo que buscas en un <br><span class=\"gradient-text\">único canal secreto.</span>",
    hero_desc: "No pierdas tiempo con enlaces caídos o grupos con spam. Ten acceso completo a la mayor colección de contenido exclusivo, creadoras famosas, aficionadas y filtraciones sin censura directamente en Telegram.",
    hero_cta_headline: "DESBLOQUEAR COLECCIÓN EN TELEGRAM",
    hero_cta_subtext: "+50.000 Fotos y Videos • Acceso Inmediato • 100% Secreto",
    trust_anon: "🔒 100% Privado y Anónimo",
    trust_instant: "⚡ Desbloqueo Automático en el Bot",
    trust_age: "🔞 +18 Años",
    stat_medias_label: "Fotos y Videos",
    stat_models_label: "Creadoras VIP",
    stat_members_label: "Miembros Activos",
    stat_sat_label: "Satisfacción",
    showcase_tag: "👑 COLECCIÓN VIP DISPONIBLE",
    showcase_title: "Lo que está desbloqueado dentro del canal",
    showcase_desc: "Packs completos organizados por carpetas y nombres, listos para ver o descargar sin esperas.",
    tab_all: "🔥 Todas las Categorías",
    tab_privacy: "👑 Top OnlyFans & Privacy",
    tab_amadoras: "🔞 Aficionadas & Reales",
    tab_famosinhas: "💃 Famosas de TikTok",
    tab_longos: "🎥 Videos Largos 4K",
    search_placeholder: "Buscar modelo, categoría o pack deseado...",
    search_badge: "Buscar en VIP",
    lock_label: "Desbloquear en Telegram",
    pack_status_1: "🟢 Pack Actualizado Hoy",
    pack_status_2: "🟢 Alta Resolución",
    pack_status_3: "🟢 100% Sin Censura",
    pack_status_4: "🟢 Descarga Habilitada",
    pack_status_5: "🟢 Sin Censuras ni Marcas",
    pack_status_6: "🟢 Archivo Exclusivo",
    pack_cta: "Acceder ➔",
    showcase_bot_banner: "Ver Todas las +50.000 Fotos y Videos en Telegram",
    compare_tag: "⚡ COLECCIÓN EXCLUSIVA",
    compare_title: "¿Por qué nuestro Bot VIP es la mejor opción?",
    compare_desc: "Compara la experiencia entre buscar en grupos web con spam y usar nuestro bot VIP oficial.",
    compare_bad_badge: "❌ OTROS GRUPOS DE LA WEB",
    compare_bad_title: "Enlaces Caídos & Grupos Gratuitos",
    compare_bad_tag: "⚠️ Enlaces Rotos & Llenos de Virus",
    compare_bad_1: "❌ Virus y publicidad molesta que congelan el teléfono",
    compare_bad_2: "❌ Vistas previas de baja calidad y con marcas de agua",
    compare_bad_3: "❌ Canales falsos que desaparecen o son bloqueados",
    compare_bad_4: "❌ Carpetas incompletas y archivos dañados",
    compare_bad_5: "❌ Sin soporte y sin actualizaciones de nuevas modelos",
    compare_good_badge: "👑 BOT VIP OFICIAL",
    compare_good_title: "Nuestro Bot VIP en Telegram",
    compare_good_tag: "⚡ Acceso Inmediato • 100% Automático",
    compare_good_1: "✅ <strong>+500 Creadoras Reunidas</strong> en carpetas ordenadas",
    compare_good_2: "✅ Fotos y Videos en 4K Ultra HD sin censura",
    compare_good_3: "✅ <strong>Liberación Instantánea</strong> y automática por el bot",
    compare_good_4: "✅ Descargas permitidas en tu celular o PC",
    compare_good_5: "✅ 100% Discreto, Seguro y Anónimo",
    compare_good_6: "✅ Nuevos packs y modelos agregados todos los días",
    compare_btn: "Acceder al Bot Oficial en Telegram ➔",
    how_tag: "⚡ SIMPLE & DISCRETO",
    how_title: "Cómo funciona tu acceso",
    how_desc: "En menos de 1 minuto ya estarás disfrutando de todos los contenidos en Telegram.",
    step1_title: "Toca el Botón VIP",
    step1_desc: "Toca en cualquier botón de la página para abrir nuestro bot oficial en Telegram.",
    step2_title: "Inicia el Bot",
    step2_desc: "Presiona \"Iniciar\" o \"Start\" dentro de Telegram para interactuar con el bot.",
    step3_title: "Acceso Desbloqueado",
    step3_desc: "El bot te entrega el enlace exclusivo con todas las carpetas y videos desbloqueados.",
    reviews_tag: "💬 COMENTARIOS DE LA COMUNIDAD",
    reviews_title: "Lo que dicen los miembros",
    reviews_desc: "Comentarios reales tomados directamente de nuestra comunidad en Telegram.",
    rev1_name: "Carlos M.",
    rev1_time: "Hoy a las 15:40",
    rev1_text: "El mejor canal en el que he estado. Las carpetas están súper organizadas y el bot te da acceso al instante. ¡100% recomendado!",
    rev2_name: "Alejandro V.",
    rev2_time: "Hoy a las 14:12",
    rev2_text: "La calidad en 4K es increíble. Ya descargué más de 50GB en mi móvil y se reproduce perfecto. ¡Impresionante!",
    rev3_name: "Javier F.",
    rev3_time: "Ayer a las 22:05",
    rev3_text: "Todo muy discreto y rápido. El bot te guía al instante y entras directo a ver todas las modelos. 10 de 10.",
    offer_badge: "🟢 CUPOS DISPONIBLES EN EL BOT HOY",
    offer_title: "Desbloquea la Mayor Colección de Telegram Hoy",
    offer_subtitle: "+50.000 fotos y videos de las mejores creadoras en un bot 100% automático y secreto.",
    feat_1: "Acceso a <strong>más de 500 creadoras exclusivas</strong>",
    feat_2: "Nuevas publicaciones y filtraciones a diario",
    feat_3: "Descargas ilimitadas a máxima velocidad",
    feat_4: "Canal VIP secreto y 100% privado",
    status_badge: "SISTEMA ONLINE & ACTIVO",
    status_title: "Acceso Exclusivo mediante Bot Oficial",
    status_desc: "Toca abajo para iniciar con nuestro bot y desbloquear el contenido al instante.",
    final_btn_headline: "ENTRAR AL CANAL VIP AHORA",
    final_btn_subtext: "Acceso inmediato en Telegram",
    urgency_counter: "⚡ Atención: Cupos limitados para mantener la máxima velocidad de descarga.",
    faq_tag: "❓ PREGUNTAS FRECUENTES",
    faq_title: "Preguntas habituales",
    faq_desc: "Todo explicado de forma clara y transparente para tu tranquilidad.",
    faq_q1: "¿Cómo obtengo acceso al canal VIP?",
    faq_a1: "Al hacer clic en el botón, serás redirigido a nuestro bot oficial en Telegram (@isabelavip13_bot). Te guiará paso a paso y te enviará la invitación exclusiva del canal VIP automáticamente.",
    faq_q2: "¿El acceso es seguro y anónimo?",
    faq_a2: "100% seguro y anónimo. Toda la interacción con el bot está encriptada y protegida por Telegram. Nadie sabrá lo que miras.",
    faq_q3: "¿Cómo encuentro a las creadoras que busco?",
    faq_a3: "El canal cuenta con un menú organizado alfabéticamente y por categorías. ¡Solo escribe el nombre de la modelo en el buscador de Telegram y ve directo a su pack!",
    faq_q4: "¿El canal se actualiza con frecuencia?",
    faq_a4: "¡Sí! Todos los días agregamos nuevos packs, sesiones y grabaciones exclusivas para mantener la colección al día.",
    faq_q5: "¿Puedo descargar los videos y fotos en mi móvil?",
    faq_a5: "¡Sí! Las descargas están habilitadas directamente en Telegram para que las guardes en tu galería o PC cuando quieras.",
    footer_rights: "Todos los derechos reservados.",
    footer_legal: "Acceso estrictamente para mayores de 18 años. Todo el material se comparte con fines de entretenimiento entre adultos.",
    sticky_headline: "DESBLOQUEAR COLECCIÓN",
    sticky_subtext: "+50.000 Fotos y Videos en Telegram",
    modal_title: "Confirmación de Mayoría de Edad",
    modal_desc: "Esta colección contiene contenido exclusivo para adultos. ¿Confirmas que tienes <strong>18 años o más</strong>?",
    modal_confirm: "Sí, tengo 18+ años (Entrar al Acervo)",
    modal_deny: "Salir del sitio"
  },

  en: {
    brand_tagline: "OFFICIAL TELEGRAM CHANNEL",
    header_online: "312 online",
    header_badge_18: "+18 ONLY",
    header_btn: "Join VIP",
    ticker_1: "<strong>New Top Privacy Pack</strong> added 9 minutes ago",
    ticker_2: "<strong>+180 Real Amateur Photos</strong> updated today",
    ticker_3: "<strong>Exclusive 4K Video (32 min)</strong> released in channel",
    ticker_4: "<strong>TikTok & Instagram</strong> full pack updated",
    hero_tagline: "+500 TOP CREATORS • ONLYFANS & PRIVACY",
    hero_title: "Everything you're looking for in a <br><span class=\"gradient-text\">single secret channel.</span>",
    hero_desc: "Stop wasting time on dead links, broken folders and spam groups. Get full access to the largest uncensored collection of famous creators, amateur tapes and exclusive leaks directly on Telegram.",
    hero_cta_headline: "UNLOCK FULL ACCESS ON TELEGRAM",
    hero_cta_subtext: "+50,000 Photos & Videos • Instant Access • 100% Secret",
    trust_anon: "🔒 100% Secret & Anonymous",
    trust_instant: "⚡ Automatic Bot Delivery",
    trust_age: "🔞 18+ Only",
    stat_medias_label: "Photos & Videos",
    stat_models_label: "VIP Creators",
    stat_members_label: "Active Members",
    stat_sat_label: "Satisfaction",
    showcase_tag: "👑 VIP COLLECTION AVAILABLE",
    showcase_title: "What's unlocked inside the channel",
    showcase_desc: "Full packs organized by folders and creator names, ready to stream or download in high speed.",
    tab_all: "🔥 All Categories",
    tab_privacy: "👑 Top OnlyFans & Privacy",
    tab_amadoras: "🔞 Amateurs & College",
    tab_famosinhas: "💃 TikTok Influencers",
    tab_longos: "🎥 4K Full Videos",
    search_placeholder: "Search model, category or pack...",
    search_badge: "Search VIP",
    lock_label: "Unlock on Telegram",
    pack_status_1: "🟢 Pack Updated Today",
    pack_status_2: "🟢 High Definition",
    pack_status_3: "🟢 100% Uncensored",
    pack_status_4: "🟢 Download Enabled",
    pack_status_5: "🟢 No Watermarks",
    pack_status_6: "🟢 Rare Archive",
    pack_cta: "Open ➔",
    showcase_bot_banner: "View All +50,000 Media on VIP Telegram",
    compare_tag: "⚡ EXCLUSIVE ACCESS",
    compare_title: "Why our VIP Bot is the best choice?",
    compare_desc: "See the difference between messy internet groups and our official VIP Telegram bot.",
    compare_bad_badge: "❌ ORDINARY WEB GROUPS",
    compare_bad_title: "Free Links & Messy Channels",
    compare_bad_tag: "⚠️ Broken Links & Dangerous Malware",
    compare_bad_1: "❌ Malware and spam ads freezing your phone",
    compare_bad_2: "❌ Low quality previews with giant watermarks",
    compare_bad_3: "❌ Fake channels getting banned and disappearing",
    compare_bad_4: "❌ Incomplete archives and broken downloads",
    compare_bad_5: "❌ Zero customer support and no fresh creator updates",
    compare_good_badge: "👑 OFFICIAL VIP BOT",
    compare_good_title: "Our Official VIP Telegram Bot",
    compare_good_tag: "⚡ Instant Access • 100% Automated",
    compare_good_1: "✅ <strong>+500 Top Creators</strong> in neat organized folders",
    compare_good_2: "✅ Uncensored 4K Ultra HD Photos and Videos",
    compare_good_3: "✅ <strong>Instant Automatic Access</strong> delivered by bot",
    compare_good_4: "✅ Unrestricted downloads to mobile and PC",
    compare_good_5: "✅ 100% Private, Secure and Anonymous",
    compare_good_6: "✅ Fresh packs and daily creator updates",
    compare_btn: "Launch Official Bot on Telegram ➔",
    how_tag: "⚡ SIMPLE & DISCREET",
    how_title: "How it works",
    how_desc: "In less than 1 minute you'll be enjoying all media inside Telegram.",
    step1_title: "Tap any VIP Button",
    step1_desc: "Tap any button on this page to launch our official Telegram bot.",
    step2_title: "Start the Bot",
    step2_desc: "Hit \"Start\" inside Telegram to view the catalog and interact with the bot.",
    step3_title: "Instant VIP Access",
    step3_desc: "The bot delivers your private invite link with all folders and videos unlocked.",
    reviews_tag: "💬 COMMUNITY FEEDBACK",
    reviews_title: "What our members are saying",
    reviews_desc: "Real feedback straight from our Telegram community.",
    rev1_name: "Edward M.",
    rev1_time: "Today at 3:40 PM",
    rev1_text: "Best channel I've ever joined. Everything is neatly organized and the Telegram bot unlocked instant access. Totally worth it!",
    rev2_name: "Luke V.",
    rev2_time: "Today at 2:12 PM",
    rev2_text: "The 4K video quality is unbelievable. Already saved over 50GB to my phone and runs seamlessly. Top tier!",
    rev3_name: "Roger F.",
    rev3_time: "Yesterday at 10:05 PM",
    rev3_text: "Super discreet and seamless. The Telegram bot handled everything immediately and took me straight to the catalog. 10/10.",
    offer_badge: "🟢 SPOTS CURRENTLY AVAILABLE IN BOT",
    offer_title: "Unlock the Largest Telegram Collection Today",
    offer_subtitle: "+50,000 photos and videos from top creators in a 100% automated and private bot.",
    feat_1: "Access to <strong>over 500 exclusive creators</strong>",
    feat_2: "Daily updates and fresh uncensored leaks"
    ,
    feat_3: "Unlimited high-speed downloads",
    feat_4: "100% private and secret VIP channel",
    status_badge: "SYSTEM ONLINE & READY",
    status_title: "Exclusive Access via Official Bot",
    status_desc: "Tap below to start a chat with our bot and unlock the content instantly.",
    final_btn_headline: "JOIN VIP CHANNEL NOW",
    final_btn_subtext: "Instant access on Telegram",
    urgency_counter: "⚡ Notice: Limited slots to maintain maximum download speeds.",
    faq_tag: "❓ FREQUENTLY ASKED QUESTIONS",
    faq_title: "Got questions?",
    faq_desc: "Everything explained clearly for your confidence.",
    faq_q1: "How do I get access to the VIP channel?",
    faq_a1: "When you tap any button, you'll be redirected to our official Telegram bot (@isabelavip13_bot). It will guide you step by step and send your exclusive VIP invitation immediately.",
    faq_q2: "Is my access safe and anonymous?",
    faq_a2: "100% safe and anonymous. Your interaction with the bot is encrypted through Telegram. Nobody will ever know what you watch.",
    faq_q3: "How do I find specific creators?",
    faq_a3: "The channel features an alphabetical and categorical index. Simply search the creator's name inside Telegram to jump straight to her folder!",
    faq_q4: "Does the channel get regular updates?",
    faq_a4: "Yes! Fresh packs, photoshoots, and uncensored leaks are uploaded daily to keep the collection up to date.",
    faq_q5: "Can I download media to my phone or PC?",
    faq_a5: "Yes! Full download permissions are enabled inside Telegram so you can save media directly to your phone's gallery or PC anytime.",
    footer_rights: "All rights reserved.",
    footer_legal: "Access strictly restricted to adults aged 18 and older. All material is shared for adult entertainment purposes only.",
    sticky_headline: "UNLOCK FULL COLLECTION",
    sticky_subtext: "+50,000 Photos & Videos on Telegram",
    modal_title: "Age Verification",
    modal_desc: "This collection contains adult exclusive content. Do you confirm you are <strong>18 years of age or older</strong>?",
    modal_confirm: "Yes, I am 18+ (Enter Collection)",
    modal_deny: "Exit site",
    modal_note: "Your navigation and identity are 100% anonymous."
  }
};

const PACK_TRANSLATIONS = {
  pt: [
    { badge: "MAIS PEDIDAS 🔥", cat: "OnlyFans & Privacy", title: "Top 10 Criadoras Mais Assinadas", meta: "140 Fotos HD • 18 Vídeos 4K • Sem Censura" },
    { badge: "VIRALIZOU ⚡", cat: "TikTok & Instagram", title: "Influencers & Famosinhas do TikTok", meta: "95 Fotos • 12 Vídeos Íntimos • Áudios" },
    { badge: "REAL & CASEIRO 🔞", cat: "Amadoras & Reais", title: "Coleção Universitárias & Amadoras", meta: "280 Fotos Caseiras • 34 Vídeos Sem Cortes" },
    { badge: "CINEMA 4K 🎥", cat: "Vídeos Longos", title: "Sessões Completas de 20 a 50 Minutos", meta: "45 Vídeos Longos em 4K Ultra HD • Áudio Nítido" },
    { badge: "EXCLUSIVO 💎", cat: "Especiais", title: "Ruivas, Loiras & Tatuadas Mais Desejadas", meta: "160 Fotos de Ensaio • 22 Gravações Privadas" },
    { badge: "VAZADOS RECENTES 🚨", cat: "Vazados & Flagras", title: "Vazados Inéditos e Flagras em Encontros", meta: "300+ Mídias Raras • Fotos de Celular • Vídeos" }
  ],
  es: [
    { badge: "MÁS PEDIDAS 🔥", cat: "OnlyFans & Privacy", title: "Top 10 Creadoras Más Suscritas", meta: "140 Fotos HD • 18 Videos 4K • Sin Censura" },
    { badge: "VIRAL ⚡", cat: "TikTok & Instagram", title: "Influencers & Famosas de TikTok", meta: "95 Fotos • 12 Videos Íntimos • Audios" },
    { badge: "CASERO & REAL 🔞", cat: "Aficionadas & Reales", title: "Colección Universitarias & Caseras", meta: "280 Fotos Reales • 34 Videos Sin Cortes" },
    { badge: "CINE 4K 🎥", cat: "Videos Largos", title: "Sesiones Completas de 20 a 50 Minutos", meta: "45 Videos Largos en 4K Ultra HD • Audio Nítido" },
    { badge: "EXCLUSIVO 💎", cat: "Especiales", title: "Pelirrojas, Rubias & Tatuadas Favoritas", meta: "160 Fotos de Estudio • 22 Grabaciones Privadas" },
    { badge: "FILTRACIONES RECIENTES 🚨", cat: "Filtraciones & Ensayos", title: "Filtraciones Inéditas & Encuentros Reales", meta: "300+ Archivos Raros • Fotos de Móvil • Videos" }
  ],
  en: [
    { badge: "MOST POPULAR 🔥", cat: "OnlyFans & Privacy", title: "Top 10 Most Subscribed Creators", meta: "140 HD Photos • 18 4K Videos • Uncensored" },
    { badge: "VIRAL HIT ⚡", cat: "TikTok & Instagram", title: "TikTok & Social Media Influencers", meta: "95 Photos • 12 Intimate Videos • Audios" },
    { badge: "REAL & AMATEUR 🔞", cat: "Amateurs & College", title: "Real Amateurs & College Girls", meta: "280 Home Photos • 34 Full Uncut Videos" },
    { badge: "4K CINEMA 🎥", cat: "Full Length Videos", title: "Complete 20 to 50 Minute Sessions", meta: "45 Long 4K Ultra HD Videos • Crisp Audio" },
    { badge: "EXCLUSIVE 💎", cat: "Special Collection", title: "Most Desired Redheads, Blondes & Inked", meta: "160 Studio Photos • 22 Private Tapes" },
    { badge: "LATEST LEAKS 🚨", cat: "Leaks & Tapes", title: "Unreleased Leaks & Caught On Camera", meta: "300+ Rare Media • Phone Captures • Videos" }
  ]
};

document.addEventListener("DOMContentLoaded", () => {
  const config = window.PRESELL_CONFIG || {};

  // 1. INICIALIZAR SISTEMA DE IDIOMAS (PT, ES, EN)
  initI18n(config);

  // 2. APLICAR CONFIGURAÇÕES BÁSICAS
  applyConfiguration(config);

  // 3. FILTRO DE CATEGORIAS E BUSCA
  initCategoryFilterAndSearch();

  // 4. FUNDO CÓSMICO INTERATIVO
  if (config.enableCosmosBackground !== false) {
    initCosmosCanvas();
  }

  // 5. CORAÇÕES AO CLICAR/TOCAR
  if (config.enableClickHearts !== false) {
    initClickHearts();
  }

  // 6. FAQ ACCORDION
  initFaqAccordion();

  // 7. BARRA STICKY MOBILE
  initStickyBar();

  // 8. GERENCIAMENTO DE LINKS TELEGRAM E IDADE (+18)
  initTelegramLinksAndAgeGate(config);
});

/**
 * Detecta e aplica idioma (Auto por navegador/país + Switcher manual)
 */
function initI18n(config) {
  const savedLang = localStorage.getItem("presell_hub_lang");
  let targetLang = "pt";

  if (savedLang && (savedLang === "pt" || savedLang === "es" || savedLang === "en")) {
    targetLang = savedLang;
  } else if (config.defaultLang && config.defaultLang !== "auto") {
    targetLang = config.defaultLang;
  } else {
    // Detecção automática de idioma do navegador/região
    const browserLang = (navigator.language || navigator.userLanguage || "pt").toLowerCase();
    if (browserLang.startsWith("es")) {
      targetLang = "es";
    } else if (browserLang.startsWith("pt")) {
      targetLang = "pt";
    } else {
      targetLang = "en";
    }
  }

  // Aplicar idioma detectado
  applyLanguage(targetLang);

  // Handlers dos botões do seletor
  const langBtns = document.querySelectorAll(".lang-btn");
  langBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const selected = btn.getAttribute("data-lang");
      if (selected && TRANSLATIONS[selected]) {
        localStorage.setItem("presell_hub_lang", selected);
        applyLanguage(selected);
      }
    });
  });
}

/**
 * Atualiza todos os textos traduzíveis na página
 */
function applyLanguage(lang) {
  if (!TRANSLATIONS[lang]) lang = "pt";

  // Atributo lang no HTML
  document.documentElement.lang = lang === "pt" ? "pt-BR" : lang;

  // Botões do switcher
  document.querySelectorAll(".lang-btn").forEach(btn => {
    btn.classList.toggle("active", btn.getAttribute("data-lang") === lang);
  });

  // Tradução dos elementos data-i18n
  const t = TRANSLATIONS[lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    if (t[key] !== undefined) {
      if (el.tagName === "INPUT") {
        el.placeholder = t[key];
      } else {
        el.innerHTML = t[key];
      }
    }
  });

  // Tradução dos Packs
  const packTrans = PACK_TRANSLATIONS[lang];
  if (packTrans) {
    const cards = document.querySelectorAll(".packs-grid .pack-card");
    packTrans.forEach((pack, idx) => {
      if (cards[idx]) {
        const card = cards[idx];
        const badge = card.querySelector(".pack-badge");
        const catTag = card.querySelector(".pack-cat-tag");
        const titleEl = card.querySelector(".pack-title");
        const metaEl = card.querySelector(".pack-meta");

        if (badge && pack.badge) badge.textContent = pack.badge;
        if (catTag && pack.cat) catTag.textContent = pack.cat;
        if (titleEl && pack.title) {
          titleEl.textContent = pack.title;
          card.setAttribute("data-name", pack.title);
        }
        if (metaEl && pack.meta) metaEl.textContent = pack.meta;
      }
    });
  }
}

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
    if (statMedias && config.stats.totalMedias) statMedias.textContent = config.stats.totalMedias;
    if (statModels && config.stats.totalModels) statModels.textContent = config.stats.totalModels;
    if (statMembers && config.stats.activeMembers) statMembers.textContent = config.stats.activeMembers;
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

  const targetUrl = getTelegramDestinationUrl(config.telegramUrl || "https://telegram.me/isabelavip13_bot");

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
    if (window.scrollY > 380) {
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
