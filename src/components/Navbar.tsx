"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl border-b border-white/5"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex items-center">
          <Image src="/logo.png" alt="KLIP" width={80} height={32} className="h-8 w-auto object-contain" priority />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#cara-kerja" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
            Cara Kerja
          </a>
          <a href="#keunggulan" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
            Keunggulan
          </a>
          <a href="#faq" className="text-sm text-zinc-400 hover:text-white transition-colors duration-200">
            FAQ
          </a>
        </div>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <button className="text-sm text-zinc-400 hover:text-white transition-colors duration-200 px-2">
            Masuk
          </button>
          <a href="https://discord.gg/klip" target="_blank" rel="noopener noreferrer" className="px-4 py-2 gradient-bg text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-orange-500/20">
            Daftar Gratis
          </a>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-zinc-400 hover:text-white transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-white/5 bg-[#0a0a0a]/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          <a
            href="#cara-kerja"
            className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            Cara Kerja
          </a>
          <a
            href="#keunggulan"
            className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            Keunggulan
          </a>
          <a
            href="#faq"
            className="text-sm text-zinc-400 hover:text-white transition-colors py-1"
            onClick={() => setMenuOpen(false)}
          >
            FAQ
          </a>
          <div className="flex gap-3 pt-2">
            <button className="flex-1 py-2.5 text-sm text-zinc-300 border border-white/10 rounded-lg hover:bg-white/5 transition-colors">
              Masuk
            </button>
            <a href="https://discord.gg/klip" target="_blank" rel="noopener noreferrer" className="flex-1 py-2.5 gradient-bg text-white text-sm font-semibold rounded-lg hover:opacity-90 transition-opacity text-center">
              Daftar Gratis
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
