import React from "react";
import styles from "./AboutUs.module.css";
import InfoSection from "./components/InfoSection/InfoSection";
import CreatorsSection from "./components/CreatorsSection/CreatorsSection";

const AboutUs: React.FC = () => {
  return (
    <main className={styles.container}>
      {/* Sección de 3 bloques horizontales */}
      <section className={styles.horizontalSections}>
        <InfoSection title="¿Quiénes somos?">
          Hace mucho, en un rincón remoto del internet, un grupo de desarrolladores
          decidió unir fuerzas para crear AgroConecta. Mientras peleaban con bugs,
          tomaban café, y hasta un día un gato pisó el teclado y creó la primera
          función mágica… (IA dice: historia ficticia, la cambiaré por la real luego)
        </InfoSection>

        <InfoSection title="Visión">
          Ser la plataforma líder en conexión directa entre productores y compradores.
        </InfoSection>

        <InfoSection title="Misión">
          Facilitar transacciones seguras y confiables con transparencia total.
        </InfoSection>
      </section>

      {/* Sección de creadores debajo */}
      <CreatorsSection />
    </main>
  );
};

export default AboutUs;