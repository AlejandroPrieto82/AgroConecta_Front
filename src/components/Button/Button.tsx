import React from "react";
import { Link, type To, type Location } from "react-router-dom";
import styles from "./Button.module.css";

interface ButtonProps {
  children?: React.ReactNode;
  icon?: React.ReactNode;
  to: To;
  variant?: "filled" | "outline";
  border?: boolean;
  className?: string;
  state?: Location["state"];
}

const Button: React.FC<ButtonProps> = ({
  children,
  icon,
  to,
  variant = "filled",
  border = false,
  className,
  state
}) => {
  return (
    <Link
      to={to}
      state={state}
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