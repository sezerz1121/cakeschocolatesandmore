import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const masterpieces = [
  { name: "Chocolate celebration cake", image: "/images/stock/stock-cake-1.jpg", size: "large" },
  { name: "Garden wedding cake", image: "/images/stock/stock-cake-2.jpg", size: "tall" },
  { name: "Modern birthday cake", image: "/images/stock/stock-cake-3.jpg", size: "small" },
  { name: "Dripping party cake", image: "/images/cake-pink-celebration.jpg", size: "wide" },
  { name: "Berry celebration cake", image: "/images/cake-berries-top.jpg", size: "small" },
  { name: "Custom cupcake display", image: "/images/cupcakes-pastel.jpg", size: "tall" },
];

export default function OurStory() {
  const pageRef = useRef(null);
  useGSAP(() => { gsap.from(".masterpiece-reveal", { y: 28, opacity: 0, duration: .65, stagger: .1, ease: "power3.out" }); }, { scope: pageRef });
  return <section ref={pageRef} className="masterpieces-page">
    <header className="masterpieces-header masterpiece-reveal"><p className="eyebrow">Cakes Chocolates & More</p><h1>OUR <em>MASTERPIECES.</em></h1><p>Every design begins with a story, then becomes a cake worth remembering.</p></header>
    <div className="masterpieces-grid">{masterpieces.map((piece) => <article className={`masterpiece-card masterpiece-card--${piece.size} masterpiece-reveal`} key={piece.name}><img src={piece.image} alt={piece.name} /><div><span>Custom cakes</span><h2>{piece.name}</h2></div></article>)}</div>
  </section>;
}
