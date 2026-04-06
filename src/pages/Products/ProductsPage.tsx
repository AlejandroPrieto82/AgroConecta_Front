import React, { useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./ProductsPage.module.css";
import { mockProducts } from "../../mocks/mockProducts";
import Button from "../../components/Button/Button";

const ProductsPage: React.FC = () => {
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [categoria, setCategoria] = useState("todas");
  const [orden, setOrden] = useState("recientes");

  const categorias = [
    "todas",
    "Frutas",
    "Verduras",
    "Tubérculos",
    "Cereales",
    "Legumbres",
    "Aromáticas",
  ];

  const productosFiltrados = useMemo(() => {
    let data = [...mockProducts];

    if (search.trim()) {
      data = data.filter((p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase())
      );
    }

    if (categoria !== "todas") {
      data = data.filter((p) => p.categoria === categoria);
    }

    switch (orden) {
      case "precio_asc":
        data.sort((a, b) => a.precioPorKg - b.precioPorKg);
        break;
      case "precio_desc":
        data.sort((a, b) => b.precioPorKg - a.precioPorKg);
        break;
      case "rating":
        data.sort((a, b) => (b.rating || 0) - (a.rating || 0));
        break;
      default:
        data.sort(
          (a, b) =>
            new Date(b.fechaPublicacion).getTime() -
            new Date(a.fechaPublicacion).getTime()
        );
        break;
    }

    return data;
  }, [search, categoria, orden]);

  return (
    <div className={styles.container}>
      <h2>Explorar productos</h2>

      {/* FILTROS */}
      <div className={styles.filters}>
        <div className={styles.filterItem}>
          <input
            type="text"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className={styles.filterItem}>
          <select
            value={categoria}
            onChange={(e) => setCategoria(e.target.value)}
          >
            {categorias.map((cat) => (
              <option key={cat} value={cat}>
                {cat === "todas" ? "Categoría" : cat}
              </option>
            ))}
          </select>
        </div>

        <div className={styles.filterItem}>
          <select value={orden} onChange={(e) => setOrden(e.target.value)}>
            <option value="recientes">Ordenar</option>
            <option value="precio_asc">💰 Menor precio</option>
            <option value="precio_desc">💰 Mayor precio</option>
            <option value="rating">⭐ Mejor calificados</option>
          </select>
        </div>
      </div>

      {/* GRID */}
      <ul className={styles.grid}>
        {productosFiltrados.map((p) => (
          <li
            key={p.id}
            className={styles.card}
            onClick={() => navigate(`/producto/${p.id}`)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={p.imagenes[0]}
              className={styles.image}
              loading="lazy"
              alt={p.nombre}
            />

            <div className={styles.cardContent}>
              <h3>{p.nombre}</h3>

              <span className={styles.category}>{p.categoria}</span>

              <p className={styles.price}>
                ${p.precioPorKg} / kg
              </p>

              <p className={styles.meta}>
                📦 {p.kgDisponibles} kg disponibles
              </p>

              <p className={styles.meta}>
                📍 {p.ubicacion}
              </p>

              {p.rating && (
                <p className={styles.rating}>
                  ⭐ {p.rating} ({p.reviews})
                </p>
              )}

              {/* BOTONES */}
              <div
                className={styles.actions}
                onClick={(e) => e.stopPropagation()} // 🔥 CLAVE
              >
                <Button to={`/producto/${p.id}`} variant="outline">
                  Detalles
                </Button>

                <Button to="/carrito" variant="filled">
                  Comprar
                </Button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductsPage;