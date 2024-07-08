import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioService } from '../../services/usuario.service';
import { Produto } from '../../models/Produto.model';
import { ProdutoService } from '../../services/produto.service';

@Component({
  selector: 'app-lista-produto',
  templateUrl: './lista-produto.component.html',
  styleUrls: ['./lista-produto.component.css']
})

export class ListaProdutoComponent implements OnInit{

  public produtos: Produto[] = [];

  constructor(private _produtoService:ProdutoService, private _router: Router,
    private _usuarioService:UsuarioService){}

  ngOnInit(): void {
    this.listarProdutos();
    this._usuarioService.setMostraMenu(false);
  }

  listarProdutos():void{
    this._produtoService.getProdutos().subscribe(
      retornaProduto =>{
        this.produtos = retornaProduto.map(
          item => {
            return new Produto(
              item.id,
              item.produto,
              item.foto,
              item.preco
            );
          }
        )
      }
    )
  }

  excluir(id: number){
    this._produtoService.removerProduto(id).subscribe(
      produto => {
        this.listarProdutos();
      },
      err => {alert("Erro ao Excluir")}
    );

      this._router.navigate(["/restrito/lista"]);

  }

}
