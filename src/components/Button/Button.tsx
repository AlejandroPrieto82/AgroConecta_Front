import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  to: string;
  variant?: "filled" | "outline";
  border?: boolean;
  className?: string;

  // ✅ NUEVO: permite pasar estado al navegar
  state?: any;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  to,
  variant = "filled",
  border = false,
  className,
  state // ✅ recibir state
}) => {
  return (
    <Link
      to={to}
      state={state} // ✅ pasar state al Link
      className={`${styles.button} 
                 ${variant === "filled" ? styles.filled : styles.outline} 
                 ${border ? styles.border : ""} 
                 ${className || ""}`}
    >
      <span className={styles.content}>
        {icon && <span className={styles.icon}>{icon}</span>}
        {children}
      </span>
    </Link>
  );
};

export default Button;