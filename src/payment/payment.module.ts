import { Module } from '@nestjs/common';
import { PaymentController } from './payment.controller';

@Module({
    imports: [],
    controllers: [PaymentController],
    providers: [],
    exports: []
})
export class PaymentModule {}
