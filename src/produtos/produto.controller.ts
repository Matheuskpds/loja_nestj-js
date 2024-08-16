import { Body, Controller, Get, Post } from "@nestjs/common";
import { CadastrarProdutoDTO } from "./dto/CadastrarProduto.dto";
import { ProdutoRepository } from "./produto.repository";
import { ProdutoEntity } from "./produto.entity";

@Controller('/produto')
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
}