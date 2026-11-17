import { Question } from '../types';

/**
 * Bank Soal Standar Asesmen Sumatif Mata Pelajaran KODING
 * SD Negeri 3 Loloan Timur - Kelas 5 - Kurikulum Merdeka
 *
 * Lingkup Materi:
 * - B. Sistem Komputer Tingkat Pradasar (Apa itu sistem komputer, Cara kerja sistem komputer,
 *      Komponen sistem komputer, Jenis-jenis sistem komputer)
 * - C. Keamanan Informasi Pribadi (Apa itu keamanan informasi pribadi, Bahaya terhadap
 *      keamanan informasi pribadi, Cara melindungi informasi pribadi)
 *
 * Komposisi Soal:
 * - 40 Butir Pilihan Ganda (PG) [Nomor 1 - 40] (Bobot: 2 poin/butir = 80 poin)
 * - 5 Butir Pilihan Ganda Kompleks Kategori (3 Pernyataan Benar/Salah) [Nomor 41 - 45] (Bobot: 3 poin/butir = 15 poin)
 * Total: 45 Butir Soal (Skor Maksimal: 95, dikonversi ke Skala Nilai Akhir 0 - 100)
 *
 * Tujuan Pembelajaran (Elemen):
 * 1. Mengidentifikasi sistem komputer tingkat pradasar dengan tepat
 * 2. Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat
 */

export const INITIAL_QUESTIONS: Question[] = [
  // =========================================================================
  // BAGIAN I: 40 SOAL PILIHAN GANDA (PG)
  // =========================================================================

  // --- LINGKUP MATERI B: SISTEM KOMPUTER TINGKAT PRADASAR (NO. 1 - 20) ---

  // 1. Apa itu Sistem Komputer (No. 1 - 5)
  {
    id: 1,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B1. Pengertian Sistem Komputer',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan pengertian sistem komputer sebagai kesatuan komponen yang saling bekerja sama.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#eff6ff" stroke="#bfdbfe" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1e3a8a" text-anchor="middle">KETERPADUAN SISTEM KOMPUTER</text>
      <g transform="translate(22, 38)">
        <rect width="108" height="72" rx="10" fill="#ffffff" stroke="#3b82f6" stroke-width="2"/>
        <text x="54" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1d4ed8" text-anchor="middle">HARDWARE</text>
        <text x="54" y="48" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Perangkat Keras</text>
        <text x="54" y="61" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">(Fisik Terlihat)</text>
      </g>
      <text x="142" y="79" font-family="sans-serif" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">+</text>
      <g transform="translate(156, 38)">
        <rect width="108" height="72" rx="10" fill="#ffffff" stroke="#10b981" stroke-width="2"/>
        <text x="54" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#047857" text-anchor="middle">SOFTWARE</text>
        <text x="54" y="48" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Perangkat Lunak</text>
        <text x="54" y="61" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">(Program/Aplikasi)</text>
      </g>
      <text x="276" y="79" font-family="sans-serif" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">+</text>
      <g transform="translate(290, 38)">
        <rect width="108" height="72" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
        <text x="54" y="30" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b45309" text-anchor="middle">BRAINWARE</text>
        <text x="54" y="48" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Pengguna</text>
        <text x="54" y="61" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">(Manusia/Operator)</text>
      </g>
    </svg>`,
    text: 'Perhatikan bagan di atas! Sebuah komputer tidak dapat berjalan sendiri hanya dari satu bagian saja. Pengertian "Sistem Komputer" yang paling tepat adalah ...',
    options: [
      { id: 'A', text: 'Kumpulan perangkat elektronik yang saling terhubung bersama program dan pengguna untuk mengolah data menjadi informasi' },
      { id: 'B', text: 'Sebuah layar kaca yang hanya digunakan untuk menonton film tanpa listrik' },
      { id: 'C', text: 'Papan ketik dan kabel listrik yang disimpan di dalam lemari sekolah' },
      { id: 'D', text: 'Sekumpulan buku catatan yang berisi angka-angka hitungan manual' },
    ],
    correctAnswer: 'A',
    explanation: 'Sistem komputer adalah kesatuan komponen yang terdiri dari perangkat keras (hardware), perangkat lunak (software), dan pengguna (brainware) yang saling bekerja sama mengolah data menjadi informasi.'
  },
  {
    id: 2,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B1. Tujuan Utama Sistem Komputer',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan fungsi dan tujuan utama diciptakannya sistem komputer.',
    text: 'Tujuan utama manusia menciptakan dan menggunakan sistem komputer dalam berbagai kegiatan adalah untuk ...',
    options: [
      { id: 'A', text: 'Menggantikan seluruh kebutuhan makanan dan minuman manusia' },
      { id: 'B', text: 'Mengolah data mentah secara cepat, tepat, dan efisien menjadi informasi yang bermanfaat' },
      { id: 'C', text: 'Membuat pekerjaan menulis di kertas menjadi jauh lebih lambat' },
      { id: 'D', text: 'Menghabiskan energi listrik di rumah dan sekolah' },
    ],
    correctAnswer: 'B',
    explanation: 'Sistem komputer dirancang untuk memproses data mentah (angka, teks, gambar, suara) secara cepat dan akurat menjadi informasi yang berguna bagi manusia.'
  },
  {
    id: 3,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B1. Perbedaan Data dan Informasi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan antara data mentah dengan informasi hasil olahan komputer.',
    text: 'Ibu Komang Ayu memasukkan deretan angka nilai ulangan siswa kelas 5 ke komputer, lalu komputer menghitung rata-ratanya dan menampilkan grafik kelulusan. Deretan angka mentah yang baru dimasukkan disebut ..., sedangkan grafik rata-rata hasilnya disebut ...',
    options: [
      { id: 'A', text: 'Output ; Input' },
      { id: 'B', text: 'Informasi ; Data' },
      { id: 'C', text: 'Data ; Informasi' },
      { id: 'D', text: 'Hardware ; Brainware' },
    ],
    correctAnswer: 'C',
    explanation: 'Data adalah fakta atau angka mentah yang belum diolah, sedangkan informasi adalah hasil pengolahan data yang sudah memiliki makna dan siap dibaca pengguna.'
  },
  {
    id: 4,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B1. Ketergantungan Antarkomponen Sistem',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis dampak apabila salah satu komponen sistem komputer tidak ada.',
    text: 'Sebuah komputer di laboratorium sekolah memiliki monitor, CPU, keyboard, dan mouse yang masih baru, tetapi belum dipasang sistem operasi dan aplikasi apa pun. Apa yang akan terjadi saat tombol daya dinyalakan?',
    options: [
      { id: 'A', text: 'Komputer langsung bisa dipakai mengetik dan menggambar otomatis' },
      { id: 'B', text: 'Komputer tidak dapat digunakan bekerja karena perangkat keras membutuhkan perangkat lunak untuk menjalankan perintah' },
      { id: 'C', text: 'Komputer dapat mengunduh program sendiri tanpa ada perintah pengguna' },
      { id: 'D', text: 'Layar monitor langsung mencetak kertas jawaban ujian' },
    ],
    correctAnswer: 'B',
    explanation: 'Hardware dan software saling bergantung. Tanpa software (terutama sistem operasi), perangkat keras hanyalah benda mati yang tidak mengerti instruksi pengguna.'
  },
  {
    id: 5,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B1. Makna Kata "Sistem" pada Komputer',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menyimpulkan alasan komputer disebut sebagai suatu sistem.',
    text: 'Mengapa seperangkat komputer disebut sebagai suatu "sistem", bukan sekadar satu benda tunggal?',
    options: [
      { id: 'A', text: 'Karena harganya selalu mahal dan berwarna hitam' },
      { id: 'B', text: 'Karena hanya bisa dipakai oleh satu orang saja' },
      { id: 'C', text: 'Karena selalu berbentuk kotak persegi di atas meja' },
      { id: 'D', text: 'Karena terdiri atas banyak bagian yang saling terhubung dan bekerja sama mencapai satu tujuan' },
    ],
    correctAnswer: 'D',
    explanation: 'Kata "sistem" berarti sekumpulan elemen yang saling berinteraksi dan bekerja teratur bersama-sama. Jika satu bagian terganggu, kinerja keseluruhan sistem komputer ikut terpengaruh.'
  },

  // 2. Cara Kerja Sistem Komputer (No. 6 - 10)
  {
    id: 6,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B2. Siklus Kerja Komputer (IPOS)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengurutkan tahapan cara kerja sistem komputer (Input - Proses - Output - Storage).',
    image: `<svg viewBox="0 0 440 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="440" height="130" rx="12" fill="#f8fafc" stroke="#cbd5e1" stroke-width="1.5"/>
      <g transform="translate(15, 22)">
        <rect width="84" height="62" rx="8" fill="#dbeafe" stroke="#2563eb" stroke-width="2"/>
        <text x="42" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">1. INPUT</text>
        <text x="42" y="46" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Masukan Data</text>
      </g>
      <polygon points="116,53 105,47 105,59" fill="#2563eb"/>
      <g transform="translate(122, 22)">
        <rect width="88" height="62" rx="8" fill="#1e40af"/>
        <text x="44" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">2. PROSES</text>
        <text x="44" y="46" font-family="sans-serif" font-size="9" fill="#bfdbfe" text-anchor="middle">Olah di CPU</text>
      </g>
      <polygon points="227,53 216,47 216,59" fill="#2563eb"/>
      <g transform="translate(233, 22)">
        <rect width="88" height="62" rx="8" fill="#d1fae5" stroke="#059669" stroke-width="2"/>
        <text x="44" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">3. OUTPUT</text>
        <text x="44" y="46" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Hasil Keluaran</text>
      </g>
      <polygon points="338,53 327,47 327,59" fill="#2563eb"/>
      <g transform="translate(344, 22)">
        <rect width="82" height="62" rx="8" fill="#fef3c7" stroke="#d97706" stroke-width="2"/>
        <text x="41" y="28" font-family="sans-serif" font-size="10" font-weight="bold" fill="#92400e" text-anchor="middle">4. STORAGE</text>
        <text x="41" y="46" font-family="sans-serif" font-size="9" fill="#475569" text-anchor="middle">Penyimpanan</text>
      </g>
      <text x="220" y="112" font-family="sans-serif" font-size="10" font-weight="bold" fill="#334155" text-anchor="middle">Alur Siklus Pemrosesan Data Komputer</text>
    </svg>`,
    text: 'Perhatikan diagram alur kerja sistem komputer di atas! Urutan langkah kerja komputer saat mengolah data secara berurutan adalah ...',
    options: [
      { id: 'A', text: 'Output → Input → Storage → Proses' },
      { id: 'B', text: 'Input → Proses → Output → Storage' },
      { id: 'C', text: 'Storage → Output → Proses → Input' },
      { id: 'D', text: 'Proses → Output → Input → Storage' },
    ],
    correctAnswer: 'B',
    explanation: 'Komputer bekerja mengikuti siklus IPOS: menerima data masukan (Input), mengolahnya di CPU (Proses), menampilkan hasilnya (Output), dan menyimpannya di memori (Storage).'
  },
  {
    id: 7,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B2. Alur Input hingga Output dalam Kehidupan Nyata',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mencocokkan kegiatan mengetik dan mencetak tugas dengan tahapan kerja komputer.',
    text: 'Putu mengetik puisi menggunakan keyboard, komputer mengolah huruf yang diketik, lalu puisi tersebut muncul di layar monitor dan dicetak dengan printer. Pada cerita tersebut, kegiatan "mengetik di keyboard" termasuk tahap ...',
    options: [
      { id: 'A', text: 'Output (Keluaran)' },
      { id: 'B', text: 'Storage (Penyimpanan)' },
      { id: 'C', text: 'Input (Masukan)' },
      { id: 'D', text: 'Power (Daya Listrik)' },
    ],
    correctAnswer: 'C',
    explanation: 'Mengetik menggunakan keyboard merupakan tindakan memasukkan data huruf ke dalam sistem komputer, sehingga termasuk tahap Input (masukan).'
  },
  {
    id: 8,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B2. Peran CPU dan RAM saat Memproses Data',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan fungsi pemrosesan oleh CPU dan penyimpanan sementara oleh RAM.',
    image: `<svg viewBox="0 0 400 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="130" rx="12" fill="#0f172a"/>
      <g transform="translate(30, 22)">
        <rect width="100" height="80" rx="8" fill="#1e293b" stroke="#38bdf8" stroke-width="2"/>
        <rect x="20" y="18" width="60" height="36" rx="4" fill="#0284c7"/>
        <text x="50" y="40" font-family="sans-serif" font-size="13" font-weight="bold" fill="#ffffff" text-anchor="middle">CPU</text>
        <text x="50" y="70" font-family="sans-serif" font-size="9" fill="#94a3b8" text-anchor="middle">Otak Pemroses</text>
      </g>
      <path d="M 140 62 L 185 62" stroke="#38bdf8" stroke-width="2.5" stroke-dasharray="4,3"/>
      <polygon points="188,62 180,57 180,67" fill="#38bdf8"/>
      <polygon points="137,62 145,57 145,67" fill="#38bdf8"/>
      <g transform="translate(195, 22)">
        <rect width="175" height="80" rx="8" fill="#1e293b" stroke="#10b981" stroke-width="2"/>
        <rect x="18" y="16" width="138" height="22" rx="3" fill="#059669"/>
        <text x="87" y="31" font-family="sans-serif" font-size="11" font-weight="bold" fill="#ffffff" text-anchor="middle">RAM (Memori Kerja)</text>
        <text x="87" y="54" font-family="sans-serif" font-size="9" fill="#cbd5e1" text-anchor="middle">Menampung aplikasi yang sedang aktif</text>
        <text x="87" y="68" font-family="sans-serif" font-size="9" fill="#fca5a5" text-anchor="middle">Isi hilang saat listrik padam</text>
      </g>
    </svg>`,
    text: 'Mengapa saat kita membuka banyak aplikasi sekaligus di komputer lalu listrik tiba-tiba padam (tanpa baterai/UPS), pekerjaan yang belum di-Save di RAM bisa hilang?',
    options: [
      { id: 'A', text: 'Karena RAM hanya menyimpan data secara sementara selama arus listrik mengalir dan aplikasi aktif' },
      { id: 'B', text: 'Karena layar monitor menghapus semua isi harddisk secara otomatis' },
      { id: 'C', text: 'Karena CPU membakar keyboard saat listrik terputus' },
      { id: 'D', text: 'Karena RAM berada di luar casing komputer' },
    ],
    correctAnswer: 'A',
    explanation: 'RAM (Random Access Memory) bersifat volatile (sementara). Data di RAM langsung terhapus bila aliran listrik berhenti, berbeda dengan SSD/Harddisk yang menyimpan data permanen.'
  },
  {
    id: 9,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B2. Bahasa Biner dalam Pemrosesan Komputer',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan bagaimana komputer memahami instruksi manusia melalui kode biner.',
    text: 'Saat kita menekan huruf "A" di keyboard, komputer di dalamnya sebenarnya menerjemahkan huruf tersebut menjadi kode sinyal listrik dua angka agar bisa diproses oleh CPU. Kedua angka yang dipahami komputer tersebut adalah ...',
    options: [
      { id: 'A', text: '1 dan 9' },
      { id: 'B', text: '0 dan 1' },
      { id: 'C', text: '2 dan 4' },
      { id: 'D', text: '5 dan 10' },
    ],
    correctAnswer: 'B',
    explanation: 'Semua instruksi dan data di dalam sistem komputer diterjemahkan menjadi sistem bilangan biner yang hanya terdiri dari angka 0 (OFF) dan 1 (ON).'
  },
  {
    id: 10,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B2. Fungsi Penyimpanan (Storage)',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi tahap penyimpanan permanen dalam cara kerja sistem komputer.',
    text: 'Setelah selesai menggambar poster di aplikasi komputer, Made mengklik menu "Save" agar gambarnya bisa dibuka kembali minggu depan. Proses ini memanfaatkan fungsi ...',
    options: [
      { id: 'A', text: 'Input (Masukan)' },
      { id: 'B', text: 'Display (Tampilan)' },
      { id: 'C', text: 'Cooling (Pendinginan)' },
      { id: 'D', text: 'Storage (Penyimpanan)' },
    ],
    correctAnswer: 'D',
    explanation: 'Menyimpan file agar tetap aman dan dapat dibuka kembali di lain waktu adalah bagian dari tahap Storage (penyimpanan) pada media seperti SSD, Harddisk, atau Flashdisk.'
  },

  // 3. Komponen Sistem Komputer (No. 11 - 15)
  {
    id: 11,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B3. Perangkat Input dan Output (Hardware)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengelompokkan perangkat keras input dan perangkat keras output.',
    image: `<svg viewBox="0 0 420 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(18, 18)">
        <rect width="182" height="90" rx="8" fill="#eff6ff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="91" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">KELOMPOK X</text>
        <text x="91" y="44" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">• Keyboard</text>
        <text x="91" y="60" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">• Mouse &amp; Scanner</text>
        <text x="91" y="76" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">• Mikrofon &amp; Webcam</text>
      </g>
      <g transform="translate(220, 18)">
        <rect width="182" height="90" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="91" y="22" font-family="sans-serif" font-size="11" font-weight="bold" fill="#065f46" text-anchor="middle">KELOMPOK Y</text>
        <text x="91" y="44" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">• Monitor</text>
        <text x="91" y="60" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">• Printer &amp; Proyektor</text>
        <text x="91" y="76" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">• Speaker (Pengeras Suara)</text>
      </g>
    </svg>`,
    text: 'Perhatikan tabel pengelompokan perangkat keras di atas! Berdasarkan fungsinya dalam sistem komputer, Kelompok X dan Kelompok Y berturut-turut adalah perangkat ...',
    options: [
      { id: 'A', text: 'Kelompok X = Perangkat Input ; Kelompok Y = Perangkat Output' },
      { id: 'B', text: 'Kelompok X = Perangkat Output ; Kelompok Y = Perangkat Input' },
      { id: 'C', text: 'Kelompok X = Perangkat Lunak ; Kelompok Y = Brainware' },
      { id: 'D', text: 'Kelompok X = Penyimpanan ; Kelompok Y = Prosesor' },
    ],
    correctAnswer: 'A',
    explanation: 'Keyboard, mouse, scanner, mikrofon, dan webcam memasukkan data ke komputer (Input). Monitor, printer, proyektor, dan speaker menampilkan hasil olahan ke pengguna (Output).'
  },
  {
    id: 12,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B3. Komponen Perangkat Keras (Hardware)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi ciri dan contoh komponen perangkat keras (hardware).',
    text: 'Ciri paling utama dari komponen Hardware (perangkat keras) pada sistem komputer adalah ...',
    options: [
      { id: 'A', text: 'Berupa program aplikasi yang tidak bisa disentuh oleh tangan' },
      { id: 'B', text: 'Memiliki wujud fisik nyata yang dapat dilihat dan disentuh langsung' },
      { id: 'C', text: 'Berupa orang yang mengoperasikan komputer di sekolah' },
      { id: 'D', text: 'Hanya ada di dalam jaringan internet tanpa bentuk benda' },
    ],
    correctAnswer: 'B',
    explanation: 'Hardware atau perangkat keras adalah semua komponen komputer yang berwujud fisik nyata dan dapat disentuh, seperti monitor, keyboard, mouse, CPU, RAM, dan printer.'
  },
  {
    id: 13,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B3. Komponen Perangkat Lunak (Software)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan perangkat lunak sistem operasi dan perangkat lunak aplikasi.',
    image: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="120" rx="12" fill="#f0fdf4" stroke="#bbf7d0"/>
      <g transform="translate(20, 20)">
        <rect width="165" height="80" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="82" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Sistem Operasi (OS)</text>
        <text x="82" y="45" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Windows, macOS, Linux,</text>
        <text x="82" y="60" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Android, iOS</text>
      </g>
      <g transform="translate(215, 20)">
        <rect width="165" height="80" rx="8" fill="#ffffff" stroke="#0284c7" stroke-width="1.5"/>
        <text x="82" y="25" font-family="sans-serif" font-size="11" font-weight="bold" fill="#0369a1" text-anchor="middle">Software Aplikasi</text>
        <text x="82" y="45" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Scratch, Pengolah Kata,</text>
        <text x="82" y="60" font-family="sans-serif" font-size="9.5" fill="#475569" text-anchor="middle">Peramban Web (Browser)</text>
      </g>
    </svg>`,
    text: 'Berdasarkan gambar jenis perangkat lunak (software) di atas, perangkat lunak utama yang bertugas mengatur seluruh perangkat keras agar komputer dapat menyala dan menjalankan aplikasi lain disebut ...',
    options: [
      { id: 'A', text: 'Software Permainan' },
      { id: 'B', text: 'Sistem Operasi (Operating System)' },
      { id: 'C', text: 'Printer Laser' },
      { id: 'D', text: 'Brainware' },
    ],
    correctAnswer: 'B',
    explanation: 'Sistem Operasi (seperti Windows, Linux, Android, macOS) adalah perangkat lunak inti yang mengelola sumber daya hardware dan menjadi tempat berjalannya software aplikasi.'
  },
  {
    id: 14,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B3. Komponen Brainware (Pengguna)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi peran brainware dalam sistem komputer.',
    text: 'Siswa kelas 5 yang sedang membuat animasi di Scratch, guru yang mengetik soal ujian, dan programmer yang menulis kode program semuanya termasuk ke dalam komponen sistem komputer yang disebut ...',
    options: [
      { id: 'A', text: 'Hardware' },
      { id: 'B', text: 'Software' },
      { id: 'C', text: 'Brainware' },
      { id: 'D', text: 'Malware' },
    ],
    correctAnswer: 'C',
    explanation: 'Brainware adalah manusia yang menggunakan, mengendalikan, merancang, atau memelihara sistem komputer (seperti user/pengguna, operator, teknisi, dan programmer).'
  },
  {
    id: 15,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B3. Media Penyimpanan Sekunder (SSD/HDD)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan perangkat penyimpanan permanen yang berkecepatan tinggi pada komputer modern.',
    text: 'Komponen penyimpanan internal pada komputer modern yang jauh lebih cepat, tahan guncangan, dan tidak memakai piringan berputar seperti Harddisk lama adalah ...',
    options: [
      { id: 'A', text: 'SSD (Solid State Drive)' },
      { id: 'B', text: 'Disket (Floppy Disk)' },
      { id: 'C', text: 'Kaset Pita Magnetik' },
      { id: 'D', text: 'Speaker Aktif' },
    ],
    correctAnswer: 'A',
    explanation: 'SSD (Solid State Drive) menggunakan chip memori flash tanpa bagian mekanik yang berputar sehingga jauh lebih cepat dan tahan guncangan dibanding HDD konvensional.'
  },

  // 4. Jenis-Jenis Sistem Komputer (No. 16 - 20)
  {
    id: 16,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B4. Jenis Sistem Komputer Desktop vs Portabel',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan komputer desktop (PC) dengan komputer portabel (laptop/tablet).',
    image: `<svg viewBox="0 0 430 125" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="430" height="125" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(20, 20)">
        <rect x="8" y="4" width="56" height="38" rx="3" fill="#1e293b" stroke="#475569" stroke-width="2"/>
        <rect x="28" y="42" width="16" height="8" fill="#64748b"/>
        <rect x="18" y="50" width="36" height="4" rx="2" fill="#475569"/>
        <rect x="70" y="6" width="22" height="48" rx="3" fill="#334155"/>
        <text x="48" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">1. Desktop PC</text>
      </g>
      <g transform="translate(135, 22)">
        <rect x="10" y="6" width="60" height="38" rx="3" fill="#1e40af"/>
        <polygon points="4,44 76,44 82,54 -2,54" fill="#94a3b8"/>
        <text x="40" y="73" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">2. Laptop</text>
      </g>
      <g transform="translate(245, 20)">
        <rect x="14" y="4" width="52" height="50" rx="6" fill="#0f172a" stroke="#38bdf8" stroke-width="2"/>
        <rect x="20" y="10" width="40" height="36" rx="2" fill="#e0f2fe"/>
        <text x="40" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">3. Tablet</text>
      </g>
      <g transform="translate(345, 20)">
        <rect x="20" y="4" width="30" height="50" rx="5" fill="#0f172a" stroke="#10b981" stroke-width="2"/>
        <rect x="23" y="10" width="24" height="36" rx="2" fill="#d1fae5"/>
        <text x="35" y="75" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a" text-anchor="middle">4. Smartphone</text>
      </g>
    </svg>`,
    text: 'Perhatikan keempat jenis komputer pada gambar di atas! Jenis komputer yang dirancang tetap berada di atas meja kerja dengan unit CPU, monitor, dan keyboard yang terpisah ditunjukkan oleh nomor ...',
    options: [
      { id: 'A', text: '1 (Desktop PC)' },
      { id: 'B', text: '2 (Laptop)' },
      { id: 'C', text: '3 (Tablet)' },
      { id: 'D', text: '4 (Smartphone)' },
    ],
    correctAnswer: 'A',
    explanation: 'Komputer Desktop (Personal Computer) ditempatkan menetap di atas meja dan memiliki komponen terpisah (kotak CPU, monitor, keyboard, dan mouse) yang dihubungkan oleh kabel.'
  },
  {
    id: 17,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B4. Keunggulan Komputer Portabel (Laptop & Tablet)',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih jenis komputer yang paling tepat untuk dibawa berpindah-pindah tempat.',
    text: 'Ibu Guru membutuhkan komputer yang memiliki papan ketik fisik, baterai bawaan, dan mudah dilipat untuk dibawa mengajar dari kelas ke kelas. Jenis sistem komputer yang paling tepat adalah ...',
    options: [
      { id: 'A', text: 'Mainframe Raksasa' },
      { id: 'B', text: 'Laptop (Notebook)' },
      { id: 'C', text: 'Desktop Komputer Meja' },
      { id: 'D', text: 'Komputer Server Gedung' },
    ],
    correctAnswer: 'B',
    explanation: 'Laptop menggabungkan layar, keyboard, touchpad, CPU, dan baterai dalam satu perangkat lipat yang ringkas dan mudah dibawa bepergian.'
  },
  {
    id: 18,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B4. Komputer Genggam (Smartphone & Tablet)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan alasan smartphone dikategorikan sebagai sebuah sistem komputer.',
    text: 'Mengapa ponsel pintar (smartphone) dan komputer tablet disebut juga sebagai salah satu jenis sistem komputer?',
    options: [
      { id: 'A', text: 'Karena harganya sama mahalnya dengan mobil' },
      { id: 'B', text: 'Karena memiliki layar sentuh, prosesor, memori, sistem operasi, serta mampu menerima input, memproses, dan menghasilkan output' },
      { id: 'C', text: 'Karena hanya dapat digunakan untuk menelepon tanpa memasang aplikasi' },
      { id: 'D', text: 'Karena ukurannya lebih besar daripada komputer desktop' },
    ],
    correctAnswer: 'B',
    explanation: 'Smartphone dan tablet memiliki seluruh elemen sistem komputer lengkap (prosesor, memori, sistem operasi Android/iOS, layar sentuh input/output) dalam ukuran genggaman.'
  },
  {
    id: 19,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B4. Komputer Tertanam (Embedded System)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi contoh komputer tertanam (embedded system) pada peralatan sehari-hari.',
    image: `<svg viewBox="0 0 400 115" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="115" rx="12" fill="#fefce8" stroke="#fde047"/>
      <g transform="translate(28, 18)">
        <rect width="98" height="78" rx="8" fill="#ffffff" stroke="#eab308" stroke-width="1.5"/>
        <text x="49" y="30" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Mesin Cuci</text>
        <text x="49" y="48" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Timer &amp; Pengatur</text>
        <text x="49" y="61" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Air Otomatis</text>
      </g>
      <g transform="translate(151, 18)">
        <rect width="98" height="78" rx="8" fill="#ffffff" stroke="#eab308" stroke-width="1.5"/>
        <text x="49" y="30" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#854d0e" text-anchor="middle">Lampu Lalu Lintas</text>
        <text x="49" y="48" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Pengatur Waktu</text>
        <text x="49" y="61" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Merah-Kuning-Hijau</text>
      </g>
      <g transform="translate(274, 18)">
        <rect width="98" height="78" rx="8" fill="#ffffff" stroke="#eab308" stroke-width="1.5"/>
        <text x="49" y="30" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#854d0e" text-anchor="middle">AC Ruangan</text>
        <text x="49" y="48" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Sensor Suhu</text>
        <text x="49" y="61" font-family="sans-serif" font-size="9" fill="#64748b" text-anchor="middle">Otomatis</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar peralatan di atas! Di dalam mesin cuci digital, pengatur lampu lalu lintas, dan AC terdapat chip komputer kecil yang ditanam khusus untuk menjalankan satu tugas tertentu. Jenis sistem komputer ini disebut ...',
    options: [
      { id: 'A', text: 'Komputer Super (Supercomputer)' },
      { id: 'B', text: 'Komputer Tertanam (Embedded System)' },
      { id: 'C', text: 'Komputer Server Pusat' },
      { id: 'D', text: 'Komputer Meja Kerja' },
    ],
    correctAnswer: 'B',
    explanation: 'Embedded system (komputer tertanam) adalah komputer mikro khusus yang ditanam di dalam mesin atau perangkat elektronik untuk mengontrol satu fungsi tertentu secara otomatis.'
  },
  {
    id: 20,
    type: 'pg',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B4. Komputer Server & Superkomputer',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan fungsi komputer pribadi (PC) dengan komputer server penyedia layanan.',
    text: 'Saat puluhan siswa mengakses situs ujian sekolah secara bersamaan, terdapat satu jenis komputer khusus berkapasitas besar yang bertugas melayani, menyimpan, dan mengirimkan data soal ke semua perangkat siswa. Komputer tersebut dinamakan ...',
    options: [
      { id: 'A', text: 'Smartwatch' },
      { id: 'B', text: 'Komputer Server' },
      { id: 'C', text: 'Kalkulator Saku' },
      { id: 'D', text: 'Papan Ketik Nirkabel' },
    ],
    correctAnswer: 'B',
    explanation: 'Komputer Server adalah sistem komputer berkinerja tinggi yang bekerja terus-menerus untuk melayani permintaan data, situs web, dan penyimpanan dari banyak komputer klien dalam jaringan.'
  },

  // --- LINGKUP MATERI C: KEAMANAN INFORMASI PRIBADI (NO. 21 - 40) ---

  // 1. Apa itu Keamanan Informasi Pribadi (No. 21 - 26)
  {
    id: 21,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1. Pengertian Informasi Pribadi',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi pengertian informasi pribadi yang harus dijaga kerahasiaannya.',
    text: 'Apa yang dimaksud dengan "Informasi Pribadi" dalam dunia digital?',
    options: [
      { id: 'A', text: 'Berita cuaca harian yang ditayangkan di televisi nasional' },
      { id: 'B', text: 'Data atau keterangan tentang diri seseorang yang dapat digunakan untuk mengenali identitasnya secara khusus' },
      { id: 'C', text: 'Daftar nama hewan langka yang ada di kebun binatang' },
      { id: 'D', text: 'Jadwal pelajaran umum yang ditempel di papan pengumuman' },
    ],
    correctAnswer: 'B',
    explanation: 'Informasi pribadi adalah setiap data yang berkaitan langsung dengan identitas diri seseorang (seperti nama lengkap, alamat rumah, tanggal lahir, nomor telepon, NIK/NISN, foto pribadi, dan kata sandi).'
  },
  {
    id: 22,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1. Data Pribadi vs Informasi Publik',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilah mana data yang termasuk informasi pribadi rahasia dan mana yang aman dibagikan.',
    image: `<svg viewBox="0 0 420 130" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="130" rx="12" fill="#fff1f2" stroke="#fecdd3" stroke-width="1.5"/>
      <text x="210" y="24" font-family="sans-serif" font-size="12" font-weight="bold" fill="#9f1239" text-anchor="middle">KARTU IDENTIFIKASI DATA</text>
      <g transform="translate(20, 36)">
        <rect width="180" height="76" rx="8" fill="#ffffff" stroke="#e11d48" stroke-width="1.5"/>
        <text x="90" y="20" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#be123c" text-anchor="middle">KOTAK RAHASIA (PRIVAT)</text>
        <text x="90" y="38" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">1. Alamat Rumah Lengkap</text>
        <text x="90" y="53" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">2. Nomor HP &amp; Password</text>
        <text x="90" y="68" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">3. Nomor NIK / Kartu Keluarga</text>
      </g>
      <g transform="translate(220, 36)">
        <rect width="180" height="76" rx="8" fill="#ffffff" stroke="#16a34a" stroke-width="1.5"/>
        <text x="90" y="20" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#15803d" text-anchor="middle">KOTAK UMUM (PUBLIK)</text>
        <text x="90" y="38" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">1. Hobi Membaca Komik</text>
        <text x="90" y="53" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">2. Warna Favorit (Biru)</text>
        <text x="90" y="68" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">3. Karya Gambar Pemandangan</text>
      </g>
    </svg>`,
    text: 'Perhatikan kedua kotak kartu data di atas! Manakah di bawah ini yang termasuk informasi pribadi rahasia yang TIDAK boleh disebarkan ke sembarang orang di internet?',
    options: [
      { id: 'A', text: 'Warna kesukaan dan hobi bermain sepak bola' },
      { id: 'B', text: 'Foto lukisan pemandangan gunung yang dibuat di kelas' },
      { id: 'C', text: 'Alamat rumah lengkap, nomor telepon, dan kata sandi akun' },
      { id: 'D', text: 'Nama tokoh kartun atau pahlawan favorit' },
    ],
    correctAnswer: 'C',
    explanation: 'Alamat rumah, nomor telepon, kata sandi, NIK, dan tanggal lahir lengkap merupakan data pribadi sensitif yang berisiko disalahgunakan jika tersebar ke publik.'
  },
  {
    id: 23,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1. Pentingnya Keamanan Informasi Pribadi',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan alasan pentingnya menjaga kerahasiaan informasi pribadi di dunia maya.',
    text: 'Mengapa menjaga keamanan informasi pribadi di internet sama pentingnya dengan mengunci pintu rumah?',
    options: [
      { id: 'A', text: 'Agar orang asing tidak bisa mencuri identitas, meretas akun, atau membahayakan keselamatan diri dan keluarga kita' },
      { id: 'B', text: 'Agar kecepatan baterai laptop meningkat dua kali lipat' },
      { id: 'C', text: 'Agar kita tidak perlu lagi membersihkan layar monitor' },
      { id: 'D', text: 'Agar teman sebangku tidak mengetahui warna pensil kita' },
    ],
    correctAnswer: 'A',
    explanation: 'Sama seperti mengunci rumah agar barang berharga tidak dicuri, menjaga keamanan informasi pribadi mencegah pelaku kejahatan siber mencuri identitas, membobol akun, atau menipu keluarga.'
  },
  {
    id: 24,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1. Data Pribadi di Media Sosial & Game Online',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan langkah bijak ketika sebuah aplikasi game meminta data pribadi.',
    text: 'Saat mengunduh permainan baru di tablet, muncul kotak pertanyaan yang meminta siswa menuliskan alamat rumah lengkap, nama ibu kandung, dan nomor rekening orang tua. Sikap yang paling tepat adalah ...',
    options: [
      { id: 'A', text: 'Langsung mengisi semuanya dengan jujur agar cepat main' },
      { id: 'B', text: 'Mengarang nomor rekening teman sekelas' },
      { id: 'C', text: 'Menolak mengisi dan segera melapor serta meminta bimbingan orang tua atau guru' },
      { id: 'D', text: 'Mengunggah tangkapan layar formulir tersebut ke grup umum' },
    ],
    correctAnswer: 'C',
    explanation: 'Permainan anak tidak membutuhkan data sensitif seperti alamat rumah lengkap atau nomor rekening. Anak wajib menolak dan meminta izin/bimbingan orang tua sebelum memasukkan data pribadi apa pun.'
  },
  {
    id: 25,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1. Konsep Jejak Digital (Digital Footprint)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis keterkaitan antara jejak digital dan keamanan informasi pribadi.',
    text: 'Setiap foto, komentar, lokasi, atau data diri yang pernah kita unggah ke internet akan tertinggal sebagai "Jejak Digital". Mengapa jejak digital berkaitan erat dengan keamanan informasi pribadi?',
    options: [
      { id: 'A', text: 'Karena jejak digital otomatis terhapus dalam waktu lima menit' },
      { id: 'B', text: 'Karena data yang sudah diunggah sulit dihapus sepenuhnya dan dapat dikumpulkan pihak tak bertanggung jawab' },
      { id: 'C', text: 'Karena jejak digital hanya tersimpan di papan ketik komputer saja' },
      { id: 'D', text: 'Karena jejak digital membuat layar ponsel menjadi gelap' },
    ],
    correctAnswer: 'B',
    explanation: 'Sekali informasi pribadi diunggah ke internet, orang lain bisa menyalin atau menyimpannya. Oleh karena itu, berhati-hatilah sebelum membagikan informasi apa pun secara online.'
  },
  {
    id: 26,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1. Informasi Sensitif pada Kartu Pelajar / Dokumen',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi risiko mengunggah foto dokumen identitas pribadi secara terbuka.',
    text: 'Sinta merasa bangga baru menerima Kartu Pelajar dan Sertifikat Lomba yang tercantum NISN, tanggal lahir, serta alamat lengkapnya. Jika ia ingin memotret dan mengunggahnya ke internet, apa yang seharusnya dilakukan?',
    options: [
      { id: 'A', text: 'Mengunggah foto tersebut dengan jelas tanpa menyembunyikan bagian apa pun' },
      { id: 'B', text: 'Menutupi atau menyamarkan (blur) bagian NISN, tanggal lahir, dan alamat rumah terlebih dahulu' },
      { id: 'C', text: 'Menuliskan kata sandi emailnya di samping foto kartu pelajar' },
      { id: 'D', text: 'Mengirimkan foto tersebut ke orang asing yang baru dikenal di game' },
    ],
    correctAnswer: 'B',
    explanation: 'Data identitas resmi seperti NISN, NIK, tanggal lahir, dan alamat pada kartu atau sertifikat harus disamarkan sebelum dipublikasikan agar tidak disalahgunakan.'
  },

  // 2. Bahaya terhadap Keamanan Informasi Pribadi (No. 27 - 33)
  {
    id: 27,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Bahaya Phishing (Penipuan Tautan Palsu)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengenali ciri-ciri serangan phishing berkedok hadiah atau pesan mendesak.',
    image: `<svg viewBox="0 0 420 135" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="135" rx="12" fill="#fffbeb" stroke="#fcd34d" stroke-width="1.5"/>
      <rect x="24" y="18" width="235" height="98" rx="10" fill="#ffffff" stroke="#f59e0b" stroke-width="2"/>
      <rect x="24" y="18" width="235" height="24" rx="8" fill="#dc2626"/>
      <text x="141" y="34" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#ffffff" text-anchor="middle">PESAN MENCURIGAKAN!</text>
      <text x="36" y="58" font-family="sans-serif" font-size="10" font-weight="bold" fill="#0f172a">"SELAMAT! Kamu menang hadiah 10 Juta!"</text>
      <text x="36" y="75" font-family="sans-serif" font-size="9.5" fill="#475569">Klik tautan ini &amp; masukkan Password + OTP</text>
      <text x="36" y="92" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#dc2626" text-decoration="underline">http://hadiah-palsu-klik.xyz/login</text>
      <g transform="translate(278, 22)">
        <circle cx="58" cy="45" r="38" fill="#fee2e2" stroke="#ef4444" stroke-width="2"/>
        <text x="58" y="42" font-family="sans-serif" font-size="12" font-weight="bold" fill="#b91c1c" text-anchor="middle">JEBAKAN</text>
        <text x="58" y="58" font-family="sans-serif" font-size="11" font-weight="bold" fill="#b91c1c" text-anchor="middle">PHISHING</text>
      </g>
    </svg>`,
    text: 'Perhatikan ilustrasi pesan jebakan pada layar di atas! Teknik kejahatan siber yang memancing korban mengklik tautan palsu untuk mencuri kata sandi dan data pribadi disebut ...',
    options: [
      { id: 'A', text: 'Phishing' },
      { id: 'B', text: 'Coding' },
      { id: 'C', text: 'Updating' },
      { id: 'D', text: 'Streaming' },
    ],
    correctAnswer: 'A',
    explanation: 'Phishing adalah upaya penipuan dengan menyamar sebagai pihak terpercaya atau menjanjikan hadiah palsu lewat tautan mencurigakan untuk mencuri password, PIN, atau kode OTP korban.'
  },
  {
    id: 28,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Pencurian Identitas (Identity Theft)',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan dampak bahaya pencurian identitas digital.',
    text: 'Seseorang mengambil foto profil, nama lengkap, dan tanggal lahir milik orang lain lalu membuat akun palsu untuk menipu teman-teman korban agar mentransfer uang. Kejahatan ini disebut ...',
    options: [
      { id: 'A', text: 'Pembaruan sistem' },
      { id: 'B', text: 'Pencurian identitas (Identity Theft)' },
      { id: 'C', text: 'Pencadangan data (Backup)' },
      { id: 'D', text: 'Belajar daring' },
    ],
    correctAnswer: 'B',
    explanation: 'Pencurian identitas (identity theft) terjadi ketika pelaku mengambil data pribadi orang lain dan berpura-pura menjadi pemilik asli untuk menipu atau melakukan kejahatan.'
  },
  {
    id: 29,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Bahaya Penyebaran Data Pribadi Tanpa Izin (Doxing)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi bahaya tindakan menyebarkan data pribadi orang lain secara sengaja (doxing).',
    text: 'Tindakan menyebarkan alamat rumah, nomor telepon pribadi, atau foto rahasia seseorang ke media sosial tanpa izin dengan tujuan mempermalukan atau mengancam korban dikenal dengan istilah ...',
    options: [
      { id: 'A', text: 'Doxing' },
      { id: 'B', text: 'Enkripsi' },
      { id: 'C', text: 'Antivirus' },
      { id: 'D', text: 'Simulasi' },
    ],
    correctAnswer: 'A',
    explanation: 'Doxing adalah penyebaran informasi pribadi seseorang secara publik tanpa izin. Hal ini sangat berbahaya karena dapat memicu perundungan siber hingga ancaman keselamatan fisik.'
  },
  {
    id: 30,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Bahaya Perangkat Lunak Berbahaya (Malware)',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat mengidentifikasi dampak serangan malware/virus terhadap perangkat dan data pribadi.',
    image: `<svg viewBox="0 0 400 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="120" rx="12" fill="#fef2f2" stroke="#fecaca"/>
      <g transform="translate(30, 22)">
        <rect width="100" height="76" rx="10" fill="#dc2626"/>
        <text x="50" y="34" font-family="sans-serif" font-size="12" font-weight="bold" fill="#ffffff" text-anchor="middle">MALWARE</text>
        <text x="50" y="52" font-family="sans-serif" font-size="9" fill="#fee2e2" text-anchor="middle">Virus / Trojan /</text>
        <text x="50" y="65" font-family="sans-serif" font-size="9" fill="#fee2e2" text-anchor="middle">Ransomware</text>
      </g>
      <polygon points="154,60 142,53 142,67" fill="#dc2626"/>
      <g transform="translate(164, 22)">
        <rect width="208" height="76" rx="10" fill="#ffffff" stroke="#f87171" stroke-width="1.5"/>
        <text x="104" y="24" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#991b1b" text-anchor="middle">Dampak Berbahaya pada Sistem:</text>
        <text x="104" y="42" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Mencuri file &amp; kata sandi diam-diam</text>
        <text x="104" y="57" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Mengunci atau merusak data penting</text>
        <text x="104" y="71" font-family="sans-serif" font-size="9.5" fill="#334155" text-anchor="middle">• Membuat kinerja komputer melambat</text>
      </g>
    </svg>`,
    text: 'Program jahat seperti virus, spyware, atau ransomware yang menyusup ke komputer dari berkas bajakan atau tautan sembarangan disebut Malware. Apa bahaya utama Malware bagi informasi pribadi kita?',
    options: [
      { id: 'A', text: 'Membuat ukuran layar monitor bertambah lebar' },
      { id: 'B', text: 'Mencuri data pribadi, merekam kata sandi, atau mengunci dan merusak dokumen di komputer' },
      { id: 'C', text: 'Menjaga agar semua file tugas sekolah tersimpan lebih rapi' },
      { id: 'D', text: 'Menambah kapasitas memori RAM komputer secara gratis' },
    ],
    correctAnswer: 'B',
    explanation: 'Malware (Malicious Software) adalah perangkat lunak perusak yang dapat memata-matai aktivitas pengguna, mencuri kata sandi (spyware), atau mengunci data (ransomware).'
  },
  {
    id: 31,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Bahaya Penggunaan Wi-Fi Publik Tanpa Pengaman',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menganalisis risiko bertransaksi atau memasukkan kata sandi saat terhubung ke Wi-Fi publik gratis.',
    text: 'Ketika berada di tempat umum seperti taman atau bandara yang menyediakan Wi-Fi gratis tanpa kata sandi, mengapa kita TIDAK disarankan membuka akun bank atau memasukkan kata sandi rahasia?',
    options: [
      { id: 'A', text: 'Karena Wi-Fi publik tidak memakai kabel listrik' },
      { id: 'B', text: 'Karena jaringan Wi-Fi terbuka rentan disadap oleh peretas yang berada di jaringan yang sama' },
      { id: 'C', text: 'Karena layar ponsel otomatis menjadi buram di tempat umum' },
      { id: 'D', text: 'Karena Wi-Fi gratis akan menghapus seluruh kontak telepon' },
    ],
    correctAnswer: 'B',
    explanation: 'Jaringan Wi-Fi publik tanpa enkripsi sangat mudah disadap (eavesdropping) oleh pelaku kejahatan siber yang terhubung ke jaringan yang sama untuk mencuri data login pengguna.'
  },
  {
    id: 32,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Modus Penipuan Mengaku Sebagai Admin/Guru',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat mewaspadai modus rekayasa sosial (social engineering) yang meminta kode rahasia.',
    text: 'Tiba-tiba ada nomor tidak dikenal mengirim pesan mengaku sebagai petugas sekolah dan meminta kamu segera menyebutkan 6 digit kode angka yang baru masuk lewat SMS di HP orang tuamu. Apa risiko terbesar jika kode itu diberikan?',
    options: [
      { id: 'A', text: 'Akun milikmu atau orang tuamu dapat langsung diambil alih dan dibobol oleh penipu' },
      { id: 'B', text: 'Nilai ulangan koding di sekolah otomatis berubah menjadi 100' },
      { id: 'C', text: 'Ponsel menjadi tahan air dan tahan banting' },
      { id: 'D', text: 'Kuota internet bertambah selama satu bulan penuh' },
    ],
    correctAnswer: 'A',
    explanation: 'Kode 6 digit lewat SMS adalah kode OTP (One-Time Password). Penipu memakai rekayasa sosial (social engineering) untuk menipu korban agar menyerahkan OTP guna membajak akun.'
  },
  {
    id: 33,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C2. Bahaya Berbagi Lokasi Real-Time Secara Publik',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan bahaya membagikan lokasi keberadaan rumah secara langsung kepada orang asing.',
    text: 'Mengaktifkan fitur berbagi lokasi langsung (Live Location) secara terbuka di media sosial saat sedang berada di rumah atau sendirian berbahaya karena ...',
    options: [
      { id: 'A', text: 'Baterai komputer meja langsung habis' },
      { id: 'B', text: 'Orang asing berniat jahat dapat melacak alamat tempat tinggal dan keberadaan kita secara nyata' },
      { id: 'C', text: 'Aplikasi peta tidak bisa lagi menunjukkan arah jalan raya' },
      { id: 'D', text: 'Foto yang diunggah menjadi berwarna hitam putih' },
    ],
    correctAnswer: 'B',
    explanation: 'Berbagi lokasi secara terbuka memudahkan pihak asing mengetahui keberadaan kita serta kapan rumah sedang kosong, yang membahayakan keamanan pribadi.'
  },

  // 3. Cara Melindungi Informasi Pribadi (No. 34 - 40)
  {
    id: 34,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Membuat Kata Sandi (Password) yang Kuat',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat memilih contoh kata sandi (password) yang kuat dan sulit ditebak peretas.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(20, 18)">
        <rect width="180" height="84" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <text x="90" y="22" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#b91c1c" text-anchor="middle">SANDI LEMAH (JANGAN!)</text>
        <text x="90" y="44" font-family="monospace" font-size="12" font-weight="bold" fill="#7f1d1d" text-anchor="middle">12345678</text>
        <text x="90" y="62" font-family="monospace" font-size="11" fill="#7f1d1d" text-anchor="middle">komang2015</text>
        <text x="90" y="76" font-family="sans-serif" font-size="8.5" fill="#991b1b" text-anchor="middle">Mudah ditebak mesin peretas</text>
      </g>
      <g transform="translate(220, 18)">
        <rect width="180" height="84" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <text x="90" y="22" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#047857" text-anchor="middle">SANDI KUAT (AMAN!)</text>
        <text x="90" y="45" font-family="monospace" font-size="12" font-weight="bold" fill="#064e3b" text-anchor="middle">B4l!_K0d1ng#5</text>
        <text x="90" y="64" font-family="sans-serif" font-size="8.5" fill="#065f46" text-anchor="middle">Huruf Besar + Kecil +</text>
        <text x="90" y="76" font-family="sans-serif" font-size="8.5" fill="#065f46" text-anchor="middle">Angka + Simbol (&gt;= 8 karakter)</text>
      </g>
    </svg>`,
    text: 'Berdasarkan gambar perbandingan di atas, manakah contoh kata sandi (password) yang PALING KUAT dan aman untuk melindungi akun belajar siswa?',
    options: [
      { id: 'A', text: '123456' },
      { id: 'B', text: 'K0mput3r#Sd3!' },
      { id: 'C', text: 'password' },
      { id: 'D', text: '17082015' },
    ],
    correctAnswer: 'B',
    explanation: 'Kata sandi yang kuat minimal terdiri dari 8 karakter dengan perpaduan huruf kapital, huruf kecil, angka, serta tanda simbol khusus (seperti # dan !), serta tidak memakai tanggal lahir atau kata berurutan.'
  },
  {
    id: 35,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Kerahasiaan Kata Sandi di Lingkungan Sekolah',
    level: 'L1',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menerapkan perilaku aman dalam menyimpan kata sandi akun.',
    text: 'Agar kata sandi akun belajar tidak mudah diketahui oleh orang lain, tindakan yang BENAR adalah ...',
    options: [
      { id: 'A', text: 'Menulis kata sandi pada kertas tempel lalu menempelkannya di monitor lab komputer' },
      { id: 'B', text: 'Memberitahukan kata sandi kepada semua teman agar bisa membantu login' },
      { id: 'C', text: 'Menjaga kerahasiaan kata sandi dan hanya menyimpannya bersama orang tua jika perlu dicatat' },
      { id: 'D', text: 'Menggunakan kata sandi yang sama persis dengan nomor absen kelas' },
    ],
    correctAnswer: 'C',
    explanation: 'Kata sandi bersifat rahasia pribadi. Jangan menempelkannya di tempat umum atau membagikannya kepada teman; jika perlu dicatat, simpanlah di tempat aman bersama orang tua.'
  },
  {
    id: 36,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Autentikasi Dua Faktor (2FA) & Kode OTP',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan fungsi verifikasi dua langkah (2FA) sebagai lapisan pelindung tambahan.',
    image: `<svg viewBox="0 0 420 120" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="120" rx="12" fill="#eff6ff" stroke="#bfdbfe"/>
      <g transform="translate(24, 22)">
        <rect width="145" height="76" rx="8" fill="#ffffff" stroke="#3b82f6" stroke-width="1.5"/>
        <text x="72" y="28" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#1e40af" text-anchor="middle">Langkah 1</text>
        <text x="72" y="48" font-family="sans-serif" font-size="10" fill="#334155" text-anchor="middle">Masukkan Password</text>
        <text x="72" y="63" font-family="monospace" font-size="10" fill="#64748b" text-anchor="middle">••••••••••</text>
      </g>
      <text x="190" y="65" font-family="sans-serif" font-size="18" font-weight="bold" fill="#2563eb" text-anchor="middle">+</text>
      <g transform="translate(212, 22)">
        <rect width="184" height="76" rx="8" fill="#1e40af"/>
        <text x="92" y="28" font-family="sans-serif" font-size="10.5" font-weight="bold" fill="#93c5fd" text-anchor="middle">Langkah 2 (Lapisan Ekstra)</text>
        <text x="92" y="48" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">Masukkan Kode OTP Rahasia</text>
        <text x="92" y="64" font-family="monospace" font-size="11" fill="#fde047" text-anchor="middle">[ 4 8 2 9 1 0 ]</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar mekanisme keamanan akun di atas! Mengaktifkan fitur Autentikasi Dua Faktor (2FA) sangat berguna untuk melindungi akun pribadi karena ...',
    options: [
      { id: 'A', text: 'Walaupun peretas berhasil mencuri password, ia tetap tidak bisa masuk tanpa kode OTP khusus di perangkat pemilik asli' },
      { id: 'B', text: 'Membuat pemilik akun tidak perlu lagi membuat password sama sekali' },
      { id: 'C', text: 'Otomatis membagikan kode OTP ke seluruh anggota grup chat' },
      { id: 'D', text: 'Mematikan koneksi internet setiap kali aplikasi dibuka' },
    ],
    correctAnswer: 'A',
    explanation: 'Autentikasi Dua Faktor (2FA) menambah kunci pengaman kedua berupa kode OTP sementara, sehingga akun tetap terlindungi meski password utama bocor.'
  },
  {
    id: 37,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Kebiasaan Logout di Komputer Bersama',
    level: 'L2',
    difficulty: 'Mudah',
    scoreWeight: 2,
    indicator: 'Siswa dapat menentukan langkah pengamanan setelah memakai komputer umum atau laboratorium sekolah.',
    text: 'Setelah selesai mengerjakan tugas dan membuka email di komputer laboratorium sekolah, langkah penting apa yang wajib dilakukan sebelum meninggalkan komputer?',
    options: [
      { id: 'A', text: 'Membiarkan akun tetap terbuka agar teman berikutnya mudah melihat' },
      { id: 'B', text: 'Melakukan Logout / Keluar (Sign Out) dari seluruh akun yang telah dibuka' },
      { id: 'C', text: 'Langsung mencabut kabel monitor tanpa menutup program' },
      { id: 'D', text: 'Menyimpan kata sandi di layar beranda komputer sekolah' },
    ],
    correctAnswer: 'B',
    explanation: 'Selalu melakukan Sign Out / Logout setelah menggunakan komputer bersama mencegah pengguna berikutnya membuka, mengubah, atau menyalahgunakan akun pribadi kita.'
  },
  {
    id: 38,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Pengaturan Privasi Media Sosial & Akun Digital',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 2,
    indicator: 'Siswa dapat menerapkan pengaturan privasi akun (Private Account) untuk membatasi akses orang asing.',
    text: 'Untuk mencegah orang asing melihat foto keluarga dan aktivitas keseharian kita di media sosial, cara perlindungan yang paling tepat adalah ...',
    options: [
      { id: 'A', text: 'Mengatur akun menjadi mode "Privat" (Private) dan hanya menerima permintaan teman dari orang yang dikenal di dunia nyata' },
      { id: 'B', text: 'Menerima semua permintaan pertemanan dari siapa saja agar pengikutnya banyak' },
      { id: 'C', text: 'Menuliskan alamat rumah pada bagian profil (Bio) akun' },
      { id: 'D', text: 'Menghapus aplikasi antivirus dari perangkat tablet' },
    ],
    correctAnswer: 'A',
    explanation: 'Mengaktifkan mode Privat membatasi konten hanya dapat dilihat oleh keluarga atau teman yang dikenal langsung, sehingga melindungi data pribadi dari orang asing.'
  },
  {
    id: 39,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Mengenali Situs Web Aman (HTTPS)',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat membedakan alamat situs web yang terenkripsi aman (HTTPS/gembok) dengan yang tidak aman.',
    image: `<svg viewBox="0 0 420 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="420" height="105" rx="12" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(20, 16)">
        <rect width="380" height="32" rx="8" fill="#ecfdf5" stroke="#10b981" stroke-width="1.5"/>
        <circle cx="22" cy="16" r="8" fill="#10b981"/>
        <text x="22" y="20" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">✓</text>
        <text x="42" y="20" font-family="monospace" font-size="11.5" font-weight="bold" fill="#065f46">https://belajar.kemdikbud.go.id</text>
        <text x="366" y="20" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#047857" text-anchor="end">TERENKRIPSI</text>
      </g>
      <g transform="translate(20, 58)">
        <rect width="380" height="32" rx="8" fill="#fef2f2" stroke="#ef4444" stroke-width="1.5"/>
        <circle cx="22" cy="16" r="8" fill="#ef4444"/>
        <text x="22" y="20" font-family="sans-serif" font-size="10" font-weight="bold" fill="#ffffff" text-anchor="middle">!</text>
        <text x="42" y="20" font-family="monospace" font-size="11.5" font-weight="bold" fill="#991b1b">http://login-hadiah-gratis.xyz</text>
        <text x="366" y="20" font-family="sans-serif" font-size="9.5" font-weight="bold" fill="#b91c1c" text-anchor="end">TIDAK AMAN</text>
      </g>
    </svg>`,
    text: 'Perhatikan gambar bilah alamat peramban (browser) di atas! Awalan alamat situs dan tanda pengaman yang menunjukkan bahwa pertukaran data kita dengan situs web tersebut telah disandikan (terenkripsi) dengan aman adalah ...',
    options: [
      { id: 'A', text: 'Awalan http:// dengan tanda seru merah' },
      { id: 'B', text: 'Awalan https:// dengan ikon gembok tertutup' },
      { id: 'C', text: 'Alamat web yang berakhiran kata hadiah-gratis' },
      { id: 'D', text: 'Situs web yang langsung memunculkan banyak iklan berkedip' },
    ],
    correctAnswer: 'B',
    explanation: 'Huruf "s" pada HTTPS berarti Secure (Aman). Situs HTTPS menggunakan enkripsi sehingga data yang dikirim (seperti password atau nama) tidak mudah diintip pihak ketiga di tengah jalan.'
  },
  {
    id: 40,
    type: 'pg',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Perlindungan Perangkat dengan Antivirus & Update',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 2,
    indicator: 'Siswa dapat menjelaskan peran pembaruan sistem (update) dan antivirus dalam melindungi informasi pribadi.',
    text: 'Mengapa sistem operasi, aplikasi resmi, dan perangkat lunak antivirus di komputer perlu diperbarui (update) secara rutin?',
    options: [
      { id: 'A', text: 'Untuk menambal celah keamanan terbaru dan mengenali jenis malware/virus baru agar data pribadi tetap aman' },
      { id: 'B', text: 'Agar semua foto dan tugas sekolah di komputer terhapus bersih' },
      { id: 'C', text: 'Untuk mengubah komputer desktop menjadi telepon rumah' },
      { id: 'D', text: 'Agar komputer dapat menyala tanpa daya listrik maupun baterai' },
    ],
    correctAnswer: 'A',
    explanation: 'Pembaruan (update) aplikasi dan antivirus menutup celah keamanan (bug) yang sering dimanfaatkan peretas serta memperbarui daftar pendeteksi virus terbaru.'
  },

  // =========================================================================
  // BAGIAN II: 5 SOAL PILIHAN GANDA KOMPLEKS KATEGORI (3 PERNYATAAN B/S)
  // =========================================================================
  {
    id: 41,
    type: 'pgk_kategori',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B1 & B2. Konsep Dasar & Cara Kerja Sistem Komputer',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 3,
    indicator: 'Siswa dapat menilai kebenaran pernyataan mengenai pengertian dan siklus kerja sistem komputer (Input-Proses-Output-Storage).',
    text: 'Tentukan apakah setiap pernyataan mengenai pengertian dan cara kerja sistem komputer berikut bernilai BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Sistem komputer bekerja melalui siklus berurutan mulai dari Input (masukan), Proses (di CPU), Output (keluaran), hingga Storage (penyimpanan).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Printer dan layar monitor termasuk perangkat masukan (Input) karena mengirimkan perintah ketikan ke dalam CPU.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Tanpa adanya perangkat lunak (software) dan pengguna (brainware), perangkat keras komputer tidak dapat bekerja menyelesaikan tugas.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (siklus kerja IPOS). Pernyataan 2 SALAH (printer dan monitor adalah perangkat Output/keluaran, bukan input). Pernyataan 3 BENAR (hardware, software, dan brainware harus bekerja bersama).'
  },
  {
    id: 42,
    type: 'pgk_kategori',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B3. Klasifikasi Komponen Sistem Komputer',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 3,
    indicator: 'Siswa dapat membedakan komponen hardware, software, dan brainware pada sistem komputer.',
    image: `<svg viewBox="0 0 400 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="105" rx="10" fill="#f8fafc" stroke="#cbd5e1"/>
      <g transform="translate(18, 16)">
        <rect width="110" height="72" rx="8" fill="#dbeafe" stroke="#2563eb"/>
        <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e40af" text-anchor="middle">Hardware</text>
        <text x="55" y="48" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">Mouse, CPU, SSD</text>
      </g>
      <g transform="translate(145, 16)">
        <rect width="110" height="72" rx="8" fill="#dcfce7" stroke="#16a34a"/>
        <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#15803d" text-anchor="middle">Software</text>
        <text x="55" y="48" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">OS, Scratch, Browser</text>
      </g>
      <g transform="translate(272, 16)">
        <rect width="110" height="72" rx="8" fill="#fef3c7" stroke="#d97706"/>
        <text x="55" y="28" font-family="sans-serif" font-size="11" font-weight="bold" fill="#92400e" text-anchor="middle">Brainware</text>
        <text x="55" y="48" font-family="sans-serif" font-size="9" fill="#334155" text-anchor="middle">Siswa, Guru, Teknisi</text>
      </g>
    </svg>`,
    text: 'Cermati gambar pengelompokan komponen sistem komputer di atas! Tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Aplikasi pemrograman Scratch dan sistem operasi Windows adalah contoh dari perangkat lunak (Software).',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'RAM (Random Access Memory) menyimpan file dokumen secara permanen meskipun komputer dimatikan selama berhari-hari.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Manusia yang mengoperasikan, mengendalikan, atau merancang program komputer disebut Brainware.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (Scratch dan Windows termasuk software). Pernyataan 2 SALAH (RAM hanya menyimpan data sementara selama listrik menyala; penyimpanan permanen memakai SSD/HDD). Pernyataan 3 BENAR (Brainware adalah pengguna komputer).'
  },
  {
    id: 43,
    type: 'pgk_kategori',
    element: 'Mengidentifikasi sistem komputer tingkat pradasar dengan tepat',
    topic: 'B4. Jenis-Jenis Sistem Komputer',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 3,
    indicator: 'Siswa dapat mengevaluasi karakteristik berbagai jenis sistem komputer (desktop, portabel, tertanam, server).',
    text: 'Berbagai jenis sistem komputer hadir di sekitar kita dengan fungsi berbeda. Tentukan apakah pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Laptop dan tablet dirancang lebih ringkas dan memiliki baterai internal sehingga mudah dibawa berpindah tempat.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Chip pengatur suhu otomatis pada mesin cuci atau pengatur lampu lalu lintas merupakan contoh komputer tertanam (Embedded System).',
        correctAnswer: true,
      },
      {
        id: 's3',
        text: 'Smartphone layar sentuh tidak termasuk jenis sistem komputer karena ukurannya dapat digenggam dengan satu tangan.',
        correctAnswer: false,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (laptop/tablet bersifat portabel dan berbaterai). Pernyataan 2 BENAR (perangkat elektronik dengan chip pengontrol khusus disebut embedded system). Pernyataan 3 SALAH (smartphone tetap merupakan sistem komputer mini lengkap karena memiliki prosesor, memori, OS, serta input/output).'
  },
  {
    id: 44,
    type: 'pgk_kategori',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C1 & C2. Informasi Pribadi dan Bahaya Keamanan Digital',
    level: 'L2',
    difficulty: 'Sedang',
    scoreWeight: 3,
    indicator: 'Siswa dapat membedakan bentuk informasi pribadi serta mengenali ancaman phishing, doxing, dan malware.',
    text: 'Pahami konsep informasi pribadi dan bahaya yang mengancamnya di internet. Tentukan apakah setiap pernyataan berikut BENAR atau SALAH!',
    statements: [
      {
        id: 's1',
        text: 'Nomor induk kependudukan (NIK), alamat rumah lengkap, kata sandi, dan nomor telepon adalah contoh informasi pribadi yang wajib dilindungi.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Mengklik tautan hadiah gratis dari nomor asing lalu mengetikkan kode OTP SMS adalah tindakan aman yang tidak berisiko.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Menyebarkan data pribadi orang lain di media sosial tanpa izin (doxing) dapat membahayakan keselamatan dan privasi korban.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (NIK, alamat, password, dan telepon adalah data pribadi sensitif). Pernyataan 2 SALAH (itu adalah jebakan phishing pencuri akun via OTP). Pernyataan 3 BENAR (doxing melanggar privasi dan membahayakan keamanan korban).'
  },
  {
    id: 45,
    type: 'pgk_kategori',
    element: 'Menginterpretasikan pentingnya menjaga keamanan informasi pribadi dengan tepat',
    topic: 'C3. Praktik Nyata Melindungi Informasi Pribadi',
    level: 'L3',
    difficulty: 'Sukar',
    scoreWeight: 3,
    indicator: 'Siswa dapat mengevaluasi langkah-langkah perlindungan informasi pribadi yang tepat dan bertanggung jawab.',
    image: `<svg viewBox="0 0 400 105" xmlns="http://www.w3.org/2000/svg" class="w-full h-auto">
      <rect width="400" height="105" rx="10" fill="#eff6ff" stroke="#bfdbfe"/>
      <text x="200" y="23" font-family="sans-serif" font-size="11" font-weight="bold" fill="#1e3a8a" text-anchor="middle">3 PILAR PERLINDUNGAN INFORMASI PRIBADI</text>
      <g transform="translate(18, 34)">
        <rect width="112" height="55" rx="8" fill="#ffffff" stroke="#3b82f6"/>
        <text x="56" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1. Sandi Kuat</text>
        <text x="56" y="40" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">+ Aktifkan 2FA / OTP</text>
      </g>
      <g transform="translate(144, 34)">
        <rect width="112" height="55" rx="8" fill="#ffffff" stroke="#10b981"/>
        <text x="56" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#047857" text-anchor="middle">2. Jaga Privasi</text>
        <text x="56" y="40" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Akun Privat &amp; Logout</text>
      </g>
      <g transform="translate(270, 34)">
        <rect width="112" height="55" rx="8" fill="#ffffff" stroke="#f59e0b"/>
        <text x="56" y="24" font-family="sans-serif" font-size="10" font-weight="bold" fill="#b45309" text-anchor="middle">3. Waspada Tautan</text>
        <text x="56" y="40" font-family="sans-serif" font-size="8.5" fill="#475569" text-anchor="middle">Cek HTTPS &amp; Lapor Ortu</text>
      </g>
    </svg>`,
    text: 'Berdasarkan infografis 3 pilar perlindungan data di atas, tentukan kebenaran setiap langkah perlindungan informasi pribadi berikut! (Pilih BENAR atau SALAH)',
    statements: [
      {
        id: 's1',
        text: 'Kata sandi yang kuat sebaiknya memadukan huruf besar, huruf kecil, angka, serta simbol dan tidak memakai tanggal lahir.',
        correctAnswer: true,
      },
      {
        id: 's2',
        text: 'Agar tidak lupa, kata sandi akun belajar sebaiknya sama persis dengan nama panggilan dan dibagikan ke seluruh grup kelas.',
        correctAnswer: false,
      },
      {
        id: 's3',
        text: 'Selalu melakukan Logout setelah menggunakan komputer sekolah serta mengaktifkan Autentikasi Dua Faktor (2FA) dapat mencegah penyalahgunaan akun.',
        correctAnswer: true,
      },
    ],
    explanation: 'Pernyataan 1 BENAR (kombinasi karakter membuat password sulit ditebak). Pernyataan 2 SALAH (kata sandi tidak boleh mudah ditebak atau dibagikan ke orang lain). Pernyataan 3 BENAR (logout di perangkat bersama dan mengaktifkan 2FA adalah langkah perlindungan terbaik).'
  },
];
