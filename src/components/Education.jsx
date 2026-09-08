import { monoSizes, proseSizes, leading, tracking } from "@/lib/tailwindCssMap";
import { education } from "../mock";
import SectionLabel from "./SectionLabel";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="border-b border-line/60" id="education">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel index="04" label="education" />
          <h2 className={`font-serif text-4xl md:text-5xl ${leading.section} text-ink tracking-tight mt-6`}>
            The academic <span className="italic text-amber"> chapter. </span>
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {education.map((e, i) => (
            <div
              key={e.school}
              className="rounded-xl border border-line/70 bg-cream p-6 card-warm hover:border-amber/70 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="w-10 h-10 rounded-lg grid place-items-center bg-paper text-amber border border-line">
                  <GraduationCap className="w-5 h-5" />
                </span>
                <span className={`font-mono ${monoSizes.xs} text-inkSoft`}>
                  0{i + 1}
                </span>
              </div>
              <div className="mt-6 font-serif text-xl text-ink leading-snug">
                {e.school}
              </div>
              <div className={`mt-1 text-inkSoft ${proseSizes.md}`}>{e.degree}</div>
              <div className={`mt-4 font-mono ${monoSizes.xs} uppercase ${tracking.status} text-amber`}>
                {e.period} {`${e.grade ? '.' : ''} ${e.grade || ''}`}
              </div>
              <p className={`mt-4 text-inkSoft ${proseSizes.md} leading-relaxed`}>
                {e.details}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
