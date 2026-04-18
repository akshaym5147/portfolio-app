const SectionLabel = ({ index, label }) => {
  return (
    <div className="flex items-center gap-3">
      <span className="font-mono text-[12px] text-amber">// {index}</span>
      <span className="h-px w-10 bg-line" />
      <span className="font-mono text-[12px] uppercase tracking-[0.22em] text-inkSoft">
        {label}
      </span>
    </div>
  );
};

export default SectionLabel;
