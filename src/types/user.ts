export type BaseUser = {
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