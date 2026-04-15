import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Kebijakan Privasi — KLIP",
  description:
    "Kebijakan Privasi KLIP menjelaskan data yang dikumpulkan, cara penggunaan, penyimpanan, dan hak pengguna sesuai UU PDP Republik Indonesia.",
};

export default function PrivacyPage() {
  return (
    <LegalLayout title="Kebijakan Privasi" lastUpdated="15 April 2026">
      <p>
        PT OROVA GENESIS GROUP (&ldquo;<strong>Kami</strong>&rdquo;, &ldquo;<strong>KLIP</strong>&rdquo;)
        menghargai privasi Anda. Kebijakan Privasi ini menjelaskan bagaimana Kami
        mengumpulkan, menggunakan, menyimpan, melindungi, dan membagikan data
        pribadi Anda ketika Anda menggunakan platform KLIP di{" "}
        <a href="https://joinklip.id">joinklip.id</a>,{" "}
        <a href="https://app.joinklip.id">app.joinklip.id</a>, dan layanan terkait
        (selanjutnya disebut &ldquo;<strong>Layanan</strong>&rdquo;).
      </p>
      <p>
        Kebijakan ini disusun sesuai dengan{" "}
        <strong>
          Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi
          (UU PDP)
        </strong>{" "}
        dan peraturan pelaksananya yang berlaku di Republik Indonesia.
      </p>

      <h2>1. Definisi</h2>
      <ul>
        <li>
          <strong>Clipper</strong> adalah pengguna yang membuat dan mengunggah
          klip video ke TikTok, Instagram Reels, atau YouTube Shorts berdasarkan
          campaign yang tersedia di KLIP.
        </li>
        <li>
          <strong>Brand</strong> adalah pengguna yang membuat campaign, melakukan
          top-up budget, dan mendistribusikan konten melalui Clipper.
        </li>
        <li>
          <strong>Data Pribadi</strong> adalah setiap data mengenai seseorang
          yang teridentifikasi atau dapat diidentifikasi secara tersendiri atau
          dikombinasi dengan informasi lain.
        </li>
      </ul>

      <h2>2. Data yang Kami Kumpulkan</h2>
      <p>Kami mengumpulkan kategori data berikut:</p>
      <h3>a. Data Identitas dan Akun</h3>
      <ul>
        <li>Nama lengkap, alamat email, nomor telepon/WhatsApp.</li>
        <li>
          Foto profil dan username; tanggal lahir (untuk verifikasi usia minimum
          17 tahun).
        </li>
        <li>
          Kredensial akun (password di-hash; Kami tidak menyimpan password dalam
          bentuk teks).
        </li>
      </ul>
      <h3>b. Data Autentikasi Pihak Ketiga (Google OAuth)</h3>
      <ul>
        <li>
          Bila Anda login menggunakan akun Google, Kami menerima: alamat email,
          nama, foto profil, dan ID akun Google. Kami tidak mengakses kontak,
          kalender, Drive, atau Gmail Anda.
        </li>
        <li>
          Kami mengikuti{" "}
          <a
            href="https://developers.google.com/terms/api-services-user-data-policy"
            target="_blank"
            rel="noopener noreferrer"
          >
            Google API Services User Data Policy
          </a>
          , termasuk persyaratan Limited Use.
        </li>
      </ul>
      <h3>c. Data Social Media Handle</h3>
      <ul>
        <li>
          Username TikTok, Instagram, dan YouTube yang Anda hubungkan untuk
          submit klip dan verifikasi views.
        </li>
        <li>
          URL klip publik yang Anda submit dan statistik publik (jumlah views,
          likes, tanggal posting).
        </li>
      </ul>
      <h3>d. Data Keuangan</h3>
      <ul>
        <li>
          Nomor rekening bank, nama pemilik rekening, atau nomor e-wallet (GoPay,
          OVO, DANA, ShopeePay) untuk pencairan dana.
        </li>
        <li>Nomor NPWP (bila diperlukan untuk keperluan perpajakan).</li>
        <li>
          Riwayat earnings, transaksi top-up, dan pencairan (earnings data).
        </li>
        <li>
          Data pembayaran Brand diproses melalui payment gateway berlisensi Bank
          Indonesia; Kami tidak menyimpan nomor kartu kredit secara penuh.
        </li>
      </ul>
      <h3>e. Data Teknis</h3>
      <ul>
        <li>
          Alamat IP, tipe perangkat, sistem operasi, jenis browser, log waktu
          akses.
        </li>
        <li>Cookie dan identifikasi perangkat untuk keamanan dan analitik.</li>
      </ul>

      <h2>3. Tujuan Penggunaan Data</h2>
      <p>Data pribadi Anda digunakan untuk tujuan berikut:</p>
      <ul>
        <li>Membuat dan mengelola akun, serta autentikasi login.</li>
        <li>
          Menjalankan matchmaking antara Brand dan Clipper, mencocokkan klip
          dengan campaign, dan memverifikasi jumlah views yang dihasilkan.
        </li>
        <li>
          Menghitung earnings Clipper berdasarkan CPM campaign dan memproses
          pencairan dana ke rekening/e-wallet Anda.
        </li>
        <li>
          Memenuhi kewajiban perpajakan, akuntansi, dan pelaporan regulator
          Republik Indonesia.
        </li>
        <li>
          Mencegah fraud, bot, fake views, penyalahgunaan akun, dan pelanggaran
          hukum.
        </li>
        <li>
          Komunikasi operasional (notifikasi campaign, konfirmasi pembayaran,
          update kebijakan).
        </li>
        <li>
          Analitik produk dan peningkatan layanan berbasis data agregat/anonim.
        </li>
      </ul>

      <h2>4. Dasar Hukum Pemrosesan</h2>
      <ul>
        <li>
          <strong>Persetujuan:</strong> Anda memberikan persetujuan saat membuat
          akun dan menggunakan fitur opsional (marketing, notifikasi).
        </li>
        <li>
          <strong>Pelaksanaan perjanjian:</strong> Untuk menjalankan Syarat &
          Ketentuan KLIP (pembayaran, pencairan, eksekusi campaign).
        </li>
        <li>
          <strong>Kewajiban hukum:</strong> Perpajakan, anti pencucian uang, dan
          perintah otoritas yang berwenang.
        </li>
        <li>
          <strong>Kepentingan sah:</strong> Keamanan platform, pencegahan fraud,
          dan peningkatan layanan.
        </li>
      </ul>

      <h2>5. Pembagian Data dengan Pihak Ketiga</h2>
      <p>
        Kami <strong>tidak menjual</strong> data pribadi Anda. Kami dapat
        membagikan data kepada pihak ketiga terbatas berikut:
      </p>
      <ul>
        <li>
          <strong>Payment gateway & disbursement partner</strong> (berlisensi
          Bank Indonesia) untuk pemrosesan pembayaran dan pencairan dana.
        </li>
        <li>
          <strong>Platform analitik &amp; infrastruktur cloud</strong>{" "}
          (penyedia hosting, email, monitoring) di bawah perjanjian kerahasiaan
          dan Data Processing Agreement.
        </li>
        <li>
          <strong>API resmi TikTok, Instagram/Meta, dan YouTube/Google</strong>{" "}
          untuk tracking views klip publik yang Anda submit.
        </li>
        <li>
          <strong>Otoritas hukum</strong> apabila diwajibkan oleh peraturan
          perundang-undangan, putusan pengadilan, atau permintaan sah dari
          pejabat berwenang Republik Indonesia.
        </li>
        <li>
          <strong>Brand</strong> hanya menerima data agregat performa klip
          (views, engagement) dan informasi publik Clipper (username/handle).
          Data sensitif Clipper (rekening, NPWP, email) tidak dibagikan ke Brand.
        </li>
      </ul>

      <h2>6. Penyimpanan dan Retensi Data</h2>
      <p>
        Data pribadi disimpan di server dengan enkripsi{" "}
        <strong>TLS 1.2+ saat transit</strong> dan{" "}
        <strong>AES-256 saat at rest</strong>. Kami menerapkan kontrol akses
        berbasis peran, audit log, dan prosedur backup rutin.
      </p>
      <p>
        Data pribadi disimpan selama akun aktif dan hingga{" "}
        <strong>5 (lima) tahun</strong> setelah akun ditutup atau transaksi
        terakhir, sesuai dengan kewajiban retensi dokumen keuangan dan
        perpajakan Republik Indonesia (UU Dokumen Perusahaan dan UU KUP). Data
        agregat/anonim dapat disimpan lebih lama untuk keperluan analitik.
      </p>

      <h2>7. Hak Anda sebagai Subjek Data</h2>
      <p>Sesuai UU PDP, Anda memiliki hak untuk:</p>
      <ul>
        <li>
          <strong>Mengakses</strong> data pribadi Anda yang Kami simpan.
        </li>
        <li>
          <strong>Mengoreksi</strong> data yang tidak akurat, tidak lengkap,
          atau usang.
        </li>
        <li>
          <strong>Menghapus</strong> data pribadi (right to erasure) sepanjang
          tidak bertentangan dengan kewajiban retensi hukum.
        </li>
        <li>
          <strong>Menarik persetujuan</strong> pemrosesan yang berbasis
          persetujuan.
        </li>
        <li>
          <strong>Meminta pembatasan</strong> atau penundaan pemrosesan.
        </li>
        <li>
          <strong>Portabilitas data</strong> dalam format yang dapat dibaca
          mesin.
        </li>
        <li>
          <strong>Mengajukan keberatan</strong> atau keluhan ke Kami maupun
          kepada otoritas pengawas pelindungan data.
        </li>
      </ul>
      <p>
        Permintaan hak dapat dikirim ke{" "}
        <a href="mailto:support@getklip.id">support@getklip.id</a> dan akan Kami
        tanggapi paling lambat <strong>3x24 jam kerja</strong> setelah
        verifikasi identitas.
      </p>

      <h2>8. Cookie</h2>
      <p>
        Kami menggunakan cookie esensial untuk sesi login, serta cookie analitik
        untuk memahami penggunaan fitur. Anda dapat mengelola cookie melalui
        pengaturan browser. Menonaktifkan cookie esensial dapat mengakibatkan
        sebagian fitur tidak berfungsi.
      </p>

      <h2>9. Transfer Data Lintas Yurisdiksi</h2>
      <p>
        Data disimpan utamanya di data center yang berlokasi di Indonesia
        dan/atau region Asia-Pasifik. Bila terjadi transfer ke luar wilayah
        Indonesia, Kami memastikan tingkat pelindungan setara dengan UU PDP
        melalui kontrak, Standard Contractual Clauses, atau mekanisme sah
        lainnya.
      </p>

      <h2>10. Anak di Bawah Umur</h2>
      <p>
        Layanan KLIP hanya ditujukan bagi pengguna berusia{" "}
        <strong>minimum 17 (tujuh belas) tahun</strong>. Kami tidak secara
        sengaja mengumpulkan data anak di bawah umur. Bila Anda mengetahui
        adanya akun yang dimiliki anak di bawah umur, mohon laporkan kepada
        Kami untuk penutupan akun dan penghapusan data.
      </p>

      <h2>11. Perubahan Kebijakan</h2>
      <p>
        Kami dapat memperbarui Kebijakan Privasi ini sewaktu-waktu. Perubahan
        signifikan akan Kami beritahukan melalui email terdaftar dan/atau
        pengumuman dalam aplikasi paling lambat 7 hari sebelum berlaku.
        Tanggal &ldquo;Terakhir diperbarui&rdquo; di bagian atas halaman ini
        menunjukkan versi terkini.
      </p>

      <h2>12. Kontak &amp; Pengendali Data</h2>
      <p>
        <strong>Pengendali Data Pribadi:</strong>
        <br />
        PT OROVA GENESIS GROUP
        <br />
        Indonesia
      </p>
      <p>
        Untuk pertanyaan, permintaan hak subjek data, atau keluhan terkait
        privasi, silakan hubungi:
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
