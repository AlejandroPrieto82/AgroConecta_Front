import React, { useEffect, useState } from "react";
import styles from "./ProfilePage.module.css";
import { useNavigate } from "react-router-dom";
import { useUser } from "../../context/UserContext";

type Stats = {
  productos: number;
  ventas: number;
  calificacion: number;
  pedidos: number;
};

const mockStats: Stats = {
  productos: 12,
  ventas: 340,
  calificacion: 4.7,
  pedidos: 89,
};

const ProfilePage: React.FC = () => {
  const navigate = useNavigate();
  const { user, logout } = useUser();

  const [stats, setStats] = useState<Stats | null>(null);
  const [loadingStats, setLoadingStats] = useState(true);
  const [avatar, setAvatar] = useState(user?.avatar || "");

  if (!user) return null;

  const esAgricultor = user.tipo === "agricultor";

  useEffect(() => {
    if (!esAgricultor) return;

    const fetchStats = async () => {
      try {
        await new Promise((res) => setTimeout(res, 1000));
        setStats(mockStats);
      } catch {
        setStats(mockStats);
      } finally {
        setLoadingStats(false);
      }
    };

    fetchStats();
  }, [esAgricultor]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setAvatar(URL.createObjectURL(e.target.files[0]));
    }
  };

  return (
    <div className={styles.profileContainer}>
      <h2>Bienvenido, {user.nombre}</h2>

      <div className={styles.profileCard}>
        <div className={styles.left}>
          <img src={avatar} className={styles.avatar} />
          <label className={styles.changePhoto}>
            Cambiar foto
            <input type="file" hidden onChange={handleImageChange} />
          </label>
        </div>

        <div className={styles.info}>
          <h3 className={styles.name}>{user.nombre}</h3>
          <span className={styles.role}>{esAgricultor ? "Agricultor" : "Comprador"}</span>
          <p>{user.direccion}</p>
          <p>{user.correo}</p>
          <p>{user.telefono}</p>

          {esAgricultor && <p className={styles.meta}>Usuario desde: {user.fechaCreacion}</p>}

          <div className={styles.actions}>
            <button className={styles.editBtn} onClick={() => navigate("/editar-perfil")}>
              Editar perfil
            </button>
            <button className={styles.logoutBtn} onClick={logout}>
              Cerrar sesión
            </button>
          </div>
        </div>
      </div>

      {esAgricultor && (
        <>
          <div className={styles.extraCard}>
            <div className={styles.bioBox}>
              <h4>Biografía</h4>
              <p>{user.biografia}</p>
            </div>

            <div className={styles.cultivosBox}>
              <h4>Cultivos</h4>
              <div className={styles.tags}>
                {user.cultivos.map((c, i) => (
                  <span key={i} className={styles.tag}>
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <hr className={styles.divider} />

          <div className={styles.statsContainer}>
            {loadingStats ? (
              <p>Cargando...</p>
            ) : (
              <>
                <div className={styles.statCard}>
                  <h3>{stats?.productos}</h3>
                  <p>Productos</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{stats?.ventas}</h3>
                  <p>Ventas</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{stats?.calificacion}</h3>
                  <p>Calificación</p>
                </div>
                <div className={styles.statCard}>
                  <h3>{stats?.pedidos}</h3>
                  <p>Pedidos</p>
                </div>
              </>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default ProfilePage;