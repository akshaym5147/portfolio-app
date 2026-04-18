import { posts } from "../mock";
import SectionLabel from "./SectionLabel";
import { ArrowUpRight, Clock } from "lucide-react";

const Blog = () => {
  return (
    <section className="border-b border-line/60" id="blog">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel index="07" label="writing" />
            <h2 className="font-serif text-4xl md:text-5xl leading-[1.05] text-ink tracking-tight mt-6">
              Notes from the
              <span className="italic text-amber"> workbench</span>.
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-[12px] uppercase tracking-[0.18em] text-ink hover:text-amber link-sweep"
          >
            read all essays <ArrowUpRight className="w-4 h-4" />
          </a>
        </div>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {posts.map((p) => (
            <a
              key={p.slug}
              href="#"
              className="group rounded-xl border border-line/70 bg-cream p-6 card-warm hover:border-amber/70 transition-colors flex flex-col"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-amber">
                  {p.tag}
                </span>
                <span className="flex items-center gap-1 font-mono text-[11px] text-inkSoft">
                  <Clock className="w-3 h-3" /> {p.readMins} min
                </span>
              </div>
              <div className="mt-5 font-serif text-[22px] leading-[1.2] text-ink group-hover:text-amber transition-colors">
                {p.title}
              </div>
              <p className="mt-3 text-inkSoft text-[14.5px] leading-relaxed">
                {p.excerpt}
              </p>
              <div className="mt-auto pt-6 flex items-center justify-between">
                <span className="font-mono text-[11.5px] text-inkSoft">
                  {p.date}
                </span>
                <span className="inline-flex items-center gap-1 text-ink group-hover:text-amber transition-colors">
                  <span className="font-mono text-[11.5px] uppercase tracking-[0.16em]">
                    read
                  </span>
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
