import { useRef } from "react";
import { Link } from "react-router-dom";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Button from "../components/ui/Button.jsx";

export default function Hero() {
  const heroRef = useRef(null);
  useGSAP(() => {
    const media = gsap.matchMedia();
    media.add("(min-width: 701px) and (prefers-reduced-motion: no-preference)", () => {
      const timeline = gsap.timeline({ defaults: { ease: "power3.out" } });
      timeline.from(".hero-animate", { y: 25, opacity: 0, duration: .65, stagger: .1 })
        .from(".hero-product", { y: 35, scale: .88, opacity: 0, duration: .82, ease: "back.out(1.25)" }, .24)
        .from(".hero-offer, .hero-discount", { scale: .65, opacity: 0, duration: .48, stagger: .1, ease: "back.out(1.7)" }, .55);
      gsap.to(".hero-offer", { y: -7, rotation: -1, duration: 3.2, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.to(".hero-squiggle", { rotation: 8, duration: 2.5, yoyo: true, repeat: -1, ease: "sine.inOut" });
      gsap.utils.toArray(".hero-float").forEach((item, index) => {
        gsap.to(item, { x: gsap.utils.random(-9, 10), y: gsap.utils.random(-15, -6), rotation: gsap.utils.random(-14, 14), duration: gsap.utils.random(2.2, 4.2), delay: index * .13, repeat: -1, yoyo: true, ease: "sine.inOut" });
      });
    });
    media.add("(max-width: 700px) and (prefers-reduced-motion: no-preference)", () => gsap.timeline({ defaults: { ease: "power2.out" } })
      .from(".hero-animate", { y: 14, opacity: 0, duration: .36, stagger: .06 })
      .from(".hero-product", { y: 12, scale: .96, opacity: 0, duration: .42 }, .15)
      .from(".hero-offer, .hero-discount", { scale: .9, opacity: 0, duration: .28, stagger: .05 }, .3));
    return () => media.revert();
  }, { scope: heroRef });

  return <section ref={heroRef} className="hero-shell">
    <div className="hero-canvas">
      <div className="hero-copy hero-copy--new">
        <p className="eyebrow hero-animate">Custom cakes in Austin, TX</p>
        <h1 className="hero-animate">CELEBRATE LIFE<br />WITH <em>CAKES CHOCOLATES<br />&amp; MORE.</em></h1>
        <p className="hero-description hero-animate">Artful custom cakes, cupcakes and sweet centrepieces made from scratch for your most meaningful celebrations.</p>
        <div className="hero-actions hero-animate"><Button to="/cakes">Request a quote <span aria-hidden="true">→</span></Button><Link className="text-link" to="/our-story">View our work <span>↗</span></Link></div>
      </div>
      <div className="hero-watermark">CCM</div>
      <div className="hero-product"><img src="/images/generated/cupcake-cluster.png" alt="Colourful custom cupcakes" /></div>
      <div className="hero-offer"><span>HANDCRAFTED<br />IN AUSTIN</span><strong>Custom<br />Cupcakes</strong><small>Made to match your moment</small></div>
      <div className="hero-discount">27+<small>years of<br />cake art</small></div>
      <svg className="hero-squiggle hero-squiggle--green" viewBox="0 0 70 38" aria-hidden="true"><path d="M5 6c14-14 18 22 29 9S46 2 57 24c3 6 6 7 9 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg>
      <svg className="hero-squiggle hero-squiggle--blue" viewBox="0 0 70 38" aria-hidden="true"><path d="M5 6c14-14 18 22 29 9S46 2 57 24c3 6 6 7 9 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg>
      <svg className="hero-squiggle hero-squiggle--pink hero-float" viewBox="0 0 70 38" aria-hidden="true"><path d="M5 6c14-14 18 22 29 9S46 2 57 24c3 6 6 7 9 5" fill="none" stroke="currentColor" strokeWidth="6" strokeLinecap="round" /></svg>
      <span className="hero-star hero-star--one hero-float" aria-hidden="true">✦</span>
      <span className="hero-star hero-star--two hero-float" aria-hidden="true">✦</span>
      <span className="hero-dot hero-dot--one hero-float" aria-hidden="true" />
      <span className="hero-dot hero-dot--two hero-float" aria-hidden="true" />
      <span className="hero-mini-sticker hero-float" aria-hidden="true">YUM!</span>
      <div className="hero-round-link">SCROLL TO EXPLORE <b>↓</b></div>
    </div>
  </section>;
}
