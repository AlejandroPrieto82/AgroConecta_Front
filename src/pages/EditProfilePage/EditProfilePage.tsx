import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./EditProfilePage.module.css";
import { mockUser } from "../../mocks/mockUser";

const EditProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const user = mockUser;

  const esAgricultor = user.tipo === "agricultor";

  const [nombre, setNombre] = useState(user.nombre);
  const [correo, setCorreo] = useState(user.correo);
  const [telefono, setTelefono] = useState(user.telefono);
  const [direccion, setDireccion] = useState(user.direccion);
  const [biografia, setBiografia] = useState(
    esAgricultor ? user.biografia : ""
  );
  const [cultivos, setCultivos] = useState<string[]>(
    esAgricultor ? user.cultivos : []
  );

  const [avatar, setAvatar] = useState(user.avatar || "");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const data = {
      nombre,
      correo,
      telefono,
      direccion,
      ...(esAgricultor && { biografia, cultivos }),
    };

    await fetch("TU_API_EDITAR_PERFIL", {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    navigate("/perfil");
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={styles.container}>
      <h2>Editar perfil</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        {/* FOTO CIRCULAR */}
        <div className={styles.avatarSection}>
          <img src={avatar} className={styles.avatar} />
          <label className={styles.changePhoto}>
            Cambiar foto
            <input type="file" hidden onChange={handleImageChange} />
          </label>
        </div>

        {/* CAMPOS */}
        <label>
          Nombre
          <input value={nombre} onChange={(e) => setNombre(e.target.value)} />
        </label>

        <label>
          Correo
          <input value={correo} onChange={(e) => setCorreo(e.target.value)} />
        </label>

        <label>
          Teléfono
          <input value={telefono} onChange={(e) => setTelefono(e.target.value)} />
        </label>

        <label>
          Dirección
          <input value={direccion} onChange={(e) => setDireccion(e.target.value)} />
        </label>

        {esAgricultor && (
          <>
            <label>
              Biografía
              <textarea
                value={biografia}
                onChange={(e) => setBiografia(e.target.value)}
              />
            </label>

            <label>
              Cultivos
              <input
                value={cultivos.join(", ")}
                onChange={(e) =>
                  setCultivos(
                    e.target.value.split(",").map((c) => c.trim())
                  )
                }
              />
            </label>
          </>
        )}

        {/* BOTONES */}
        <div className={styles.actions}>
          <button
            type="button"
            className={styles.cancel}
            onClick={() => navigate("/perfil")}
          >
            Cancelar
          </button>

          <button type="submit" className={styles.save}>
            {loading ? "Guardando..." : "Guardar"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProfilePage;