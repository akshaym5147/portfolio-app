// Font sizes — mono UI elements (labels, buttons, marquee)
const monoSizes = {
  xs: "text-[11px]",   // terminal header, stats label
  sm: "text-[12px]",   // status badge, buttons, meta row, marquee
  md: "text-[13px]",   // terminal body
};

// Font sizes — hero heading (responsive)
const headingSizes = {
  base: "text-[54px]",
  sm: "sm:text-[72px]",
  lg: "md:text-[96px]",
};

// Line heights
const leading = {
  tight: "leading-[0.98]",   // heading at md breakpoint
  snug: "leading-[1.02]",    // heading base
  relaxed: "leading-[1.7]",  // terminal body
};

// Letter spacing
const tracking = {
  status: "tracking-[0.16em]",   // status badge
  marquee: "tracking-[0.22em]",  // marquee track
  heading: "tracking-[-0.025em]", // h1 negative tracking
};

export {
    monoSizes,
    headingSizes,
    leading,
    tracking
}