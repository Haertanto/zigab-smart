// Fungsi untuk navigasi antar menu
function showSection(sectionId, element) {
    // 1. Sembunyikan semua section
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // 2. Tampilkan section yang dipilih
    document.getElementById(sectionId).classList.add('active');

    // 3. Update status menu sidebar
    document.querySelectorAll('.menu-item').forEach(item => {
        item.classList.remove('active');
    });
    element.classList.add('active');

    // 4. Update Judul Header
    const titleMap = {
        'dashboard': 'Dashboard Utama',
        'map': 'Peta Risiko & Evakuasi',
        'logistics': 'Manajemen Logistik',
        'health': 'Fasilitas Kesehatan'
    };
    const sectionTitle = document.getElementById('section-title');
    if (sectionTitle) {
        sectionTitle.innerText = titleMap[sectionId];
    }
}

// Fungsi Jam Real-time
function updateClock() {
    const now = new Date();
    const clockElement = document.getElementById('clock');
    if (clockElement) {
        clockElement.innerText = now.toLocaleString('id-ID', { 
            weekday: 'long', day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit'
        });
    }
}

// Inisialisasi
document.addEventListener('DOMContentLoaded', () => {
    setInterval(updateClock, 1000);
    updateClock();
});