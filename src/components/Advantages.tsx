const advantages = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: "Bayar Per Views",
    description:
      "Tidak ada target minimum. Setiap 1.000 views yang terverifikasi langsung dikonversi menjadi uang. CPM transparan dari awal, tidak ada potongan tersembunyi.",
    tag: "Transparan",
    tagColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
    title: "Campaign Melimpah",
    description:
      "Pilih dari ratusan campaign aktif setiap hari dari berbagai niche - entertainment, lifestyle, bisnis, kuliner, dan banyak lagi. Selalu ada yang cocok untukmu.",
    tag: "Beragam",
    tagColor: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
      </svg>
    ),
    title: "Followers? Tidak Perlu.",
    description:
      "Akun baru dengan 0 followers pun bisa langsung menghasilkan. Yang dinilai adalah kualitas klip dan jumlah views nyata yang kamu hasilkan, bukan ukuran akunmu.",
    tag: "Inklusif",
    tagColor: "text-violet-400 bg-violet-400/10 border-violet-400/20",
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
      </svg>
    ),
    title: "Dashboard Real-time",
    description:
      "Pantau views, earnings, dan performa tiap klipmu dari satu dashboard. Notifikasi instan setiap ada penambahan views signifikan pada klipmu.",
    tag: "Real-time",
    tagColor: "text-amber-400 bg-amber-400/10 border-amber-400/20",
  },
];

export default function Advantages() {
  return (
    <section id="keunggulan" className="px-6 py-24 relative">
      {/* Ambient glow */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-orange-500/3 blur-[150px] rounded-full" />
      </div>

      <div className="max-w-6xl mx-auto relative">
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Kenapa KLIP?
          </p>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Platform yang Berpihak<br className="hidden md:block" /> pada Clipper.
          </h2>
          <p className="text-zinc-400 text-lg max-w-lg mx-auto">
            Dibangun dari nol untuk kebutuhan clipper Indonesia - adil, transparan,
            dan menguntungkan.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {advantages.map((adv, i) => (
            <div key={i} className="card-dark card-hover rounded-2xl p-7 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-white flex-shrink-0 group-hover:scale-105 transition-transform">
                  {adv.icon}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-white font-bold text-lg">{adv.title}</h3>
                    <span className={`px-2 py-0.5 rounded-full text-[10px] font-semibold border ${adv.tagColor}`}>
                      {adv.tag}
                    </span>
                  </div>
                  <p className="text-zinc-400 text-sm leading-relaxed">{adv.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
