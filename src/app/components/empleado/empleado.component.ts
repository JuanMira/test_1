import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Empleado } from 'src/app/models/Empleado';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';
import { SolicitudDialogComponent } from '../solicitud-dialog/solicitud-dialog.component';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements AfterViewInit {
  empleados: MatTableDataSource<Empleado>;

  displayedColumns: string[] = [
    'id',
    'nombre',
    'salario',
    'fecha_ingreso',
    'option',
  ];

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  constructor(
    private _empleadoService: EmpleadoService,
    private dialog: MatDialog
  ) {}
  ngAfterViewInit(): void {
    this.loadData();
  }

  loadData(): void {
    this._empleadoService.getEmpleados().subscribe((data) => {
      this.empleados = new MatTableDataSource(data.data);
      this.empleados.paginator = this.paginator;
      this.empleados.sort = this.sort;
      console.log(data);
      console.log(this.empleados);
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.empleados.filter = filterValue.trim().toLowerCase();

    if (this.empleados.paginator) {
      this.empleados.paginator.firstPage();
    }
  }

  solicitud(id: number) {
    this.dialog.open(SolicitudDialogComponent, {
      width: '250px',
      height: '300px',
    });
  }
}
