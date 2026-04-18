import { useState } from "react";
import { testimonials } from "../mock";
import SectionLabel from "./SectionLabel";
import { Quote, ChevronLeft, ChevronRight } from "lucide-react";

const Testimonials = () => {
  const [i, setI] = useState(0);
  const total = testimonials.length;
  const prev = () => setI((v) => (v - 1 + total) % total);
  const next = () => setI((v) => (v + 1) % total);
  const active = testimonials[i];

  return (
    <section className="border-b border-line/60 bg-paper/40" id="testimonials">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="max-w-3xl">
          <SectionLabel index="06" label="kind words" />
          <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight mt-6">
            What folks I’ve built with
            <span className="italic text-amber"> have said</span>.
          </h2>
        </div>

        <div className="mt-14 grid md:grid-cols-12 gap-8 items-start">
          <div className="md:col-span-8 relative rounded-2xl border border-line/70 bg-cream p-8 md:p-12 card-warm">
            <Quote className="absolute top-6 left-6 w-10 h-10 text-amber/30" />
            <p className="font-serif text-[22px] md:text-[28px] leading-[1.45] text-ink relative z-10">
              “{active.quote}”
            </p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-amber/15 border border-amber/40 grid place-items-center font-serif text-amber text-lg">
                {active.name.charAt(0)}
              </div>
              <div>
                <div className="font-medium text-ink">{active.name}</div>
                <div className="font-mono text-[11.5px] uppercase tracking-[0.16em] text-inkSoft">
                  {active.title}
                </div>
              </div>
            </div>
          </div>

          <div className="md:col-span-4 flex md:flex-col gap-4 justify-between">
            <div className="flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  aria-label={`Testimonial ${idx + 1}`}
                  onClick={() => setI(idx)}
                  className={`h-1.5 rounded-full transition-all ${
                    idx === i ? "w-10 bg-amber" : "w-5 bg-line hover:bg-inkSoft/60"
                  }`}
                />
              ))}
            </div>
            <div className="flex items-center gap-3">
              <button
                onClick={prev}
                className="w-11 h-11 rounded-full border border-line bg-cream hover:border-amber hover:text-amber transition-colors grid place-items-center"
                aria-label="Previous"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-11 h-11 rounded-full border border-line bg-ink text-cream hover:bg-amber hover:border-amber transition-colors grid place-items-center"
                aria-label="Next"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              <span className="font-mono text-[12px] text-inkSoft">
                0{i + 1} / 0{total}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
