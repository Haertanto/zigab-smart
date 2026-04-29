# 🛡️ SDELOS-H (ZIGAB)
### *Smart Disaster Evacuation, Logistics & Healthcare System*

[![Status](https://img.shields.io/badge/Status-Prototype-orange.svg)]()
[![Azure](https://img.shields.io/badge/Powered%20By-Microsoft%20Azure-blue)]()

## 🚀 Ringkasan Eksekutif

### **Latar Belakang**
Kabupaten Lumajang memiliki risiko tinggi bencana (erupsi Semeru, banjir lahar, longsor). Sistem manual yang ada saat ini sering menyebabkan:
- ⏳ Keterlambatan evakuasi.
- 📦 Distribusi bantuan yang tidak merata.
- 🏥 *Overload* fasilitas kesehatan karena minimnya integrasi data.

### **Problem Statement**
Bagaimana membangun sistem cerdas yang mampu memprediksi risiko bencana, mengoptimalkan evakuasi, serta mendistribusikan pasien dan logistik secara efisien berbasis data real-time?

### **Tujuan Proyek**
Proyek ini hadir sebagai **"Painkiller"** untuk meningkatkan ketahanan kota (*urban resilience*) dengan memanfaatkan AI dan Cloud Computing.

---

## ✨ Fitur Utama
1.  **AI Disaster Prediction:** Prediksi risiko bencana secara spasial dan temporal (XGBoost).
2.  **Heatmap Visualisation:** Visualisasi zona risiko yang intuitif.
3.  **Dynamic Evacuation Route:** Penentuan rute evakuasi tercepat berdasarkan kondisi lapangan.
4.  **Logistics Optimization:** Manajemen stok dan rute distribusi bantuan (VRP Algorithm).
5.  **Smart Healthcare Allocation:** Distribusi pasien otomatis ke RS/Puskesmas berdasarkan kapasitas real-time.
6.  **Real-time Dashboard:** Monitoring terpusat untuk *Command Center*.

---

## 🛠️ Teknologi yang Digunakan

| Komponen | Teknologi |
|:---|:---|
| **Frontend** | HTML5, CSS3, JavaScript (Vanilla) |
| **Machine Learning** | Random Forest, XGBoost |
| **Routing** | Graph Algorithm, Vehicle Routing Problem (VRP) |
| **Backend** | Python (FastAPI / Flask) |
| **Cloud (Azure)** | ML Services, Maps, Blob Storage |
| **Database** | PostgreSQL / CSV |

---

## 💻 Cara Penggunaan

1.  **Akses Dashboard:** Buka file `index.html` pada browser Anda.
2.  **Monitoring Utama:** Pantau status "Siaga Semeru" dan statistik evakuasi pada tab Dashboard.
3.  **Analisis Risiko:** Gunakan menu **Peta Risiko** untuk melihat estimasi zona bahaya.
4.  **Manajemen Logistik:** Cek ketersediaan bantuan pada menu **Logistik** dan gunakan fitur optimasi rute.
5.  **Alokasi RS:** Pantau ketersediaan bed di fasilitas kesehatan melalui menu **Layanan Kesehatan**.

---

## 📈 Rencana Pengembangan
- [ ] **IoT Integration:** Koneksi langsung dengan sensor getaran dan level air BMKG.
- [ ] **Mobile App:** Aplikasi khusus untuk petugas lapangan dan relawan.
- [ ] **SIMRS Sync:** Integrasi API langsung dengan Sistem Informasi Manajemen Rumah Sakit.

---

> *"Building a resilient future through intelligent disaster management."*
