# Rumah di Jalan Misteri: Escape Room Playfair

Website permainan **Playfair Cipher**. Pemain memecahkan enam pesan untuk menelusuri rahasia penghuni rumah. Tantangan terakhir meminta pemain memilih kata kunci dan pesan sendiri, menghitung ciphertext dengan tangan, lalu memakai checker sebelum mengirimkannya.

## Halaman
| Halaman | Isi |
|---|---|
| `index.html` | Escape room: 6 tantangan dekripsi, petunjuk langkah, timer, dan kode keluar |
| `kirim.html` | Meja Sandi: pilih kata kunci/grid, tulis pesan, hitung ciphertext sendiri, lalu periksa jawaban |
| `terima.html` | Kotak Pos: buat link untuk ciphertext terverifikasi atau buka pesan yang diterima |

File pendukung: `style.css` (tampilan) dan `shared.js` (algoritma Playfair).

## Cara menjalankan
Tanpa instalasi. Buka `index.html` di browser.

## Cara bermain
1. Di `index.html`, klik Mulai dan baca Buku Panduan. Kunci enam pesan pertama adalah **MISTERI**.
2. Dekripsikan pesan di tiap ruangan memakai grid 5x5. Petunjuk memberikan langkah sandi untuk ciphertext di ruangan itu.
3. Setelah enam pesan terpecahkan, Meja Sandi terbuka sebagai tantangan lanjutan. Pilih kata kunci untuk membuat grid, tulis pesan, pecah pesan menjadi pasangan, lalu hitung ciphertext sendiri.
4. Masukkan ciphertext ke checker. Checker memberi tahu berapa pasangan yang cocok; ciphertext lengkap baru muncul setelah seluruh jawaban benar.
5. Tekan **Masukkan surat ke Kotak Pos** untuk membuat link. Bagikan link ke pemain lain dan sampaikan kata kunci secara terpisah. Penerima membuka link, memasukkan kata kunci, lalu mendekripsi surat.

## Cara kerja Playfair
1. **Grid 5x5:** tulis kunci tanpa huruf ganda, lanjutkan dengan sisa alfabet. I dan J memakai satu sel.
2. **Siapkan teks:** buang non-huruf, ubah J jadi I, pecah jadi pasangan. Huruf kembar dalam satu pasangan disisipi X (disisipi Q kalau hurufnya X). Jumlah ganjil ditambah X di akhir (Q kalau huruf terakhir X).
3. **Enkripsi tiap pasangan:** baris sama ambil huruf di kanan, kolom sama ambil huruf di bawah, selain itu tukar kolom (bentuk persegi).
4. **Dekripsi:** baris ke kiri, kolom ke atas, persegi sama seperti enkripsi.

Contoh dengan kunci MISTERI: `LAMPU` menjadi `LA MP UX` lalu `GDSNPZ`.

## Catatan
- Huruf beraksen diubah ke huruf biasa. J diganti I, jadi J tidak bisa dipulihkan saat dekripsi.
- Hasil dekripsi "tebakan bersih" mencoba membuang X atau Q sisipan dan bisa keliru, terutama jika huruf itu memang bagian dari pesan.
- Link Kotak Pos membawa ciphertext saja; link harus dibuka dari alamat web publik yang sama agar pemain lain dapat mengaksesnya. Aplikasi tidak mengirim link otomatis.
- Jawaban escape room disimpan sebagai hash, tapi kunci dan ciphertext ada di kode. Karena berjalan di browser, tidak ada cara membuatnya benar-benar rahasia. Playfair adalah sandi klasik (1854) yang mudah dipecahkan komputer, jadi hanya untuk belajar.
