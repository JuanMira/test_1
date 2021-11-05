import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { EmpleadoComponent } from './components/empleado/empleado.component';
import { CrearempleadoComponent } from './components/crearempleado/crearempleado.component';
import { MaterialModule } from './material.module';
import { EmpleadoService } from './services/empleado.service';
import { HttpClientModule } from '@angular/common/http';

import { CreateDialogComponent } from './components/create-dialog/create-dialog.component';
import { FormsModule } from '@angular/forms';
import { SolicitudDialogComponent } from './components/solicitud-dialog/solicitud-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EmpleadoComponent,
    CrearempleadoComponent,
    CreateDialogComponent,
    SolicitudDialogComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [EmpleadoService],
  bootstrap: [AppComponent],
})
export class AppModule {}
