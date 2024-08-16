import { Body, Controller, Get, Post } from "@nestjs/common";
import { CadastrarProdutoDTO } from "./dto/CadastrarProduto.dto";
import { ProdutoRepository } from "./produto.repository";

@Controller('/produto')
export class ProdutoController{

    constructor(private produtoRepository: ProdutoRepository){}

    @Post()
    async cadastrarProduto(@Body() dadosProduto: CadastrarProdutoDTO){

        this.produtoRepository.salvar(dadosProduto);
        return {
            produto: dadosProduto.nome,
            message: "Produto cadastrado com sucesso!"
        }
    }

    @Get()
    async listarProdutos(){
        return this.produtoRepository.listar();
    }
}