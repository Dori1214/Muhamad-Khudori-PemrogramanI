/* ==========================================================================
   LOGIKA UTAMA NEXGEN STORE - HOME & GRID SYSTEM
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    const games = [
        // MOBILE GAMES
        { name: "Mobile Legends", img: "https://img.daisyui.com/images/stock/photo-1559703248-dcaaec9fab78.webp", category: "mobile", price: "1.500" },
        { name: "Free Fire", img: "https://img.daisyui.com/images/stock/photo-1565098772267-60af42b81ef2.webp", category: "mobile", price: "1.000" },
        { name: "PUBG Mobile", img: "https://img.daisyui.com/images/stock/photo-1550258987-190a2d41a8ba.webp", category: "mobile", price: "7.000" },
        { name: "Genshin Impact", img: "https://img.daisyui.com/images/stock/photo-1572635196237-14b3f281503f.webp", category: "mobile", price: "14.500" },
        { name: "Honor of Kings", img: "https://placehold.co/400x400/020617/0ea5e9?text=HOK", category: "mobile", price: "1.500" },
        { name: "Honkai: Star Rail", img: "https://placehold.co/400x400/020617/0ea5e9?text=HSR", category: "mobile", price: "16.000" },
        { name: "Call of Duty Mobile", img: "https://placehold.co/400x400/020617/0ea5e9?text=CODM", category: "mobile", price: "3.000" },
        { name: "Roblox", img: "https://placehold.co/400x400/020617/0ea5e9?text=Roblox", category: "mobile", price: "10.000" },

        // PC GAMES
        { name: "Valorant", img: "https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp", category: "pc", price: "14.500" },
        { name: "League of Legends", img: "https://placehold.co/400x400/020617/0ea5e9?text=LOL", category: "pc", price: "15.000" },
        { name: "Dota 2", img: "https://placehold.co/400x400/020617/0ea5e9?text=Dota2", category: "pc", price: "10.000" },
        { name: "Point Blank", img: "https://placehold.co/400x400/020617/0ea5e9?text=PB", category: "pc", price: "5.000" },

        // APP / VOUCHER
        { name: "YouTube Premium", img: "https://placehold.co/400x400/020617/0ea5e9?text=YT+Premium", category: "app", price: "5.000" },
        { name: "Spotify Premium", img: "https://placehold.co/400x400/020617/0ea5e9?text=Spotify", category: "app", price: "10.000" },
        { name: "Netflix Premium", img: "https://placehold.co/400x400/020617/0ea5e9?text=Netflix", category: "app", price: "25.000" },
        { name: "Steam Wallet", img: "https://placehold.co/400x400/020617/0ea5e9?text=Steam", category: "app", price: "12.000" }
    ];

    const grid = document.getElementById('gameGrid');
    const searchInput = document.getElementById('searchInput');
    const filterBtns = document.querySelectorAll('.filter-btn');


    window.addEventListener('scroll', () => {
        const nav = document.querySelector('nav');
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    const renderGames = (data) => {
        if(!grid) return;
        
        grid.style.opacity = "0";
        grid.style.transform = "translateY(10px)";
        
        setTimeout(() => {
            if(data.length === 0) {
                grid.innerHTML = `
                    <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                        <span style="font-size: 3rem;">🔍</span>
                        <h3 style="margin-top: 15px;">Game Tidak Ditemukan</h3>
                        <p style="color: var(--text-muted);">Coba cari dengan nama lain.</p>
                        <button onclick="location.reload()" style="margin-top: 20px; border: 1px solid var(--primary); background: none; color: var(--primary); padding: 10px 20px; border-radius: 8px; cursor: pointer;">Tampilkan Semua</button>
                    </div>
                `;
            } else {
                grid.innerHTML = data.map(g => `
                    <div class="game-card" onclick="selectGame('${g.name}', '${g.img}')">
                        <div class="card-tag">Instant</div>
                        <img src="${g.img}" alt="${g.name}" loading="lazy">
                        <h4>${g.name}</h4>
                        <p style="font-size: 0.75rem; color: var(--primary); font-weight: 700;">Mulai Rp ${g.price || '1.500'}</p>
                    </div>
                `).join('');
            }
            grid.style.opacity = "1";
            grid.style.transform = "translateY(0)";
        }, 200);
    };

    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            const cat = btn.getAttribute('data-category');
            const filtered = cat === 'all' ? games : games.filter(g => g.category === cat);
            renderGames(filtered);
            
            if(searchInput) searchInput.value = "";
        });
    });

    if(searchInput) {
        searchInput.addEventListener('input', (e) => {
            const val = e.target.value.toLowerCase();
            const filtered = games.filter(g => g.name.toLowerCase().includes(val));
            renderGames(filtered);

            filterBtns.forEach(b => b.classList.remove('active'));
            if(filterBtns[0]) filterBtns[0].classList.add('active');
        });
    }

    
    const showFakeNotif = () => {
        const names = ["Rizky", "Prabowo", "Amelia", "Sania", "Dodi", "Budi", "Sultan99"];
        const products = ["Weekly Diamond Pass", "86 Diamonds", "Welkin Moon", "VP Valorant", "UC PUBG"];
        const box = document.getElementById('notif');
        const content = document.getElementById('notif-content');

        if(box && content) {
            const rName = names[Math.floor(Math.random() * names.length)];
            const rProd = products[Math.floor(Math.random() * products.length)];
            
            content.innerHTML = `🔥 <b>${rName}</b> baru saja membeli <b>${rProd}</b>`;
            box.classList.add('show');
            
            setTimeout(() => box.classList.remove('show'), 4000);
        }
    };

    renderGames(games);
    setInterval(showFakeNotif, 12000);
});

window.selectGame = (name, img) => {
    localStorage.setItem('gN', name);
    localStorage.setItem('gI', img);
    window.location.href = 'checkout.html';
};

const scrollBtn = document.getElementById('scrollTop');
window.onscroll = () => {
    if (scrollBtn) {
        const show = document.body.scrollTop > 300 || document.documentElement.scrollTop > 300;
        scrollBtn.style.display = show ? "block" : "none";
    }
};

if(scrollBtn) {
    scrollBtn.onclick = () => window.scrollTo({top: 0, behavior: 'smooth'});
}

const showRecentOrder = () => {
    const history = JSON.parse(localStorage.getItem('nxg_history')) || [];
    if(history.length > 0) {
        const lastOrder = history[history.length - 1];
        console.log("Saran: Tampilkan shortcut untuk beli lagi " + lastOrder.game);
    }
}