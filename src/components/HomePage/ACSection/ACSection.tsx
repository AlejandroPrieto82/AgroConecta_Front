// src/components/ACSection/ACSection.tsx
import React from "react";
import Button from "../../Button/Button";
import { homeData } from "../../../mocks/homepage";
import styles from "./ACSection.module.css";

const ACSection: React.FC = () => {
  return (
    <section className={styles.agricultorComprador}>
      <div className={styles.acCard}>
        <h3>Para Agricultores</h3>
        {homeData.finalSection.agricultores.map((item, i) => (
          <div key={i}>
            <strong>{item.step}</strong>
            <p>{item.text}</p>
          </div>
        ))}
        <div className={styles.buttonGroup}>
          <Button to="/registro-agricultor" variant="filled">Comenzar como Agricultor</Button>
        </div>
      </div>

      <div className={styles.acCard}>
        <h3>Para Compradores</h3>
        {homeData.finalSection.compradores.map((item, i) => (
          <div key={i}>
            <strong>{item.step}</strong>
            <p>{item.text}</p>
          </div>
        ))}
        <div className={styles.buttonGroup}>
          <Button to="/marketplace" variant="filled">Explorar Marketplace</Button>
        </div>
      </div>
    </section>
  );
};

export default ACSection;