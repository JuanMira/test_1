import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { url } from '../const';
import { Empleado, Response } from '../models/Empleado';

@Injectable()
export class EmpleadoService {
  constructor(private http: HttpClient) {}

  url: string = url + '/restempleado';

  private create = new BehaviorSubject<Boolean>(false);
  private createP = this.create.asObservable();

  getEmpleados() {
    return this.http.get<Response>(this.url);
  }

  createEmpleado(empleado: Empleado): Observable<Empleado> {
    return this.http.post<Empleado>(this.url, empleado);
  }

  reloadData() {}
}
