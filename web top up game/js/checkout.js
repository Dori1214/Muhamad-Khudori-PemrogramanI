/* ==========================================================================
   LOGIKA NEXGEN STORE - FINAL OPTIMIZED
   ========================================================================== */

let selPrice = null;
let discountAmount = 0;
let pendingMsg = "";

document.addEventListener('DOMContentLoaded', () => {
    const gameName = localStorage.getItem('gN');
    const gameImg = localStorage.getItem('gI');
    if (!gameName) { window.location.href = 'index.html'; return; }

    document.getElementById('gTitle').innerText = gameName;
    document.getElementById('gImg').src = gameImg;

    const zoneInput = document.getElementById('zoneId');
    const gamePakeZone = ["Mobile Legends", "Mobile Legends B", "MLBB"];

    if (gamePakeZone.includes(gameName)) {
        zoneInput.style.display = "block";
    } else {
        zoneInput.style.display = "none";
        zoneInput.value = ""; 
    }

    const priceList = {
        "Mobile Legends": [
            { l: "3 Diamonds", p: "Rp 1.500" }, { l: "5 Diamonds", p: "Rp 2.000" }, { l: "12 Diamonds", p: "Rp 3.500" },
            { l: "19 Diamonds", p: "Rp 5.500" }, { l: "28 Diamonds", p: "Rp 8.000" }, { l: "44 Diamonds", p: "Rp 12.500" },
            { l: "59 Diamonds", p: "Rp 16.000" }, { l: "85 Diamonds", p: "Rp 23.000" }, { l: "170 Diamonds", p: "Rp 45.000" },
            { l: "240 Diamonds", p: "Rp 65.000" }, { l: "296 Diamonds", p: "Rp 80.000" }, { l: "408 Diamonds", p: "Rp 110.000" },
            { l: "568 Diamonds", p: "Rp 150.000" }, { l: "875 Diamonds", p: "Rp 235.000" }, { l: "1159 Diamonds", p: "Rp 310.000" },
            { l: "2010 Diamonds", p: "Rp 535.000" }, { l: "4830 Diamonds", p: "Rp 1.250.000" }, { l: "9660 Diamonds", p: "Rp 2.450.000" },
            { l: "Weekly Diamond Pass", p: "Rp 28.500" }, { l: "Twilight Pass", p: "Rp 145.000" }, { l: "Starlight Member", p: "Rp 85.000" }
        ],
        "Free Fire": [
            { l: "5 Diamonds", p: "Rp 1.000" }, { l: "12 Diamonds", p: "Rp 2.000" }, { l: "50 Diamonds", p: "Rp 7.000" },
            { l: "70 Diamonds", p: "Rp 9.500" }, { l: "140 Diamonds", p: "Rp 19.000" }, { l: "210 Diamonds", p: "Rp 28.500" },
            { l: "355 Diamonds", p: "Rp 47.000" }, { l: "500 Diamonds", p: "Rp 66.000" }, { l: "720 Diamonds", p: "Rp 94.000" },
            { l: "1000 Diamonds", p: "Rp 130.000" }, { l: "1440 Diamonds", p: "Rp 185.000" }, { l: "2000 Diamonds", p: "Rp 255.000" },
            { l: "2180 Diamonds", p: "Rp 280.000" }, { l: "3640 Diamonds", p: "Rp 460.000" }, { l: "5600 Diamonds", p: "Rp 710.000" },
            { l: "7290 Diamonds", p: "Rp 920.000" }, { l: "10800 Diamonds", p: "Rp 1.350.000" }, { l: "Member Mingguan", p: "Rp 29.000" },
            { l: "Member Bulanan", p: "Rp 145.000" }, { l: "Level Up Pass", p: "Rp 15.000" }
        ],
        "Genshin Impact": [
            { l: "60 Genesis Crystals", p: "Rp 14.500" }, { l: "300+30 Crystals", p: "Rp 74.000" }, { l: "980+110 Crystals", p: "Rp 235.000" },
            { l: "1980+260 Crystals", p: "Rp 465.000" }, { l: "3280+600 Crystals", p: "Rp 770.000" }, { l: "6480+1600 Crystals", p: "Rp 1.520.000" },
            { l: "Welkin Moon (30 Hari)", p: "Rp 74.000" }, { l: "2x Welkin Moon", p: "Rp 148.000" }, { l: "3x Welkin Moon", p: "Rp 222.000" },
            { l: "Gnostic Hymn", p: "Rp 145.000" }, { l: "Gnostic Chorus", p: "Rp 295.000" }
        ],
        "PUBG Mobile": [
            { l: "30 UC", p: "Rp 7.000" }, { l: "60 UC", p: "Rp 14.000" }, { l: "325 UC", p: "Rp 71.000" },
            { l: "660 UC", p: "Rp 143.000" }, { l: "1800 UC", p: "Rp 360.000" }, { l: "3850 UC", p: "Rp 730.000" },
            { l: "8100 UC", p: "Rp 1.450.000" }, { l: "Royale Pass", p: "Rp 150.000" }
        ],
        "Valorant": [
            { l: "125 Points", p: "Rp 14.500" }, { l: "300 Points", p: "Rp 34.000" }, { l: "625 Points", p: "Rp 69.000" },
            { l: "1125 Points", p: "Rp 120.000" }, { l: "1650 Points", p: "Rp 175.000" }, { l: "1950 Points", p: "Rp 210.000" },
            { l: "2850 Points", p: "Rp 300.000" }, { l: "3400 Points", p: "Rp 355.000" }, { l: "5400 Points", p: "Rp 560.000" },
            { l: "Battlepass", p: "Rp 145.000" }
        ],
        "Honor of Kings": [
            { l: "8 Tokens", p: "Rp 1.500" }, { l: "16 Tokens", p: "Rp 3.000" }, { l: "31 Tokens", p: "Rp 6.000" },
            { l: "63 Tokens", p: "Rp 12.000" }, { l: "128 Tokens", p: "Rp 24.000" }, { l: "257 Tokens", p: "Rp 48.000" },
            { l: "388 Tokens", p: "Rp 72.000" }, { l: "Weekly Card", p: "Rp 15.000" }, { l: "Monthly Card", p: "Rp 75.000" }
        ],
        "Default": [
            { l: "Starter Pack", p: "Rp 5.000" }, { l: "Basic Pack", p: "Rp 10.000" }, { l: "Pro Pack", p: "Rp 50.000" }, { l: "Sultan Pack", p: "Rp 100.000" }
        ]
    };

    const items = priceList[gameName] || priceList["Default"];
    const grid = document.getElementById('nomGrid');
    if (grid) {
        grid.innerHTML = items.map(i => `
            <div class="game-card item-select" data-label="${i.l}" data-price="${i.p}" style="padding: 15px; cursor:pointer;">
                <b style="display:block; pointer-events:none;">${i.l}</b>
                <span style="color:var(--primary); pointer-events:none; font-size:0.9rem;">${i.p}</span>
            </div>
        `).join('');

        document.querySelectorAll('.item-select').forEach(card => {
            card.addEventListener('click', function() {
                document.querySelectorAll('.item-select').forEach(c => c.classList.remove('active'));
                this.classList.add('active');
                selPrice = { l: this.dataset.label, p: this.dataset.price };
                discountAmount = 0;
                document.getElementById('promoMsg').style.display = "none";
                document.getElementById('promoCode').value = "";
                showToast("📦 Item: " + selPrice.l);
            });
        });
    }
    loadHistory();
    initQuickBuy();
});

function showToast(m) {
    const t = document.getElementById('toast');
    if(!t) return;
    t.innerText = m; t.style.display = 'block';
    setTimeout(() => { t.style.display = 'none'; }, 3000);
}

function formatIDR(num) {
    return "Rp " + num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function closeModal() { document.getElementById('confirmModal').style.display = 'none'; }

function checkID() {
    const id = document.getElementById('uId').value.trim();
    const btn = document.getElementById('btnCheck');
    const result = document.getElementById('playerResult');
    if (!id) {
        document.getElementById('uId').classList.add('input-error');
        showToast("⚠️ Isi User ID dulu!"); 
        setTimeout(() => document.getElementById('uId').classList.remove('input-error'), 1000);
        return;
    }
    btn.innerText = "Checking...";
    btn.disabled = true;
    setTimeout(() => {
        btn.innerText = "🔍 Cek ID Player";
        btn.disabled = false;
        result.innerText = "User: NexGen_User ✅";
        result.style.display = "inline";
        showToast("✅ ID Ditemukan!");
    }, 1200);
}

function payWA() {
    const idInp = document.getElementById('uId');
    const metInp = document.getElementById('method').value;
    
    if (!idInp.value.trim() || !selPrice || !metInp) {
        showToast("⚠️ Lengkapi data pesanan Anda!"); 
        return;
    }

    let qrisDiscount = (metInp === "QRIS") ? 1000 : 0;
    const originalPrice = parseInt(selPrice.p.replace(/\D/g, ''));
    const finalPrice = originalPrice - discountAmount - qrisDiscount;

    // Tampilkan QRIS hanya jika dipilih
    document.getElementById('qrisPaymentArea').style.display = (metInp === "QRIS") ? "block" : "none";

    document.getElementById('mGame').innerText = localStorage.getItem('gN');
    document.getElementById('mItem').innerText = selPrice.l;
    document.getElementById('mMethod').innerText = metInp;
    document.getElementById('mPrice').innerText = formatIDR(finalPrice);

    document.getElementById('confirmModal').style.display = 'flex';
}

function sendOrder() {
    const game = localStorage.getItem('gN');
    const id = document.getElementById('uId').value.trim();
    const zoneInp = document.getElementById('zoneId');
    const zone = (zoneInp.style.display !== "none") ? zoneInp.value : "";
    const met = document.getElementById('mMethod').innerText;
    const finalPriceText = document.getElementById('mPrice').innerText;

    closeModal();
    const overlay = document.getElementById('processingOverlay');
    overlay.style.display = 'flex';
    
    setTimeout(() => {
        overlay.style.display = 'none';
        showReceipt(game, id, zone, met, finalPriceText);
    }, 2000);
}

function showReceipt(game, id, zone, met, price) {
    const inv = "NXG-" + Math.floor(Math.random() * 90000 + 10000);
    const dateStr = new Date().toLocaleString('id-ID');

    document.getElementById('rInv').innerText = "#" + inv;
    document.getElementById('rDate').innerText = dateStr;
    document.getElementById('rGame').innerText = game;
    document.getElementById('rItem').innerText = selPrice.l;
    document.getElementById('rUser').innerText = id + (zone ? ` (${zone})` : "");
    document.getElementById('rMethod').innerText = met;
    document.getElementById('rPrice').innerText = price;

    pendingMsg = `*STRUK PESANAN - ${inv}*%0A🎮 Game: ${game}%0A🆔 ID: ${id} ${zone ? '('+zone+')' : ''}%0A📦 Produk: ${selPrice.l}%0A💰 Total: ${price}%0A💳 Metode: ${met}`;

    let h = JSON.parse(localStorage.getItem('nxg_history')) || [];
    h.unshift({ game, item: selPrice.l, price, userId: id + (zone ? ` (${zone})` : ""), method: met, date: dateStr });
    localStorage.setItem('nxg_history', JSON.stringify(h.slice(0, 10)));

    document.getElementById('receiptModal').style.display = 'flex';
    loadHistory();
}

function printInvoice() {
    const invNo = document.getElementById('rInv').innerText;
    const game = document.getElementById('rGame').innerText;
    const item = document.getElementById('rItem').innerText;
    const user = document.getElementById('rUser').innerText;
    const price = document.getElementById('rPrice').innerText;
    const method = document.getElementById('rMethod').innerText;
    const date = document.getElementById('rDate').innerText;

    const printWindow = window.open('', '', 'height=600,width=400');
    printWindow.document.write(`<html><head><title>Invoice ${invNo}</title><style>body{font-family:monospace;padding:20px;text-align:center;}.ticket{border:1px solid #eee;padding:15px;}hr{border:none;border-top:1px dashed #ccc;}</style></head><body><div class="ticket"><h2>NEXGEN.</h2><p>${invNo}</p><hr><p>${game}</p><p>${item}</p><p>${user}</p><p>${method}</p><h3>TOTAL: ${price}</h3><hr><p>${date}</p></div></body></html>`);
    printWindow.document.close();
    setTimeout(() => { printWindow.print(); printWindow.close(); }, 500);
}

function finalRedirect() {
    window.open(`https://wa.me/6283891722404?text=${pendingMsg}`);
    closeReceipt();
}

function closeReceipt() { document.getElementById('receiptModal').style.display = 'none'; }

function loadHistory() {
    const h = JSON.parse(localStorage.getItem('nxg_history')) || [];
    const list = document.getElementById('historyList');
    const sec = document.getElementById('historySection');
    const currentGame = localStorage.getItem('gN');
    
    const filtered = h.filter(item => item.game === currentGame);
    if (filtered.length === 0) { sec.style.display = 'none'; return; }

    sec.style.display = 'block';
    list.innerHTML = filtered.map((x) => `
        <div class="history-card" style="background:rgba(255,255,255,0.03);padding:12px;border-radius:12px;margin-bottom:8px;border:1px solid var(--border);display:flex;justify-content:space-between;align-items:center;">
            <div><b>${x.item}</b><br><small>${x.userId}</small></div>
            <div style="text-align:right;"><b style="color:var(--primary)">${x.price}</b><br><small>${x.date.split(',')[0]}</small></div>
        </div>
    `).join('');
}

function initQuickBuy() {
    const currentGame = localStorage.getItem('gN'); 
    const history = JSON.parse(localStorage.getItem('nxg_history')) || [];
    const lastOrder = history.find(h => h.game === currentGame);
    if (!lastOrder) return;

    const quickSection = document.createElement('div');
    quickSection.id = 'quickBuyContainer';
    quickSection.style.gridColumn = "1 / -1"; 
    quickSection.innerHTML = `<div style="background:rgba(14,165,233,0.1);padding:15px;border-radius:15px;border:1px dashed var(--primary);margin-bottom:25px;display:flex;justify-content:space-between;align-items:center;"><div><small style="color:var(--primary);font-weight:bold;">BELI LAGI:</small><b>${lastOrder.item}</b></div><button onclick="applyQuickBuy('${lastOrder.userId}', '${lastOrder.item}')" style="background:var(--primary);color:white;border:none;padding:10px 15px;border-radius:10px;cursor:pointer;font-weight:800;">🚀 RE-ORDER</button></div>`;
    
    const container = document.querySelector('.checkout-layout');
    if (container) container.prepend(quickSection);
}

window.applyQuickBuy = (id, itemLabel) => {
    document.getElementById('uId').value = id.split(' ')[0];
    const cards = document.querySelectorAll('.item-select');
    cards.forEach(card => { if (card.dataset.label === itemLabel) card.click(); });
    showToast("🪄 Data dimuat!");
};

window.clearAllHistory = () => {
    if (confirm("Hapus riwayat game ini?")) {
        const h = JSON.parse(localStorage.getItem('nxg_history')) || [];
        const filtered = h.filter(item => item.game !== localStorage.getItem('gN'));
        localStorage.setItem('nxg_history', JSON.stringify(filtered));
        loadHistory();
        if(document.getElementById('quickBuyContainer')) document.getElementById('quickBuyContainer').remove();
    }
};

// Tambahkan di checkout.js
window.copyInvoice = () => {
    const inv = document.getElementById('rInv').innerText.replace('#', '');
    navigator.clipboard.writeText(inv).then(() => showToast("📋 Nomor Invoice disalin!"));
};