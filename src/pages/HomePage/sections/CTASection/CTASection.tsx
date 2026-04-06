import React from "react";
import { Link } from "react-router-dom";
import { LogIn, UserPlus } from "lucide-react";
import styles from "./CTASection.module.css";

const CTASection: React.FC = () => {
  return (
    <section className={styles.cta}>
      <h2>Unete a AgroConecta</h2>
      <p className={styles.ctaSubtitle}>
        Empieza a conectar con el campo hoy mismo
      </p>

      <div className={styles.ctaCards}>
        <Link to="/login" className={styles.ctaCard}>
          <div className={styles.ctaIcon}>
            <LogIn size={24} />
          </div>
          <h3>Ya tengo una cuenta</h3>
          <p>Inicia sesion y accede a tu perfil</p>
          <span className={styles.ctaArrow}>Iniciar sesion &rarr;</span>
        </Link>

        <Link to="/registro" className={styles.ctaCard}>
          <div className={`${styles.ctaIcon} ${styles.ctaIconGreen}`}>
            <UserPlus size={24} />
          </div>
          <h3>Soy nuevo</h3>
          <p>Crea tu cuenta como agricultor o comprador</p>
          <span className={styles.ctaArrow}>Crear cuenta &rarr;</span>
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
