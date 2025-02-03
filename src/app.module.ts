import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { MemberModule } from './member/member.module';
import { GoodsModule } from './goods/goods.module';
import { OrderModule } from './order/order.module';
import { OrderDetailModule } from './order-detail/order-detail.module';
import { PaymentModule } from './payment/payment.module';
import { RefundModule } from './refund/refund.module';

@Module({
    imports: [PrismaModule, MemberModule, GoodsModule, OrderModule, OrderDetailModule, PaymentModule, RefundModule],
    controllers: [AppController],
    providers: [AppService]
})
export class AppModule {}
