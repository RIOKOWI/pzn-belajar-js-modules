# JavaScript Modules

# SLIDE
- `https://docs.google.com/presentation/d/1lGKcmU0mFNOnnviKluBEzAdOja3NBDNav_3zsL8gTGE/`

# Pengenalan JavaScript  Modules
## Latar Belakang
- Dahulu kode program JavaScript biasanya dimulai dari kode yang kecil dan sedikit disetiap halaman, jadi jarang sekali kita akan menggunakan kode JavaScript dengan ukuran besar dalam satu halaman web
- Namun saat ini, kebutuhan web sudah berbeda, semenjak makin populernya framework-framework JavaScript untuk membuat FrontEnd, kebutuhkan pembuatan kode JavaScript semakin kompleks dan besar
- Oleh karena itu, sudah seharusnya saat ini, saat membuat kode JavaScript, kita perlu melakukan mekanisme memotong-motong kode JavaScript, sehingga tidak terlalu kompleks dan banyak dalam satu file JavaScript

## JavaScript Modules
- JavaScript Modules merupakan fitur dimana kita bisa membuat module (kode JavaScript yang bisa digunakan ulang) untuk kode JavaScript lain
- JavaScript Modules diawali pada teknologi bernama NodeJS, selanjutnya banyak library yang mengadopsi penggunaan JavaScript Modules di NodeJS agar bisa berjalan di Web Browser, seperti library CommonJS, AMD, RequireJS, dan lain-lain
- Namun untungnya, saat ini Browser modern sudah banyak mendukung JavaScript Modules, kecuali jika masih menggunakan Internet Explorer

## Import dan Export
- Secara garis besar, ada dua kata kunci yang digunakan dalam JavaScript Modules, yaitu import dan export
- import merupakan kata kunci yang digunakan untuk mengambil sesuatu dari module lain
- Sedangkan export merupakan kata kunci yang digunakan untuk memberitahu module lain, bagian mana yang ingin kita ekspose keluar, sehingga bisa di-import oleh module lain

# Live Server
## Live Server
- Saat kita menggunakan fitur JavaScript Module, sangat disarankan untuk menjalankan kode JavaScript kita dalam Web Server
- Hal ini karena spesifikasi dari JavaScript module meminta secara default kode JavaScript perlu di satu domain server yang sama, jika kita membuat file html menggunakan URL file://, maka dikhawatirkan akan terjadi error CORS (Cross Origin Resource Sharing)

## Visual Studio Code
- Jika menggunakan Visual Studio Code, disarankan untuk menginstall plugin Live Server : `https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer`
- Plugin Live Server ini bisa digunakan untuk menjalankan local web server, sehingga kita bisa mengakses kode web JavaScript kita menggunakan domain localhost

## JetBrains IDE
- Jika menggunakan JetBrains IDE, sudah terdapat fitur untuk membuka halaman web dalam local web server
- Tidak perlu menginstall plugin tambahan

- contoh di file :
`index.html`

# Tanpa Module
## Tanpa Module
- Sebelum kita membahas JavaScript Module, sekarang kita akan coba dulu tanpa menggunakan module
- Saat kita membuat file JavaScript, lalu kita load file JavaScript tersebut di web, secara default semua kode JavaScript di file tersebut bisa diakses, baik itu variable, function atau class

## Dengan Module
- Namun jika kita menggunakan module, kita bisa secara selektif memilih bagian kode mana yang ingin kita ekspos keluar
- Secara default kode yang kita buat menggunakan JavaScript Module tidak bisa digunakan dari luar file, kecuali kita memintanya untuk mengekspos keluar



