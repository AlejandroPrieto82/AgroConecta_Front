import React from "react";
import { Link } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  to: string;
  variant?: "filled" | "outline";  // Cambio: filled = negro con letras blancas, outline = sin fondo, letras negras
  border?: boolean;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  to,
  variant = "filled",
  border = false,
  className
}) => {
  return (
    <Link
      to={to}
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