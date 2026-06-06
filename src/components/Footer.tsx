import { Link } from "@tanstack/react-router";
import { NAV_ITEMS } from "@/lib/site-data";
import logo from "@/assets/logo.png";

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-border/60">
      <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-6 py-14">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-5">
            <div className="flex items-center gap-2.5">
              <img src={logo} alt="Gender & Development Philippines" className="h-9 w-9 rounded-full object-cover" />
              <div className="leading-tight">
                <div className="text-sm font-bold">Gender &amp; Development</div>
                <div className="text-[10px] uppercase tracking-[0.18em] text-muted-foreground">Philippines</div>
              </div>
            </div>
            <p className="mt-5 text-sm text-muted-foreground max-w-sm leading-relaxed">
              Promoting awareness, equality, inclusion, and informed discussions about gender and
              development in the Philippines.
            </p>
          </div>

          <div className="md:col-span-4">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 mb-4">Explore</div>
            <ul className="grid grid-cols-2 gap-y-2 gap-x-6 text-sm">
              {NAV_ITEMS.map((n) => (
                <li key={n.id}>
                  <Link to={n.to} className="text-muted-foreground hover:text-primary transition">
                    {n.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className="text-[11px] font-semibold uppercase tracking-[0.18em] text-foreground/80 mb-4">About</div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              An educational project by students of{" "}
              <span className="font-semibold text-foreground">GNED 10A — Gender and Development</span>, A.Y. 2025–2026.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-border/60 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-muted-foreground">
          <div>© {new Date().getFullYear()} Gender &amp; Development Philippines · For educational use.</div>
          <div>Cavite State University — Imus Campus</div>
        </div>
      </div>
    </footer>
  );
}
