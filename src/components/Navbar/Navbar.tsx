import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);

  const activeClass = ({ isActive }: { isActive: boolean }) =>
    isActive ? styles.activeLink : "";

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContent}>
        <div className={styles.logo}>
          <div className={styles.logoPlaceholder}></div>
          <span>AgroConecta</span>
        </div>

        <ul className={styles.navLinks}>
          <li>
            <NavLink to="/" className={activeClass}>Inicio</NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeClass}>Sobre nosotros</NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={activeClass}>Marketplace</NavLink>
          </li>
        </ul>

        <div className={styles.actions}>
          <Button icon="🛒" to="/carrito" variant="outline" />
          <Button icon="👤" to="/perfil" variant="outline" />
          <Button to="/productos" variant="filled">
            Explorar Productos
          </Button>
        </div>

        <div
          className={`${styles.hamburger} ${menuOpen ? styles.open : ""}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <ul
          className={`${styles.navLinksMobile} ${
            menuOpen ? styles.active : ""
          }`}
        >
          <li>
            <NavLink to="/" className={activeClass} onClick={toggleMenu}>
              Inicio
            </NavLink>
          </li>
          <li>
            <NavLink to="/about" className={activeClass} onClick={toggleMenu}>
              Sobre nosotros
            </NavLink>
          </li>
          <li>
            <NavLink to="/productos" className={activeClass} onClick={toggleMenu}>
              Marketplace
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;