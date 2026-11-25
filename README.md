# Rumah di Jalan Misteri: Escape Room Playfair

Pemain memecahkan enam pesan untuk membuka seluruh ruangan. Setelah itu Pak Misteri menitipkan pesan **AKU AMAN** untuk keluarganya. Pemain membuat grid dengan kata kunci pilihan dan menghitung enkripsi sendiri.

## Halaman

| Halaman | Isi |
|---|---|
| `index.html` | Enam tantangan dekripsi, petunjuk, timer, dan Buku Panduan visual |
| `kirim.html` | Meja Tulis: pilih kata kunci, buat grid, dan hitung ciphertext secara manual |
| `terima.html` | Kotak Pos: memeriksa ciphertext dan menampilkan surat balasan berhasil/gagal |

## Cara bermain

1. Mulai di Ruang Rahasia. Kunci enam pesan pertama adalah **MISTERI**.
2. Dekripsikan setiap pesan untuk membuka gembok ruangan.
3. Setelah keenam ruangan selesai, Meja Tulis terbuka. Pak Misteri memberikan pesan **AKU AMAN**.
4. Pilih kata kunci, susun grid, lalu hitung ciphertext pasangan demi pasangan. Masukkan hasilnya di Meja Tulis.
5. Bawa ciphertext ke Kotak Pos. Jika tepat, keluarga Pak Misteri membalas bahwa pesan berhasil dibaca. Jika salah, suratnya meminta kamu memeriksa hitungan dan mencoba lagi.

Kotak Pos adalah checker di dalam permainan. Balasan penerima merupakan bagian dari cerita; halaman ini tidak mengirim pesan kepada pemain lain.

## Aturan Playfair

- Susun grid 5×5 dari kunci tanpa huruf berulang, lalu isi sisa alfabet. I dan J berbagi satu kotak.
- Ubah teks jadi kapital, buang spasi/tanda baca, ubah J ke I, lalu pecah menjadi pasangan.
- Jika dua huruf dalam pasangan sama, sisipkan X di antaranya (Q jika hurufnya X). Jika ada satu huruf tersisa, tambahkan X (Q jika huruf terakhir X).
- **Enkripsi:** satu baris geser kanan, satu kolom geser bawah, persegi tukar kolom.
- **Dekripsi:** satu baris geser kiri, satu kolom geser atas, persegi tetap tukar kolom.
- Pergeseran yang melewati tepi kembali dari sisi seberang. Contoh baris atas M I S T E: ME → IM untuk enkripsi; IM → ME untuk dekripsi.

Buku Panduan di dalam permainan menampilkan grid interaktif dengan contoh untuk ketiga aturan pada kedua arah.

Playfair adalah sandi klasik yang mudah dipecahkan komputer, jadi hanya untuk belajar dan bukan untuk melindungi data nyata.
