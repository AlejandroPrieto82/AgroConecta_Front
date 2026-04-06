import React from "react";
import styles from "./CreatorCard.module.css";

interface CreatorCardProps {
  name: string;
  github: string;
  email: string;
  role: string;
}

const CreatorCard: React.FC<CreatorCardProps> = ({ name, github, email, role }) => {
  return (
    <div className={styles.card}>
      <div className={styles.image}></div>
      <div className={styles.info}>
        <h3>{name}</h3>
        <p>{role}</p>
        <p>GitHub: {github}</p>
        <p>Email: {email}</p>
      </div>
    </div>
  );
};

export default CreatorCard;