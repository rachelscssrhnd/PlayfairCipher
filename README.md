# Rumah di Jalan Misteri: Escape Room Playfair

Website permainan **Playfair Cipher**. Pemain memecahkan enam pesan untuk membuka seluruh ruangan. Setelah semua gembok terbuka, Pak Misteri menitipkan pesan **AKU AMAN** untuk keluarganya. Pemain memilih kata kunci, membuat grid, mengenkripsi pesan itu dengan tangan, lalu memakai checker sebelum mengirimkannya.

## Halaman
| Halaman | Isi |
|---|---|
| `index.html` | Escape room: 6 tantangan dekripsi, petunjuk langkah, timer, dan kode keluar |
| `kirim.html` | Meja Sandi: terbuka setelah escape room selesai; pilih kata kunci/grid, enkripsikan pesan Pak Misteri, lalu periksa ciphertext |
| `terima.html` | Kotak Pos: membuat link hanya untuk ciphertext yang lolos checker Meja Sandi |
| `buka.html` | Buka Surat: penerima membuka link, memasukkan kunci yang dibagikan terpisah, lalu mendekripsikan pesan |

File pendukung: `style.css` (tampilan) dan `shared.js` (algoritma Playfair).

## Cara menjalankan
Tanpa instalasi. Buka `index.html` di browser.

## Cara bermain
1. Di `index.html`, klik Mulai dan baca Buku Panduan. Kunci enam pesan pertama adalah **MISTERI**.
2. Dekripsikan pesan di tiap ruangan memakai grid 5x5. Petunjuk memberikan langkah sandi untuk ciphertext di ruangan itu.
3. Setelah semua gembok terbuka, Pak Misteri meminta bantuan mengirim pesan **AKU AMAN** kepada keluarganya. Meja Sandi baru terbuka setelah langkah ini. Pilih kata kunci dan hitung ciphertext sendiri dari pasangan yang ditampilkan.
4. Masukkan ciphertext ke checker. Checker memberi tahu berapa pasangan yang cocok; ciphertext lengkap baru muncul setelah seluruh jawaban benar.
5. Tekan **Masukkan surat ke Kotak Pos** untuk membuat link dari ciphertext yang sudah benar. Bagikan link ke pemain lain dan sampaikan kata kunci secara terpisah. Penerima membuka link di halaman **Buka Surat**, lalu mendekripsikan pesan.

## Cara kerja Playfair
1. **Grid 5x5:** tulis kunci tanpa huruf ganda, lanjutkan dengan sisa alfabet. I dan J memakai satu sel.
2. **Siapkan teks:** buang non-huruf, ubah J jadi I, pecah jadi pasangan. Huruf kembar dalam satu pasangan disisipi X (disisipi Q kalau hurufnya X). Jumlah ganjil ditambah X di akhir (Q kalau huruf terakhir X).
3. **Enkripsi tiap pasangan:** baris sama ambil huruf di kanan, kolom sama ambil huruf di bawah, selain itu tukar kolom (bentuk persegi).
4. **Dekripsi:** baris ke kiri, kolom ke atas, persegi sama seperti enkripsi.

Contoh dengan kunci MISTERI: `LAMPU` menjadi `LA MP UX` lalu `GDSNPZ`.

## Catatan
- Huruf beraksen diubah ke huruf biasa. J diganti I, jadi J tidak bisa dipulihkan saat dekripsi.
- Hasil dekripsi "tebakan bersih" mencoba membuang X atau Q sisipan dan bisa keliru, terutama jika huruf itu memang bagian dari pesan.
- Kotak Pos hanya membuat link untuk hasil enkripsi yang sudah diverifikasi. Link membawa ciphertext saja; bagikan kata kunci secara terpisah. Penerima memakai halaman Buka Surat.
- Jawaban escape room disimpan sebagai hash, tapi kunci dan ciphertext ada di kode. Karena berjalan di browser, tidak ada cara membuatnya benar-benar rahasia. Playfair adalah sandi klasik (1854) yang mudah dipecahkan komputer, jadi hanya untuk belajar.
