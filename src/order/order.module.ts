import { Module } from '@nestjs/common';
import { OrderController } from './order.controller';

@Module({
    imports: [],
    controllers: [OrderController],
    providers: [],
    exports: []
})
export class OrderModule {}
