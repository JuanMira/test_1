import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';

@Component({
  selector: 'app-create-dialog',
  templateUrl: './create-dialog.component.html',
  styleUrls: ['./create-dialog.component.css'],
})
export class CreateDialogComponent implements OnInit {
  constructor(
    private dialogRef: MatDialogRef<CreateDialogComponent>,
    private _empeladoService: EmpleadoService
  ) {}

  ngOnInit(): void {}

  nombre: string;
  descripcion: string;
  salario: number;
  fechaIngreso: string;

  onNoClick(): void {
    this.dialogRef.close();
  }

  handleSubmit() {
    if (
      this.nombre.trim() !== '' &&
      this.salario > 0 &&
      this.fechaIngreso.trim() !== ''
    ) {
      const newPersona: Empleado = {
        nombre: this.nombre,
        salario: this.salario,
        fechaIngreso: this.fechaIngreso,
      };

      this._empeladoService.createEmpleado(newPersona).subscribe((data) => {
        console.log(data);
      });

      this.dialogRef.close();
    }
  }
}
