import React from "react";
import { Link2, DollarSign, ShieldCheck } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import styles from "./RazonesSection.module.css";

type Tarjeta = {
  Icon: LucideIcon;
  title: string;
  text: string;
};

const tarjetas: Tarjeta[] = [
  {
    Icon: Link2,
    title: "Conexion Directa",
    text: "Elimina intermediarios y conecta directamente agricultores con compradores."
  },
  {
    Icon: DollarSign,
    title: "Mejores Precios",
    text: "Precios justos para productores y competitivos para compradores."
  },
  {
    Icon: ShieldCheck,
    title: "Transacciones Seguras",
    text: "Sistema de pagos confiable y seguimiento de pedidos en tiempo real."
  },
];

const RazonesSection: React.FC = () => {
  return (
    <section className={styles.razones}>
      <h2>¿Por qué elegir AgroConecta?</h2>
      <p className={styles.razonesSubtitle}>
        La plataforma que transforma la manera de comercializar productos agricolas
      </p>
      <div className={styles.razonesGrid}>
        {tarjetas.map((card, i) => (
          <div key={i} className={styles.razonCard}>
            <div className={styles.razonIcon}>
              <card.Icon size={24} />
            </div>
            <h3>{card.title}</h3>
            <p>{card.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default RazonesSection;
