import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  private URL = "http://192.168.1.72:8081/bdoklans/usuarios";

  constructor(private httpClient: HttpClient) { }
  public getAllUsers(): Observable<any> {
    return this.httpClient.get(this.URL);
  }

  public getUser(id: any): Observable<any> {
    return this.httpClient.get(this.URL + "/" + id)
  }

  public createUser(user: any): Observable<any> {
    return this.httpClient.post(this.URL, user);
  }

  public deleteUser(id: any): Observable<any> { 
    return this.httpClient.delete(this.URL + "/" + id);
  }

  public updateUser(id: any, user: any) {
    return this.httpClient.put(this.URL + "/" + id, user);
  }

  

}
