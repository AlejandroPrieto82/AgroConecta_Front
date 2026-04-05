import React, { useMemo, useState } from "react";
import styles from "./ProductsPage.module.css";
import { mockProducts } from "../../mocks/mockProducts";
import type { Producto } from "../../types/product";

const ProductsPage: React.FC = () => {
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

    // 🔍 Buscar por nombre
    if (search.trim()) {
      data = data.filter((p) =>
        p.nombre.toLowerCase().includes(search.toLowerCase())
      );
    }

    // 🏷️ Filtrar por categoría
    if (categoria !== "todas") {
      data = data.filter((p) => p.categoria === categoria);
    }

    // 📊 Ordenamientos
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
      case "recientes":
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
      <h2>Productos disponibles</h2>

      {/* FILTROS */}
      <div className={styles.filters}>
        <input
          type="text"
          placeholder="Buscar producto..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          value={categoria}
          onChange={(e) => setCategoria(e.target.value)}
        >
          {categorias.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <select value={orden} onChange={(e) => setOrden(e.target.value)}>
          <option value="recientes">Más recientes</option>
          <option value="precio_asc">Precio: menor a mayor</option>
          <option value="precio_desc">Precio: mayor a menor</option>
          <option value="rating">Mejor calificados</option>
        </select>
      </div>

      {/* GRID */}
      <div className={styles.grid}>
        {productosFiltrados.map((p) => (
          <div key={p.id} className={styles.card}>
            <img src={p.imagenes[0]} className={styles.image} />

            <div className={styles.cardContent}>
              <h3>{p.nombre}</h3>
              <span className={styles.category}>{p.categoria}</span>

              <p className={styles.price}>${p.precioPorKg} / kg</p>

              <p className={styles.meta}>
                Disponible: {p.kgDisponibles} kg
              </p>

              <p className={styles.meta}>
                Ubicación: {p.ubicacion}
              </p>

              {p.rating && (
                <p className={styles.rating}>
                  ⭐ {p.rating} ({p.reviews})
                </p>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductsPage;