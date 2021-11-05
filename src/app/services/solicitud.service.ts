import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { url } from '../const';
import { Solicitud, Response } from '../models/Solicitud';

@Injectable()
export class SolicitudService {
  constructor(private http: HttpClient) {}

  url: string = url + '/restsolicitud';

  private create = new BehaviorSubject<Boolean>(false);
  private createP = this.create.asObservable();

  getSolicitud() {
    return this.http.get<Response>(this.url);
  }

  createSolicitud(solcitud: Solicitud): Observable<Solicitud> {
    return this.http.post<Solicitud>(this.url, solcitud);
  }

  getOneSolicitud(id: number) {
    return this.http.get<Response>(this.url + '/' + id);
  }

  reloadData() {}
}
