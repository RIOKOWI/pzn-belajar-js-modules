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

- contoh di file :
`scripts/library.js`
`wo-modules.html`

# Membuat Module
## Membuat Module
- Membuat module sangat sederhana, kita cukup membuat file JavaScript saja
- Yang membedakan adalah, saat kita akan meload file JavaScript dari HTML, kita tidak menggunakan type javascript lagi, melainkan menggunakan type module

## File .js dan .mjs
- Karena File JavaScript Module sebenarnya sama dengan JavaScript, kadang developer membedakan nama file untuk JavaScript Module menggunakan .mjs
- Hal ini sebenarnya tidak ada kewajiban, hanya saja agar mempermudah ketika tahapan development, kita bisa dengan mudah membedakan mana file JavaScript biasa, mana file JavaScript module hanya dengan extension file nya saja
- Pada kelas ini, kita akan tetap menggunakan file .js ketika membuat module, agar tidak membingungkan untuk pemula

```bash
modules.html:52 Uncaught ReferenceError: sayHello is not defined
    at modules.html:52:5
```

## Kenapa Error?
- Secara default, saat kita menggunakan fitur JavaScript Module, semua kode (function, variable, class dan lain-lain) tidak akan di ekspos keluar module tersebut
- Jika kita ingin mengekspos kode tersebut, kita harus memberitahunya secara eksplisit

- contoh di file :
`scripts/say.js`
`modules.html`

# Export
## Export
- export merupakan kata kunci yang digunakan untuk mengekspos kode dari sebuah module
- export bisa ditambahkan diawal sebuah variable, function atau class


- contoh di file :
`scripts/say.js`

# Import
## Import
- Export digunakan untuk mengekspos kode di module, jika kita ingin menggunakan kode yang sudah di ekspos di module, kita bisa menggunakan kata kunci import
- Cara menggunakan kata kunci import adalah sebagai berikut :
import {namaFunction, namaVariable, NamaClass} from “lokasi-module.js”
- Module hanya bisa digunakan di module lain, jadi pastikan ketika  membuat script, kita harus menggunakan type module
- Saat menggunakan import, kita tidak perlu lagi menambahkan script module src satu per satu, karena sudah di handle oleh Browser secara otomatis ketika menggunakan module

- contoh di file :
`modules.html`

# Variable di Module
## Variable di Module
- Salah satu hal yang membingungkan pada variable di JavaScript adalah ketika kita membuat variable di global scope, maka variable tersebut bisa diubah nilainya oleh file JavaScript lain
- Saat kita menggunakan module, ketika kita buat variable, maka variable tersebut hanya berada pada module tersebut, tidak bisa digunakan di module lain


- contoh di file :
`scripts/variable.js`
`scripts/variable2.js`
`variable.html`


# Class di Module
## Class di Module
- Selain function dan juga variable, di module juga kita bisa menambahkan class
- Secara default, class tersebut hanya bisa diakses dari dalam module nya saja, tidak bisa diluar module
- Jika kita ingin mengekspos class yang kita buat, kita juga bisa menggunakan kata kunci export di awal deklarasi class nya

- contoh di file :
`scripts/class.js`
`class.html`


# Export Multiple
## Export Multiple
- Sebelumnya kita selalu menggunakan kata kunci export diawal variable, function atau class
- Sebenarnya kita bisa menggunakan export sekaligus beberapa data sekaligus, caranya cukup gunakan perintah :
```js
export { variable, function, class, danLainLain }
```

- contoh di file :
`scripts/export-multiple.js`
`export-multiple.html`

# Alias
## Alias
- Saat kita membuat aplikasi JavaScript, semakin lama kemungkinan module akan semakin banyak
- Dan bisa saja akan ada nama variable atau nama function atau nama class yang sama antar module
- Hal ini akan menyulitkan ketika ada module yang menggunakan beberapa module, namun ternyata variable, function atau class nya memiliki nama yang sama
- Untungnya, module memiliki fitur alias, dimana kita bisa mengubah nama variable, function atau class nya

## Alias di Export
- Kita dapat menggunakan alias ketika melakukan export di module
- Caranya menggunakan kata kunci as, lalu diikuti dengan nama alias :
export { variable as variableLain, function as functionLain, Class as ClassLain }


- contoh di file :
`scripts/export-multiple.js`
