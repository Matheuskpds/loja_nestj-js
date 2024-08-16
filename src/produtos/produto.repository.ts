import { Injectable } from "@nestjs/common";

@Injectable()
export class ProdutoRepository{
    
    private produtos = [];

    async salvar(produto){
        this.produtos.push(produto);
        return this.produtos;
    }

    async listar(){
        console.log(this.produtos);
        return this.produtos;
    }
}