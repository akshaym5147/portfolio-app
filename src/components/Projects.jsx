import { useState } from "react";
import { projects } from "../mock";
import SectionLabel from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";
import { monoSizes } from "@/lib/tailwindCssMap";

const filters = ["all", "Next.js", "React", "Python", "Mobile", "Open-source"];

const Projects = () => {
  const [active, setActive] = useState("all");

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.tags.includes(active));

  return (
    <section id="projects" className="border-b border-line/60 bg-paper/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel index="04" label="selected projects" />
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight mt-6">
              Things I’ve shipped,
              <span className="italic text-amber"> broken</span>, and
              re-shipped better.
            </h2>
          </div>

          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`font-mono ${monoSizes.xs} uppercase tracking-[0.18em] px-3 py-1.5 rounded-full border transition-colors ${
                  active === f
                    ? "bg-ink text-cream border-ink"
                    : "bg-cream text-inkSoft border-line hover:border-amber hover:text-amber"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14 grid md:grid-cols-2 gap-6">
          {filtered.map((p, i) => (
            <a
              key={p.id}
              href={p.href}
              className={`group relative rounded-2xl overflow-hidden border border-line/70 bg-cream card-warm hover:border-amber/70 transition-all ${
                i % 3 === 0 ? "md:col-span-2" : ""
              }`}
            >
              <div
                className={`grid ${
                  i % 3 === 0 ? "md:grid-cols-2" : ""
                } items-stretch`}
              >
                <div className="relative h-64 md:h-72 overflow-hidden">
                  <img
                    src={p.image}
                    alt={p.title}
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-[1.04] transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-ink/30 via-transparent to-transparent" />
                  <span className={`absolute top-4 left-4 font-mono ${monoSizes.xs} bg-cream/90 text-ink rounded-full px-2.5 py-1`}>
                    {p.year}
                  </span>
                </div>
                <div className="p-6 md:p-7 flex flex-col">
                  <div className="flex items-start justify-between gap-3">
                    <div>
                      <div className="font-serif text-2xl md:text-3xl text-ink leading-tight">
                        {p.title}
                      </div>
                      <div className="text-inkSoft text-[15px] mt-1">
                        {p.subtitle}
                      </div>
                    </div>
                    <span className="w-10 h-10 shrink-0 grid place-items-center rounded-full border border-line group-hover:bg-amber group-hover:border-amber group-hover:text-cream transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </span>
                  </div>
                  <p className="mt-4 text-inkSoft text-[15px] leading-relaxed">
                    {p.description}
                  </p>
                  <div className="mt-auto pt-5 flex flex-wrap gap-2">
                    {p.tags.map((t) => (
                      <span
                        key={t}
                        className="font-mono text-[10.5px] uppercase tracking-[0.16em] text-inkSoft border border-line rounded-full px-2.5 py-1"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
