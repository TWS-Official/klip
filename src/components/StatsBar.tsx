"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  {
    num: 15,
    format: (n: number) => `Rp ${n}K`,
    label: "CPM per 1.000 Views",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    num: 3,
    format: (n: number) => `${n}`,
    label: "TikTok, Reels & YT Shorts",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M15 10l4.553-2.069A1 1 0 0121 8.871V15.13a1 1 0 01-1.447.9L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
      </svg>
    ),
  },
  {
    num: 50,
    format: (n: number) => `Rp ${n}Rb`,
    label: "Minimum Cairkan",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
  },
  {
    num: 48,
    format: (n: number) => `< ${n}J`,
    label: "Verifikasi Views",
    icon: (
      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.8} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
];

const cellBorder = [
  "border-r border-b border-zinc-800/60 md:border-b-0",
  "border-b border-zinc-800/60 md:border-b-0 md:border-r",
  "border-r border-zinc-800/60",
  "",
];

function useCountUp(target: number, duration: number, triggered: boolean) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!triggered) return;
    const start = Date.now();
    const timer = setInterval(() => {
      const progress = Math.min((Date.now() - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress >= 1) clearInterval(timer);
    }, 16);
    return () => clearInterval(timer);
  }, [triggered, target, duration]);
  return count;
}

function StatItem({
  stat,
  borderClass,
  triggered,
}: {
  stat: (typeof stats)[number];
  borderClass: string;
  triggered: boolean;
}) {
  const count = useCountUp(stat.num, 1400, triggered);
  return (
    <div className={`px-6 py-7 flex flex-col items-center text-center gap-2 ${borderClass}`}>
      <div className="w-8 h-8 rounded-lg bg-zinc-800 flex items-center justify-center text-zinc-400 mb-1">
        {stat.icon}
      </div>
      <span className="text-xl md:text-2xl font-black text-white tabular-nums">
        {stat.format(count)}
      </span>
      <span className="text-xs text-zinc-500 font-medium leading-snug">{stat.label}</span>
    </div>
  );
}

export default function StatsBar() {
  const ref = useRef<HTMLDivElement>(null);
  const [triggered, setTriggered] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTriggered(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="px-6 py-4 relative">
      <div className="max-w-6xl mx-auto">
        <p className="text-zinc-500 text-xs font-semibold tracking-widest uppercase text-center mb-4">
          Platform KLIP dalam angka
        </p>
        <div ref={ref} className="rounded-2xl border border-zinc-800 bg-zinc-900/40 overflow-hidden">
          <div className="grid grid-cols-2 md:grid-cols-4">
            {stats.map((stat, i) => (
              <StatItem key={i} stat={stat} borderClass={cellBorder[i]} triggered={triggered} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
