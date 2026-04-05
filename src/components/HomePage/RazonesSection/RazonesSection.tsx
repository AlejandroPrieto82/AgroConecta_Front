// src/components/RazonesSection/RazonesSection.tsx
import React from "react";
import { homeData } from "../../../mocks/homepage";
import styles from "./RazonesSection.module.css";

const RazonesSection: React.FC = () => {
  return (
    <section className={styles.razones}>
      <h2>¿Por qué elegir AgroConecta?</h2>
      <div className={styles.razonesGrid}>
        {homeData.tarjetas.map((card, i) => (
          <div key={i} className={styles.razonCard}>
            <span>{card.icon}</span>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RazonesSection;