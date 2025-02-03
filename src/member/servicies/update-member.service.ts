import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, member as Member } from '@prisma/client';

@Injectable()
export class UpdateMemberService {
    constructor(private readonly prisma: PrismaService) {}

    async updateMemberById(member_id: number, data: Prisma.memberUpdateInput): Promise<Member> {
        return await this.prisma.member.update({
            where: {
                member_id
            },
            data
        });
    }
}
