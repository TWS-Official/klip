export default function CTASection() {
  return (
    <section className="px-6 py-24">
      <div className="max-w-6xl mx-auto">
        <div className="max-w-4xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden p-12 md:p-16 text-center bg-zinc-900/60 border border-zinc-800">
            {/* Top edge accent */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

            <div className="relative z-10">
              <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-4">
                Bergabung Sekarang
              </p>
              <h2 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5">
                Mulai hasilkan uang<br className="hidden md:block" /> dari skill editingmu.
              </h2>
              <p className="text-zinc-400 text-lg mb-10 max-w-lg mx-auto">
                Satu klip viral bisa menghasilkan jutaan rupiah. Bergabung gratis dan mulai hari ini.
              </p>

              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a href="https://discord.gg/klip" target="_blank" rel="noopener noreferrer" className="px-8 py-4 gradient-bg text-white font-bold rounded-xl hover:opacity-90 transition-opacity text-sm">
                  Daftar Gratis Sekarang
                </a>
                <a href="https://discord.gg/klip" target="_blank" rel="noopener noreferrer" className="px-8 py-4 bg-white/5 text-white font-semibold rounded-xl hover:bg-white/10 transition-colors border border-zinc-800 text-sm">
                  Pelajari Lebih Lanjut
                </a>
              </div>

              <div className="flex flex-wrap justify-center gap-2 mt-8">
                {["Gratis untuk clipper", "CPM transparan", "Cairkan kapan saja"].map((label) => (
                  <span key={label} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/5 border border-zinc-800 text-xs text-zinc-500">
                    <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                    </svg>
                    {label}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
