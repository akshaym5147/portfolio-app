import { monoSizes, tracking } from "@/lib/tailwindCssMap";

const SectionLabel = ({ index, label }) => {
  return (
    <div className="flex items-center gap-3">
      <span className={`font-mono ${monoSizes.sm} text-amber`}>// {index}</span>
      <span className="h-px w-10 bg-line" />
      <span className={`font-mono ${monoSizes.sm} uppercase ${tracking.marquee} text-inkSoft`}>
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;
