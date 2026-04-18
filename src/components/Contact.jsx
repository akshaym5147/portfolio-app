import { useState } from "react";
import SectionLabel from "./SectionLabel";
import { profile } from "../mock";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Button } from "./ui/button";
import { Label } from "./ui/label";
import { toast } from "sonner";
import { Mail, MapPin, ArrowUpRight, Send, Loader2 } from "lucide-react";
import { monoSizes, proseSizes, leading, tracking } from "@/lib/tailwindCssMap";

const STORAGE_KEY = "akshay.portfolio.messages";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const submit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) {
      toast.error("Please fill name, email and message.");
      return;
    }
    if (!/^\S+@\S+\.\S+$/.test(form.email)) {
      toast.error("Hmm — that email doesn’t look right.");
      return;
    }
    setLoading(true);
    setTimeout(() => {
      try {
        const prev = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
        const entry = { ...form, at: new Date().toISOString() };
        localStorage.setItem(STORAGE_KEY, JSON.stringify([entry, ...prev]));
        toast.success("Message sent. I’ll reply within a day or two.");
        setForm({ name: "", email: "", subject: "", message: "" });
      } catch {
        toast.error("Something went wrong saving locally.");
      } finally {
        setLoading(false);
      }
    }, 700);
  };

  return (
    <section className="border-b border-line/60 bg-paper/40" id="contact">
      <div className="max-w-6xl mx-auto px-6 md:px-10 py-20 md:py-28 grid md:grid-cols-12 gap-10 md:gap-14">
        <div className="md:col-span-5">
          <SectionLabel index="08" label="contact" />
          <h2 className={`font-serif text-4xl md:text-5xl ${leading.section} text-ink tracking-tight mt-6`}>
            Let’s build something
            <span className="italic text-amber"> quietly remarkable</span>.
          </h2>
          <p className={`mt-5 text-inkSoft ${proseSizes["2xl"]} leading-relaxed max-w-md`}>
            I’m selectively taking on contract & advisory work for the rest of
            2025. Short notes, long briefs — both welcome.
          </p>

          <div className="mt-10 space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-4 group"
            >
              <span className="w-11 h-11 grid place-items-center rounded-full border border-line bg-cream text-amber group-hover:bg-amber group-hover:text-cream transition-colors">
                <Mail className="w-4 h-4" />
              </span>
              <div>
                <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.label} text-inkSoft`}>
                  email
                </div>
                <div className="text-ink group-hover:text-amber transition-colors">
                  {profile.email}
                </div>
              </div>
            </a>
            <div className="flex items-center gap-4">
              <span className="w-11 h-11 grid place-items-center rounded-full border border-line bg-cream text-amber">
                <MapPin className="w-4 h-4" />
              </span>
              <div>
                <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.label} text-inkSoft`}>
                  based
                </div>
                <div className="text-ink">{profile.location}</div>
              </div>
            </div>
          </div>

          <div className="mt-10 flex flex-wrap gap-3">
            {profile.socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noreferrer"
                className={`inline-flex items-center gap-1.5 font-mono text-[11.5px] uppercase ${tracking.status} border border-line rounded-full px-3.5 py-2 bg-cream text-inkSoft hover:border-amber hover:text-amber transition-colors`}
              >
                {s.label}
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>

        <form
          onSubmit={submit}
          className="md:col-span-7 rounded-2xl border border-line/70 bg-cream p-6 md:p-10 card-warm"
        >
          <div className={`font-mono ${monoSizes.xs} uppercase ${tracking.contact} text-amber`}>
            // new_message.txt
          </div>
          <div className="mt-6 grid sm:grid-cols-2 gap-5">
            <div>
              <Label htmlFor="name" className={`font-mono ${monoSizes.xs} uppercase tracking-wider text-inkSoft`}>
                your name
              </Label>
              <Input
                id="name"
                value={form.name}
                onChange={update("name")}
                placeholder="Ada Lovelace"
                className="mt-2 bg-paper border-line focus-visible:ring-amber h-11"
              />
            </div>
            <div>
              <Label htmlFor="email" className={`font-mono ${monoSizes.xs} uppercase tracking-wider text-inkSoft`}>
                email
              </Label>
              <Input
                id="email"
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="ada@analytical.engine"
                className="mt-2 bg-paper border-line focus-visible:ring-amber h-11"
              />
            </div>
          </div>
          <div className="mt-5">
            <Label htmlFor="subject" className={`font-mono ${monoSizes.xs} uppercase tracking-wider text-inkSoft`}>
              subject
            </Label>
            <Input
              id="subject"
              value={form.subject}
              onChange={update("subject")}
              placeholder="A little project I'd love your eyes on…"
              className="mt-2 bg-paper border-line focus-visible:ring-amber h-11"
            />
          </div>
          <div className="mt-5">
            <Label htmlFor="message" className={`font-mono ${monoSizes.xs} uppercase tracking-wider text-inkSoft`}>
              message
            </Label>
            <Textarea
              id="message"
              rows={6}
              value={form.message}
              onChange={update("message")}
              placeholder="Tell me about the problem, the people, the timeline…"
              className="mt-2 bg-paper border-line focus-visible:ring-amber resize-none"
            />
          </div>

          <div className="mt-7 flex flex-wrap items-center justify-between gap-4">
            <div className={`font-mono ${monoSizes.xs} text-inkSoft`}>
              <span className="text-amber">❯</span> saved locally for this demo
            </div>
            <Button
              type="submit"
              disabled={loading}
              className={`bg-ink text-cream hover:bg-amber rounded-full px-6 h-12 font-mono ${monoSizes.sm} tracking-wide`}
            >
              {loading ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" /> sending
                </>
              ) : (
                <>
                  send message <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Contact;
