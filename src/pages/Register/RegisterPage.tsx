import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { Tractor, ShoppingBag, ArrowLeft } from "lucide-react";
import styles from "./RegisterPage.module.css";

const GoogleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24">
    <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
    <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
    <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
    <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
  </svg>
);

type Tipo = "agricultor" | "comprador";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const locationState = location.state as { tipo?: Tipo } | undefined;

  const [tipo, setTipo] = useState<Tipo | null>(locationState?.tipo ?? null);
  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");
  const [direccion, setDireccion] = useState("");
  const [biografia, setBiografia] = useState("");
  const [cultivos, setCultivos] = useState<string[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    setLoading(true);

    const data = {
      tipo,
      nombre,
      correo,
      telefono,
      password,
      ...(tipo === "agricultor" && { direccion, biografia, cultivos }),
    };

    try {
      const response = await fetch("TU_API_REGISTRO_AQUI", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      const result = await response.json();
      if (!response.ok) throw new Error(result.message || "Error al registrar");

      alert("Registro completado exitosamente!");
      navigate("/login");
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Error al registrar usuario");
      }
    } finally {
      setLoading(false);
    }
  };

  // Paso 1: Elegir tipo de usuario
  if (!tipo) {
    return (
      <div className={styles.registerContainer}>
        <h2>Crear cuenta</h2>
        <p className={styles.subtitle}>Selecciona tu perfil para comenzar</p>

        <div className={styles.roleCards}>
          <button className={styles.roleCard} onClick={() => setTipo("agricultor")}>
            <div className={styles.roleIcon}>
              <Tractor size={28} />
            </div>
            <h3>Soy Agricultor</h3>
            <p>Quiero vender mis productos directamente a compradores</p>
          </button>

          <button className={styles.roleCard} onClick={() => setTipo("comprador")}>
            <div className={styles.roleIcon}>
              <ShoppingBag size={28} />
            </div>
            <h3>Soy Comprador</h3>
            <p>Quiero comprar productos frescos directamente del campo</p>
          </button>
        </div>

        <div className={styles.divider}><span>o</span></div>

        <button type="button" className={styles.googleBtn}>
          <GoogleIcon />
          Registrarse con Google
        </button>

        <div className={styles.loginLink}>
          ¿Ya tienes cuenta? <a href="/login">Inicia sesion</a>
        </div>
      </div>
    );
  }

  // Paso 2: Formulario segun tipo
  return (
    <div className={styles.registerContainer}>
      <button className={styles.backBtn} onClick={() => setTipo(null)}>
        <ArrowLeft size={18} />
        Cambiar tipo de cuenta
      </button>

      <h2>Registro como {tipo === "agricultor" ? "Agricultor" : "Comprador"}</h2>

      <form onSubmit={handleRegister} className={styles.registerForm}>
        <label>
          Nombre
          <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} required />
        </label>

        <label>
          Correo
          <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} required />
        </label>

        <label>
          Telefono
          <input type="tel" value={telefono} onChange={(e) => setTelefono(e.target.value)} required />
        </label>

        <label>
          Contrasena
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        {tipo === "agricultor" && (
          <>
            <label>
              Direccion
              <input type="text" value={direccion} onChange={(e) => setDireccion(e.target.value)} required />
            </label>

            <label>
              Biografia
              <textarea value={biografia} onChange={(e) => setBiografia(e.target.value)} rows={3} required />
            </label>

            <label>
              Cultivos (separados por coma)
              <input
                type="text"
                value={cultivos.join(", ")}
                onChange={(e) =>
                  setCultivos(
                    e.target.value
                      .split(",")
                      .map((c) => c.trim())
                      .filter((c) => c)
                  )
                }
              />
            </label>
          </>
        )}

        {error && <p className={styles.error}>{error}</p>}

        <button type="submit" className={styles.buttonFilled} disabled={loading}>
          {loading ? "Registrando..." : "Crear cuenta"}
        </button>
      </form>

      <div className={styles.divider}><span>o</span></div>

      <button type="button" className={styles.googleBtn}>
        <GoogleIcon />
        Registrarse con Google
      </button>
    </div>
  );
};

export default RegisterPage;
