import React from "react";
import { Users, ShoppingCart, Package, Star } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./CifrasSection.module.css";

type Cifra = {
  num: string;
  label: string;
  Icon: LucideIcon;
};

const cifrasData: Cifra[] = [
  { num: "1,200+", label: "Agricultores registrados", Icon: Users },
  { num: "+1K", label: "Compradores activos", Icon: ShoppingCart },
  { num: "50,000 kg", label: "Productos vendidos", Icon: Package },
  { num: "98%", label: "Satisfaccion de usuarios", Icon: Star },
];

const CifrasSection: React.FC = () => {
  return (
    <section className={styles.cifras}>
      {cifrasData.map((item, i) => (
        <div key={i} className={styles.cifraCard}>
          <div className={styles.cifraIcon}>
            <item.Icon size={24} />
          </div>
          <h2>{item.num}</h2>
          <p>{item.label}</p>
        </div>
      ))}
    </section>
  );
};

export default CifrasSection;
