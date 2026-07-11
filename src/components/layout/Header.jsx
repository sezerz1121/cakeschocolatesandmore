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
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <Link to="/" className="wordmark wordmark--full" onClick={closeMenu}>Cakes<span>Chocolates</span><i>&amp; More</i></Link>
        <nav className="desktop-nav" aria-label="Primary navigation">
          {navItems.map((item) => <NavLink key={item.to} to={item.to}>{item.label}</NavLink>)}
        </nav>
        <button className="menu-button" type="button" aria-label="Toggle menu" aria-expanded={menuOpen} onClick={() => setMenuOpen((open) => !open)}>{menuOpen ? "\u00d7" : "\u2630"}</button>
      </div>
      {menuOpen && <nav className="mobile-nav" aria-label="Mobile navigation">{navItems.map((item) => <NavLink key={item.to} to={item.to} onClick={closeMenu}>{item.label}</NavLink>)}</nav>}
    </header>
  );
}
