import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './componentes/inicio/inicio.component';
import { ReservacionComponent } from './componentes/reservacion/reservacion.component';
import { NosotrosComponent } from './componentes/nosotros/nosotros.component';
import { ProductosComponent } from './componentes/productos/productos.component';
import { ConctatoComponent } from './componentes/conctato/conctato.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { NabvarComponent } from './componentes/nabvar/nabvar.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { ListaReservasComponent } from './componentes/lista-reservas/lista-reservas.component';
import { FormsModule,ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CrearReservaComponent } from './componentes/crear-reserva/crear-reserva.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ArduinoComponent } from './componentes/arduino/arduino.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListaProductosComponent } from './componentes/lista-productos/lista-productos.component';
import { ListaRolesComponent } from './componentes/lista-roles/lista-roles.component';
import { CrearRolComponent } from './componentes/crear-rol/crear-rol.component';




@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ReservacionComponent,
    NosotrosComponent,
    ProductosComponent,
    ConctatoComponent,
    InicioSesionComponent,
    NabvarComponent,
    FooterComponent,
    MenuComponent,
    ListaReservasComponent,
    CrearReservaComponent,
    ListaUsuariosComponent,
    CrearUsuarioComponent,
    ArduinoComponent,
    CrearProductoComponent,
    ListaProductosComponent,
    ListaRolesComponent,
    CrearRolComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
