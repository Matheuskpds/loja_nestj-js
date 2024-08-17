import { registerDecorator, ValidationArguments, ValidationOptions, ValidatorConstraint, ValidatorConstraintInterface } from "class-validator";
import { ProdutoRepository } from "../produto.repository";
import { Injectable } from "@nestjs/common";


@Injectable()
@ValidatorConstraint({ async: true })
export class ProdutoJaCadastradoValidator implements ValidatorConstraintInterface{

    constructor(private produtoRepository: ProdutoRepository){}

    async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
        const produtoComNomeExiste = await this.produtoRepository.existeProdutoComNome(value);
        return !produtoComNomeExiste;
    }
   
}

export const ProdutoJaCadastrado = (opcoesDeValidacao: ValidationOptions) => {
    return (objeto: Object, propriedade: string) => {
        registerDecorator({
            target: objeto.constructor,
            propertyName: propriedade,
            options: opcoesDeValidacao,
            constraints: [],
            validator: ProdutoJaCadastradoValidator
        });
    }
}