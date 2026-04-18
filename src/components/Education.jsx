import { education } from "../mock";
import SectionLabel from "./SectionLabel";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section className="border-b border-line/60" id="education">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel index="05" label="education" />
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight mt-6">
            A degree, a residency, and
            <span className="italic text-amber"> a stubborn habit </span>
            of learning.
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
                <span className="font-mono text-[11px] text-inkSoft">
                  0{i + 1}
                </span>
              </div>
              <div className="mt-6 font-serif text-xl text-ink leading-snug">
                {e.school}
              </div>
              <div className="mt-1 text-inkSoft text-[14.5px]">{e.degree}</div>
              <div className="mt-4 font-mono text-[11px] uppercase tracking-[0.16em] text-amber">
                {e.period} · {e.grade}
              </div>
              <p className="mt-4 text-inkSoft text-[14.5px] leading-relaxed">
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
