import { Component, OnInit } from '@angular/core';
import { Produto } from '../models/Produto.model';
import { ProdutoService } from '../services/produto.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit{

  public produtos: Produto[] = [];

  constructor(private _produtoService:ProdutoService){}

  ngOnInit(): void {
    this.listarProdutos();
  }
  showAll: boolean = false;

  verTudo() {
    this.showAll = true;
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

}
