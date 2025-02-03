import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, member as Member } from '@prisma/client';

@Injectable()
export class CreateMemberService {
    constructor(private readonly prisma: PrismaService) {}

    async createMember(data: Prisma.memberCreateInput): Promise<Member> {
        return await this.prisma.member.create({
            data
        });
    }
}
