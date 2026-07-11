import { useState } from "react";
import { NavLink, Link } from "react-router-dom";

const navItems = [
  { label: "Cakes", to: "/cakes" },
  { label: "Custom cupcakes", to: "/desserts" },
  { label: "Our masterpieces", to: "/our-story" },
  { label: "Contact us", to: "/visit-us" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="wordmark wordmark--full" onClick={() => setMenuOpen(false)}>Cakes<span>Chocolates</span><i>&amp; More</i></Link>
        <nav className="desktop-nav">
          {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
        </nav>
        <button className="menu-button" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? "×" : "☰"}</button>
      </div>
      {menuOpen && <nav className="mobile-nav">{navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={() => setMenuOpen(false)}>{item.label}</NavLink>)}</nav>}
    </header>
  );
}
