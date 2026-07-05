import { profile, navLinks } from "../mock";
import { ArrowUp } from "lucide-react";
import { monoSizes, leading, tracking } from "@/lib/tailwindCssMap";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-ink text-cream">
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-20 pb-10">
        <div className="grid md:grid-cols-12 gap-10">
          <div className="md:col-span-6">
            <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.marquee} text-amberSoft`}>
              // let’s make something good
            </div>
            <h3 className={`mt-6 font-serif text-4xl md:text-6xl ${leading.snug} tracking-tight`}>
              <span className="italic text-amberSoft">{profile.email}</span>
            </h3>
            <p className="mt-6 text-cream/70 max-w-md leading-relaxed">
              Drop a line - I reply to every message within a day or two. No
              cold pitches, please.
            </p>
          </div>

          <div className="md:col-span-3">
            <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.marquee} text-cream/50`}>
              sitemap
            </div>
            <ul className="mt-5 space-y-2.5">
              {navLinks.map((l) => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-cream/80 hover:text-amberSoft transition-colors link-sweep"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.marquee} text-cream/50`}>
              elsewhere
            </div>
            <ul className="mt-5 space-y-2.5">
              {profile.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-cream/80 hover:text-amberSoft transition-colors"
                  >
                    {s.label}{" "}
                    <span className="text-cream/40">- {s.handle}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5">
          <div className={`font-mono ${monoSizes.xs} text-cream/50`}>
            © {year} {profile.firstName} {profile.lastName}. Brewed with chai
            in {profile.location}.
          </div>
          <a
            href="#top"
            className={`group inline-flex items-center gap-2 font-mono ${monoSizes.xs} uppercase ${tracking.label} text-cream/70 hover:text-amberSoft`}
          >
            back to top
            <span className="w-8 h-8 grid place-items-center rounded-full border border-cream/20 group-hover:border-amberSoft group-hover:bg-amberSoft group-hover:text-ink transition-colors">
              <ArrowUp className="w-3.5 h-3.5" />
            </span>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
