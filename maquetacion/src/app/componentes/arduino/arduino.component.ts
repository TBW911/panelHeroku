import { Component } from '@angular/core';
import { ElementRef, ViewChild, AfterViewInit} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';


@Component({
  selector: 'app-arduino',
  templateUrl: './arduino.component.html',
  styleUrls: ['./arduino.component.css']
})
export class ArduinoComponent {

  title = 'domotica';
  angulo: number = 0; // Variable para almacenar el ángulo del servo motor
  datosTemperatura: any[] = [];
  datosHumedad: any[] = [];
  datosIluminacion: any[] = [];

  constructor(private http: HttpClient) {

    interval(5000).subscribe(() => {
      this.obtenerDatos();
    });
  } // Inyectamos HttpClient para hacer solicitudes HTTP
  ngAfterViewInit() {
    this.obtenerDatos(); // Llama a obtenerDatos() una vez cuando el componente se haya inicializado
    const sliderElement = this.slider.nativeElement;
    this.updateOutput(sliderElement.value);

    // Actualiza los datos cada 5 segundos
    setInterval(() => {
      this.obtenerDatos();
    }, 5000); // Cambia 1000 a 5000 para actualizar cada 5 segundos

   
  }
  @ViewChild('myRange') slider!: ElementRef<HTMLInputElement>; // Aquí especificamos el tipo de ElementRef

  sliderValue: number = 50; // Valor predeterminado

 

  // Método para actualizar el valor mostrado
  updateOutput(value: string) {
    this.sliderValue = parseInt(value);
  }



  obtenerDatos(): void {
    this.http.get<any[]>('http://192.168.100.11:9000/api/datos').subscribe((datosApi) => {
      this.datosTemperatura = datosApi.filter(dato => dato.elemento === 'Temperatura');
      console.log('Datos de Temperatura:', this.datosTemperatura);

      this.datosHumedad = datosApi.filter(dato => dato.elemento === 'Humedad');
      console.log('Datos de Humedad:', this.datosHumedad);


    });
  }

  ngOnInit(): void {
    this.obtenerDatos();  }



    toggleFoco1(event: any) {
      // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
      // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
      
      const statusdato = 0; // Siempre enviará 0 sin importar el estado del interruptor
      const elemento = 'foco1';
    
      // PUT
      this.http.put('http://192.168.100.11:9000/api/elementos/65fc00d5e488644f18ee2f43', { elemento, statusdato }).subscribe(
        (respuesta) => {
          console.log('Estado del foco enviado:', statusdato);
        },
        (error) => {
          console.error('Error al enviar el estado del foco:', error);
        }
      );
    }


    toggleFoco1Apagar(event: any) {
      // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
      // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
      
      const statusdato = 1; // Siempre enviará 0 sin importar el estado del interruptor
      const elemento = 'foco1';
    
      // PUT
      this.http.put('http://192.168.100.11:9000/api/elementos/65fc00d5e488644f18ee2f43', { elemento, statusdato }).subscribe(
        (respuesta) => {
          console.log('Estado del foco enviado:', statusdato);
        },
        (error) => {
          console.error('Error al enviar el estado del foco:', error);
        }
      );
    }


    
  toggleFoco2(event: any) {
    // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
    // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
    
    const statusdato = 0; // Siempre enviará 0 sin importar el estado del interruptor
    const elemento = 'foco2';
  
    // PUT
    this.http.put('http://192.168.100.11:9000/api/elementos/65fc00e8e488644f18ee2f45', { elemento, statusdato }).subscribe(
      (respuesta) => {
        console.log('Estado del foco enviado:', statusdato);
      },
      (error) => {
        console.error('Error al enviar el estado del foco:', error);
      }
    );
  }



  toggleFoco2Apagar(event: any) {
    // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
    // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
    
    const statusdato = 1; // Siempre enviará 0 sin importar el estado del interruptor
    const elemento = 'foco2';
  
    // PUT
    this.http.put('http://192.168.100.11:9000/api/elementos/65fc00e8e488644f18ee2f45', { elemento, statusdato }).subscribe(
      (respuesta) => {
        console.log('Estado del foco enviado:', statusdato);
      },
      (error) => {
        console.error('Error al enviar el estado del foco:', error);
      }
    );
  }

  toggleFoco3(event: any) {
    // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
    // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
    
    const statusdato = 0; // Siempre enviará 0 sin importar el estado del interruptor
    const elemento = 'foco3';
  
    // PUT
    this.http.put('http://192.168.100.11:9000/api/elementos/65fc00efe488644f18ee2f47', { elemento, statusdato }).subscribe(
      (respuesta) => {
        console.log('Estado del foco enviado:', statusdato);
      },
      (error) => {
        console.error('Error al enviar el estado del foco:', error);
      }
    );
  }



  toggleFoco3Apagar(event: any) {
    // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
    // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
    
    const statusdato = 1; // Siempre enviará 0 sin importar el estado del interruptor
    const elemento = 'foco3';
  
    // PUT
    this.http.put('http://192.168.100.11:9000/api/elementos/65fc00efe488644f18ee2f47', { elemento, statusdato }).subscribe(
      (respuesta) => {
        console.log('Estado del foco enviado:', statusdato);
      },
      (error) => {
        console.error('Error al enviar el estado del foco:', error);
      }
    );
  }



  toggleFoco4(event: any) {
    // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
    // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
    
    const statusdato = 0; // Siempre enviará 0 sin importar el estado del interruptor
    const elemento = 'foco4';
  
    // PUT
    this.http.put('http://192.168.100.11:9000/api/elementos/66177628998d91579101070f', { elemento, statusdato }).subscribe(
      (respuesta) => {
        console.log('Estado del foco enviado:', statusdato);
      },
      (error) => {
        console.error('Error al enviar el estado del foco:', error);
      }
    );
  }



  toggleFoco4Apagar(event: any) {
    // this.amarilloPrendido = event.target.checked; // No necesitas esta línea si siempre quieres enviar 0
    // console.log('El foco está:', this.amarilloPrendido ? 'encendido (on)' : 'apagado (off)'); // No necesitas esta línea si siempre quieres enviar 0
    
    const statusdato = 1; // Siempre enviará 0 sin importar el estado del interruptor
    const elemento = 'foco4';
  
    // PUT
    this.http.put('http://192.168.100.11:9000/api/elementos/66177628998d91579101070f', { elemento, statusdato }).subscribe(
      (respuesta) => {
        console.log('Estado del foco enviado:', statusdato);
      },
      (error) => {
        console.error('Error al enviar el estado del foco:', error);
      }
    );
  }

 

}
 
  // Función para encender el foco
  

  // Función para apagar el foco
  

  

  // Función para enviar el ángulo al servo motor
  


