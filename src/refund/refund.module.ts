import { Module } from '@nestjs/common';
import { RefundController } from './refund.controller';

@Module({
    imports: [],
    controllers: [RefundController],
    providers: [],
    exports: []
})
export class RefundModule {}
