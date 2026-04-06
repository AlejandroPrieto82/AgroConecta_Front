export type EstadoProducto = "disponible" | "agotado" | "proximamente";

export type Producto = {
  id: string;

  nombre: string;
  categoria: string;
  descripcion: string;

  precioPorKg: number;
  kgDisponibles: number;
  pedidoMinimo: number;

  fechaCosecha: string;
  ubicacion: string;

  estado: EstadoProducto;

  imagenes: string[];

  agricultorId: string;

  rating?: number;
  reviews?: number;

  tiempoEntrega?: string;

  fechaPublicacion: string;
};