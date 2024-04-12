import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RolService {

  private URL = "http://192.168.1.72:8081/bdoklans/roles";

  constructor(private httpClient: HttpClient) { }
  public getAllRoles(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getRol(idRol: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + idRol)
  }

  public createRol(rol: any): Observable<any> {
    return this.httpClient.post(this.URL, rol);
  }

  public deleteRol(idRol: any): Observable<any> { 
    return this.httpClient.delete(this.URL + "/" + idRol);
  }

  public updateRol(idRol: any, rol: any) {
    return this.httpClient.put(this.URL + "/" + idRol, rol);
  }

  

}
