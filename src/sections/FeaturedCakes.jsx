import { useRef } from "react";
import products from "../data/products.js";
import useScrollReveal from "../hooks/useScrollReveal.js";

function ProductCard({ product, index }) {
  return <article className={`product-card product-card--${index}`}>
    <div className="product-card__image"><img src={product.image} alt={product.name} /></div>
    <div className="product-card__body"><h3>{product.name}</h3></div>
  </article>;
}

export default function FeaturedCakes() {
  const sectionRef = useRef(null);
  useScrollReveal(sectionRef, { selector: ".collection-reveal", stagger: 0.13, y: 45 });
  return <section ref={sectionRef} className="collection-section">
    <div className="section-intro section-intro--split collection-reveal"><div><p className="eyebrow">Our masterpieces</p><h2>ONE-OF-A-KIND CAKES,<br /><em>MADE FROM SCRATCH.</em></h2></div><div><p>From elegant wedding tiers to joyful birthday centrepieces, every custom cake is crafted to reflect your style, your story and your celebration.</p></div></div>
    <div className="product-grid">{products.map((product, index) => <div className="collection-reveal" key={product.id}><ProductCard product={product} index={index} /></div>)}</div>
  </section>;
}
