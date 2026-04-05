import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import styles from "./Navbar.module.css";
import Button from "../Button/Button";

const Navbar: React.FC = () => {
    const location = useLocation();

    return (
        <nav className={styles.navbar}>
            <div className={styles.logo}>
                <div className={styles.logoPlaceholder}></div>
                <span>AgroConecta</span>
            </div>


            <ul className={styles.navLinks}>
                <li><NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink : ""}>Inicio</NavLink></li>
                <li><NavLink to="/about" className={({ isActive }) => isActive ? styles.activeLink : ""}>Sobre nosotros</NavLink></li>
                <li><NavLink to="/services" className={({ isActive }) => isActive ? styles.activeLink : ""}>Servicios</NavLink></li>
                <li><NavLink to="/contact" className={({ isActive }) => isActive ? styles.activeLink : ""}>Contacto</NavLink></li>
                <li><NavLink to="/marketplace" className={({ isActive }) => isActive ? styles.activeLink : ""}>Marketplace</NavLink></li>
            </ul>

            <div className={styles.actions}>
                <Button icon="🛒" to="/carrito" variant="outline" />
                <Button icon="👤" to="/perfil" variant="outline" />
                <Button to="/productos" variant="filled">Explorar Productos</Button>
            </div>
        </nav>
    );
};

export default Navbar;