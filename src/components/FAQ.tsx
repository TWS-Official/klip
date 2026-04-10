"use client";

import { useState } from "react";

const faqs = [
  {
    q: "Apa itu KLIP?",
    a: "KLIP adalah platform untuk para clipper profesional Indonesia. Clipper adalah orang yang mengambil video panjang milik creator atau brand, mengeditnya menjadi klip pendek yang menarik, lalu menguploadnya ke TikTok, Instagram Reels, atau YouTube Shorts - dan dibayar berdasarkan views yang dihasilkan.",
  },
  {
    q: "Siapa saja yang bisa jadi clipper di KLIP?",
    a: "Siapa pun bisa jadi clipper di KLIP - kamu tidak perlu punya channel besar, pengalaman brand deals, atau koneksi khusus. Selama kamu bisa mengedit video dan membuat konten yang menarik, kamu sudah bisa mulai menghasilkan uang.",
  },
  {
    q: "Bagaimana sistem pembayarannya?",
    a: "Pembayaran dihitung berdasarkan CPM (Cost Per Mille) - harga per 1.000 views yang terverifikasi. Setiap campaign memiliki CPM yang sudah ditentukan dan transparan dari awal. Earnings kamu terakumulasi otomatis dan bisa dicairkan ke rekening bank atau dompet digital kapan saja minimal saldo Rp 50.000.",
  },
  {
    q: "Berapa CPM yang bisa saya dapatkan?",
    a: "CPM bervariasi tergantung tingkat kesulitan konten dan demand campaign. Umumnya berkisar antara Rp 2.000 hingga Rp 15.000 per 1.000 views. Konten yang lebih viral dan niche premium cenderung memiliki CPM lebih tinggi. CPM setiap campaign ditampilkan secara transparan sebelum kamu memilih untuk berpartisipasi.",
  },
  {
    q: "Apakah ada biaya untuk bergabung?",
    a: "Tidak ada biaya apapun untuk mendaftar dan bergabung di KLIP. Platform ini sepenuhnya gratis untuk clipper. KLIP mengambil komisi kecil dari dana yang dibayarkan brand dan creator, bukan dari penghasilan clipper.",
  },
  {
    q: "Bagaimana KLIP memverifikasi views saya?",
    a: "Kamu cukup submit link postingan setelah upload. KLIP menggunakan sistem tracking otomatis yang terhubung dengan API resmi TikTok, Instagram, dan YouTube untuk memverifikasi views secara akurat dan real-time. Proses verifikasi biasanya memakan waktu 24–48 jam setelah submission.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <div className="text-center mb-14">
          <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-3">FAQ</p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Ada Pertanyaan?</h2>
          <p className="text-zinc-400 text-lg">
            Pertanyaan yang sering ditanya para clipper baru.
          </p>
        </div>

        {/* Accordion */}
        <div className="space-y-2">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className={`card-dark rounded-xl overflow-hidden transition-all duration-200 border ${
                open === i ? "border-orange-500/30" : "border-white/5"
              }`}
            >
              <button
                className="w-full flex items-center justify-between p-5 text-left group"
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span className={`font-semibold text-sm md:text-base pr-4 transition-colors ${open === i ? "text-white" : "text-zinc-300 group-hover:text-white"}`}>
                  {faq.q}
                </span>
                <div
                  className={`flex-shrink-0 w-7 h-7 rounded-lg flex items-center justify-center transition-all duration-200 ${
                    open === i ? "gradient-bg rotate-45" : "bg-white/5"
                  }`}
                >
                  <svg
                    className="w-3.5 h-3.5 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M12 4v16m8-8H4" />
                  </svg>
                </div>
              </button>

              {open === i && (
                <div className="px-5 pb-5">
                  <div className="h-px bg-white/5 mb-4" />
                  <p className="text-zinc-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact note */}
        <p className="text-center text-zinc-500 text-sm mt-8">
          Masih ada pertanyaan?{" "}
          <a href="https://discord.gg/klip" target="_blank" rel="noopener noreferrer" className="text-orange-400 hover:text-orange-300 transition-colors font-medium">
            Hubungi tim KLIP →
          </a>
        </p>
      </div>
      </div>
    </section>
  );
}
