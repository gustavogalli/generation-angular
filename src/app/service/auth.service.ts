import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../model/Usuario';
import { UsuarioLogin } from '../model/UsuarioLogin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(usuarioLogin: UsuarioLogin): Observable<UsuarioLogin>{ //observable GARANTE o tipo que será passado
    return this.http.post<UsuarioLogin>("https://blogpessoalgustavogalli.herokuapp.com/usuarios/logar", usuarioLogin) // salva no caminho em questão o parâmetro passado (usuarioLogin)
  }

  cadastrar(usuario: Usuario): Observable<Usuario>{
    return this.http.post<Usuario>("https://blogpessoalgustavogalli.herokuapp.com/usuarios/logar", usuario)

  }
}