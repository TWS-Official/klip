import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

interface LegalLayoutProps {
  title: string;
  lastUpdated: string;
  children: React.ReactNode;
}

export default function LegalLayout({ title, lastUpdated, children }: LegalLayoutProps) {
  return (
    <main>
      <Navbar />
      <section className="px-6 pt-36 pb-20">
        <div className="max-w-3xl mx-auto">
          <p className="text-zinc-500 text-sm font-semibold tracking-widest uppercase mb-3">
            Legal
          </p>
          <h1 className="text-4xl md:text-5xl font-black text-white leading-tight mb-3">
            {title}
          </h1>
          <p className="text-zinc-500 text-sm mb-10">
            Terakhir diperbarui: {lastUpdated}
          </p>
          <div className="legal-content text-zinc-300 leading-relaxed space-y-6">
            {children}
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
