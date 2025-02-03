import { Module } from '@nestjs/common';
import { GoodsController } from './goods.controller';

@Module({
    imports: [],
    controllers: [GoodsController],
    providers: [],
    exports: []
})
export class GoodsModule {}
