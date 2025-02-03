import { Module } from '@nestjs/common';
import { OrderDetailController } from './order-detail.controller';

@Module({
    imports: [],
    controllers: [OrderDetailController],
    providers: [],
    exports: []
})
export class OrderDetailModule {}
