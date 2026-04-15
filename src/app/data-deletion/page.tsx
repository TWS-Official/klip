import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Instruksi Penghapusan Data — KLIP",
  description:
    "Panduan cara meminta penghapusan data pribadi Anda dari platform KLIP, termasuk data yang diperoleh melalui Facebook/Instagram Login.",
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="Instruksi Penghapusan Data"
      lastUpdated="15 April 2026"
    >
      <p>
        Halaman ini menjelaskan bagaimana Anda dapat meminta penghapusan data
        pribadi Anda dari platform KLIP (dioperasikan oleh{" "}
        <strong>PT OROVA GENESIS GROUP</strong>), termasuk data yang Kami
        peroleh ketika Anda login menggunakan akun Facebook, Instagram, atau
        Google.
      </p>
      <p>
        Hak penghapusan ini diberikan sesuai{" "}
        <strong>
          Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi
          (UU PDP)
        </strong>{" "}
        Republik Indonesia serta persyaratan Meta Platform Terms untuk aplikasi
        yang terintegrasi dengan Facebook/Instagram Login.
      </p>

      <h2>1. Data Apa yang Akan Dihapus</h2>
      <p>
        Atas permintaan Anda, Kami akan menghapus data pribadi berikut dari
        sistem KLIP:
      </p>
      <ul>
        <li>
          Profil akun: nama, email, nomor telepon, foto profil, tanggal lahir.
        </li>
        <li>
          Data autentikasi pihak ketiga (Facebook ID, Instagram username,
          Google ID, access token, dan profil publik terkait).
        </li>
        <li>
          Social media handles TikTok, Instagram, dan YouTube yang Anda hubungkan.
        </li>
        <li>
          URL klip yang Anda submit beserta metadata statistik views.
        </li>
        <li>
          Data riwayat campaign, earnings, dan log aktivitas akun.
        </li>
        <li>Preferensi notifikasi dan pengaturan akun.</li>
      </ul>

      <h2>2. Data yang Tidak Dapat Dihapus Segera</h2>
      <p>
        Sesuai kewajiban hukum, beberapa data wajib Kami simpan untuk periode
        retensi minimum sebelum dapat dimusnahkan:
      </p>
      <ul>
        <li>
          <strong>Catatan keuangan &amp; transaksi</strong> (top-up, pencairan,
          invoice, bukti pajak) disimpan selama{" "}
          <strong>5 (lima) tahun</strong> sesuai UU Dokumen Perusahaan dan UU
          KUP Republik Indonesia.
        </li>
        <li>
          Data yang dibutuhkan untuk pencegahan fraud, audit keamanan, atau
          kepatuhan terhadap permintaan resmi otoritas berwenang.
        </li>
      </ul>
      <p>
        Setelah periode retensi berakhir, data tersebut akan dimusnahkan secara
        otomatis atau di-anonimisasi.
      </p>

      <h2>3. Cara Meminta Penghapusan Data</h2>
      <p>
        Anda dapat mengajukan permintaan penghapusan melalui salah satu dari
        dua metode berikut:
      </p>

      <h3>Metode A — Email (Direkomendasikan)</h3>
      <ol style={{ listStyle: "decimal", paddingLeft: "1.25rem", color: "#d4d4d8", lineHeight: 1.7, fontSize: "0.975rem" }}>
        <li style={{ marginBottom: "0.4rem" }}>
          Kirim email ke{" "}
          <a href="mailto:official@joinklip.id?subject=Permintaan%20Penghapusan%20Data%20KLIP">
            official@joinklip.id
          </a>{" "}
          dari alamat email yang terdaftar pada akun KLIP Anda.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Gunakan subject:{" "}
          <strong>&ldquo;Permintaan Penghapusan Data KLIP&rdquo;</strong>.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Sertakan dalam badan email:
          <ul>
            <li>Nama lengkap sesuai yang terdaftar.</li>
            <li>Email atau username KLIP.</li>
            <li>
              Platform login yang Anda gunakan (Facebook, Instagram, Google,
              atau email/password).
            </li>
            <li>
              Keterangan singkat: permintaan penghapusan akun secara
              keseluruhan, atau hanya data tertentu.
            </li>
          </ul>
        </li>
      </ol>

      <h3>Metode B — Dari Dalam Aplikasi</h3>
      <ol style={{ listStyle: "decimal", paddingLeft: "1.25rem", color: "#d4d4d8", lineHeight: 1.7, fontSize: "0.975rem" }}>
        <li style={{ marginBottom: "0.4rem" }}>
          Login ke{" "}
          <a
            href="https://app.joinklip.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            app.joinklip.id
          </a>
          .
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Buka menu <strong>Pengaturan → Akun → Hapus Akun</strong>.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Ikuti langkah verifikasi identitas dan konfirmasi.
        </li>
      </ol>

      <h2>4. Verifikasi Identitas</h2>
      <p>
        Untuk melindungi akun Anda dari permintaan penghapusan oleh pihak yang
        tidak berwenang, Kami dapat meminta verifikasi tambahan seperti:
      </p>
      <ul>
        <li>
          Konfirmasi dari email atau nomor telepon yang terdaftar di akun.
        </li>
        <li>
          Bagi pengguna Facebook/Instagram Login, Kami dapat meminta Anda
          melakukan login ulang melalui Facebook untuk memastikan pemegang akun
          adalah Anda.
        </li>
        <li>Foto identitas (KTP/SIM/Paspor) bila diperlukan.</li>
      </ul>

      <h2>5. Jangka Waktu Pemrosesan</h2>
      <ul>
        <li>
          Kami akan mengirim konfirmasi penerimaan permintaan dalam waktu{" "}
          <strong>3 (tiga) hari kerja</strong>.
        </li>
        <li>
          Data yang tidak tunduk pada kewajiban retensi akan dihapus paling
          lambat <strong>30 (tiga puluh) hari kalender</strong> sejak
          verifikasi identitas berhasil.
        </li>
        <li>
          Kami akan mengirim konfirmasi akhir ketika penghapusan telah selesai.
        </li>
      </ul>

      <h2>6. Mencabut Akses Facebook/Instagram dari Sisi Anda</h2>
      <p>
        Selain meminta penghapusan kepada Kami, Anda juga dapat mencabut izin
        akses aplikasi KLIP langsung dari pengaturan akun Facebook/Instagram
        Anda:
      </p>
      <ul>
        <li>
          <strong>Facebook</strong>: buka{" "}
          <a
            href="https://www.facebook.com/settings?tab=applications"
            target="_blank"
            rel="noopener noreferrer"
          >
            Settings → Apps and Websites
          </a>
          , pilih KLIP, lalu klik <strong>Remove</strong>.
        </li>
        <li>
          <strong>Instagram</strong>: buka{" "}
          <a
            href="https://www.instagram.com/accounts/manage_access/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Settings → Apps and Websites
          </a>
          , pilih KLIP, lalu klik <strong>Remove</strong>.
        </li>
      </ul>
      <p>
        Mencabut akses dari sisi Facebook/Instagram akan menghentikan sinkronisasi
        data di masa mendatang, tetapi tidak secara otomatis menghapus data yang
        telah tersimpan di sistem KLIP. Untuk penghapusan menyeluruh, tetap ajukan
        permintaan melalui email di atas.
      </p>

      <h2>7. Kontak</h2>
      <p>
        Jika Anda mengalami kendala atau membutuhkan bantuan terkait permintaan
        penghapusan data, silakan hubungi:
      </p>
      <p>
        <strong>PT OROVA GENESIS GROUP</strong>
        <br />
        Indonesia
      </p>
      <ul>
        <li>
          Email:{" "}
          <a href="mailto:official@joinklip.id">official@joinklip.id</a>
        </li>
        <li>
          Kebijakan Privasi lengkap: <a href="/privacy">/privacy</a>
        </li>
        <li>
          Website: <a href="https://joinklip.id">joinklip.id</a>
        </li>
      </ul>
    </LegalLayout>
  );
}
