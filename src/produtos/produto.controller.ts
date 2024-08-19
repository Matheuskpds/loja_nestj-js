import { Body, Controller, Delete, Get, Param, Post, Put } from "@nestjs/common";
import { CadastrarProdutoDTO } from "./dto/CadastrarProduto.dto";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoEntity } from "./produto.entity";
import { AtualizaProdutoDTO } from "./dto/AtualizaProduto.dto";

@Controller('/produtos')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async cadastrarProduto(@Body() dadosProduto: CadastrarProdutoDTO){
        const produtoEntity = new ProdutoEntity();
        produtoEntity.nome = dadosProduto.nome;
        produtoEntity.categoria = dadosProduto.categoria;
        produtoEntity.preco = dadosProduto.preco;


        this.produtoRepository.salvar(produtoEntity);
        console.log(produtoEntity);
        return {
            produto: produtoEntity.nome,
            message: "Produto cadastrado com sucesso!"
        }
    }

    @Get()
    async listarProdutos(){
        return this.produtoRepository.listar();
    }

    @Put('/:nome')
    async atualizarPrecoProduto(@Param('nome') nome: string, @Body() novosDados: AtualizaProdutoDTO){
        const produtoAtualizado = await this.produtoRepository.atualizarPrecoProduto(nome, novosDados);
        console.log(produtoAtualizado);

        return{
            produto: produtoAtualizado,
            message: "Produto atualizado com sucesso!"
        }
    }

    @Delete('/:nome')
    async deletarProduto(@Param('nome') nome: string){
        const removeProduto = await this.produtoRepository.deletar(nome);

        return{
            produto: removeProduto,
            message: "Produto removido com sucesso!"
        }
    }
}