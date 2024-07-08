import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';

@Component({
  selector: 'app-menu-restrito',
  templateUrl: './menu-restrito.component.html',
  styleUrls: ['./menu-restrito.component.css']
})
export class MenuRestritoComponent {

  constructor( private _router: Router,private _usuarioService:UsuarioService){}  

  logout(){
    localStorage.clear();
    this._usuarioService.setMostraMenu(true);
    this._router.navigate(['/login']);
  }
}
