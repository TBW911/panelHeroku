import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RolService } from '../servicios/roles/rol.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-rol',
  templateUrl: './crear-rol.component.html',
  styleUrls: ['./crear-rol.component.css']
})
export class CrearRolComponent implements OnInit {
  
  titulo = 'Agregar un rol';
  formRol: FormGroup;
  idRol: any | null;

  constructor (public fb: FormBuilder,
    private rolService: RolService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.formRol = this.fb.group({
      idRol: ['',Validators.required],
      rol: ['',Validators.required],
    });
    this.idRol = this.aRoute.snapshot.paramMap.get('idRol');
  }

    

    ngOnInit(): void {
      this.esEditar();


    }


    esEditar() {
      if (this.idRol !== null) {
        this.titulo = 'Editar usuario';
        this.rolService.getRol(this.idRol).subscribe(response => {
          //console.log(response.nombre);

          this.formRol.setValue({
            idRol: response.idRol,
            rol: response.rol,
          });
        });
      }
    }

    agregarOEditar() {
      if(this.idRol == null)
      this.agregar();
      else
      this.editar(this.idRol);
    }

    agregar(): void {
      this.rolService.createRol(this.formRol.value).subscribe(response => {
        this.router.navigate(['lista-roles']);

      },
      error => {
        console.error(error);
      }
      );


    }

    editar(idRol: any):void {
      const rol: any = {
        idrol: this.formRol.value.idrol,
        rol: this.formRol.value.nombreusuario,
      };

      this.rolService.updateRol(idRol, rol).subscribe(response => {
        this.router.navigate(['lista-roles']);

      },
      error => {
        console.error(error)
      }
      );
    }

  }
  
