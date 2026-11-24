# Rumah di Jalan Misteri: Escape Room Playfair

Website escape room bersandi **Playfair Cipher**. Pemain memecahkan enam pesan rahasia untuk membuka enam gembok dan mendapat kode keluar. Setelah keluar, pemain bisa mengirim pesan rahasianya sendiri.

## Halaman
| Halaman | Isi |
|---|---|
| `index.html` | Escape room: 6 ruangan, petunjuk, timer, status benar/salah, kode keluar |
| `kirim.html` | Meja sandi: enkripsi pesan, buat link pengiriman, penjelasan langkah Playfair |
| `terima.html` | Kotak pos: dekripsi pesan dengan kunci |

File pendukung: `style.css` (tampilan) dan `shared.js` (algoritma Playfair).

## Cara menjalankan
Tanpa instalasi. Buka `index.html` di browser.

## Cara bermain
1. Di `index.html`, klik Mulai. Kunci sandi semua ruangan adalah **MISTERI**.
2. Baca kertas sandi dengan grid 5x5, ketik hasil dekripsi tanpa spasi, tekan Buka gembok.
3. Petunjuk boleh diminta, jumlahnya dicatat.
4. Selesai enam ruangan, kamu mendapat kode keluar dan waktu terbaik (disimpan di perangkat itu).
5. Untuk game kelas: tiap kelompok membuat pesan sendiri di `kirim.html`, memberi link ke kelompok lain, dan kuncinya lewat jalur terpisah. Penerima membukanya di `terima.html`.

## Cara kerja Playfair
1. **Grid 5x5:** tulis kunci tanpa huruf ganda, lanjutkan dengan sisa alfabet. I dan J memakai satu sel.
2. **Siapkan teks:** buang non-huruf, ubah J jadi I, pecah jadi pasangan. Huruf kembar dalam satu pasangan disisipi X (disisipi Q kalau hurufnya X). Jumlah ganjil ditambah X di akhir (Q kalau huruf terakhir X).
3. **Enkripsi tiap pasangan:** baris sama ambil huruf di kanan, kolom sama ambil huruf di bawah, selain itu tukar kolom (bentuk persegi).
4. **Dekripsi:** baris ke kiri, kolom ke atas, persegi sama seperti enkripsi.

Contoh dengan kunci MISTERI: `LAMPU` menjadi `LA MP UX` lalu `GDSNPZ`.

## Catatan
- Huruf beraksen diubah ke huruf biasa. J diganti I, jadi J tidak bisa dipulihkan saat dekripsi.
- Hasil dekripsi "tebakan bersih" membuang X sisipan dan bisa keliru.
- Jawaban escape room disimpan sebagai hash, tapi kunci dan ciphertext ada di kode. Karena berjalan di browser, tidak ada cara membuatnya benar-benar rahasia. Playfair adalah sandi klasik (1854) yang mudah dipecahkan komputer, jadi hanya untuk belajar.
