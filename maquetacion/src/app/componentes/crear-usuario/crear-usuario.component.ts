import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UsuarioService } from '../servicios/usuario/usuario.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {
  
  titulo = 'Agregar un usuario';
  formUsuario: FormGroup;
  id: any | null;

    /*PARA EDITAR SOLO SE PONE ANY Y SI SE QUIERE INSERTAR SOLO ANY Y NULL*/ 


  constructor (public fb: FormBuilder,
    private usuarioService: UsuarioService,
    private router: Router,
    private aRoute: ActivatedRoute) {
    this.formUsuario = this.fb.group({
      idrol: ['',Validators.required],
      nombreusuario: ['',Validators.required],
      contrasena: ['', Validators.required]
    });
    this.id = this.aRoute.snapshot.paramMap.get('id');
  }

    

    ngOnInit(): void {
      this.esEditar();


    }


    esEditar() {
      if (this.id !== null) {
        this.titulo = 'Editar usuario';
        this.usuarioService.getUser(this.id).subscribe(response => {
          //console.log(response.nombre);

          this.formUsuario.setValue({
            idrol: response.idrol,
            nombreusuario: response.nombreusuario,
            contrasena: response.contrasena
          });
        });
      }
    }

    agregarOEditar() {
      if(this.id == null)
      this.agregar();
      else
      this.editar(this.id);
    }

    agregar(): void {
      this.usuarioService.createUser(this.formUsuario.value).subscribe(response => {
        this.router.navigate(['lista-usuarios']);

      },
      error => {
        console.error(error);
      }
      );


    }

    editar(id: any):void {
      const usuario: any = {
        idrol: this.formUsuario.value.idrol,
        nombreusuario: this.formUsuario.value.nombreusuario,
        contrasena: this.formUsuario.value.contrasena
      };

      this.usuarioService.updateUser(id, usuario).subscribe(response => {
        this.router.navigate(['lista-usuarios']);

      },
      error => {
        console.error(error)
      }
      );
    }


  

}