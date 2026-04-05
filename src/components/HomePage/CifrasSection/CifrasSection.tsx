// src/components/CifrasSection/CifrasSection.tsx
import React from "react";
import { homeData } from "../../../mocks/homepage";
import styles from "./CifrasSection.module.css";

const CifrasSection: React.FC = () => {
  return (
    <section className={styles.cifras}>
      {homeData.cifras.map((item, i) => (
        <div key={i} className={styles.cifraItem}>
          <h2>{item.num}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default CifrasSection;