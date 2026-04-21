import React from "react";
import styles from "./InfoSection.module.css";

interface InfoSectionProps {
  title: string;
  children: React.ReactNode;
}

const InfoSection: React.FC<InfoSectionProps> = ({ title, children }) => {
  return (
    <section className={styles.section}>
      <h2>{title}</h2>
      <p>{children}</p>
    </section>
  );
};

export default InfoSection;