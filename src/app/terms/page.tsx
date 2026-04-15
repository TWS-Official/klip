import type { Metadata } from 'next';
import LegalLayout from '@/components/LegalLayout';

export const metadata: Metadata = {
  title: 'Syarat & Ketentuan — KLIP',
  description: 'Syarat & Ketentuan penggunaan platform KLIP untuk Clipper dan Brand. Mengatur peran pengguna, platform fee, pembayaran, kepemilikan konten, dan hukum yang berlaku.',
};

export default function TermsPage() {
  return (
    <LegalLayout title="Syarat & Ketentuan" lastUpdated="15 April 2026">
      <p>
        Syarat &amp; Ketentuan ini (&ldquo;<strong>S&amp;K</strong>&rdquo;) merupakan perjanjian yang mengikat antara Anda (&ldquo;<strong>Pengguna</strong>&rdquo;) dengan <strong>PT OROVA GENESIS GROUP</strong>
        (&ldquo;<strong>KLIP</strong>&rdquo;, &ldquo;<strong>Kami</strong>&rdquo;).
      </p>
      <p>
        Dengan mendaftar, mengakses, atau menggunakan platform KLIP di <a href="https://joinklip.id">joinklip.id</a>, <a href="https://app.joinklip.id">app.joinklip.id</a>, atau layanan terkait (&ldquo;<strong>Layanan</strong>&rdquo;), Anda
        menyatakan telah membaca, memahami, dan menyetujui seluruh ketentuan di bawah ini.
      </p>

      <h2>1. Definisi</h2>
      <ul>
        <li>
          <strong>Clip Marketplace</strong>: platform yang mempertemukan Brand dan Clipper untuk distribusi konten klip pendek di TikTok, Instagram Reels, dan YouTube Shorts.
        </li>
        <li>
          <strong>Clipper</strong>: pengguna yang memproduksi dan mengunggah klip berdasarkan campaign Brand, kemudian dibayar berdasarkan verified views.
        </li>
        <li>
          <strong>Brand</strong>: pengguna yang membuat campaign, mengisi (top-up) budget, dan mendistribusikan konten melalui Clipper.
        </li>
        <li>
          <strong>Campaign</strong>: kampanye yang dibuat Brand berisi brief, aset, hashtag, CPM rate, dan total budget.
        </li>
        <li>
          <strong>CPM</strong> (Cost Per Mille): tarif pembayaran per 1.000 views yang berhasil terverifikasi.
        </li>
        <li>
          <strong>Platform Fee</strong>: komisi KLIP atas transaksi yang difasilitasi.
        </li>
      </ul>

      <h2>2. Kelayakan dan Akun</h2>
      <ul>
        <li>
          Pengguna wajib berusia minimum <strong>17 (tujuh belas) tahun</strong> atau telah cakap hukum sesuai KUHPerdata Republik Indonesia.
        </li>
        <li>Pengguna wajib memberikan data yang benar, akurat, dan terkini, serta menjaga kerahasiaan kredensial akunnya.</li>
        <li>Satu orang/badan hanya dapat memiliki satu akun Clipper. Brand harus terdaftar sebagai badan usaha yang sah atau perorangan dengan identitas yang dapat diverifikasi.</li>
      </ul>

      <h2>3. Peran dan Tanggung Jawab Pengguna</h2>
      <h3>a. Clipper</h3>
      <ul>
        <li>Memproduksi klip original yang mematuhi brief campaign dan pedoman komunitas TikTok, Instagram, dan YouTube.</li>
        <li>Wajib menggunakan hashtag campaign resmi dan menghubungkan URL klip publik agar views dapat dilacak oleh sistem KLIP.</li>
        <li>
          <strong>Dilarang</strong> menggunakan bot, paid views, auto-play farm, atau metode artifisial lainnya untuk menggelembungkan views. Pelanggaran mengakibatkan pembatalan earnings dan pemblokiran akun.
        </li>
      </ul>
      <h3>b. Brand</h3>
      <ul>
        <li>Menyediakan brief campaign, aset, dan ketentuan penggunaan yang jelas, legal, serta tidak melanggar hak pihak ketiga.</li>
        <li>Wajib melakukan top-up budget yang mencukupi sebelum campaign aktif; dana tidak dapat ditarik kembali setelah campaign berjalan kecuali atas sisa budget sesuai ketentuan refund.</li>
        <li>Brand bertanggung jawab penuh atas legalitas produk/layanan yang dipromosikan (termasuk izin BPOM, PIRT, sertifikasi halal, atau izin lainnya yang relevan).</li>
      </ul>

      <h2>4. Platform Fee</h2>
      <p>
        KLIP mengenakan <strong>platform fee sebesar 20% (dua puluh persen)</strong> yang berlaku bagi kedua sisi marketplace:
      </p>
      <ul>
        <li>
          <strong>Sisi Brand:</strong> 20% dari total budget campaign yang dibelanjakan (on top of atau included sesuai konfigurasi campaign, akan ditampilkan transparan saat pembuatan campaign).
        </li>
        <li>
          <strong>Sisi Clipper:</strong> 20% dari gross earnings per campaign dipotong sebagai platform fee; Clipper menerima 80% sebagai net earnings.
        </li>
      </ul>
      <p>Besaran fee dapat direvisi di masa mendatang dengan pemberitahuan tertulis paling lambat 30 hari sebelumnya.</p>

      <h2>5. Pembayaran, Top-up, dan Pencairan</h2>
      <ul>
        <li>
          <strong>Top-up Brand</strong>: dilakukan melalui payment gateway berlisensi Bank Indonesia (transfer bank, virtual account, e-wallet, QRIS). Dana masuk ke akun escrow KLIP.
        </li>
        <li>
          <strong>Tracking views</strong>: dilakukan otomatis berdasarkan API resmi platform (TikTok, Instagram, YouTube) dengan jendela verifikasi untuk mencegah bot/fake views.
        </li>
        <li>
          <strong>Pencairan Clipper</strong>: minimum pencairan, jadwal, dan metode tersedia di dashboard. Pencairan umumnya diproses dalam 1–3 hari kerja setelah verifikasi.
        </li>
        <li>
          <strong>Pajak</strong>: Clipper bertanggung jawab atas kewajiban pajak penghasilan (PPh) atas earnings-nya. KLIP dapat memotong dan/atau memungut pajak sesuai peraturan yang berlaku dan memberikan bukti potong.
        </li>
        <li>
          <strong>Refund</strong>: sisa budget campaign yang tidak terpakai dapat direfund ke Brand sesuai kebijakan yang tertera di dashboard, dikurangi biaya administrasi payment gateway bila ada.
        </li>
      </ul>

      <h2>6. Kepemilikan Konten dan Lisensi</h2>
      <ul>
        <li>
          <strong>Clipper</strong> tetap memiliki hak cipta atas klip yang diproduksi, namun memberikan lisensi non-eksklusif, bebas royalti, dapat dialihkan, dan berlaku di seluruh dunia kepada Brand terkait untuk penggunaan kembali klip
          tersebut dalam konteks kampanye yang sama.
        </li>
        <li>
          <strong>Brand</strong> memberikan lisensi kepada Clipper atas aset brand (logo, footage, musik) hanya sebatas untuk produksi klip sesuai brief campaign.
        </li>
        <li>Clipper menjamin bahwa klip tidak melanggar hak cipta, merek dagang, hak privasi, atau hak pihak ketiga lainnya, dan bertanggung jawab atas klaim yang timbul karenanya.</li>
        <li>KLIP memiliki lisensi untuk menampilkan metadata (thumbnail, judul, username, views) pada dashboard, laporan internal, dan materi promosi platform.</li>
      </ul>

      <h2>7. Aktivitas yang Dilarang</h2>
      <p>
        Pengguna <strong>dilarang</strong> untuk:
      </p>
      <ul>
        <li>Menggunakan bot, click-farm, paid views, atau skema artifisial lain untuk menggelembungkan views, likes, atau engagement.</li>
        <li>Memproduksi atau mendistribusikan konten yang melanggar perundang-undangan Republik Indonesia, termasuk SARA, pornografi, judi, narkotika, hoaks, dan konten yang melanggar UU ITE.</li>
        <li>Meniru identitas orang/brand lain, membajak akun pihak lain, atau melakukan phishing.</li>
        <li>Menjual, mengalihkan, atau menyewakan akun KLIP kepada pihak ketiga tanpa izin tertulis Kami.</li>
        <li>Melakukan reverse engineering, scraping masif, atau mengakses Layanan dengan cara yang tidak sah.</li>
        <li>Menggunakan Layanan untuk money laundering, pendanaan terorisme, atau aktivitas ilegal lain sebagaimana diatur UU TPPU dan peraturan terkait.</li>
      </ul>
      <p>Pelanggaran dapat berakibat pada pembekuan akun, pembatalan earnings, pemotongan refund, dan/atau pelaporan kepada pihak berwenang.</p>

      <h2>8. Penangguhan dan Penutupan Akun</h2>
      <p>
        Kami berhak menangguhkan atau menutup akun Pengguna, dengan atau tanpa pemberitahuan sebelumnya, apabila: (a) terdapat dugaan pelanggaran S&amp;K ini; (b) terdapat indikasi fraud atau aktivitas mencurigakan; (c) diwajibkan oleh
        peraturan perundang-undangan atau otoritas berwenang; atau (d) akun tidak aktif selama lebih dari 12 bulan.
      </p>

      <h2>9. Batasan Tanggung Jawab</h2>
      <p>
        Sepanjang diizinkan oleh hukum, tanggung jawab KLIP atas kerugian yang timbul dari penggunaan Layanan dibatasi pada total biaya platform fee yang Anda bayarkan kepada KLIP dalam <strong>3 (tiga) bulan</strong> terakhir sebelum klaim
        diajukan. KLIP tidak bertanggung jawab atas:
      </p>
      <ul>
        <li>Kerugian tidak langsung, konsekuensial, atau kehilangan peluang.</li>
        <li>Gangguan, penghapusan akun, atau perubahan kebijakan yang dilakukan oleh TikTok, Instagram/Meta, YouTube/Google.</li>
        <li>Konten yang diunggah Pengguna; Pengguna adalah penanggung jawab penuh atas konten masing-masing.</li>
      </ul>

      <h2>10. Ganti Rugi</h2>
      <p>
        Pengguna setuju untuk membebaskan dan mengganti rugi KLIP, afiliasi, direksi, dan karyawannya dari segala klaim, gugatan, kerugian, atau biaya (termasuk biaya hukum) yang timbul dari pelanggaran S&amp;K ini, pelanggaran hukum, atau
        pelanggaran hak pihak ketiga oleh Pengguna.
      </p>

      <h2>11. Perubahan S&amp;K</h2>
      <p>
        Kami dapat memperbarui S&amp;K ini sewaktu-waktu. Perubahan material akan diumumkan melalui email terdaftar dan/atau banner dashboard paling lambat <strong>7 (tujuh) hari</strong> sebelum berlaku. Dengan terus menggunakan Layanan
        setelah tanggal efektif, Anda dianggap menyetujui versi terbaru.
      </p>

      <h2>12. Hukum yang Berlaku dan Penyelesaian Sengketa</h2>
      <p>
        S&amp;K ini tunduk pada dan ditafsirkan berdasarkan <strong>hukum Republik Indonesia</strong>. Setiap sengketa yang timbul dari atau sehubungan dengan S&amp;K ini akan diselesaikan terlebih dahulu melalui musyawarah dalam waktu 30
        hari sejak pemberitahuan tertulis.
      </p>
      <p>
        Apabila musyawarah tidak berhasil, para pihak sepakat untuk menyelesaikan sengketa melalui <strong>Badan Arbitrase Nasional Indonesia (BANI)</strong> di Jakarta sesuai peraturan dan prosedur BANI yang berlaku. Putusan arbitrase
        bersifat final dan mengikat para pihak.
      </p>

      <h2>13. Ketentuan Lain</h2>
      <ul>
        <li>Bila salah satu ketentuan dinyatakan tidak sah oleh pengadilan, ketentuan lainnya tetap berlaku.</li>
        <li>Tidak ada hubungan keagenan, kemitraan, atau ketenagakerjaan yang tercipta antara KLIP dengan Pengguna akibat S&amp;K ini.</li>
        <li>Pengguna tidak dapat mengalihkan hak/kewajibannya berdasarkan S&amp;K ini tanpa persetujuan tertulis Kami.</li>
      </ul>

      <h2>14. Kontak</h2>
      <p>
        <strong>PT OROVA GENESIS GROUP</strong>
        <br />
        Indonesia
      </p>
      <ul>
        <li>
          Email: <a href="mailto:support@getklip.id">support@getklip.id</a>
        </li>
        <li>
          Website: <a href="https://joinklip.id">joinklip.id</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
