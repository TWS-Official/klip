const steps = [
  {
    number: "01",
    title: "Pilih Campaign",
    description:
      "Browse ratusan campaign aktif dari brand dan content creator ternama. Pilih sesuai niche dan kemampuan editingmu.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Buat Klip Terbaik",
    description:
      "Download video source dari campaign, lalu edit jadi klip pendek 15-60 detik yang berpotensi viral di platform pilihanmu.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Upload ke Platform",
    description:
      "Post klipmu ke TikTok, Instagram Reels, atau YouTube Shorts. KLIP akan melacak performa views secara otomatis melalui link yang kamu submit.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Terima Bayaran",
    description:
      "Bayaran otomatis dihitung dari setiap views yang terverifikasi. Cairkan ke rekening atau dompet digitalmu kapan saja.",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    ),
  },
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="px-6 py-24 relative">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Cara Kerja
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Semudah 4 Langkah.
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Tidak perlu pengalaman brand deals atau negosiasi harga - sistem KLIP
            yang mengurus semuanya.
          </p>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {steps.map((step, i) => (
            <div key={i} className="relative group">
              {/* Connector line */}
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%-1px)] w-4 h-px bg-gradient-to-r from-white/10 to-transparent z-10" />
              )}

              <div className="card-dark card-hover rounded-2xl p-6 h-full">
                {/* Step number + icon */}
                <div className="flex items-start justify-between mb-5">
                  <div className="w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0">
                    {step.icon}
                  </div>
                  <span className="text-4xl font-black text-white/5 tabular-nums">{step.number}</span>
                </div>

                <h3 className="text-white font-bold text-lg mb-2">{step.title}</h3>
                <p className="text-zinc-400 text-sm leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom note */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full glass text-sm text-zinc-400">
            <svg className="w-4 h-4 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
            Pembayaran dijamin aman lewat escrow account KLIP
          </div>
        </div>
      </div>
    </section>
  );
}
