import { Injectable } from '@angular/core';
import { Subject, Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Usuario } from '../models/Usuario.model';

@Injectable({
  providedIn: 'root'
})

export class UsuarioService {
  private mostraMenu = new Subject<boolean>();
  private apiUrl: string = "https://668b3ea40b61b8d23b08d566.mockapi.io/hypnix-api/usuarios";

  constructor(private _httpClient: HttpClient) { }

  cadastrar(usuario: string, senha:string): Observable<Usuario> {
    const body = { usuario, senha }
    return this._httpClient.post<any>(this.apiUrl, body);
  }

  login(usuario: string, senha: string): Observable<boolean> {
    const url = `${this.apiUrl}?usuario=${usuario}&senha=${senha}`;
    return this._httpClient.get<any>(url).pipe(
      map(response => {
        if (response && response.length > 0) {
          localStorage.setItem('token', '4c3Ss0L1b3r4d0');
          this.mostraMenu.next(false);
          return true;
        } else {
          this.mostraMenu.next(true);
          return false;
        }
      })
    );
  }

  setMostraMenu(valor: boolean) {
    this.mostraMenu.next(valor);
  }

  getMostraMenu(): Observable<boolean> {
    return this.mostraMenu.asObservable();
  }
}
