import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";
import { navLinks, profile } from "../mock";
import { Button } from "./ui/button";
import { monoSizes } from "@/lib/tailwindCssMap";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-40 transition-colors duration-300 ${
        scrolled
          ? "bg-cream/85 backdrop-blur border-b border-line/60"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="flex items-center gap-2 group"
          aria-label="Home"
        >
          <span className="w-8 h-8 rounded-md bg-ink text-cream grid place-items-center font-serif text-lg font-semibold">
            a.
          </span>
          <span className="font-serif text-lg text-ink tracking-tight hidden sm:inline">
            {profile.firstName.toLowerCase()}
            <span className="text-amber">.</span>
            dev
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((l) => (
            <a
              key={l.label}
              href={l.href}
              className={`font-mono ${monoSizes.md} text-inkSoft hover:text-amber transition-colors link-sweep`}
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-3">
          <Button
            asChild
            className={`bg-ink text-cream hover:bg-amber rounded-full px-5 h-10 font-mono ${monoSizes.sm} tracking-wide shadow-none`}
          >
            <a href="#contact">
              say hello <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </Button>
        </div>

        <button
          onClick={() => setOpen((v) => !v)}
          className="md:hidden w-10 h-10 grid place-items-center rounded-md border border-line/70 text-ink hover:bg-paper transition-colors"
          aria-label="Toggle menu"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-line/60 bg-cream">
          <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col gap-4">
            {navLinks.map((l) => (
              <a
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-mono text-sm text-inkSoft hover:text-amber"
              >
                — {l.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className={`mt-2 inline-flex items-center justify-center bg-ink text-cream rounded-full h-11 font-mono ${monoSizes.sm}`}
            >
              say hello <ArrowUpRight className="w-4 h-4 ml-1" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;
