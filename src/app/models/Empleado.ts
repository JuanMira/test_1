export interface Empleado {
  id?: number;
  nombre: string;
  salario: number;
  fechaIngreso: string;
}

export interface Response {
  code: string;
  data: Empleado[];
}
