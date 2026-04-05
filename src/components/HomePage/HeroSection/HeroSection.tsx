import React from "react";
import Button from "../../Button/Button";
import styles from "./HeroSection.module.css";

const HeroSection: React.FC = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.heroContent}>
        <h1>AgroConecta</h1>
        <p>Conectando el campo con todo el mundo sin intermediarios</p>
        <div className={styles.heroButtons}>
          <Button to="/registro-agricultor" variant="outline" border>Soy agricultor</Button>
          <Button to="/productos" variant="filled">Productos</Button>
        </div>
      </div>
      <div style={{ flex: "1 1 400px" }}></div>
    </section>
  );
};

export default HeroSection;