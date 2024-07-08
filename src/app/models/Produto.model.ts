export class Produto{
    id: number = 0;
    produto: string = "";
    foto: string = "";
    preco: number = 0;

    constructor(id: number, produto: string, foto:string, preco: number){
        this.id = id;
        this.produto = produto;
        this.foto = foto;
        this.preco =preco;
    }
}