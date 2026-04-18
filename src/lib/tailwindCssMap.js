// Font sizes — mono UI elements
export const monoSizes = {
  xxs: "text-[10.5px]", // Projects: tag pills
  xs: "text-[11px]",    // terminal header, stats label, footer, contact labels, blog tag
  sm: "text-[12px]",    // status badge, buttons, marquee, section label
  md: "text-[13px]",    // terminal body, navbar links
};

// Font sizes — body/prose text
export const proseSizes = {
  sm: "text-[14px]",      // experience location, skills item
  md: "text-[14.5px]",    // education degree/details, blog excerpt
  lg: "text-[15px]",      // experience bullets, projects description
  xl: "text-[16px]",      // experience intro paragraph
  "2xl": "text-[16.5px]", // contact intro paragraph
  "3xl": "text-[17px]",   // skills intro paragraph
};

// Font sizes — hero heading (responsive)
export const headingSizes = {
  base: "text-[54px]",
  sm: "sm:text-[72px]",
  lg: "md:text-[96px]",
};

// Font sizes — display/accent
export const displaySizes = {
  dropcap: "text-[64px]",        // About: drop cap letter
  testimonial: "text-[22px]",    // Testimonials/Blog: quote/title
  testimonialMd: "md:text-[28px]", // Testimonials: quote at md
};

// Line heights
export const leading = {
  tightest: "leading-[0.9]",  // About: drop cap
  tight: "leading-[0.98]",    // Hero h1 at md
  snug: "leading-[1.02]",     // Hero h1 base, Footer h3
  section: "leading-[1.05]",  // All section h2s
  quote: "leading-[1.45]",    // Testimonials quote
  prose: "leading-[1.75]",    // About paragraphs
  terminal: "leading-[1.7]",  // Hero terminal body
  blog: "leading-[1.2]",      // Blog card title
};

// Letter spacing
export const tracking = {
  heading: "tracking-[-0.025em]", // Hero h1
  marquee: "tracking-[0.22em]",   // marquee, footer labels, section label
  label: "tracking-[0.18em]",     // most uppercase labels
  status: "tracking-[0.16em]",    // status badge, testimonial title, blog read
  tags: "tracking-[0.14em]",      // Experience stack tags
  contact: "tracking-[0.2em]",    // Contact form header
};