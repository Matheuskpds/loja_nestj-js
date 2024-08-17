import { IsNotEmpty } from "class-validator";
import { ProdutoJaCadastrado } from "../validacao/produto-ja-cadastrado.validator";


export class CadastrarProdutoDTO{
    @IsNotEmpty({message: "O campo nome é obrigatório"})
    @ProdutoJaCadastrado({message: "Produto já cadastrado"})
    nome: string;

    @IsNotEmpty({message: "O campo categoria é obrigatório"})
    categoria: string;

    @IsNotEmpty({message: "O campo preço é obrigatório"})
    preco: string;
}

//DTO: Data Transfer Object
// DTO (Data Transfer Object) é um padrão de design usado para 
//definir como os dados são estruturados e transmitidos entre diferentes camadas da aplicação.


//Pipes: pipes são componentes que transformam e validam dados recebidos nas 
//requisições antes que eles sejam processados pelos handlers dos controllers.