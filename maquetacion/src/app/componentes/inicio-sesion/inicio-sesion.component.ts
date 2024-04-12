import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-inicio-sesion',
  templateUrl: './inicio-sesion.component.html',
  styleUrls: ['./inicio-sesion.component.css']
})
export class InicioSesionComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router 
  ) {
    this.loginForm = this.formBuilder.group({
      usuario: ['', Validators.required],
      contrasena: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  iniciarSesion() {
    if (this.loginForm.valid) {
      // Aquí puedes agregar la lógica para enviar los datos del formulario o redirigir al usuario
      console.log("Inicio de sesión exitoso!");
      this.router.navigate(['/menu']); // Redirige al usuario a la página del menú
    } else {
      // Si el formulario no es válido, puedes mostrar un mensaje de error o realizar alguna acción adicional
      alert("Por favor completa todos los campos correctamente.");
    }
  }
}
