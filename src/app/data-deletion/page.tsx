import type { Metadata } from "next";
import LegalLayout from "@/components/LegalLayout";

export const metadata: Metadata = {
  title: "Data Deletion Instructions | KLIP",
  description:
    "How to delete your KLIP account and personal data. Compliant with GDPR Article 17 and UU PDP Indonesia.",
};

export default function DataDeletionPage() {
  return (
    <LegalLayout
      title="Data Deletion Instructions"
      lastUpdated="15 April 2026"
    >
      <p className="text-zinc-400">
        <strong>How to delete your KLIP account and personal data</strong>
      </p>

      <h2>1. Overview</h2>
      <p>
        As a KLIP user, you have the right to request deletion of your personal
        data under{" "}
        <strong>
          General Data Protection Regulation (GDPR) Article 17 &mdash; Right to
          Erasure
        </strong>{" "}
        and{" "}
        <strong>
          Undang-Undang Republik Indonesia Nomor 27 Tahun 2022 tentang
          Pelindungan Data Pribadi (UU PDP)
        </strong>
        . KLIP (operated by <strong>PT OROVA GENESIS GROUP</strong>) will
        permanently delete all data associated with your account within{" "}
        <strong>30 (thirty) calendar days</strong> after your verified request,
        except for records we are legally required to retain.
      </p>

      <h2>2. What Data We Delete</h2>
      <p>Upon a verified deletion request, we will remove the following:</p>
      <ul>
        <li>
          <strong>Account information</strong>: email, full name, phone number,
          password hash, profile photo, date of birth.
        </li>
        <li>
          <strong>KYC documents</strong>: KTP/ID card image, selfie verification,
          liveness check data.
        </li>
        <li>
          <strong>Connected social media accounts</strong>: Instagram, TikTok,
          and YouTube OAuth tokens, usernames, and cached profile metadata.
        </li>
        <li>
          <strong>Video submission history</strong>: submitted clip URLs,
          associated campaign IDs, view-count snapshots.
        </li>
        <li>
          <strong>Earnings and payout history</strong>: dashboard-displayed
          earnings, payout requests, linked bank/e-wallet details.
        </li>
        <li>
          <strong>Chat &amp; support history</strong>: customer support tickets
          and in-app messages.
        </li>
        <li>
          Any other personally identifiable information (PII) tied to your
          account.
        </li>
      </ul>

      <h2>3. How to Request Deletion</h2>

      <h3>Method 1 &mdash; In-App (Recommended)</h3>
      <ol style={{ listStyle: "decimal", paddingLeft: "1.25rem", color: "#d4d4d8", lineHeight: 1.7, fontSize: "0.975rem" }}>
        <li style={{ marginBottom: "0.4rem" }}>
          Login to{" "}
          <a
            href="https://app.joinklip.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://app.joinklip.id
          </a>
          .
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Navigate to <strong>Settings &rarr; Account</strong>.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Scroll to the <strong>&ldquo;Delete Account&rdquo;</strong> section.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Click <strong>&ldquo;Delete My Account&rdquo;</strong>.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Confirm via email verification link.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Your account and all associated data will be permanently deleted
          within 30 days.
        </li>
      </ol>

      <h3>Method 2 &mdash; Email Request</h3>
      <p>
        Send an email to{" "}
        <a href="mailto:support@joinklip.id?subject=Data%20Deletion%20Request">
          support@joinklip.id
        </a>{" "}
        from your registered email address with:
      </p>
      <ul>
        <li>
          <strong>Subject</strong>: &ldquo;Data Deletion Request&rdquo;
        </li>
        <li>
          <strong>Body</strong>: a clear confirmation that you want to delete
          your account and all associated data, along with your registered
          email and/or username for identification.
        </li>
      </ul>
      <p>
        We will respond within <strong>7 (seven) days</strong> acknowledging
        your request and complete deletion within{" "}
        <strong>30 (thirty) days</strong> after identity verification.
      </p>

      <h3>Method 3 &mdash; Instagram-Specific Data Only</h3>
      <p>
        If you want to disconnect Instagram but keep your KLIP account
        otherwise active:
      </p>
      <ol style={{ listStyle: "decimal", paddingLeft: "1.25rem", color: "#d4d4d8", lineHeight: 1.7, fontSize: "0.975rem" }}>
        <li style={{ marginBottom: "0.4rem" }}>
          Login to{" "}
          <a
            href="https://app.joinklip.id"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://app.joinklip.id
          </a>
          .
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Go to{" "}
          <strong>Settings &rarr; Verification &rarr; Instagram</strong>.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          Click <strong>&ldquo;Disconnect&rdquo;</strong>.
        </li>
        <li style={{ marginBottom: "0.4rem" }}>
          All Instagram access tokens and stored Instagram profile data are
          deleted immediately.
        </li>
      </ol>
      <p>
        Jika kamu ingin mencabut akses aplikasi KLIP langsung dari sisi
        Instagram:
      </p>
      <ul>
        <li>
          Buka{" "}
          <strong>
            Instagram &rarr; Settings &rarr; Apps and Websites &rarr; KLIP
          </strong>
          , lalu klik <strong>Remove</strong>.
        </li>
      </ul>

      <h2>4. What Happens After Deletion</h2>
      <ul>
        <li>Account dinonaktifkan immediately setelah request diverifikasi.</li>
        <li>
          Data dihapus permanen dari <strong>production database</strong> dalam{" "}
          <strong>30 (tiga puluh) hari</strong>.
        </li>
        <li>
          Backup snapshots yang mengandung data kamu dihapus dalam{" "}
          <strong>90 (sembilan puluh) hari</strong>.
        </li>
        <li>
          Beberapa data legal/financial (transaction records, invoice, bukti
          pajak) <strong>tetap disimpan</strong> sesuai kewajiban retensi
          peraturan Republik Indonesia, termasuk{" "}
          <strong>
            UU KUP/Perpajakan (hingga 10 tahun)
          </strong>{" "}
          dan <strong>UU TPPU (Anti Pencucian Uang)</strong>.
        </li>
        <li>
          Kamu akan menerima <strong>email konfirmasi</strong> setelah proses
          deletion selesai.
        </li>
      </ul>

      <h2>5. Third-Party Processors</h2>
      <p>
        KLIP menggunakan sub-processor pihak ketiga berikut untuk menjalankan
        layanan:
      </p>
      <ul>
        <li>
          <strong>Supabase</strong> &mdash; database, authentication, file
          storage.
        </li>
        <li>
          <strong>Vercel</strong> &mdash; hosting dan edge delivery.
        </li>
        <li>
          <strong>Resend</strong> &mdash; transactional email.
        </li>
        <li>
          <strong>Anthropic</strong> &mdash; AI/LLM provider untuk fitur berbasis
          model.
        </li>
      </ul>
      <p>
        Saat permintaan penghapusan diproses, KLIP akan menginstruksikan setiap
        processor untuk menghapus data kamu sesuai{" "}
        <strong>Data Processing Agreement (DPA)</strong> yang berlaku di
        masing-masing penyedia.
      </p>

      <h2>6. Contact</h2>
      <p>Untuk pertanyaan terkait data deletion atau hak subjek data:</p>
      <ul>
        <li>
          Support: <a href="mailto:support@joinklip.id">support@joinklip.id</a>
        </li>
        <li>
          Data Protection Officer (DPO):{" "}
          <a href="mailto:dpo@joinklip.id">dpo@joinklip.id</a>
        </li>
      </ul>
      <p>
        <strong>Controller:</strong>
        <br />
        PT OROVA GENESIS GROUP
        <br />
        Indonesia
      </p>

      <h2>7. Legal Basis</h2>
      <p>This page is provided in accordance with:</p>
      <ul>
        <li>
          <strong>GDPR Article 17</strong> &mdash; Right to Erasure (&ldquo;Right
          to be Forgotten&rdquo;).
        </li>
        <li>
          <strong>
            Undang-Undang Nomor 27 Tahun 2022 tentang Pelindungan Data Pribadi
            (UU PDP)
          </strong>{" "}
          Republik Indonesia.
        </li>
        <li>
          <strong>Meta Platform Terms</strong> &mdash; obligations regarding
          user data for apps using Facebook/Instagram Login.
        </li>
        <li>
          <strong>Google API Services User Data Policy</strong> &mdash;
          including Limited Use requirements for apps using YouTube / Google
          OAuth.
        </li>
      </ul>
    </LegalLayout>
  );
}
