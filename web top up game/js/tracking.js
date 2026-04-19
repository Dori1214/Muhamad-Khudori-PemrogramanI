/* ==========================================================================
   LOGIKA TRACKING PESANAN - NEXGEN STORE
   ========================================================================== */

function searchOrder() {
    const input = document.getElementById('trackInput').value.trim().toUpperCase();
    const result = document.getElementById('resultArea');
    const btn = document.querySelector('.btn-search-tracking');
    
    if(input.length < 4) {
        alert("⚠️ Masukkan minimal 4 karakter ID Transaksi!");
        return;
    }

    // Loading State
    btn.innerHTML = `<span class="spinner"></span> Mencari...`;
    btn.disabled = true;
    result.style.display = "none";

    // Ambil data riwayat global
    const history = JSON.parse(localStorage.getItem('nxg_history')) || [];

    setTimeout(() => {
        btn.innerHTML = "Cari Transaksi";
        btn.disabled = false;

        // Cari di riwayat (Mencocokkan Invoice # atau ID User)
        const foundData = history.find(item => {
            const cleanInput = input.replace('#', '');
            // Simulasi pencarian cerdas
            return item.date.includes(cleanInput) || cleanInput === "NXG-12345"; 
        });

        if (foundData || input === "NXG-12345") {
            result.style.display = "block";
            
            // Set Data
            document.getElementById('invoiceId').innerText = `ID Transaksi: #${input}`;
            document.getElementById('resGame').innerText   = foundData ? foundData.game : "Mobile Legends";
            document.getElementById('resItem').innerText   = foundData ? foundData.item : "86 Diamonds";
            document.getElementById('resUser').innerText   = foundData ? foundData.userId : "User123";
            document.getElementById('resMethod').innerText = foundData ? foundData.method : "QRIS";

            // Jalankan Animasi Progress
            animateTrackingProgress();
            result.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert("❌ ID Transaksi tidak ditemukan atau salah ketik.");
        }
    }, 1500);
}

function animateTrackingProgress() {
    const line = document.getElementById('progressLine');
    const dot2 = document.getElementById('step2Dot');
    const dot3 = document.getElementById('step3Dot');
    const status = document.getElementById('statusBadge');
    
    // Reset
    line.style.width = "0%";
    dot2.classList.remove('active');
    dot3.classList.remove('active');

    // Tahap 1: Dibayar
    setTimeout(() => {
        line.style.width = "50%";
        dot2.classList.add('active');
        status.innerText = "SEDANG DIPROSES";
    }, 800);

    // Tahap 2: Selesai
    setTimeout(() => {
        line.style.width = "100%";
        dot3.classList.add('active');
        status.innerText = "BERHASIL / SELESAI";
        status.style.color = "#22c55e";
    }, 4000);
}

function showToast(m) {
    const t = document.getElementById('toast');
    if(t) {
        t.innerText = m;
        t.style.display = 'block';
        setTimeout(() => t.style.display = 'none', 3000);
    } else {
        alert(m);
    }
}