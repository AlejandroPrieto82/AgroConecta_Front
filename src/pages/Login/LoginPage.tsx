import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../hooks/useUser";
import { mockUser } from "../../mocks/mockUser";
import styles from "./LoginPage.module.css";

const LoginPage: React.FC = () => {
  const [correo, setCorreo] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const navigate = useNavigate();
  const { login } = useUser();
  const MOCK_PASSWORD = "123456";

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (correo !== mockUser.correo || password !== MOCK_PASSWORD) {
        throw new Error("Usuario o contraseña incorrectos");
      }
      login();
      navigate("/perfil");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error al iniciar sesión");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.loginContainer}>
      <h2>Iniciar Sesión</h2>
      <form onSubmit={handleLogin} className={styles.loginForm}>
        <label>
          Correo
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
        </label>

        <label>
          Contraseña
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </label>

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" disabled={loading}>
          {loading ? "Ingresando..." : "Ingresar"}
        </button>
      </form>

      <div className={styles.registerLink}>
        ¿No tienes cuenta? <a href="/registro">Regístrate aquí</a>
      </div>
    </div>
  );
};

export default LoginPage;