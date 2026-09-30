import { createSeo, type QuiltLocaleCopy } from '../create-content';
import { makeUi } from '../locale-ui';

export const id: QuiltLocaleCopy = {
  slug: 'kalkulator-kebutuhan-kain-quilt-blok-belakang',
  title: 'Kalkulator kain quilt untuk blok dan bagian belakang',
  description: 'Perkirakan kain untuk blok persegi dan panel belakang dengan kampuh, sisa potong, serta satuan metrik atau imperial.',
  ui: makeUi([
    'Sistem ukuran', 'Metrik cm', 'Imperial in', 'Peta potong', 'Rencanakan quilt', 'Ukuran umum', 'Kustom', 'Bayi', 'Selimut sofa',
    'Satu orang', 'Queen', 'King', 'Lebar jadi', 'Panjang jadi', 'Blok persegi jadi', 'Lebar kain yang dapat dipakai', 'Kampuh jahitan',
    'Tambahan belakang per sisi', 'Cadangan potong bagian atas', 'dari tepi jadi ke tepi jadi', 'dari tepi jadi ke tepi jadi',
    'ukuran blok yang terlihat', 'setelah tepi kain dibuang', 'pada setiap tepi blok', 'tambahan di keempat sisi', '5 persen',
    '10 persen', '15 persen', 'Rencana pembelian kain', 'Masukkan ukuran positif untuk menggambar peta potong.', 'Blok yang dipotong',
    'Kisi blok', 'Persegi potong', 'Persegi sepanjang lebar kain', 'Kain untuk bagian atas', 'Kain untuk bagian belakang',
    'Panel belakang', 'Arah bagian belakang', 'Panel memanjang', 'Panel melintang', 'Total atas dan belakang', 'Rencana potong siap',
    'Periksa rencana', 'Ukuran jadi bukan kelipatan utuh ukuran blok. Baris atau kolom luar memerlukan blok yang dipangkas atau rancangan bingkai.',
    'Hanya satu persegi muat pada lebar kain. Kain lebih lebar atau blok lebih kecil dapat mengurangi kebutuhan.',
    'Gunakan ukuran positif dan kain yang cukup lebar untuk satu persegi potong.', 'Atur ulang contoh', 'Salin rencana pembelian',
    'Rencana pembelian disalin', 'Buka catatan perhitungan', 'Kolom dan baris dibulatkan ke atas dari ukuran quilt jadi dibagi ukuran blok. Persegi potong menambah dua kampuh. Bagian belakang membandingkan dua arah setelah kehilangan pada sambungan.',
    'Batas perencanaan.', 'Model ini menganggap blok persegi sama dari satu kain bagian atas. Sashing, bingkai, beberapa warna, motif searah, batting, dan binding tidak dihitung.',
    'Kisi patchwork berada di samping susunan panel belakang yang paling hemat.',
  ]),
  faq: [
    { question: 'Kain apa yang dihitung oleh kalkulator quilt ini?', answer: 'Kalkulator menghitung satu kain untuk semua blok persegi bagian atas dan kain terpisah untuk bagian belakang. Batting dan binding tidak termasuk.' },
    { question: 'Mengapa persegi potong lebih besar daripada blok jadi?', answer: 'Blok jadi adalah bagian yang terlihat setelah dijahit. Ukuran potong menambah kampuh pada kedua sisi setiap dimensi.' },
    { question: 'Bagaimana panel belakang dihitung?', answer: 'Perhitungan menambah lebihan di sekeliling quilt, mengurangi kain pada jahitan, lalu membandingkan susunan memanjang dan melintang.' },
    { question: 'Bisakah saya menghitung beberapa kain dalam satu patchwork?', answer: 'Hitung setiap kelompok warna secara terpisah dengan ukuran potong yang sama dan jumlah blok yang memakai kain tersebut.' },
    { question: 'Haruskah saya membeli tepat sebanyak hasilnya?', answer: 'Bulatkan ke satuan penjualan toko. Motif searah, pengulangan besar, susut, dan kesalahan potong dapat memerlukan lebih banyak kain.' },
  ],
  howTo: [
    { name: 'Tentukan ukuran jadi', text: 'Pilih ukuran umum atau masukkan lebar dan panjang jadi.' },
    { name: 'Jelaskan blok dan kain', text: 'Masukkan ukuran blok jadi, lebar kain tanpa tepi, dan kampuh.' },
    { name: 'Atur cadangan', text: 'Masukkan tambahan belakang dan pilih sisa lima, sepuluh, atau lima belas persen.' },
    { name: 'Baca dua kebutuhan', text: 'Gunakan jumlah atas dan belakang secara terpisah lalu bulatkan sesuai satuan toko.' },
  ],
  seo: createSeo({
    overviewTitle: 'Rencanakan kain sebelum membeli', overview: 'Bagian atas dan belakang memakai rencana potong yang berbeda. Bagian atas membutuhkan baris persegi yang cukup untuk semua blok, sedangkan belakang dapat membutuhkan beberapa panel panjang yang disambung. Kalkulator memisahkan kedua pembelian dan menampilkan totalnya.',
    methodTitle: 'Cara menghitung kain untuk blok persegi', method: 'Ukuran blok jadi berbeda dari ukuran potong. Kampuh ditambahkan pada dua sisi, lalu dihitung berapa persegi yang muat pada lebar kain. Jumlah blok dibagi kapasitas itu dan dibulatkan menjadi lintasan potong utuh sebelum cadangan ditambahkan.',
    tableHeaders: ['Masukan', 'Pengaruh', 'Cara mengukur'], tableRows: [['Ukuran quilt', 'Baris dan kolom', 'Ukuran setelah dijahit'], ['Blok jadi', 'Jumlah dan ukuran potong', 'Tanpa kampuh'], ['Lebar kain', 'Persegi per lintasan', 'Buang tepi kain'], ['Tambahan belakang', 'Ruang kerja', 'Pada setiap sisi']],
    backingTitle: 'Mengapa susunan belakang dapat diputar', backing: 'Jika belakang lebih lebar daripada kain, beberapa panel harus disambung. Kalkulator menguji panel searah panjang quilt dan panel yang diputar, mengurangi kehilangan pada jahitan, lalu memilih susunan yang memakai panjang kain paling sedikit.',
    advice: ['Ukur lebar kain setelah tepi dibuang.', 'Bulatkan pembelian ke satuan toko.', 'Tambah cadangan untuk motif searah dan susut.', 'Selesaikan blok parsial sebelum memotong.'],
    patternTitle: 'Cocokkan perkiraan dengan pola', pattern: 'Perkiraan paling sesuai untuk kisi sederhana dari blok persegi sama dan satu kain. Pola nyata dapat membagi beberapa warna, menambah sashing atau bingkai, dan menentukan posisi jahitan belakang. Bandingkan hasil dengan daftar potong pola.',
    limitTitle: 'Hal yang tidak dapat dijamin', limit: 'Kain menyusut berbeda, toko menjual dalam satuan berbeda, dan motif dapat memaksa potongan yang kurang efisien. Hasil ini adalah dasar yang transparan, bukan pengganti diagram potong pola tertentu.',
  }),
};
