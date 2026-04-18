import { monoSizes } from "@/lib/tailwindCssMap";
import { experience } from "../mock";
import SectionLabel from "./SectionLabel";
import { ArrowUpRight } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="border-b border-line/60">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-4">
          <SectionLabel index="03" label="experience" />
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight mt-6">
            Six years,
            <span className="italic text-amber"> three teams</span>, a lot of
            late-night commits.
          </h2>
          <p className="mt-5 text-inkSoft text-[16px] leading-relaxed">
            I tend to stay. I like getting past the interesting first year and
            into the work where real systems emerge.
          </p>
        </div>

        <div className="md:col-span-8 relative">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-line hidden md:block" />
          <ul className="space-y-10">
            {experience.map((job) => (
              <li key={job.company} className="relative md:pl-10">
                <span className="hidden md:block absolute left-0 top-2 w-4 h-4 rounded-full border-2 border-amber bg-cream" />
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <div className="font-serif text-2xl text-ink">
                      {job.role}
                    </div>
                    <div className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-inkSoft">
                      <a
                        href="#"
                        className="text-amber font-medium link-sweep inline-flex items-center gap-1"
                      >
                        {job.company}
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                      <span className="text-line">•</span>
                      <span className="text-[14px]">{job.location}</span>
                    </div>
                  </div>
                  <div className={`font-mono ${monoSizes.sm} uppercase tracking-[0.18em] text-inkSoft`}>
                    {job.period}
                  </div>
                </div>

                <ul className="mt-5 space-y-2.5 text-inkSoft text-[15px] leading-relaxed">
                  {job.bullets.map((b, i) => (
                    <li key={i} className="flex gap-3">
                      <span className="text-amber mt-2 inline-block w-1.5 h-1.5 rounded-full bg-amber shrink-0" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 flex flex-wrap gap-2">
                  {job.stack.map((s) => (
                    <span
                      key={s}
                      className={`font-mono ${monoSizes.xs} uppercase tracking-[0.14em] text-inkSoft border border-line rounded-full px-3 py-1 bg-cream`}
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Experience;
