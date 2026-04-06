import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./ProductDetailPage.module.css";
import { mockProducts } from "../../mocks/mockProducts";
import Button from "../../components/Button/Button";

const ProductDetailPage: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const producto = mockProducts.find((p) => p.id === id);

  if (!producto) {
    return <p style={{ textAlign: "center" }}>Producto no encontrado</p>;
  }

  return (
    <div className={styles.container}>
      <button className={styles.back} onClick={() => navigate(-1)}>
        ← Volver
      </button>

      <div className={styles.card}>
        <img
          src={producto.imagenes[0]}
          className={styles.image}
        />

        <div className={styles.info}>
          <h2>{producto.nombre}</h2>

          <span className={styles.category}>
            {producto.categoria}
          </span>

          <p className={styles.price}>
            ${producto.precioPorKg} / kg
          </p>

          <p><strong>Disponible:</strong> {producto.kgDisponibles} kg</p>
          <p><strong>Pedido mínimo:</strong> {producto.pedidoMinimo} kg</p>
          <p><strong>Ubicación:</strong> {producto.ubicacion}</p>
          <p><strong>Fecha cosecha:</strong> {producto.fechaCosecha}</p>

          {producto.tiempoEntrega && (
            <p><strong>Entrega:</strong> {producto.tiempoEntrega}</p>
          )}

          {producto.rating && (
            <p className={styles.rating}>
              ⭐ {producto.rating} ({producto.reviews})
            </p>
          )}

          <p className={styles.description}>
            {producto.descripcion}
          </p>

          <div className={styles.actions}>
            <Button to="/carrito" variant="filled">
              Comprar
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;