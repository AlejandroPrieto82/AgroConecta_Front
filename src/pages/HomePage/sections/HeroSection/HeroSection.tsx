import React from "react";
import { Sprout, Package, Star } from "lucide-react";
import Button from "../../../../components/Button/Button";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>AgroConecta</h1>
        <p className={styles.subtitle}>
          Conectando el campo con todo el mundo sin intermediarios.
          Productos frescos directamente del agricultor a tu mesa.
        </p>

        <div className={styles.heroButtons}>
          <Button
            to="/registro"
            variant="filled"
            state={{ tipo: "agricultor" }}
          >
            Soy agricultor
          </Button>
          <Button to="/productos" variant="outline" border>
            Explorar productos
          </Button>
        </div>
      </div>

      <div className={styles.heroVisual}>
        <div className={styles.visualCard}>
          <div className={styles.visualStat}>
            <div className={`${styles.statIcon} ${styles.green}`}>
              <Sprout size={20} />
            </div>
            <div className={styles.statInfo}>
              <strong>1,200+ Agricultores</strong>
              <span>Conectados en la plataforma</span>
            </div>
          </div>
          <div className={styles.visualStat}>
            <div className={`${styles.statIcon} ${styles.blue}`}>
              <Package size={20} />
            </div>
            <div className={styles.statInfo}>
              <strong>50,000 kg vendidos</strong>
              <span>Productos frescos entregados</span>
            </div>
          </div>
          <div className={styles.visualStat}>
            <div className={`${styles.statIcon} ${styles.orange}`}>
              <Star size={20} />
            </div>
            <div className={styles.statInfo}>
              <strong>98% Satisfacci&oacute;n</strong>
              <span>De nuestros usuarios</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
