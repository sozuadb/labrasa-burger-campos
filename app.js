/**
 * La Brasa Burger — Campos dos Goytacazes
 * Gastronomy Engine & Digital Concierge
 */

// ==========================================
// 1. CULINARY MENU STORE
// ==========================================
const MENU_DATA = [
  {
    id: 'picanha-supremo',
    name: 'Picanha Burger Supremo',
    category: 'picanha',
    price: 38.90,
    cut: '200g Picanha na Brasa',
    badge: 'Corte Especial',
    desc: 'Blend de picanha nobre de 200g selado no carvão incandescente, queijo prato artesanal fundido, tiras de bacon crocante, maionese verde e pão brioche amanteigado tostado na grelha.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'picanha-baconpiry',
    name: 'Picanha Baconpiry',
    category: 'picanha',
    price: 42.90,
    cut: '200g Picanha',
    badge: 'Especialidade',
    desc: 'Hambúrguer de picanha 200g preparado em grelha aberta, Catupiry original maçaricado com toque defumado, bacon crocante em cubos e cebola roxa marinada em pão australiano.',
    image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'picanha-duplo-monster',
    name: 'Double Picanha Prime',
    category: 'picanha',
    price: 54.90,
    cut: '400g Picanha Bovina',
    badge: 'Corte Duplo',
    desc: 'Dois blends nobres de picanha de 200g cada, queijo cheddar inglês em camadas duplas, generosas tiras de bacon artesanal e molho barbecue rústico defumado.',
    image: 'https://images.unsplash.com/photo-1572802419224-296b0aeee0d9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'costelao-brasa',
    name: 'Costelão La Brasa',
    category: 'costela',
    price: 39.90,
    cut: '200g Costela Nobre',
    badge: 'Defumação Lenta',
    desc: 'Blend selecionado de costela bovina moída e selada em brasa alta, queijo gouda fundido, cebola lentamente caramelizada e molho barbecue autoral em pão francês artesanal.',
    image: 'https://images.unsplash.com/photo-1586190848861-99aa4a171e90?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'costela-crispy-cheddar',
    name: 'Costela Crispy & Cheddar',
    category: 'costela',
    price: 41.90,
    cut: '200g Costela',
    badge: 'Crocância & Queijo',
    desc: 'Hambúrguer de costela bovina 200g com crosta caramelizada na grelha, cascata de creme de cheddar artesanal, anéis finos de cebola crispy dourada e baconese exclusiva.',
    image: 'https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'smash-duplo-classico',
    name: 'Smash Duplo Cheddar',
    category: 'smash',
    price: 29.90,
    cut: '2x 90g Smash Bovino',
    badge: 'Reação Maillard',
    desc: 'Dois discos prensados de 90g com crosta crocante caramelizada, queijo cheddar derretido, picles artesanal de pepino em conserva suave e molho especial da casa.',
    image: 'https://images.unsplash.com/photo-1553979459-d2229ba7433b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'smash-la-brasa-bacon',
    name: 'Smash La Brasa Bacon',
    category: 'smash',
    price: 33.90,
    cut: '2x 90g Smash',
    badge: 'Clássico Artesanal',
    desc: 'Dois cortes smash com bordas crocantes, queijo estepe fundido, farofa crocante de bacon fatiado e maionese defumada artesanal em pão de brioche tostado.',
    image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'chicken-supreme-crispy',
    name: 'Chicken Supreme Crocante',
    category: 'smash',
    price: 32.90,
    cut: '180g Sobrecoxa Empanada',
    badge: 'Corte de Frango',
    desc: 'Sobrecoxa de frango marinada em especiarias e empanada em crosta crocante dourada, salada coleslaw com toque cítrico, picles e emulsão de alho negro.',
    image: 'https://images.unsplash.com/photo-1625813506062-0aeb1d7a094b?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'batata-rustica-brasa',
    name: 'Batata Rústica La Brasa',
    category: 'porcoes',
    price: 26.90,
    cut: 'Porção Média (350g)',
    badge: 'Acompanhamento',
    desc: 'Batatas com corte rústico e casca fina, temperadas com alecrim colhido no dia e flor de sal. Acompanha potinho de maionese verde autoral.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'batata-vulcao-cheddar',
    name: 'Batata Vulcão Cheddar & Bacon',
    category: 'porcoes',
    price: 36.90,
    cut: 'Porção Grande (500g)',
    badge: 'Para Compartilhar',
    desc: 'Generosa porção de batatas crocantes cobertas por creme aveludado de cheddar fundido e crumble de bacon defumado em alta caloria.',
    image: 'https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'onion-rings-defumadas',
    name: 'Anéis de Cebola Empanados',
    category: 'porcoes',
    price: 28.90,
    cut: '12 Unidades',
    badge: 'Crosta Dourada',
    desc: 'Anéis de cebola selecionados com empanamento fino e dourado. Servidos com molho barbecue defumado artesanal.',
    image: 'https://images.unsplash.com/photo-1625938144755-652e08e359b7?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'chopp-artesanal-pilsen',
    name: 'Chopp Artesanal Pilsen 500ml',
    category: 'bebidas',
    price: 14.00,
    cut: 'Caneca 500ml (-2°C)',
    badge: 'Puro Malte',
    desc: 'Chopp Pilsen leve, brilhante e refrescante, tirado diretamente em caneca de vidro congelada com colarinho denso e duradouro.',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'chopp-artesanal-ipa',
    name: 'Chopp Artesanal IPA 500ml',
    category: 'bebidas',
    price: 19.00,
    cut: 'Caneca 500ml',
    badge: 'Cerveja Especial',
    desc: 'India Pale Ale com lúpulos aromáticos americanos, notas cítricas marcantes e amargor equilibrado que harmoniza com carnes grelhadas.',
    image: 'https://images.unsplash.com/photo-1608270586620-248524c67de9?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'shake-nutella-bacon',
    name: 'Milk-Shake Nutella & Bacon',
    category: 'sobremesas',
    price: 24.90,
    cut: 'Taça 400ml',
    badge: 'Criação Autoral',
    desc: 'Sorvete artesanal de fava de baunilha batido com Nutella pura, finalizado com chantilly leve e crocante de bacon caramelizado.',
    image: 'https://images.unsplash.com/photo-1572490122747-3968b75cc699?auto=format&fit=crop&w=700&q=80'
  },
  {
    id: 'petit-gateau-vulcao',
    name: 'Taça Vulcão Petit Gâteau',
    category: 'sobremesas',
    price: 27.90,
    cut: 'Sobremesa Especial',
    badge: 'Chocolate Belga',
    desc: 'Bolinho quente com centro de chocolate belga cremoso, sorvete de creme artesanal, calda quente de cacau e morangos frescos fatiados.',
    image: 'https://images.unsplash.com/photo-1551024709-8f23befc6f87?auto=format&fit=crop&w=700&q=80'
  }
];

// ==========================================
// 2. STATE & CONFIG
// ==========================================
let cart = [];
let currentCategory = 'all';
let currentViewMode = 'grid'; // 'grid' or 'list'
const STORE_PHONE = '5522998624900';

// Retrieve cart from storage
try {
  const saved = localStorage.getItem('labrasa_order_cart');
  if (saved) cart = JSON.parse(saved);
} catch (e) {
  cart = [];
}

// ==========================================
// 3. INITIALIZATION
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
  renderMenu();
  updateCartUI();
  initStatusChecker();
  initHeaderBehavior();
  initFilterControls();
  initViewModeControls();
  initDrawerControls();
  initMobileNav();

  setInterval(initStatusChecker, 60000);
});

// ==========================================
// 4. MENU RENDERING (GRID & BISTRO LIST)
// ==========================================
function renderMenu() {
  const container = document.getElementById('menuRenderArea');
  if (!container) return;

  const items = currentCategory === 'all'
    ? MENU_DATA
    : MENU_DATA.filter(item => item.category === currentCategory);

  if (currentViewMode === 'grid') {
    container.className = 'menu-display-area grid-mode';
    container.innerHTML = items.map(item => `
      <article class="dish-card" data-category="${item.category}">
        <div class="dish-card-media">
          <img src="${item.image}" alt="${item.name}" loading="lazy">
          <span class="dish-card-badge">${item.badge}</span>
        </div>
        <div class="dish-card-body">
          <div class="dish-card-headline">
            <h3 class="dish-card-title">${item.name}</h3>
            <span class="dish-card-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
          </div>
          <p class="dish-card-desc">${item.desc}</p>
          <div class="dish-card-action-bar">
            <span class="dish-cut-label">${item.cut}</span>
            <button class="btn-card-add" onclick="addToCart('${item.id}')">
              + Selecionar
            </button>
          </div>
        </div>
      </article>
    `).join('');
  } else {
    // Bistro List Mode
    container.className = 'menu-display-area list-mode';
    container.innerHTML = items.map(item => `
      <div class="bistro-item-row" data-category="${item.category}">
        <div class="bistro-info">
          <div class="bistro-heading">
            <h3 class="bistro-title">${item.name}</h3>
            <span class="bistro-badge">${item.cut} • ${item.badge}</span>
          </div>
          <p class="bistro-desc">${item.desc}</p>
        </div>
        <div class="bistro-side-action">
          <span class="bistro-price">R$ ${item.price.toFixed(2).replace('.', ',')}</span>
          <button class="btn-card-add" onclick="addToCart('${item.id}')">
            + Adicionar
          </button>
        </div>
      </div>
    `).join('');
  }
}

function initFilterControls() {
  const buttons = document.querySelectorAll('.filter-pill');
  buttons.forEach(btn => {
    btn.addEventListener('click', () => {
      buttons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentCategory = btn.getAttribute('data-category');
      renderMenu();
    });
  });
}

function initViewModeControls() {
  const toggleBtns = document.querySelectorAll('.view-btn');
  toggleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      toggleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      currentViewMode = btn.getAttribute('data-view');
      renderMenu();
    });
  });
}

// ==========================================
// 5. CART ENGINE & STORAGE
// ==========================================
function saveCart() {
  try {
    localStorage.setItem('labrasa_order_cart', JSON.stringify(cart));
  } catch (e) {}
}

function addToCart(itemId) {
  const item = MENU_DATA.find(i => i.id === itemId);
  if (!item) return;

  const existingIndex = cart.findIndex(c => c.id === itemId);
  if (existingIndex > -1) {
    cart[existingIndex].quantity += 1;
  } else {
    cart.push({
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: 1
    });
  }

  saveCart();
  updateCartUI();
  triggerCartFeedback();
  showToast(`${item.name} adicionado ao seu pedido.`);
}

function updateItemQuantity(itemId, delta) {
  const index = cart.findIndex(c => c.id === itemId);
  if (index === -1) return;

  cart[index].quantity += delta;
  if (cart[index].quantity <= 0) {
    cart.splice(index, 1);
  }

  saveCart();
  updateCartUI();
}

function triggerCartFeedback() {
  const trigger = document.getElementById('cartToggleBtn');
  if (trigger) {
    trigger.classList.remove('bump');
    void trigger.offsetWidth;
    trigger.classList.add('bump');
  }
}

function updateCartUI() {
  const countBadge = document.getElementById('cartCountBadge');
  const cartSubtitle = document.getElementById('cartDrawerSubtitle');
  const itemsList = document.getElementById('cartItemsList');
  const emptyState = document.getElementById('cartEmptyState');
  const formWrap = document.getElementById('cartOrderForm');
  const footerWrap = document.getElementById('cartDrawerFooter');
  const subtotalEl = document.getElementById('cartSubtotal');

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (countBadge) countBadge.textContent = totalItems;
  if (cartSubtitle) cartSubtitle.textContent = `${totalItems} ${totalItems === 1 ? 'item selecionado' : 'itens selecionados'}`;
  if (subtotalEl) subtotalEl.textContent = `R$ ${totalPrice.toFixed(2).replace('.', ',')}`;

  if (totalItems === 0) {
    if (emptyState) emptyState.style.display = 'flex';
    if (itemsList) itemsList.style.display = 'none';
    if (formWrap) formWrap.style.display = 'none';
    if (footerWrap) footerWrap.style.display = 'none';
  } else {
    if (emptyState) emptyState.style.display = 'none';
    if (itemsList) {
      itemsList.style.display = 'flex';
      itemsList.innerHTML = cart.map(item => `
        <div class="drawer-cart-item">
          <div>
            <span class="cart-item-name">${item.name}</span>
            <span class="cart-item-price">R$ ${(item.price * item.quantity).toFixed(2).replace('.', ',')}</span>
          </div>
          <div class="cart-qty-ctrls">
            <button class="btn-qty" onclick="updateItemQuantity('${item.id}', -1)" aria-label="Diminuir">-</button>
            <span class="qty-number">${item.quantity}</span>
            <button class="btn-qty" onclick="updateItemQuantity('${item.id}', 1)" aria-label="Aumentar">+</button>
          </div>
        </div>
      `).join('');
    }
    if (formWrap) formWrap.style.display = 'block';
    if (footerWrap) footerWrap.style.display = 'block';
  }
}

// ==========================================
// 6. DRAWER CONTROLS & WHATSAPP CHECKOUT
// ==========================================
function initDrawerControls() {
  const triggerBtn = document.getElementById('cartToggleBtn');
  const closeBtn = document.getElementById('closeCartBtn');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  const sendBtn = document.getElementById('sendOrderWhatsAppBtn');

  const deliveryRadio = document.getElementById('orderTypeDelivery');
  const retiradaRadio = document.getElementById('orderTypeRetirada');
  const deliveryFields = document.getElementById('deliveryFieldsWrap');
  const deliveryNote = document.getElementById('deliveryNote');

  if (triggerBtn) triggerBtn.addEventListener('click', openCartDrawer);
  if (closeBtn) closeBtn.addEventListener('click', closeCartDrawer);
  if (backdrop) backdrop.addEventListener('click', closeCartDrawer);

  function handleModeChange() {
    if (deliveryRadio && deliveryRadio.checked) {
      if (deliveryFields) deliveryFields.style.display = 'block';
      if (deliveryNote) deliveryNote.textContent = 'Taxa de entrega calculada pelo endereço em Campos';
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      deliveryRadio.closest('.mode-tab').classList.add('active');
    } else if (retiradaRadio && retiradaRadio.checked) {
      if (deliveryFields) deliveryFields.style.display = 'none';
      if (deliveryNote) deliveryNote.textContent = 'Retirada no salão: Rua Gil de Góis, 213 - Centro';
      document.querySelectorAll('.mode-tab').forEach(t => t.classList.remove('active'));
      retiradaRadio.closest('.mode-tab').classList.add('active');
    }
  }

  if (deliveryRadio) deliveryRadio.addEventListener('change', handleModeChange);
  if (retiradaRadio) retiradaRadio.addEventListener('change', handleModeChange);

  if (sendBtn) sendBtn.addEventListener('click', submitOrderToWhatsApp);
}

function openCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.add('open');
    backdrop.classList.add('open');
    document.body.style.overflow = 'hidden';
  }
}

function closeCartDrawer() {
  const drawer = document.getElementById('cartDrawer');
  const backdrop = document.getElementById('cartDrawerBackdrop');
  if (drawer && backdrop) {
    drawer.classList.remove('open');
    backdrop.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function closeCartAndScroll() {
  closeCartDrawer();
  const target = document.getElementById('cardapio');
  if (target) target.scrollIntoView({ behavior: 'smooth' });
}

function submitOrderToWhatsApp() {
  if (cart.length === 0) return;

  const nameInput = document.getElementById('custName');
  const addressInput = document.getElementById('custAddress');
  const refInput = document.getElementById('custRef');
  const paymentSelect = document.getElementById('custPayment');
  const notesText = document.getElementById('custNotes');
  const isDelivery = document.getElementById('orderTypeDelivery')?.checked ?? true;

  const name = nameInput ? nameInput.value.trim() : '';
  const address = addressInput ? addressInput.value.trim() : '';
  const ref = refInput ? refInput.value.trim() : '';
  const payment = paymentSelect ? paymentSelect.value : 'PIX';
  const notes = notesText ? notesText.value.trim() : '';

  if (!name) {
    alert('Por favor, informe seu nome.');
    if (nameInput) nameInput.focus();
    return;
  }

  if (isDelivery && !address) {
    alert('Por favor, informe o endereço de entrega em Campos.');
    if (addressInput) addressInput.focus();
    return;
  }

  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  // High-standard concierge order formatting
  let msg = `*SOLICITAÇÃO DE PEDIDO — LA BRASA BURGER CAMPOS*\n`;
  msg += `────────────────────────────\n`;
  msg += `*Cliente:* ${name}\n`;
  msg += `*Modalidade:* ${isDelivery ? 'Entrega em Domicílio (Delivery)' : 'Retirada no Salão (Centro)'}\n`;
  
  if (isDelivery) {
    msg += `*Endereço:* ${address}\n`;
    if (ref) msg += `*Referência:* ${ref}\n`;
  }
  
  msg += `*Forma de Pagamento:* ${payment}\n`;
  if (notes) {
    msg += `*Observações:* ${notes}\n`;
  }

  msg += `────────────────────────────\n`;
  msg += `*ITENS DO PEDIDO:*\n`;

  cart.forEach(item => {
    const itemTotal = (item.price * item.quantity).toFixed(2).replace('.', ',');
    msg += `• ${item.quantity}x ${item.name} — R$ ${itemTotal}\n`;
  });

  msg += `────────────────────────────\n`;
  msg += `*Subtotal:* R$ ${totalPrice.toFixed(2).replace('.', ',')}\n`;
  if (isDelivery) {
    msg += `_(Taxa de entrega a calcular conforme o bairro)_\n`;
  }
  msg += `\nGentileza confirmar o recebimento e o tempo estimado de preparo.`;

  const url = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ==========================================
// 7. REAL-TIME OPERATIONAL STATUS (AMERICA/SAO_PAULO)
// ==========================================
function initStatusChecker() {
  const badge = document.getElementById('liveStatusBadge');
  if (!badge) return;

  const now = new Date();
  const spDate = new Date(now.toLocaleString('en-US', { timeZone: 'America/Sao_Paulo' }));
  const day = spDate.getDay(); // 0 = Dom, 1 = Seg, 2 = Ter, ..., 6 = Sab
  const hour = spDate.getHours();
  const minute = spDate.getMinutes();
  const totalMinutes = hour * 60 + minute;

  const openTime = 18 * 60 + 30; // 18:30
  const closeTime = 23 * 60 + 30; // 23:30

  const textEl = badge.querySelector('.status-label');

  if (day === 1) {
    // Segunda-feira fechado
    badge.className = 'status-pill closed';
    if (textEl) textEl.textContent = 'Salão fechado hoje • Abre terça às 18h30';
  } else if (totalMinutes >= openTime && totalMinutes <= closeTime) {
    // Aberto agora
    badge.className = 'status-pill open';
    if (textEl) textEl.textContent = 'Salão e Delivery abertos agora • Até 23h30';
  } else if (totalMinutes < openTime) {
    badge.className = 'status-pill closed';
    if (textEl) textEl.textContent = 'Abertura hoje às 18h30';
  } else {
    badge.className = 'status-pill closed';
    if (textEl) textEl.textContent = 'Fechado no momento • Abre às 18h30';
  }
}

// ==========================================
// 8. TABLE RESERVATIONS
// ==========================================
function openReservationModal() {
  const modal = document.getElementById('reservationModal');
  if (modal) {
    modal.classList.add('open');
    document.body.style.overflow = 'hidden';

    const dateInput = document.getElementById('resDate');
    if (dateInput && !dateInput.value) {
      dateInput.value = new Date().toISOString().split('T')[0];
    }
  }
}

function closeReservationModal() {
  const modal = document.getElementById('reservationModal');
  if (modal) {
    modal.classList.remove('open');
    document.body.style.overflow = '';
  }
}

function submitReservation(e) {
  e.preventDefault();
  const name = document.getElementById('resName')?.value.trim() || '';
  const date = document.getElementById('resDate')?.value || '';
  const time = document.getElementById('resTime')?.value || '';
  const people = document.getElementById('resPeople')?.value || '';
  const occasion = document.getElementById('resOccasion')?.value.trim() || '';

  let dateFormatted = date;
  if (date.includes('-')) {
    const parts = date.split('-');
    dateFormatted = `${parts[2]}/${parts[1]}/${parts[0]}`;
  }

  let msg = `*SOLICITAÇÃO DE RESERVA — LA BRASA BURGER CAMPOS*\n`;
  msg += `────────────────────────────\n`;
  msg += `*Nome do Responsável:* ${name}\n`;
  msg += `*Data da Reserva:* ${dateFormatted}\n`;
  msg += `*Horário Pretendido:* ${time}\n`;
  msg += `*Número de Lugares:* ${people}\n`;
  if (occasion) {
    msg += `*Ocasião / Observações:* ${occasion}\n`;
  }
  msg += `────────────────────────────\n`;
  msg += `Gostaria de verificar a disponibilidade de mesa no salão para a data solicitada.`;

  closeReservationModal();
  const url = `https://wa.me/${STORE_PHONE}?text=${encodeURIComponent(msg)}`;
  window.open(url, '_blank');
}

// ==========================================
// 9. HEADER & NAVIGATION SCROLL
// ==========================================
function initHeaderBehavior() {
  const header = document.getElementById('mainHeader');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      header?.classList.add('scrolled');
    } else {
      header?.classList.remove('scrolled');
    }
  });
}

function initMobileNav() {
  const toggleBtn = document.getElementById('mobileMenuToggle');
  const nav = document.getElementById('navLinks');
  const items = document.querySelectorAll('.nav-item');

  if (toggleBtn && nav) {
    toggleBtn.addEventListener('click', () => {
      nav.classList.toggle('open');
    });

    items.forEach(item => {
      item.addEventListener('click', () => {
        nav.classList.remove('open');
      });
    });
  }
}

// ==========================================
// 10. TOAST NOTIFICATIONS
// ==========================================
function showToast(text) {
  const container = document.getElementById('toastContainer');
  if (!container) return;

  const item = document.createElement('div');
  item.className = 'toast-item';
  item.textContent = text;
  container.appendChild(item);

  setTimeout(() => {
    item.style.transition = 'opacity 0.25s ease, transform 0.25s ease';
    item.style.opacity = '0';
    item.style.transform = 'translateY(8px)';
    setTimeout(() => item.remove(), 250);
  }, 2600);
}
