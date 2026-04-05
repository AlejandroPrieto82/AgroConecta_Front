type BaseUser = {
  id: string;
  nombre: string;
  correo: string;
  telefono: string;
  direccion: string;
  avatar?: string;
};

export type Agricultor = BaseUser & {
  tipo: "agricultor";
  fechaCreacion: string;
  biografia: string;
  cultivos: string[];
};

export type Comprador = BaseUser & {
  tipo: "comprador";
};

export type User = Agricultor | Comprador;

const isAgricultor = true;

export const mockUser: User = isAgricultor
  ? {
      tipo: "agricultor",
      id: "ag1",
      nombre: "Juan Pérez",
      correo: "juanperez@gmail.com",
      telefono: "+52 55 1234 5678",
      direccion: "Ciudad de México, CDMX, México",
      fechaCreacion: "2023-05-12",
      biografia: "Soy agricultor de maíz y tomate desde hace 10 años.",
      cultivos: ["Maíz", "Tomate", "Lechuga"],
      avatar: "https://via.placeholder.com/150",
    }
  : {
      tipo: "comprador",
      id: "co1",
      nombre: "María López",
      correo: "marialopez@gmail.com",
      telefono: "+52 55 9876 5432",
      direccion: "Bogotá, Colombia",
      avatar: "https://via.placeholder.com/150",
    };