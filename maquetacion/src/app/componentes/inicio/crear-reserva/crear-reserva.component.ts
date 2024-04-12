import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ActivatedRoute, Router } from '@angular/router';
import { ReservaService } from '../servicios/reserva/reserva.service';

@Component({
  selector: 'app-crear-reserva',
  templateUrl: './crear-reserva.component.html',
  styleUrls: ['./crear-reserva.component.css']
})
export class CrearReservaComponent implements OnInit {
  titulo = 'Agregar reserva';
  formReserva: FormGroup;
  id: any | null;


  constructor (public fb: FormBuilder,
    public reservaService: ReservaService,
    private  router: Router,
    private aRoute: ActivatedRoute ) {
      this.formReserva = this.fb.group({
        idcliente: ['', Validators.required],
        fecha: ['', Validators.required],
        idmesa: ['', Validators.required]
      });
      this.id = this.aRoute.snapshot.paramMap.get('id');
    }


    ngOnInit(): void {
      this.esEditar();
    }

    esEditar() {
      if (this.id !== null) {
        this.titulo = 'Editar reserva';
        this.reservaService.getReservas(this.id).subscribe(response => {
          //console.log(response.nombre);
          this.formReserva.setValue({
            idcliente: response.idcliente,
            fecha: response.fecha,
            idmesa: response.idmesa



          });
        });
      }
    }


    agregarOEditar() {
      if(this.id == null)
      this.agregar();
      else 
      this.editar(this.id)
    }

    agregar(): void {
      this.reservaService.createReservas(this.formReserva.value).subscribe(response => {
        this.router.navigate(['lista-reservas']);
      },
      error => {
        console.error(error);
      }
      );
    }

    editar(id: any): void {
      const reservas: any = {
        idcliente: this.formReserva.value.idcliente,
        fecha: this.formReserva.value.fecha,
        idmesa: this.formReserva.value.idmesa,

      };

      this.reservaService.updateReservas(id, reservas).subscribe(response => {
        this.router.navigate(['lista-reservas']);
      },


      error => {
        console.error(error)
      });
    }
 
}
