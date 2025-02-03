import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { member as Member } from '@prisma/client';

@Injectable()
export class DeleteMemberService {
    constructor(private readonly prisma: PrismaService) {}

    async deleteMemberById(member_id: number): Promise<Member> {
        return await this.prisma.member.delete({
            where: {
                member_id
            }
        });
    }
}
