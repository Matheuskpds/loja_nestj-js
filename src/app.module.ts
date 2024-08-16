import { Module } from '@nestjs/common';
import { ProdutoController } from './produtos/produto.controller';
import { ProdutoRepository } from './produtos/produto.repository';

@Module({
  imports: [],
  controllers: [ProdutoController],
  providers: [ProdutoRepository],
})
export class AppModule {}
