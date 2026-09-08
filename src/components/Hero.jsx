import { ArrowDownRight, Download, MapPin } from "lucide-react";
import { profile } from "../mock";
import { Button } from "./ui/button";
import { monoSizes, headingSizes, leading, tracking } from "@/lib/tailwindCssMap";

const Hero = () => {
  return (
    <section
      id="top"
      className="relative border-b border-line/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 pt-16 pb-20 md:pb-28 grid md:grid-cols-12 gap-10 md:gap-14 items-start">
        {/* Left - copy */}
        <div className="md:col-span-8">
          <h1 className={`font-serif ${headingSizes.base} ${leading.snug} ${headingSizes.sm} ${headingSizes.lg} md:leading-[0.98] text-ink ${tracking.heading}`}>
            Hello, I’m{" "}
            <span className="italic text-amber">{profile.firstName}</span>.
            <br />
          </h1>
          {/* <br /> */}
          {/* <span className={`font-serif ${headingSizes.base} ${leading.snug} ${headingSizes.sm} md:leading-[0.98] text-ink ${tracking.heading}`}> Building Systems.</span>
          <span className={`font-serif ${headingSizes.base} ${leading.snug} ${headingSizes.sm} md:leading-[0.98] text-ink ${tracking.heading}`}> Crafting Experiences.</span> */}

          <p className="font-serif mt-8 max-w-xl text-inkSoft text-lg leading-relaxed">
            Full-Stack Engineer with 7 years of experience building and shipping products across edtech, fleet, and social platforms.
            <br />
            I turn complex problems into scalable systems and thoughtful experiences, blending solid backend architecture with polished frontend interactions.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Button
              asChild
              className={`bg-ink text-cream hover:bg-amber rounded-full px-6 h-12 font-mono ${monoSizes.sm} tracking-wide`}
            >
              <a href="#experience">
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
        </div>

        {/* Right - terminal card */}
        <div className="md:col-span-4">
          <div className="card-warm rounded-xl border border-line/70 bg-paper overflow-hidden">
            <div className="flex items-center gap-2 px-4 py-3 border-b border-line/70 bg-parchment">
              <span className="w-3 h-3 rounded-full bg-rose/70" />
              <span className="w-3 h-3 rounded-full bg-amberSoft/80" />
              <span className="w-3 h-3 rounded-full bg-sage/80" />
              <span className={`ml-3 font-mono ${monoSizes.xs} text-inkSoft`}>
                ~/akshay - zsh
              </span>
            </div>
            <div className={`px-5 py-6 font-mono ${monoSizes.md} ${leading.terminal} text-ink`}>
              <div>
                <span className="text-amber">❯</span> whoami
              </div>
              <div className="pl-4 text-inkSoft">
                akshay - full-stack engineer
              </div>
              <div className="mt-3">
                <span className="text-amber">❯</span> cat stack.txt
              </div>
              <div className="pl-4 text-inkSoft">
                javascript · typescript · react
                <br />
                java · spring boot
              </div>
              <div className="mt-3">
                <span className="text-amber">❯</span> now
              </div>
              <div className="pl-4 text-inkSoft">
                building at{" "}
                <span className="underline decoration-amber/60 underline-offset-2">
                  Imagine Learning
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
        <div className={`flex marquee-track whitespace-nowrap py-4 font-mono ${monoSizes.sm} uppercase ${tracking.marquee} text-inkSoft`}>
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex gap-10 pr-10">
              {[
                "// react", "// typescript", "// fastapi", "// postgres",
                "// aws", "// terraform", "// redis", "// docker",
                "// graphql", "// next.js", "// tailwind", "// python"
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
