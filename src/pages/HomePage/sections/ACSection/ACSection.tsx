import React from "react";
import { Tractor, ShoppingBag } from "lucide-react";
import Button from "../../../../components/Button/Button";
import styles from "./ACSection.module.css";

const ACSection: React.FC = () => {
  const agricultores = [
    { step: "1", title: "Registra tu producción", text: "Publica tus productos disponibles con detalles de cantidad y precio" },
    { step: "2", title: "Recibe ofertas directas", text: "Compradores interesados te contactan sin intermediarios" },
    { step: "3", title: "Vende y cobra seguro", text: "Gestiona pedidos y recibe pagos de forma segura" },
  ];

  const compradores = [
    { step: "1", title: "Explora el marketplace", text: "Busca productos agrícolas directamente de los productores" },
    { step: "2", title: "Compara y negocia", text: "Compara precios y negocia volúmenes directamente" },
    { step: "3", title: "Compra con confianza", text: "Realiza pedidos seguros y recibe productos frescos" },
  ];

  return (
    <section className={styles.section}>
      <h2>¿Cómo funciona?</h2>
      <p className={styles.sectionSubtitle}>
        Un proceso simple para agricultores y compradores
      </p>

      <div className={styles.cardsRow}>
        <div className={styles.acCard}>
          <div className={styles.cardHeader}>
            <span className={styles.cardEmoji}><Tractor size={22} /></span>
            <h3>Para Agricultores</h3>
          </div>
          <div className={styles.stepsList}>
            {agricultores.map((item, i) => (
              <div key={i} className={styles.stepItem}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonGroup}>
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
          <div className={styles.cardHeader}>
            <span className={styles.cardEmoji}><ShoppingBag size={22} /></span>
            <h3>Para Compradores</h3>
          </div>
          <div className={styles.stepsList}>
            {compradores.map((item, i) => (
              <div key={i} className={styles.stepItem}>
                <div className={styles.stepNumber}>{item.step}</div>
                <div>
                  <strong>{item.title}</strong>
                  <p>{item.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className={styles.buttonGroup}>
            <Button to="/productos" variant="filled">
              Explorar Marketplace
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ACSection;
