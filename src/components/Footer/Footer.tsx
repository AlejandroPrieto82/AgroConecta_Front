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
                        <h4>Interés</h4>
                        <ul>
                            <li>Soy agricultor</li>
                            <li>Quiero comprar</li>
                            <li>Productos</li>
                            <li>Ser un aliado</li>
                        </ul>
                    </div>
                    <div>
                        <h4>Legal</h4>
                        <ul>
                            <li>Privacidad</li>
                            <li>Términos</li>
                            <li>Condiciones</li>
                        </ul>
                    </div>
                </div>

                {/* Contacto derecha */}
                <div className={styles.contactSection}>
                    <h4>Contacto</h4>
                    <ul>
                        <li>Nombre: AgroConecta</li>
                        <li>Dirección: Calle Ficticia 123, Ciudad, País</li>
                        <li>Teléfono: +1 234 567 890</li>
                        <li>Correo: contacto@agroconecta.com</li>
                    </ul>
                </div>
            </div>

            {/* Sección inferior */}
            <div className={styles.bottom}>
                <div className={styles.socials}>
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