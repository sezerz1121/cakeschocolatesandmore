import { Link } from "react-router-dom";
import site from "../../data/site.js";

export default function Footer() {
  return <footer className="site-footer">
    <div className="site-footer__top">
      <div><Link className="wordmark wordmark--full" to="/">Cakes<span>Chocolates</span><i>&amp; More</i></Link><p>Delightfully delicious custom cakes, designed in Austin for every meaningful celebration since 1996.</p></div>
      <div><h3>Explore</h3><Link to="/cakes">Flavours &amp; More</Link><Link to="/visit-us">Request a cake</Link><Link to="/our-story">Our masterpieces</Link></div>
      <div><h3>Come by</h3><Link to="/visit-us">Visit the bakery</Link><a href={site.phoneHref}>{site.phone}</a><a href={`mailto:${site.email}`}>{site.email}</a></div>
    </div>
    <div className="site-footer__bottom"><span>© {new Date().getFullYear()} Cakes Chocolates & More · Austin, TX</span><span>Instagram · Facebook</span></div>
  </footer>;
}
