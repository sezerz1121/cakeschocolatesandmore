import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

// A deliberately lightweight, responsive reveal: desktop gets a little more
// lift, while touch devices only fade and rise a short distance.
export default function useScrollReveal(containerRef, options = {}) {
  const { selector = ".reveal", stagger = 0.12, y = 32, start = "top 82%" } = options;
  useGSAP(() => {
    const targets = gsap.utils.toArray(selector, containerRef.current);
    if (!targets.length) return;

    const media = gsap.matchMedia();
    media.add("(prefers-reduced-motion: reduce)", () => gsap.set(targets, { clearProps: "all" }));
    media.add("(min-width: 701px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.from(targets, { y, opacity: 0, duration: 0.78, stagger, ease: "power3.out", scrollTrigger: { trigger: containerRef.current, start, once: true } });
    });
    media.add("(max-width: 700px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.from(targets, { y: Math.min(y, 20), opacity: 0, duration: 0.48, stagger: Math.min(stagger, 0.08), ease: "power2.out", scrollTrigger: { trigger: containerRef.current, start: "top 88%", once: true } });
    });
    return () => media.revert();
  }, { scope: containerRef });
}
