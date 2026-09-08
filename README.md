# 🔺 Program Segitiga

> **Tugas Module 2 — Mata Kuliah Pemrograman Mobile**
> Kelas: IF-2-KM

Aplikasi mobile berbasis **React Native (Expo)** yang menghitung **luas**, **keliling**, dan **jenis segitiga** secara otomatis berdasarkan input pengguna.

---

## 📋 Deskripsi

Aplikasi ini dibuat sebagai tugas pada **Module 2** mata kuliah **Pemrograman Mobile**. Proyek ini mendemonstrasikan penggunaan konsep-konsep dasar JavaScript modern dalam pengembangan aplikasi React Native, meliputi:

- **Arrow Function** — untuk kalkulasi luas, keliling, dan jenis segitiga
- **Template Literal** — untuk menampilkan hasil kalkulasi secara dinamis
- **React Hooks (`useState`)** — untuk manajemen state input secara reaktif
- **Component Composition** — membangun UI dengan komponen React Native bawaan

---

## ✨ Fitur

| Fitur | Deskripsi |
|---|---|
| 📐 Hitung Luas | Menghitung luas segitiga dengan rumus `½ × alas × tinggi` |
| 📏 Hitung Keliling | Menghitung keliling dengan rumus `sisi A + sisi B + sisi C` |
| 🔍 Jenis Segitiga | Mendeteksi jenis segitiga: Sama Sisi, Sama Kaki, atau Sembarang |
| ⚡ Real-time | Hasil dihitung otomatis tanpa perlu tombol submit |

---

## 🛠️ Teknologi

- [React Native](https://reactnative.dev/) `0.86.3`
- [Expo](https://expo.dev/) `^57`
- [React](https://react.dev/) `19.2.3`

---

## 🚀 Cara Menjalankan

### Prasyarat
- Node.js terinstal
- Expo CLI atau aplikasi **Expo Go** di smartphone

### Langkah-langkah

```bash
# 1. Clone repositori
git clone <url-repositori>
cd programsegitiga

# 2. Install dependensi
npm install

# 3. Jalankan aplikasi
npm start
```

Setelah server berjalan, scan QR code menggunakan aplikasi **Expo Go** di Android/iOS.

### Perintah alternatif

```bash
npm run android   # Jalankan di Android emulator
npm run ios       # Jalankan di iOS simulator
npm run web       # Jalankan di browser
```

---

## 📁 Struktur Proyek

```
programsegitiga/
├── App.js          # Komponen utama & logika kalkulasi
├── index.js        # Entry point aplikasi
├── app.json        # Konfigurasi Expo
├── package.json    # Dependensi proyek
└── assets/         # Icon & splash screen
```

---

## 🧮 Logika Kalkulasi

```js
// Hitung luas segitiga
const hitungLuas = (a, t) => 0.5 * a * t;

// Hitung keliling segitiga
const hitungKeliling = (a, b, c) => a + b + c;

// Tentukan jenis segitiga
const jenisSegitiga = (a, b, c) => {
  if (a === b && b === c) return 'Sama Sisi';
  if (a === b || b === c || a === c) return 'Sama Kaki';
  return 'Sembarang';
};
```

---

## 👤 Informasi

- **Mata Kuliah:** Pemrograman Mobile 1
- **Kelas:** IF-2-KM
- **Tugas:** Module 2
