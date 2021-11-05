import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { EmpleadoService } from 'src/app/services/empleado.service';
import { CreateDialogComponent } from '../create-dialog/create-dialog.component';

@Component({
  selector: 'app-crearempleado',
  templateUrl: './crearempleado.component.html',
  styleUrls: ['./crearempleado.component.css'],
})
export class CrearempleadoComponent implements OnInit {
  constructor(
    private dialog: MatDialog,
    private empleadoService: EmpleadoService
  ) {}

  ngOnInit(): void {}

  openDialog(): void {
    this.dialog.open(CreateDialogComponent, {
      width: '250px',
      height: '300px',
    });

    this.dialog.afterAllClosed.subscribe(() => {
      this.empleadoService.reloadData();
    });
  }
}
