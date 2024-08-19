import { Injectable } from "@nestjs/common";
import { ProdutoEntity } from "./produto.entity";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Injectable()
export class ProdutoRepository{
    
    private produtos: ProdutoEntity[] = [];

    async salvar(produto: ProdutoEntity){
        this.produtos.push(produto);
    }

    async buscarPorProduto(nome: string){
        const possivelProduto = this.produtos.find(
            produto => produto.nome === nome
        );

        if(!possivelProduto){
            throw new Error("Produto não encontrado");
        }

        return possivelProduto;
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

    async atualizarPrecoProduto(nome: string, novosDados: Partial<ProdutoEntity>){
        const produtoAtualizado = await this.buscarPorProduto(nome);

        Object.entries(novosDados).forEach(([chave, valor]) => {
            if(chave === 'nome' || chave === 'categoria')
                return;

            produtoAtualizado[chave] = valor;

        });

        return produtoAtualizado;
    }

    async deletar(nome: string){
        const produto = await this.buscarPorProduto(nome);
        this.produtos = this.produtos.filter(
            produto => produto.nome !== nome
        )
    }
}