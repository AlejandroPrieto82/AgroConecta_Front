import React from "react";
import { Eye, Target } from "lucide-react";
import styles from "./AboutUs.module.css";
import CreatorsSection from "./sections/CreatorsSection/CreatorsSection";

const AboutUs: React.FC = () => {
  return (
    <main>
      {/* Hero */}
      <section className={styles.hero}>
        <h1>Sobre nosotros</h1>
        <p className={styles.heroSubtitle}>
          Conoce al equipo detras de AgroConecta y nuestra mision de transformar
          el comercio agricola en Colombia
        </p>
      </section>

      {/* Quienes somos */}
      <section className={styles.about}>
        <div className={styles.aboutContent}>
          <h2>¿Quienes somos?</h2>
          <p>
            Somos un grupo de desarrolladores apasionados por la tecnologia y el campo.
            Creamos AgroConecta para eliminar intermediarios y conectar directamente
            a los agricultores con los compradores, garantizando precios justos y
            productos frescos para todos.
          </p>
        </div>
      </section>

      {/* Vision y Mision */}
      <section className={styles.vmSection}>
        <div className={styles.vmCard}>
          <div className={styles.vmIcon}>
            <Eye size={24} />
          </div>
          <h3>Vision</h3>
          <p>
            Ser la plataforma lider en conexion directa entre productores y
            compradores, democratizando el acceso a productos agricolas frescos
            en toda la region.
          </p>
        </div>

        <div className={styles.vmCard}>
          <div className={styles.vmIcon}>
            <Target size={24} />
          </div>
          <h3>Mision</h3>
          <p>
            Facilitar transacciones seguras y confiables con transparencia total,
            empoderando a los agricultores y ofreciendo a los compradores la mejor
            calidad directamente del campo.
          </p>
        </div>
      </section>

      {/* Creadores */}
      <CreatorsSection />
    </main>
  );
};

export default AboutUs;
