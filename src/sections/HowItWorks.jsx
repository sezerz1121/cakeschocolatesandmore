import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Button from "../components/ui/Button.jsx";

gsap.registerPlugin(ScrollTrigger);
const steps = [["01", "Share your vision", "Tell us about your event, inspiration, flavours and design ideas."], ["02", "Design your masterpiece", "We shape the details into a cake that is uniquely yours."], ["03", "We craft every layer", "Our Austin cake artists bake every creation from scratch."], ["04", "Celebrate beautifully", "Your custom cake arrives ready to be the centrepiece."]];

export default function HowItWorks() {
  const sectionRef = useRef(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 701px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.from(".custom-photo-reveal", { xPercent: -9, opacity: 0, duration: .85, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 72%", once: true } });
      gsap.from(".custom-content-reveal", { x: 36, opacity: 0, duration: .65, stagger: .1, ease: "power3.out", scrollTrigger: { trigger: sectionRef.current, start: "top 68%", once: true } });
      gsap.to(".custom-section__photo img", { yPercent: 5, ease: "none", scrollTrigger: { trigger: sectionRef.current, start: "top bottom", end: "bottom top", scrub: .7 } });
    });
    media.add("(max-width: 700px) and (prefers-reduced-motion: no-preference)", () => {
      gsap.from(".custom-photo-reveal, .custom-content-reveal", { y: 20, opacity: 0, duration: .48, stagger: .07, ease: "power2.out", scrollTrigger: { trigger: sectionRef.current, start: "top 86%", once: true } });
    });
    return () => media.revert();
  }, { scope: sectionRef });
  return <section ref={sectionRef} id="how-it-works" className="custom-section">
    <div className="custom-section__photo custom-photo-reveal"><img src="/images/wedding-cake-tiered.jpg" alt="Elegant tiered wedding cake" /><p>YOUR CAKE,<br /><i>YOUR VISION.</i></p></div>
    <div className="custom-section__content"><p className="eyebrow custom-content-reveal">Custom cakes in Austin, TX</p><h2 className="custom-content-reveal">MADE JUST<br /><em>FOR YOUR OCCASION.</em></h2><p className="custom-section__lead custom-content-reveal">For weddings, birthdays, graduations and every event worth remembering, we bring art, taste and design together.</p><div className="steps custom-content-reveal">{steps.map(([number, title, text]) => <div className="step" key={number}><span>{number}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div><Button className="custom-content-reveal" to="/cakes">Get a custom quote <span>→</span></Button></div>
  </section>;
}
