import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Button from "../../components/Button/Button";
import styles from "./RegisterPage.module.css";

const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();

  // ✅ Detecta si viene desde el botón de agricultor
  const tipoInicial =
    location.state?.tipo === "agricultor" ? "agricultor" : "comprador";

  // ✅ Usa ese valor inicial
  const [tipo, setTipo] = useState<"agricultor" | "comprador">(tipoInicial);

  const [nombre, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  const [telefono, setTelefono] = useState("");
  const [password, setPassword] = useState("");

  // Campos solo para agricultor
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
    } catch (err: any) {
      setError(err.message || "Error al registrar usuario");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.registerContainer}>
      <h2>Registro</h2>

      <form onSubmit={handleRegister} className={styles.registerForm}>
        {/* Tipo de usuario */}
        <label>
          Tipo de usuario
          <select
            value={tipo}
            onChange={(e) =>
              setTipo(e.target.value as "agricultor" | "comprador")
            }
          >
            <option value="agricultor">Agricultor</option>
            <option value="comprador">Comprador</option>
          </select>
        </label>

        {/* Campos comunes */}
        <label>
          Nombre
          <input
            type="text"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </label>

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
          Teléfono
          <input
            type="tel"
            value={telefono}
            onChange={(e) => setTelefono(e.target.value)}
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

        {/* Campos exclusivos para agricultor */}
        {tipo === "agricultor" && (
          <>
            <label>
              Dirección
              <input
                type="text"
                value={direccion}
                onChange={(e) => setDireccion(e.target.value)}
                required
              />
            </label>

            <label>
              Biografía
              <textarea
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
                rows={3}
                required
              />
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

        {/* Botones */}
        <div className={styles.buttonGroup}>
          <Button to="/login" variant="filled">
            Volver
          </Button>

          <button
            type="submit"
            className={styles.buttonFilled}
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarse"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;