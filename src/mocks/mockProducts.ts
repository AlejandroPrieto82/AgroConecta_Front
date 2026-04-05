import type { Producto } from "../types/product";

const isEmpty = false;

export const mockProducts: Producto[] = isEmpty
  ? []
  : [
      {
        id: "p1",
        nombre: "Tomate Orgánico",
        categoria: "Hortalizas",
        descripcion: "Tomates frescos cultivados sin pesticidas.",
        precioPorKg: 2500,
        kgDisponibles: 100,
        pedidoMinimo: 5,
        fechaCosecha: "2026-04-01",
        ubicacion: "Cundinamarca, Colombia",
        estado: "disponible",
        imagenes: ["https://via.placeholder.com/300"],
        tags: ["Orgánico", "Fresco"],
        agricultorId: "ag1",
        rating: 4.7,
        reviews: 32,
        tiempoEntrega: "2-3 días",
        fechaPublicacion: "2026-03-30",
      },
    ];