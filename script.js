// Lumina Candle & Crystal - Interactive Application Script

document.addEventListener('DOMContentLoaded', () => {
  initCandleMeltDemo();
  initProductFilter();
  initQuiz();
  initQRGenerator();
  initCartAndCheckout();
});

/* -------------------------------------------------------------
   1. VIRTUAL CANDLE BURN MELT DEMO
------------------------------------------------------------- */
function initCandleMeltDemo() {
  const demoContainer = document.getElementById('candle-melt-demo');
  const startBtn = document.getElementById('btn-start-burn');
  const resetBtn = document.getElementById('btn-reset-burn');
  const flameContainer = document.getElementById('flame-container');
  const waxLayer = document.getElementById('wax-layer');
  const statusMsg = document.getElementById('melt-status-msg');

  if (!startBtn) return;

  startBtn.addEventListener('click', () => {
    startBtn.disabled = true;
    flameContainer.classList.add('active');
    waxLayer.style.height = '20%';
    statusMsg.innerHTML = '🔥 Ngọn lửa đang tỏa hương thơm dễ chịu... Sáp nến đang bắt đầu tan chảy...';

    setTimeout(() => {
      demoContainer.classList.add('melted');
      statusMsg.innerHTML = '✨ **Bí mật đã lộ diện!** Bạn thu hoạch được **01 Thạch Anh Hồng** & **01 Thạch Anh Tím** mang năng lượng yêu thương và an yên!';
      startBtn.disabled = false;
    }, 4000);
  });

  resetBtn.addEventListener('click', () => {
    flameContainer.classList.remove('active');
    demoContainer.classList.remove('melted');
    waxLayer.style.height = '80%';
    statusMsg.innerHTML = 'Thắp nến để bắt đầu trải nghiệm khám phá đá ẩn bên trong!';
    startBtn.disabled = false;
  });
}

/* -------------------------------------------------------------
   2. PRODUCT FILTERING SYSTEM
------------------------------------------------------------- */
const PRODUCTS_DATA = [
  {
    id: 1,
    title: 'Nến "Love Whisper"',
    scent: 'Hoa hồng Damask & Vanilla',
    crystalName: 'Thạch Anh Hồng',
    category: 'love',
    price: 280000,
    priceFormatted: '280.000 VNĐ',
    img: 'assets/thach-anh-hong.png',
    desc: 'Hương hoa quyến rũ xoa dịu tổn thương tâm hồn. Ẩn chứa Thạch Anh Hồng giúp thu hút tình yêu và nuôi dưỡng trắc ẩn.',
    qrUrl: 'da/thach-anh-hong.html'
  },
  {
    id: 2,
    title: 'Nến "Peace of Mind"',
    scent: 'Oải Hương Lavender & Tuyết Tùng',
    crystalName: 'Thạch Anh Tím',
    category: 'peace',
    price: 280000,
    priceFormatted: '280.000 VNĐ',
    img: 'assets/thach-anh-tim.png',
    desc: 'Giảm stress, thanh lọc không gian sống và xoa dịu tâm trí. Giấu viên Thạch Anh Tím giúp ngủ ngon và sâu giấc.',
    qrUrl: 'da/thach-anh-tim.html'
  },
  {
    id: 3,
    title: 'Nến "Courage & Focus"',
    scent: 'Hương Gỗ Trầm & Cam Bergamot',
    crystalName: 'Đá Mắt Hổ',
    category: 'focus',
    price: 295000,
    priceFormatted: '295.000 VNĐ',
    img: 'assets/mat-ho.png',
    desc: 'Bổ sung sinh khí, thôi thúc dũng khí và tinh thần quyết đoán. Đi kèm Đá Mắt Hổ bảo vệ năng lượng cá nhân.',
    qrUrl: 'da/mat-ho.html'
  },
  {
    id: 4,
    title: 'Nến "Pure Clarity"',
    scent: 'Bạc Hà & Bạch Đàn Eucalyptus',
    crystalName: 'Thạch Anh Trắng',
    category: 'peace',
    price: 280000,
    priceFormatted: '280.000 VNĐ',
    img: 'assets/thach-anh-trang.png',
    desc: 'Khai sáng tư duy, khuếch đại năng lượng tích cực. Giấu viên Thạch Anh Trắng thanh lọc sóng tiêu cực xung quanh.',
    qrUrl: 'da/thach-anh-trang.html'
  },
  {
    id: 5,
    title: 'Nến "Inner Intuition"',
    scent: 'Hoa Nhài Night-Jasmine & Trà Xanh',
    crystalName: 'Đá Mặt Trăng',
    category: 'love',
    price: 310000,
    priceFormatted: '310.000 VNĐ',
    img: 'assets/da-mat-trang.png',
    desc: 'Kết nối trực giác tâm linh, xoa dịu biến động cảm xúc. Ẩn chứa Đá Mặt Trăng (Moonstone) dịu mát huyền ảo.',
    qrUrl: 'da/da-mat-trang.html'
  },
  {
    id: 6,
    title: 'Nến "Golden Wealth"',
    scent: 'Hổ Phách, Quế & Nhục Đậu Cầu',
    crystalName: 'Thạch Anh Tóc Vàng',
    category: 'wealth',
    price: 320000,
    priceFormatted: '320.000 VNĐ',
    img: 'assets/thach-anh-toc-vang.png',
    desc: 'Hương thơm ấm nồng sang trọng kích hoạt dòng chảy tài lộc. Kết hợp Thạch Anh Tóc Vàng thu hút thịnh vượng.',
    qrUrl: 'da/thach-anh-toc-vang.html'
  }
];

function initProductFilter() {
  const filterBtns = document.querySelectorAll('.filter-btn');
  const grid = document.getElementById('product-grid');

  if (!grid) return;

  renderProducts(PRODUCTS_DATA);

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const category = btn.getAttribute('data-filter');
      if (category === 'all') {
        renderProducts(PRODUCTS_DATA);
      } else {
        const filtered = PRODUCTS_DATA.filter(p => p.category === category);
        renderProducts(filtered);
      }
    });
  });
}

function renderProducts(products) {
  const grid = document.getElementById('product-grid');
  grid.innerHTML = '';

  products.forEach(p => {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
      <div class="product-img-wrapper">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="crystal-tag-overlay">
          <span>🔮</span> Ẩn ${p.crystalName}
        </div>
      </div>
      <div class="product-content">
        <h3 class="product-title">${p.title}</h3>
        <div class="product-scent">🌿 ${p.scent}</div>
        <p class="product-desc">${p.desc}</p>
        <div style="margin-bottom: 1rem;">
          <a href="${p.qrUrl}" target="_blank" style="font-size: 0.85rem; color: var(--primary); text-decoration: underline;">
            📱 Xem thử trang QR quét nắp nến ➔
          </a>
        </div>
        <div class="product-footer">
          <div class="product-price">${p.priceFormatted}</div>
          <button class="btn-add-cart" onclick="addToCart(${p.id})">+ Thêm giỏ</button>
        </div>
      </div>
    `;
    grid.appendChild(card);
  });
}

/* -------------------------------------------------------------
   3. CRYSTAL FINDER QUIZ LOGIC
------------------------------------------------------------- */
function initQuiz() {
  const quizBox = document.getElementById('quiz-box');
  if (!quizBox) return;

  window.selectQuizOption = function (type) {
    let resultProduct = PRODUCTS_DATA.find(p => p.category === type) || PRODUCTS_DATA[0];

    quizBox.innerHTML = `
      <div style="text-align: center;">
        <span style="font-size: 3rem;">✨</span>
        <h3 style="color: var(--primary-dark); font-size: 1.6rem; margin: 0.8rem 0;">Sản Phẩm Dành Cho Năng Lượng Của Bạn</h3>
        <p style="color: var(--text-muted); margin-bottom: 1.5rem;">Tần số cảm xúc hiện tại của bạn rất hợp với hũ nến dưới đây:</p>
        
        <div style="background: var(--bg-cream); border: 1px solid var(--border-gold); padding: 1.5rem; border-radius: 12px; margin-bottom: 1.5rem; display: flex; align-items: center; gap: 15px; text-align: left;">
          <img src="${resultProduct.img}" style="width: 80px; height: 80px; object-fit: cover; border-radius: 8px;">
          <div>
            <h4 style="color: var(--primary-dark);">${resultProduct.title}</h4>
            <p style="font-size: 0.88rem; color: var(--primary-gold);">${resultProduct.crystalName}</p>
            <p style="font-size: 0.9rem; margin-top: 4px;">${resultProduct.priceFormatted}</p>
          </div>
        </div>

        <button class="btn-primary" onclick="addToCart(${resultProduct.id}); openCartModal();">
          🛒 Đặt Mua Ngay Cốc Nến Này
        </button>
        <button class="btn-secondary" style="margin-left: 10px;" onclick="location.reload();">
          🔄 Thử lại
        </button>
      </div>
    `;
  };
}

/* -------------------------------------------------------------
   4. QR CODE GENERATOR UTILITY (Built-in Canvas QR Engine)
------------------------------------------------------------- */
function initQRGenerator() {
  const domainInput = document.getElementById('qr-domain-input');
  const stoneSelect = document.getElementById('qr-stone-select');
  const generateBtn = document.getElementById('btn-generate-qr');
  const downloadBtn = document.getElementById('btn-download-qr');
  const container = document.getElementById('qr-canvas-container');

  if (!generateBtn) return;

  function renderQR() {
    const domain = domainInput.value.trim() || 'velunecandle.vercel.app';
    const subpath = stoneSelect.value;
    const fullUrl = `https://${domain.replace(/^https?:\/\//, '')}/${subpath}`;

    container.innerHTML = '';

    // Create temporary container for QRCode.js generator
    const qrHolder = document.createElement('div');
    qrHolder.style.display = 'none';
    document.body.appendChild(qrHolder);

    // Render 100% standard scannable QR code
    if (typeof QRCode !== 'undefined') {
      new QRCode(qrHolder, {
        text: fullUrl,
        width: 180,
        height: 180,
        colorDark: "#2C2523",
        colorLight: "#FFFFFF",
        correctLevel: QRCode.CorrectLevel.H
      });
    }

    setTimeout(() => {
      const qrCanvasSource = qrHolder.querySelector('canvas') || qrHolder.querySelector('img');

      // Create final high-res branded card canvas
      const canvas = document.createElement('canvas');
      canvas.width = 260;
      canvas.height = 340;
      const ctx = canvas.getContext('2d');

      // Card Background
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(0, 0, 260, 340);

      // Gold Frame border
      ctx.strokeStyle = '#D4A373';
      ctx.lineWidth = 4;
      ctx.strokeRect(8, 8, 244, 324);

      // Header text
      ctx.fillStyle = '#9D6B53';
      ctx.font = 'bold 13px "Plus Jakarta Sans", sans-serif';
      ctx.textAlign = 'center';
      ctx.fillText('VELUNE CRYSTAL GUIDE', 130, 32);

      // Draw the scannable QR Code onto card
      if (qrCanvasSource) {
        ctx.drawImage(qrCanvasSource, 40, 48, 180, 180);
      }

      // Border around QR code
      ctx.strokeStyle = '#E8DFD5';
      ctx.lineWidth = 1;
      ctx.strokeRect(40, 48, 180, 180);

      // Footer text on Canvas
      ctx.fillStyle = '#6E6562';
      ctx.font = '11px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Quét mã trên nắp hũ nến VELUNE', 130, 252);

      ctx.fillStyle = '#9D6B53';
      ctx.font = 'bold 10px monospace';
      const displayPath = subpath.replace('da/', '').replace('.html', '');
      ctx.fillText(`KEY: ${displayPath.toUpperCase()}`, 130, 272);

      ctx.fillStyle = '#D4A373';
      ctx.font = '9px "Plus Jakarta Sans", sans-serif';
      ctx.fillText(fullUrl.substring(0, 34) + (fullUrl.length > 34 ? '...' : ''), 130, 295);

      ctx.fillStyle = '#9D6B53';
      ctx.font = 'italic 8px "Plus Jakarta Sans", sans-serif';
      ctx.fillText('Light your little moments.', 130, 315);

      container.appendChild(canvas);
      qrHolder.remove();
    }, 150);
  }

  generateBtn.addEventListener('click', renderQR);
  stoneSelect.addEventListener('change', renderQR);

  downloadBtn.addEventListener('click', () => {
    const canvas = container.querySelector('canvas');
    if (!canvas) return;
    const link = document.createElement('a');
    link.download = `QR-VELUNE-${stoneSelect.value.replace('da/', '').replace('.html', '')}.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });

  // Initial render
  setTimeout(renderQR, 300);
}

/* -------------------------------------------------------------
   5. CART & CHECKOUT VIETQR MODAL
------------------------------------------------------------- */
let cart = [];

window.addToCart = function (productId) {
  const item = PRODUCTS_DATA.find(p => p.id === productId);
  if (item) {
    cart.push(item);
    updateCartUI();

    // Toast notification
    showToast(`Đã thêm "${item.title}" vào giỏ hàng!`);
  }
};

function updateCartUI() {
  const badge = document.getElementById('cart-badge-count');
  if (badge) {
    badge.innerText = cart.length;
  }
}

function showToast(message) {
  let toast = document.createElement('div');
  toast.style.position = 'fixed';
  toast.style.bottom = '20px';
  toast.style.right = '20px';
  toast.style.background = 'var(--primary-dark)';
  toast.style.color = '#fff';
  toast.style.padding = '0.9rem 1.5rem';
  toast.style.borderRadius = '30px';
  toast.style.boxShadow = '0 10px 25px rgba(0,0,0,0.3)';
  toast.style.zIndex = '3000';
  toast.style.fontSize = '0.95rem';
  toast.innerHTML = `✨ ${message}`;
  document.body.appendChild(toast);

  setTimeout(() => {
    toast.remove();
  }, 3000);
}

window.openCartModal = function () {
  const modal = document.getElementById('checkout-modal');
  const cartItemsBox = document.getElementById('modal-cart-items');
  const totalBox = document.getElementById('modal-cart-total');
  const qrImg = document.getElementById('vietqr-image');

  if (!modal) return;

  if (cart.length === 0) {
    cartItemsBox.innerHTML = '<p style="text-align: center; color: #888;">Giỏ hàng của bạn đang trống.</p>';
    totalBox.innerText = '0 VNĐ';
    qrImg.src = '';
  } else {
    let total = 0;
    cartItemsBox.innerHTML = cart.map((item, index) => {
      total += item.price;
      return `
        <div style="display: flex; justify-content: space-between; align-items: center; padding: 0.6rem 0; border-bottom: 1px solid #eee;">
          <div>
            <strong>${item.title}</strong>
            <div style="font-size: 0.85rem; color: #777;">${item.crystalName}</div>
          </div>
          <div style="display: flex; align-items: center; gap: 10px;">
            <span>${item.priceFormatted}</span>
            <button onclick="removeFromCart(${index})" style="background: none; border: none; color: red; cursor: pointer;">✕</button>
          </div>
        </div>
      `;
    }).join('');

    const formattedTotal = total.toLocaleString('vi-VN') + ' VNĐ';
    totalBox.innerText = formattedTotal;

    // Generate TPBank VietQR Quick Link
    const bankId = 'TPB'; // TPBank
    const accountNo = '00006254663'; // Account NGUYEN THI BICH PHUNG
    const accountName = 'NGUYEN THI BICH PHUNG';
    const addInfo = encodeURIComponent(`VELUNE ${Math.floor(1000 + Math.random() * 9000)}`);
    qrImg.src = `https://img.vietqr.io/image/${bankId}-${accountNo}-compact2.png?amount=${total}&addInfo=${addInfo}&accountName=${encodeURIComponent(accountName)}`;
    qrImg.onerror = function() {
      this.src = 'assets/vietqr-bank.png';
    };
  }

  modal.classList.add('active');
};

window.closeCartModal = function () {
  const modal = document.getElementById('checkout-modal');
  if (modal) modal.classList.remove('active');
};

window.removeFromCart = function (index) {
  cart.splice(index, 1);
  updateCartUI();
  openCartModal();
};

window.confirmOrderZalo = function () {
  if (cart.length === 0) {
    alert('Vui lòng thêm ít nhất 01 sản phẩm nến thơm vào giỏ hàng trước!');
    return;
  }

  const nameInput = document.getElementById('customer-name');
  const phoneInput = document.getElementById('customer-phone');
  const addressInput = document.getElementById('customer-address');

  const name = nameInput.value.trim();
  const phone = phoneInput.value.trim();
  const address = addressInput.value.trim();

  if (!name || !phone || !address) {
    alert('Vui lòng nhập đầy đủ Họ tên, Số điện thoại và Địa chỉ giao hàng để VELUNE gửi đơn cho bạn nhé!');
    if (!name) nameInput.focus();
    else if (!phone) phoneInput.focus();
    else if (!address) addressInput.focus();
    return;
  }

  let total = 0;
  const itemsText = cart.map(item => {
    total += item.price;
    return `• ${item.title} (${item.crystalName}) - ${item.priceFormatted}`;
  }).join('\n');

  const totalFormatted = total.toLocaleString('vi-VN') + ' VNĐ';

  const fullOrderMsg = 
`🌸 ĐƠN HÀNG NẾN THƠM VELUNE
------------------------------
${itemsText}
💰 Tổng thanh toán: ${totalFormatted}
------------------------------
👤 Họ và tên: ${name}
📞 Số điện thoại: ${phone}
🏠 Địa chỉ giao hàng: ${address}
💳 Ngân hàng: TPBank (0000 6254 663 - NGUYEN THI BICH PHUNG)`;

  // Copy order text to clipboard for convenience
  if (navigator.clipboard) {
    navigator.clipboard.writeText(fullOrderMsg).catch(() => {});
  }

  // Open Zalo chat directly to Hotline 0907702656
  const zaloStoreUrl = `https://zalo.me/0907702656`;
  window.open(zaloStoreUrl, '_blank');

  showToast('Đã mở Zalo 0907.702.656 & tự động sao chép đơn hàng VELUNE!');

  // Reset cart after ordering
  cart = [];
  updateCartUI();
  closeCartModal();
};
