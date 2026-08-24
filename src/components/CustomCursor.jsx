import React, { useEffect, useRef } from "react";

/**
 * CustomCursor
 * Drop this once near the root of your app (e.g. in App.jsx / Layout.jsx).
 *
 * Props:
 * - clickAnimation: "pop" | "ripple" | "both"  (default: "both")
 *
 * Structure (important for the fix below):
 * - OUTER div: only ever gets `transform: translate3d(...)` from the rAF
 *   loop — this is what makes the cursor follow the mouse smoothly.
 * - INNER div: only ever gets `scale` from CSS (hover-grow, click-pop),
 *   anchored at its own center (transform-origin: center, the default).
 * Keeping position and scale on SEPARATE elements means scaling never
 * shifts the cursor's tracked position — that's what caused the
 * "jumps away from the click point" bug when both lived on one element
 * with an off-center transform-origin.
 */

const CURSOR_SVG = `
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M4 2L4 20.5L9 16.5L12.5 22L15.5 20.5L12 15L18.5 14.5L4 2Z"
      fill="#111111" stroke="#ffffff" stroke-width="1.2" stroke-linejoin="round"/>
  </svg>
`;
const CURSOR_WIDTH = 18;
const CURSOR_HEIGHT = 18;

export default function CustomCursor({ clickAnimation = "both" }) {
  const outerRef = useRef(null);   // position only
  const innerRef = useRef(null);   // scale only
  const rippleLayerRef = useRef(null);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });
  const rafId = useRef(null);

  const LERP_FACTOR = 0.15;

  useEffect(() => {
    const outer = outerRef.current;
    const inner = innerRef.current;
    const rippleLayer = rippleLayerRef.current;
    if (!outer || !inner) return;

    const handleMouseMove = (e) => {
      target.current.x = e.clientX;
      target.current.y = e.clientY;
    };

    const handleClick = (e) => {
      if (clickAnimation === "pop" || clickAnimation === "both") {
        inner.classList.remove("cursor--pop");
        void inner.offsetWidth; // restart animation on rapid clicks
        inner.classList.add("cursor--pop");
      }

      if (clickAnimation === "ripple" || clickAnimation === "both") {
        const ring = document.createElement("span");
        ring.className = "cursor-ripple";
        ring.style.left = `${e.clientX}px`;
        ring.style.top = `${e.clientY}px`;
        rippleLayer.appendChild(ring);
        ring.addEventListener("animationend", () => ring.remove());
      }
    };

    const handleOver = (e) => {
      if (e.target.closest("[data-cursor-hover]")) {
        inner.classList.add("cursor--hover");
      }
    };
    const handleOut = (e) => {
      if (e.target.closest("[data-cursor-hover]")) {
        inner.classList.remove("cursor--hover");
      }
    };

    // Hide the custom cursor when the real mouse leaves the browser
    // window/viewport, and show it again when it re-enters.
    // `relatedTarget` is null (or `nodeName === "HTML"` in some browsers)
    // specifically when the pointer exits the document entirely.
    const handleDocumentMouseOut = (e) => {
      if (!e.relatedTarget && !e.toElement) {
        outer.classList.add("cursor--outside");
      }
    };
    const handleDocumentMouseOver = () => {
      outer.classList.remove("cursor--outside");
    };

    // Switching apps (Alt+Tab, clicking another window) doesn't fire a
    // mouseover event when you come back unless the mouse physically
    // moves — so also clear the hidden state whenever the window/tab
    // regains focus or visibility.
    const handleWindowFocus = () => {
      outer.classList.remove("cursor--outside");
    };
    const handleVisibilityChange = () => {
      if (document.visibilityState === "visible") {
        outer.classList.remove("cursor--outside");
      }
    };

    // A trackpad pinch-zoom fires a rapid burst of resize events while
    // the viewport is still changing — reading clientX/clientY mid-burst
    // can produce a visible flicker/jump. Simplest fix: hide the cursor
    // for the duration of the gesture and fade it back in ~150ms after
    // the last resize event (i.e. once zooming has settled).
    let zoomTimeout;
    const handleResize = () => {
      outer.classList.add("cursor--outside");
      clearTimeout(zoomTimeout);
      zoomTimeout = setTimeout(() => {
        outer.classList.remove("cursor--outside");
      }, 150);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    document.addEventListener("mouseover", handleOver);
    document.addEventListener("mouseout", handleOut);
    document.addEventListener("mouseout", handleDocumentMouseOut);
    document.addEventListener("mouseover", handleDocumentMouseOver);
    window.addEventListener("focus", handleWindowFocus);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", handleResize);
    inner.addEventListener("animationend", () => inner.classList.remove("cursor--pop"));

    const animate = () => {
      current.current.x += (target.current.x - current.current.x) * LERP_FACTOR;
      current.current.y += (target.current.y - current.current.y) * LERP_FACTOR;

      // Only the OUTER element moves. Inner element's own transform
      // (scale) is left entirely to CSS and never touched here.
      outer.style.transform = `translate3d(${current.current.x}px, ${current.current.y}px, 0)`;

      rafId.current = requestAnimationFrame(animate);
    };
    rafId.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
      document.removeEventListener("mouseover", handleOver);
      document.removeEventListener("mouseout", handleOut);
      document.removeEventListener("mouseout", handleDocumentMouseOut);
      document.removeEventListener("mouseover", handleDocumentMouseOver);
      window.removeEventListener("focus", handleWindowFocus);
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", handleResize);
      clearTimeout(zoomTimeout);
      cancelAnimationFrame(rafId.current);
    };
  }, [clickAnimation]);

  return (
    <>
      <style>{`
        * {
          cursor: none;
        }

        .custom-cursor-outer {
          position: fixed;
          top: 0;
          left: 0;
          width: ${CURSOR_WIDTH}px;
          height: ${CURSOR_HEIGHT}px;
          pointer-events: none;
          z-index: 9999;
          will-change: transform;
          opacity: 1;
          transition: opacity 0.15s ease;
        }

        .custom-cursor-outer.cursor--outside {
          opacity: 0;
        }

        .custom-cursor-inner {
          width: 100%;
          height: 100%;
          transform-origin: center; /* always scales in place, no drift */
          transition: scale 0.25s cubic-bezier(0.4, 0, 0.2, 1);
        }

        .custom-cursor-inner svg {
          width: 100%;
          height: 100%;
          display: block;
        }

        .custom-cursor-inner.cursor--hover {
          scale: 1.3;
        }

        /* POP: scales up in place, then eases back down. No translate. */
        .custom-cursor-inner.cursor--pop {
          animation: cursorPop 0.35s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes cursorPop {
          0%   { scale: 1; }
          40%  { scale: 1.2; }
          100% { scale: 1; }
        }

        /* RIPPLE: expanding ring fading out from the click point */
        .cursor-ripple-layer {
          position: fixed;
          inset: 0;
          pointer-events: none;
          z-index: 9998;
        }

        .cursor-ripple {
          position: fixed;
          top: 0;
          left: 0;
          width: 12px;
          height: 12px;
          margin: -6px 0 0 -6px;
          border-radius: 50%;
          border: 1.5px solid rgba(17, 17, 17, 0.6);
          animation: rippleExpand 0.6s ease-out forwards;
        }

        @keyframes rippleExpand {
          0%   { transform: scale(0.3); opacity: 0.8; }
          100% { transform: scale(4); opacity: 0; }
        }

        @media (hover: none) {
          .custom-cursor-outer, .cursor-ripple-layer {
            display: none;
          }
          * {
            cursor: auto;
          }
        }
      `}</style>
      <div ref={outerRef} className="custom-cursor-outer">
        <div
          ref={innerRef}
          className="custom-cursor-inner"
          dangerouslySetInnerHTML={{ __html: CURSOR_SVG }}
        />
      </div>
      <div ref={rippleLayerRef} className="cursor-ripple-layer" />
    </>
  );
}