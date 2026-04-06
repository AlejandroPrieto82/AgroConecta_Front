import React, { useEffect, useState } from "react";
import styles from "./CifrasSection.module.css";

// Solo este array vendría de la API
type Cifra = {
  num: string;
  label: string;
};

const CifrasSection: React.FC = () => {
  const [cifras, setCifras] = useState<Cifra[]>([]);

  useEffect(() => {
    fetch("/api/cifras")
      .then((res) => res.json())
      .then((data: Cifra[]) => setCifras(data))
      .catch(() => {
        setCifras([
          { num: "1200+", label: "Agricultores" },
          { num: "+1K", label: "Compradores" },
          { num: "50,000kg", label: "Kg vendidos" },
          { num: "98%", label: "Satisfacción de usuarios" },
        ]);
      });
  }, []);

  return (
    <section className={styles.cifras}>
      {cifras.map((item, i) => (
        <div key={i} className={styles.cifraItem}>
          <h2>{item.num}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default CifrasSection;