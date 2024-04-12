import { Component, OnInit } from '@angular/core';
import { RolService } from '../servicios/roles/rol.service';

@Component({
  selector: 'app-lista-roles',
  templateUrl: './lista-roles.component.html',
  styleUrls: ['./lista-roles.component.css']
})
export class ListaRolesComponent implements OnInit {
 
  roles: any; 
  constructor(private rolService: RolService ){}
  
  ngOnInit():void {
    this.rolService.getAllRoles().subscribe(response => {
      this.roles = response;
    },
     error => {
      console.error(error);
     }
    );


  }

  eliminar(rol: any) {
    this.rolService.deleteRol(rol.idRol).subscribe(response => {
      if(response.deleted == true)
      this.roles.pop(rol);
    });

  }
}