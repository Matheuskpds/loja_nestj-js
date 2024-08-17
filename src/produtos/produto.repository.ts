import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";

@Injectable()
export class ProdutoRepository{
    
    private produtos: ProdutoEntity[] = [];

    async salvar(produto: ProdutoEntity){
        this.produtos.push(produto);
    }

    async listar(){
        console.log(this.produtos);
        return this.produtos;
    }

    async existeProdutoComNome(nome: string){
        const possivelProduto = this.produtos.find(
            produto => produto.nome === nome
        );

        return possivelProduto !== undefined;
    }
}