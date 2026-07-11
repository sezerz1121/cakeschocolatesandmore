import { useRef } from "react";
import useScrollReveal from "../hooks/useScrollReveal.js";
const photos = ["cupcake-closeup.jpg", "cake-slice-berry.jpg", "latte-coffee.jpg", "bakery-bread.jpg", "cake-berries-top.jpg", "pastries-donuts.jpg"];
export default function InstagramFeed() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, { selector: ".social-reveal", stagger: .09, y: 28 });
  return <section ref={sectionRef} className="social-section"><div className="section-intro section-intro--center social-reveal"><p className="eyebrow">Our custom cake gallery</p><h2>MADE TO BE<br /><em>REMEMBERED.</em></h2><a href="#">Follow @cakeschocolatesandmore ↗</a></div><div className="social-grid">{photos.map((photo) => <a className="social-reveal" href="#" key={photo}><img src={`/images/${photo}`} alt="Custom cake creation" /></a>)}</div></section>;
}
