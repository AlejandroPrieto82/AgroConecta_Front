import React from "react";
import styles from "./Footer.module.css";

const Footer: React.FC = () => {
    return (
        <footer className={styles.footer}>
            {/* Sección superior */}
            <div className={styles.top}>
                {/* Logo izquierda */}
                <div className={styles.logoSection}>
                    <div className={styles.logoPlaceholder}></div>
                    <span>AgroConecta</span>
                </div>

                {/* Links centro */}
                <div className={styles.linksSection}>
                    <div>
                        <h4>Rápidos</h4>
                        <ul>
                            <li>Soy agricultor</li>
                            <li>Quiero comprar</li>
                            <li>Productos</li>
                            <li>Contacto</li>
                            <li>Ser un aliado</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li>Privacidad</li>
                            <li>Términos</li>
                            <li>Condiciones</li>
                            <li>Contacto</li>
                        </ul>
                    </div>
                </div>
            </div>

            {/* Sección inferior */}
            <div className={styles.bottom}>
                <div className={styles.socials}>
                    {/* Redes */}
                    <span className={styles.icon}>📘</span>
                    <span className={styles.icon}>🐦</span>
                    <span className={styles.icon}>📸</span>
                </div>

                <div className={styles.storeButtons}>
                    <button className={styles.storeBtn}>App Store</button>
                    <button className={styles.storeBtn}>Play Store</button>
                </div>

                <div className={styles.rights}>
                    © 2026 AgroConecta Inc. All rights reserved.
                </div>
            </div>
        </footer>
    );
};

export default Footer;