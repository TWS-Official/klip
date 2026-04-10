"use client";

import { useEffect, useState } from "react";

const TARGET = new Date("2026-05-01T00:00:00+07:00");

function getTimeLeft() {
  const diff = TARGET.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

function pad(n: number) {
  return String(n).padStart(2, "0");
}

const units = [
  { key: "days" as const, label: "Hari" },
  { key: "hours" as const, label: "Jam" },
  { key: "minutes" as const, label: "Menit" },
  { key: "seconds" as const, label: "Detik" },
];

export default function CountdownBanner() {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <section className="px-6 py-10 relative">
      {/* Circular glow — left */}
      <div className="absolute -bottom-24 left-0 w-[340px] h-[340px] rounded-full bg-orange-500/[0.07] blur-[90px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="rounded-2xl border border-zinc-800 bg-zinc-900/50 px-8 py-8 overflow-hidden">
          {/* Top accent */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-orange-500/40 to-transparent" />

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Left: Text */}
            <div>
              <span className="inline-block text-orange-400 text-xs font-semibold tracking-widest uppercase mb-3">
                Segera Hadir
              </span>
              <h3 className="text-white text-2xl md:text-3xl font-black leading-snug mb-1">
                KLIP dibuka <span className="text-orange-400">1 Mei 2026</span>
              </h3>
              <p className="text-zinc-500 text-sm">
                Daftarkan dirimu sekarang dan jadilah yang pertama.
              </p>
            </div>

            {/* Right: Countdown */}
            <div className="flex items-center gap-2 md:gap-3 shrink-0">
              {units.map(({ key, label }, i) => (
                <div key={key} className="flex items-center gap-2 md:gap-3">
                  <div className="flex flex-col items-center">
                    <div className="bg-zinc-800/80 rounded-xl px-3 md:px-4 py-3 min-w-[56px] md:min-w-[64px] text-center">
                      <span className="text-2xl md:text-3xl font-black text-white tabular-nums">
                        {pad(time[key])}
                      </span>
                    </div>
                    <span className="text-zinc-600 text-[10px] font-medium tracking-widest uppercase mt-1.5">
                      {label}
                    </span>
                  </div>
                  {i < 3 && (
                    <span className="text-zinc-700 text-xl font-black -mt-5 select-none">:</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
