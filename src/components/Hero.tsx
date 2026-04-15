export default function Hero() {
  return (
    <section className="relative min-h-screen pt-28 pb-20 px-6 flex items-center">

{/* Colorful glow — right side */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 pointer-events-none">
        <div className="w-[420px] h-[420px] rounded-full bg-orange-500/10 blur-[100px]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-2/3 -translate-y-1/2 w-[280px] h-[280px] rounded-full bg-violet-500/8 blur-[80px]" />
        <div className="absolute bottom-0 left-1/4 w-[200px] h-[200px] rounded-full bg-amber-400/8 blur-[70px]" />
      </div>

      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        {/* Left: Text Content */}
        <div>
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-xs font-medium text-orange-400 mb-8">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-orange-400" />
            </span>
            Clip Marketplace #1 di Indonesia
          </div>

          {/* Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white leading-[1.05] tracking-tight mb-6">
            Kamu Klip.{" "}<br></br>
            <span className="bg-gradient-to-r from-orange-500 to-amber-300 bg-clip-text text-transparent">Mereka Nonton.</span>{" "}<br></br>
            Kamu Cuan.
          </h1>

          {/* Subtext */}
          <p className="text-zinc-400 text-lg leading-relaxed mb-8 max-w-md">
            KLIP adalah platform clip marketplace yang menghubungkan{" "}
            <span className="text-white font-semibold">Brand</span> dengan{" "}
            <span className="text-white font-semibold">Clipper</span> (content
            creator) di TikTok, Instagram Reels, dan YouTube Shorts. Clipper
            dibayar per views nyata, Brand mendapatkan distribusi konten
            berskala besar - semua tercatat transparan.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-3">
            <a href="https://discord.gg/klip" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 gradient-bg text-white font-semibold rounded-xl hover:opacity-90 transition-all duration-200 text-sm">
              Get Started
            </a>
            <a href="https://app.joinklip.id" target="_blank" rel="noopener noreferrer" className="px-6 py-3.5 text-white font-semibold rounded-xl border border-white/10 hover:bg-white/5 hover:border-white/20 transition-all duration-200 flex items-center gap-2 text-sm">
              Login
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>

        {/* Right: Floating Video Cards */}
        <div className="relative h-[520px] hidden lg:block">
          {/* Main card */}
          <div className="animate-float absolute top-4 right-0 w-56 rounded-2xl overflow-hidden shadow-2xl shadow-black/50 card-dark border border-white/5">
            <div className="h-72 bg-gradient-to-br from-zinc-900 to-neutral-900 p-4 flex flex-col">
              {/* Top bar */}
              <div className="flex items-center gap-2 mb-3">
                <div className="w-7 h-7 rounded-full gradient-bg flex items-center justify-center text-white text-xs font-bold">
                  R
                </div>
                <div>
                  <p className="text-white text-xs font-semibold">@rizkiclip</p>
                  <p className="text-zinc-500 text-[10px]">TikTok</p>
                </div>
              </div>
              {/* Thumbnail mock */}
              <div className="flex-1 rounded-xl bg-orange-500/10 border border-orange-500/10 flex items-center justify-center mb-3 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-600/5 to-amber-600/5" />
                <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center">
                  <svg className="w-5 h-5 text-white ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>
              {/* Stats */}
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white font-black text-lg">38.9M</p>
                  <p className="text-zinc-400 text-[10px]">views</p>
                </div>
                <span className="px-2 py-1 rounded-full bg-orange-500/15 text-orange-400 text-[10px] font-semibold border border-orange-500/20">
                  VIRAL ✦
                </span>
              </div>
            </div>
          </div>

          {/* Card 2 - smaller, left */}
          <div className="animate-float-2 absolute top-28 left-0 w-48 rounded-2xl overflow-hidden shadow-xl shadow-black/40 card-dark border border-white/5">
            <div className="h-52 bg-gradient-to-br from-zinc-900 to-stone-900 p-4 flex flex-col justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center text-white text-[10px] font-bold">
                  A
                </div>
                <p className="text-white text-xs font-medium">@andika.v</p>
              </div>
              <div>
                <p className="text-white font-black text-xl">8.3M</p>
                <p className="text-zinc-400 text-[10px]">views • IG Reels</p>
              </div>
            </div>
          </div>

          {/* Card 3 - earnings widget */}
          <div className="animate-float-3 absolute bottom-20 right-12 w-52 rounded-2xl p-4 glass border border-white/8">
            <div className="flex items-center justify-between mb-2">
              <p className="text-zinc-400 text-xs">Penghasilan Bulan Ini</p>
              <div className="flex items-center gap-1 text-emerald-400 text-[10px] font-medium">
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
                +32%
              </div>
            </div>
            <p className="text-white text-3xl font-black mb-3">Rp 4.2Jt</p>
            <div className="h-1.5 bg-white/5 rounded-full overflow-hidden">
              <div className="w-4/5 h-full gradient-bg rounded-full" />
            </div>
            <div className="flex justify-between mt-1.5">
              <p className="text-zinc-500 text-[10px]">80% dari target</p>
              <p className="text-zinc-500 text-[10px]">Rp 5Jt</p>
            </div>
          </div>

          {/* Card 4 - total views badge */}
          <div className="animate-float absolute bottom-44 left-14 w-44 rounded-2xl p-3.5 glass border border-white/8">
            <p className="text-zinc-400 text-[10px] mb-1">Total Klip Viral</p>
            <p className="text-white text-2xl font-black">247</p>
            <div className="flex items-center gap-1.5 mt-2">
              <div className="flex gap-0.5">
                {[40, 65, 45, 80, 55, 90, 70].map((h, i) => (
                  <div
                    key={i}
                    className="w-2 rounded-sm"
                    style={{
                      height: `${h * 0.2}px`,
                      background: i === 6 ? "#F97316" : "rgba(255,255,255,0.1)",
                    }}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
