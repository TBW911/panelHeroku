import { Component, OnInit } from '@angular/core';
import { ReservaService } from '../servicios/reserva/reserva.service';


@Component({
  selector: 'app-lista-reservas',
  templateUrl: './lista-reservas.component.html',
  styleUrls: ['./lista-reservas.component.css']
})
export class ListaReservasComponent implements OnInit{
  reservas : any;

  constructor( private reservaService: ReservaService )  { }
  
    ngOnInit(): void {
      this.reservaService.getAllReservas().subscribe(response => {
        this.reservas = response;
      },
      error => {
        console.error(error);
      });
      
    }

    eliminar(reserva: any) {
      this.reservaService.deleteReservas(reserva.id).subscribe(response => {
        if(response.deleted == true)
        this.reservas.pop(reserva);
      });
    }



  }



