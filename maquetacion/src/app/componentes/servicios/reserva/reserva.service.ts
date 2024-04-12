import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  private URL = "http://localhost:8080/api/reservas";

  constructor(private httpClient: HttpClient) { }
public getAllReservas(): Observable<any> {
  return  this.httpClient.get(this.URL);
}

public getReservas(id: any): Observable<any> {
  return this.httpClient.get(this.URL + "/" + id)

}

public createReservas(reserva: any): Observable<any> {
  return this.httpClient.post(this.URL, reserva);
}

public deleteReservas(id: any): Observable<any> {
  return this.httpClient.delete(this.URL + "/" + id);

}

public updateReservas (id: any, reserva: any) {
  return this.httpClient.put(this.URL + "/" + id, reserva);
}
}
