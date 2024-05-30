# MVVM NodeJS

Model-View-ViewModel (MVVM) adalah pola desain perangkat lunak yang memisahkan pengembangan antarmuka pengguna (View), logika bisnis atau logika presentasi (ViewModel), dan manajemen data (Model).

## Table of Contents

- [Instalasi](#instalasi)
- [Menjalankan Proyek](#menjalankan-proyek)
- [Struktur Proyek MVVM dengan Node.js](#struktur-proyek-mvvm-dengan-nodejs)
- [Kontribusi](#kontribusi)
- [Lisensi](#lisensi)

## Instalasi

Ikuti langkah-langkah berikut untuk menginstal Node.js dan npm serta memulai proyek Anda.

### Menginstal Node.js dan npm

#### Pada Windows:

1. **Download Installer:**
   - Kunjungi situs web resmi Node.js di [https://nodejs.org/](https://nodejs.org/).
   - Unduh installer untuk Windows (pilih versi LTS).

2. **Install Node.js:**
   - Jalankan installer yang sudah diunduh.
   - Ikuti instruksi pada installer.

3. **Verifikasi Instalasi:**
   - Buka Command Prompt atau PowerShell.
   - Jalankan perintah berikut:
     ```sh
     node -v
     npm -v
     ```

#### Pada macOS:

1. **Download Installer:**
   - Kunjungi situs web resmi Node.js di [https://nodejs.org/](https://nodejs.org/).
   - Unduh installer untuk macOS (pilih versi LTS).

2. **Install Node.js:**
   - Buka file installer yang sudah diunduh.
   - Ikuti instruksi pada installer.

3. **Verifikasi Instalasi:**
   - Buka Terminal.
   - Jalankan perintah berikut:
     ```sh
     node -v
     npm -v
     ```

#### Pada Linux:

1. **Gunakan Paket Manager:**
   - Untuk Ubuntu/Debian:
     ```sh
     sudo apt update
     sudo apt install nodejs npm
     ```

2. **Verifikasi Instalasi:**
   - Jalankan perintah berikut:
     ```sh
     node -v
     npm -v
     ```

### Inisialisasi Proyek Baru

1. **Buat Direktori Proyek:**
   ```sh
   mkdir nama-proyek
   cd nama-proyek

### Struktur Proyek MVVM dengan Node.js
**Model-View-ViewModel (MVVM) adalah pola desain perangkat lunak yang memisahkan pengembangan antarmuka pengguna (View), logika bisnis atau logika presentasi (ViewModel), dan manajemen data (Model). Dalam konteks Node.js, MVVM dapat diimplementasikan sebagai berikut:

```sh
proyek-anda/
│
├── models/
│   ├── userModel.js
│   └── productModel.js
│
├── views/
│   ├── userView.js
│   └── productView.js
│
├── viewmodels/
│   ├── userViewModel.js
│   └── productViewModel.js
│
├── app.js
└── package.json
```
