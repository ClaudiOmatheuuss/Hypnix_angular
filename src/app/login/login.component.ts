import { Component } from '@angular/core';
import { UsuarioService } from '../services/usuario.service';
import { Router } from '@angular/router';
import { Usuario } from '../models/Usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {

  flipped = false;
  novoUsuario: Usuario = new Usuario();
  usuarioLogin!: string;
  senhaLogin!: string;
  usuarioCadastro!: string;
  senhaCadastro!: string;

  constructor(private _usuarioService: UsuarioService, private _router: Router) { }

  toggleFlip() {
    this.flipped = !this.flipped;
  }

  fazerLogin() {
    this._usuarioService.login(this.usuarioLogin, this.senhaLogin).subscribe(success => {
      if(success){
        this._router.navigate(['/restrito/lista'])
      } 
       
    })
  }

  cadastrar() {

    this._usuarioService.cadastrar(this.usuarioCadastro, this.senhaCadastro).subscribe(response => {
      alert(`Usuário ${response.usuario} cadastrado com sucesso! Faça seu login! :)`);
      this._router.navigate(['/login']);
    }, error => {
      alert('Erro ao cadastrar usuário. :/');
    });
  }
}