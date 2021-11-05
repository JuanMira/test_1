export interface Solicitud {
  id?: number;
  codigo: string;
  resumen: string;
  descripcion: string;
  empleado_id?: number;
}

export interface Response {
  code: string;
  data: Solicitud[];
}
