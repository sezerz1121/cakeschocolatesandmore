import Button from "../components/ui/Button.jsx";

const flavourGroups = [
  { title: "Classic favourites", items: ["Vanilla bean", "Chocolate", "Yellow cake", "Marble"] },
  { title: "Signature flavours", items: ["Almond vanilla", "Red velvet", "Champagne", "Italian cream", "Carrot cake", "Lemon", "Strawberry", "Coconut"] },
  { title: "Chocolate & celebration", items: ["Double chocolate", "Chocolate fudge", "German chocolate", "Chocolate mint", "Confetti", "Cookies & cream"] },
];

const fillings = ["Chocolate ganache", "Vanilla custard", "Lemon curd", "Salted caramel", "Peanut butter", "Fresh strawberry", "Coconut cream", "Chocolate mousse"];
const finishes = ["Vanilla buttercream", "Chocolate buttercream", "Fluffy whipped icing", "Rolled fondant", "Chocolate ganache"];

export default function Cakes() {
  return (
    <div className="flavours-page">
      <header className="flavours-hero">
        <div>
          <p className="eyebrow">Cakes Chocolates & More · Austin, TX</p>
          <h1>FLAVOURS<br />&amp; <em>MORE.</em></h1>
          <p>Beautiful custom cakes should taste as memorable as they look. Explore our cake flavours, fillings and finishes, all chosen to make your Austin celebration unmistakably yours.</p>
          <Button to="/visit-us">Start your cake enquiry <span aria-hidden="true">→</span></Button>
        </div>
        <aside className="flavours-hero__note"><span>Made for</span><strong>your<br />moment</strong><small>Thoughtful flavour pairings for every celebration.</small></aside>
      </header>

      <section className="flavours-intro">
        <p className="eyebrow">From the inside out</p>
        <h2>FIND YOUR<br /><em>PERFECT SLICE.</em></h2>
        <p>Whether you&apos;re planning a wedding, birthday, graduation or company gathering, we&apos;ll help you create a flavour combination that feels personal, polished and completely delicious. Start with a cake flavour, add a filling, then choose the finish that brings your design to life.</p>
      </section>

      <section className="flavour-menu" aria-labelledby="flavour-heading">
        <div className="flavour-menu__heading"><p className="eyebrow">Cake flavours</p><h2 id="flavour-heading">THE MAIN<br /><em>EVENT.</em></h2></div>
        <div className="flavour-menu__groups">{flavourGroups.map((group) => <article key={group.title}><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul></article>)}</div>
      </section>

      <section className="pairings-section">
        <div className="pairings-section__image"><img src="/images/stock/stock-cake-2.jpg" alt="Elegant custom cake with handcrafted details" /></div>
        <div className="pairings-section__copy"><p className="eyebrow">Make it yours</p><h2>FILL IT.<br /><em>FINISH IT.</em></h2><p>Layers are where a custom cake becomes your cake. Choose a filling for a little contrast, then select an icing or finish that suits the look, texture and sweetness you have in mind.</p><div className="pairings-grid"><div><h3>Fillings</h3><ul>{fillings.map((item) => <li key={item}>{item}</li>)}</ul></div><div><h3>Icings &amp; finishes</h3><ul>{finishes.map((item) => <li key={item}>{item}</li>)}</ul></div></div></div>
      </section>

      <section className="flavours-cta">
        <p className="eyebrow">Not sure where to begin?</p><h2>WE&apos;LL HELP YOU<br /><em>CHOOSE THE GOOD STUFF.</em></h2><p>Tell us about your event, guest count and favourite flavours. Our team will guide you toward a custom cake that looks incredible and tastes even better.</p><Button to="/visit-us" variant="pink">Request a custom quote <span aria-hidden="true">→</span></Button>
      </section>
    </div>
  );
}
