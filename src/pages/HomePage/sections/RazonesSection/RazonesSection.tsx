import React from "react";
import styles from "./RazonesSection.module.css";

const RazonesSection: React.FC = () => {
  const tarjetas = [
    {
      icon: "🔗",
      title: "Conexión Directa",
      text: "Elimina intermediarios y conecta directamente agricultores con compradores."
    },
    {
      icon: "💰",
      title: "Mejores Precios",
      text: "Precios justos para productores y competitivos para compradores."
    },
    {
      icon: "🛡️",
      title: "Transacciones Seguras",
      text: "Sistema de pagos confiable y seguimiento de pedidos en tiempo real."
    },
  ];

  return (
    <section className={styles.razones}>
      <h2>¿Por qué elegir AgroConecta?</h2>
      <div className={styles.razonesGrid}>
        {tarjetas.map((card, i) => (
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