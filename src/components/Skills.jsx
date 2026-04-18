import { monoSizes, proseSizes, leading } from "@/lib/tailwindCssMap";
import { skills } from "../mock";
import SectionLabel from "./SectionLabel";

const Skills = () => {
  return (
    <section id="skills" className="border-b border-line/60 bg-paper/40">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel index="02" label="skills & stack" />
          <h2 className={`font-serif text-4xl md:text-5xl ${leading.section} text-ink tracking-tight mt-6`}>
            The tools I reach for -
            <span className="italic text-amber"> gently </span>
            opinionated.
          </h2>
          <p className={`mt-5 text-inkSoft ${proseSizes["3xl"]} leading-relaxed`}>
            Six years of picking the right tool for the job, and occasionally
            the wrong one on purpose, just to learn.
          </p>
        </div>

        <div className="mt-14 grid md:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((group, gi) => (
            <div
              key={group.category}
              className="rounded-xl border border-line/70 bg-cream p-6 card-warm hover:border-amber/70 transition-colors"
            >
              <div className="flex items-center justify-between">
                <div className="font-serif text-xl text-ink">
                  {group.category}
                </div>
                <div className={`font-mono ${monoSizes.xs} text-amber`}>
                  0{gi + 1}
                </div>
              </div>
              <div className="mt-6 space-y-5">
                {group.items.map((s) => (
                  <div key={s.name}>
                    <div className="flex items-baseline justify-between">
                      <span className={`text-ink ${proseSizes.sm}`}>{s.name}</span>
                      <span className={`font-mono ${monoSizes.xs} text-inkSoft`}>
                        {s.level}
                      </span>
                    </div>
                    <div className="mt-2 h-[3px] bg-line/80 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-amber rounded-full transition-all duration-1000"
                        style={{ width: `${s.level}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
