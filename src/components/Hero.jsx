import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { profile } from "../mock";
import { Button } from "./ui/button";
import { monoSizes } from "@/lib/tailwindCssMap";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative border-b border-line/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-20 md:pb-28 grid md:grid-cols-12 gap-10 md:gap-14 items-end">
        {/* Left — copy */}
        <div className="md:col-span-8">
          <div className="flex items-center gap-3 mb-8">
            <span className="relative flex h-2.5 w-2.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-70" />
              <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage" />
            </span>
            <span className={`font-mono ${monoSizes.sm} uppercase tracking-[0.16em] text-inkSoft`}>
              available for select work · Q4 2025
            </span>
          </div>

          <h1 className="font-serif text-[54px] leading-[1.02] sm:text-[72px] md:text-[96px] md:leading-[0.98] text-ink tracking-[-0.025em]">
            Hello, I’m{" "}
            <span className="italic text-amber">{profile.firstName}</span>.
            <br />
            I build warm,
            <br />
            thoughtful software.
          </h1>

          <p className="mt-8 max-w-xl text-inkSoft text-lg leading-relaxed">
            A full-stack engineer with six years of shipping products across
            healthcare, fintech and indie creator tools. I care about the
            craft, the comma, and the query plan — in equal measure.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className={`bg-ink text-cream hover:bg-amber rounded-full px-6 h-12 font-mono ${monoSizes.sm} tracking-wide`}
            >
              <a href="#projects">
                see my work
                <ArrowDownRight className="w-4 h-4 ml-2" />
              </a>
            </Button>
            <Button
              asChild
              variant="outline"
              className={`border-ink/80 text-ink hover:bg-ink hover:text-cream rounded-full px-6 h-12 font-mono ${monoSizes.sm} tracking-wide bg-transparent`}
            >
              <a href={profile.resumeUrl} download>
                download résumé
                <Download className="w-4 h-4 ml-2" />
              </a>
            </Button>
          </div>

          <div className={`mt-10 flex flex-wrap gap-x-8 gap-y-3 font-mono ${monoSizes.sm} text-inkSoft`}>
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5 text-amber" /> {profile.location}
            </span>
            <span>
              <span className="text-amber">$</span> {profile.email}
            </span>
          </div>
        </div>

        {/* Right — terminal card */}
        <div className="md:col-span-4 md:pt-10">
          <div className="card-warm rounded-xl border border-line/70 bg-paper overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line/70 bg-parchment">
              <span className="w-3 h-3 rounded-full bg-rose/70" />
              <span className="w-3 h-3 rounded-full bg-amberSoft/80" />
              <span className="w-3 h-3 rounded-full bg-sage/80" />
              <span className={`ml-3 font-mono ${monoSizes.xs} text-inkSoft`}>
                ~/akshay — zsh
              </span>
            </div>
            <div className="px-5 py-6 font-mono text-[13px] leading-[1.7] text-ink">
              <div>
                <span className="text-amber">❯</span> whoami
              </div>
              <div className="pl-4 text-inkSoft">
                akshay — full-stack engineer
              </div>
              <div className="mt-3">
                <span className="text-amber">❯</span> cat stack.txt
              </div>
              <div className="pl-4 text-inkSoft">
                react · typescript · python
                <br />
                postgres · aws · a bit of rust
              </div>
              <div className="mt-3">
                <span className="text-amber">❯</span> now
              </div>
              <div className="pl-4 text-inkSoft">
                building at{" "}
                <span className="underline decoration-amber/60 underline-offset-2">
                  lumen health
                </span>
              </div>
              <div className="mt-3 caret">
                <span className="text-amber">❯</span>&nbsp;
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-2 gap-3">
            {profile.stats.map((s) => (
              <div
                key={s.label}
                className="rounded-lg border border-line/70 bg-cream px-4 py-3"
              >
                <div className="font-serif text-2xl text-ink">{s.value}</div>
                <div className={`font-mono ${monoSizes.xs} uppercase tracking-wider text-inkSoft mt-0.5`}>
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* marquee of tech */}
      <div className="border-t border-line/60 bg-paper/60 overflow-hidden">
        <div className={`flex marquee-track whitespace-nowrap py-4 font-mono ${monoSizes.sm} uppercase tracking-[0.22em] text-inkSoft`}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10 pr-10">
              {[
                "// react",
                "// typescript",
                "// fastapi",
                "// postgres",
                "// aws",
                "// terraform",
                "// redis",
                "// docker",
                "// graphql",
                "// next.js",
                "// tailwind",
                "// python"
              ].map((t) => (
                <span key={t} className="flex items-center gap-10">
                  <span>{t}</span>
                  <span className="text-amber">•</span>
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
