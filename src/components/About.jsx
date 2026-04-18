import { monoSizes, proseSizes, displaySizes, leading, tracking } from "@/lib/tailwindCssMap";
import { profile, aboutParagraphs } from "../mock";
import SectionLabel from "./SectionLabel";

const About = () => {
  return (
    <section
      id="about"
      className="border-b border-line/60"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5">
          <SectionLabel index="01" label="about" />
          <h2 className={`font-serif text-4xl md:text-5xl ${leading.section} text-ink tracking-tight mt-6`}>
            An engineer who still writes
            <span className="italic text-amber"> by hand </span>
            before the keyboard.
          </h2>

          <div className="mt-8 rounded-xl overflow-hidden border border-line/70 card-warm">
            <img
              src={profile.portrait}
              alt={`${profile.name} — ${profile.role}`}
              className="w-full h-[360px] object-cover"
              loading="lazy"
            />
          </div>
        </div>

        <div className="md:col-span-7 md:pt-14">
          <div className={`space-y-6 text-inkSoft text-lg ${leading.prose}`}>
            {aboutParagraphs.map((p, i) => (
              <p key={i}>
                {i === 0 ? (
                  <>
                    <span className={`float-left font-serif ${displaySizes.dropcap} ${leading.tightest} pr-3 pt-1 text-amber`}>
                      {p.charAt(0)}
                    </span>
                    {p.slice(1)}
                  </>
                ) : (
                  p
                )}
              </p>
            ))}
          </div>

          <div className="mt-10 grid sm:grid-cols-2 gap-4">
            {[
              {
                title: "Currently",
                body: "Senior engineer at Lumen Health, leading the patient-facing platform."
              },
              {
                title: "Previously",
                body: "Mosaic Labs, Finch & Fig, plus a Winter ’22 at the Recurse Center."
              },
              {
                title: "Writing",
                body: "Essays on slow software, Postgres and warm interfaces."
              },
              {
                title: "Off-hours",
                body: "Home-roasting coffee, Tamil literature, over-engineering my garden."
              }
            ].map((c) => (
              <div
                key={c.title}
                className="rounded-lg border border-line/70 bg-cream px-5 py-4 hover:border-amber/70 transition-colors"
              >
                <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.label} text-amber mb-1`}>
                  {c.title}
                </div>
                <div className={`text-ink ${proseSizes.lg} leading-relaxed`}>
                  {c.body}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
