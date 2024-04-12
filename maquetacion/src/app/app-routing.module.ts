import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';
import { InicioSesionComponent } from './componentes/inicio-sesion/inicio-sesion.component';
import { ListaUsuariosComponent } from './componentes/lista-usuarios/lista-usuarios.component';
import { CrearUsuarioComponent } from './componentes/crear-usuario/crear-usuario.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { ArduinoComponent } from './componentes/arduino/arduino.component';
import { CrearProductoComponent } from './componentes/crear-producto/crear-producto.component';
import { ListaRolesComponent } from './componentes/lista-roles/lista-roles.component';
import { CrearRolComponent } from './componentes/crear-rol/crear-rol.component';


const routes: Routes = [

  {
    path: 'iot',
    component:ArduinoComponent
  },
  {
    path: 'productos',
    component:ProductosComponent
  },
  {
    path: 'iniciar-sesion',
    component: InicioSesionComponent
  },
   {
    path: 'crear-usuario',
    component: CrearUsuarioComponent
  },
  {
    path: 'crear-rol',
    component: CrearRolComponent
  },











  {

    path: 'crear-producto',
    component: CrearProductoComponent
  },
 

   {
    path: 'editar-usuario/:id',
    component: CrearUsuarioComponent
   },
   {
    path: 'editar-producto/:id',
    component: CrearProductoComponent
   },
   

    {
     path: 'lista-usuarios',
     component: ListaUsuariosComponent
    },
    {
      path: 'lista-roles',
      component: ListaRolesComponent
     },




















    {
      path: 'lista-prodcutos',
      component: ProductosComponent
     },
    {
      path: 'menu',
      component: MenuComponent
    },
 
 
  
    {
      path: '',
      redirectTo: 'iniciar-sesion',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: 'iniciar-sesion',
      pathMatch: 'full'
    }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
