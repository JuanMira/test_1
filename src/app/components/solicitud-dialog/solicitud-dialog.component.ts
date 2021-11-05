import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Solicitud } from 'src/app/models/Solicitud';
import { SolicitudService } from 'src/app/services/solicitud.service';

@Component({
  selector: 'app-solicitud-dialog',
  templateUrl: './solicitud-dialog.component.html',
  styleUrls: ['./solicitud-dialog.component.css'],
})
export class SolicitudDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<SolicitudDialogComponent>,
    private _empeladoService: SolicitudService
  ) {}

  ngOnInit(): void {}

  codigo: string;
  descripcion: string;
  resumen: string;
  empleadoId: number;

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit() {
    if (
      this.codigo.trim() !== '' &&
      this.descripcion.trim() !== '' &&
      this.resumen.trim() !== ''
    ) {
      const newSolicitud: Solicitud = {
        codigo: this.codigo,
        descripcion: this.descripcion,
        resumen: this.resumen,
        empleado_id: this.empleadoId,
      };

      this._empeladoService.createSolicitud(newSolicitud).subscribe((data) => {
        console.log(data);
      });

      this.dialogRef.close();
    }
  }
}
