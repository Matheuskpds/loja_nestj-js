import { Module } from '@nestjs/common';
import { ProdutoModule } from './produtos/produto.module';


@Module({
  imports: [ProdutoModule],
})
export class AppModule {}
