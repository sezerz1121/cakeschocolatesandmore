import { useRef } from "react";
import testimonials from "../data/testimonials.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

export default function Testimonials() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, { selector: ".review-reveal", stagger: .14, y: 38 });
  return <section ref={sectionRef} className="review-section">
    <div className="review-intro review-reveal">
      <p className="eyebrow">Kind words from Austin</p>
      <h2>GOOD WORDS,<br /><em>GREAT CAKE.</em></h2>
      <p className="review-copy">We are proud to make weddings, birthdays and milestones feel even more unforgettable—one custom cake at a time.</p>
      <div className="review-score"><strong>4.9</strong><div><span>★★★★★</span><small>from 1,200+ happy locals</small></div></div>
      <div className="review-sprinkle review-sprinkle--one">✦</div><div className="review-sprinkle review-sprinkle--two">✦</div>
    </div>
    <div className="review-list">{testimonials.slice(0, 3).map((t, index) => <article className={`review-reveal review-card review-card--${index + 1}`} key={t.id}><span className="review-card__stars">★★★★★</span><p>“{t.quote}”</p><footer><strong>{t.name}</strong><i>Verified customer</i></footer></article>)}</div>
  </section>;
}
