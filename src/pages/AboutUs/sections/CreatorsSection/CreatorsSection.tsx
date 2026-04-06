import React from "react";
import styles from "./CreatorsSection.module.css";
import CreatorCard from "../CreatorCard/CreatorCard";

const creators = [
  { name: "Alice", github: "aliceGH", email: "alice@example.com", role: "Front-end" },
  { name: "Bob", github: "bobGH", email: "bob@example.com", role: "Back-end" },
  { name: "Carol", github: "carolGH", email: "carol@example.com", role: "UX/UI" },
  { name: "Dave", github: "daveGH", email: "dave@example.com", role: "Full Stack" },
  { name: "Eve", github: "eveGH", email: "eve@example.com", role: "Data" },
  { name: "Frank", github: "frankGH", email: "frank@example.com", role: "PM" },
];

const CreatorsSection: React.FC = () => {
  return (
    <section className={styles.section}>
      <h2>Creadores</h2>
      <div className={styles.grid}>
        {creators.map((c, i) => (
          <CreatorCard key={i} {...c} />
        ))}
      </div>
    </section>
  );
};

export default CreatorsSection;