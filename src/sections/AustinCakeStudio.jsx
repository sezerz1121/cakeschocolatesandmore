import Button from "../components/ui/Button.jsx";

export default function AustinCakeStudio() {
  return <section className="austin-studio-section">
    <div className="austin-studio-section__image"><img src="/images/stock/stock-cake-1.jpg" alt="Artfully decorated custom cake by Cakes Chocolates and More in Austin" /></div>
    <div className="austin-studio-section__copy">
      <p className="eyebrow">Custom cake studio in Austin, TX</p>
      <h2>DESIGNED TO DELIGHT.<br /><em>CRAFTED TO BE REMEMBERED.</em></h2>
      <p>At Cakes Chocolates and More, we believe a cake should feel as personal as the occasion it celebrates. Since 1996, our Austin cake artists have transformed ideas into edible works of art—layer by delicious layer.</p>
      <p>Whether you are planning a wedding, birthday, graduation, anniversary or corporate event, we pair meticulous design with exceptional flavour to create a centrepiece worth gathering around.</p>
      <Button to="/visit-us" variant="outline">Start your cake order <span>→</span></Button>
    </div>
  </section>;
}
