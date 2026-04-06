import React from "react";
import Button from "../../../../components/Button/Button";
import styles from "./ACSection.module.css";

const ACSection: React.FC = () => {
  const agricultores = [
    { step: "1. Registra tu producción", text: "Publica tus productos disponibles con detalles de cantidad y precio" },
    { step: "2. Recibe ofertas directas", text: "Compradores interesados te contactan sin intermediarios" },
    { step: "3. Vende y cobra seguro", text: "Gestiona pedidos y recibe pagos de forma segura" },
  ];

  const compradores = [
    { step: "1. Explora el marketplace", text: "Busca productos agrícolas directamente de los productores" },
    { step: "2. Compara y negocia", text: "Compara precios y negocia volúmenes directamente" },
    { step: "3. Compra con confianza", text: "Realiza pedidos seguros y recibe productos frescos" },
  ];

  return (
    <section className={styles.agricultorComprador}>
      <div className={styles.acCard}>
        <h3>Para Agricultores</h3>
        {agricultores.map((item, i) => (
          <div key={i}>
            <strong>{item.step}</strong>
            <p>{item.text}</p>
          </div>
        ))}

        <div className={styles.buttonGroup}>
          {/* ✅ CORREGIDO */}
          <Button
            to="/registro"
            variant="filled"
            state={{ tipo: "agricultor" }}
          >
            Comenzar como Agricultor
          </Button>
        </div>
      </div>

      <div className={styles.acCard}>
        <h3>Para Compradores</h3>
        {compradores.map((item, i) => (
          <div key={i}>
            <strong>{item.step}</strong>
            <p>{item.text}</p>
          </div>
        ))}

        <div className={styles.buttonGroup}>
          {/* ✅ CORREGIDO */}
          <Button to="/productos" variant="filled">
            Explorar Marketplace
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ACSection;