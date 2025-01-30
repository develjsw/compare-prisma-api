import { Injectable } from '@nestjs/common';
import { Prisma, member as Member } from '@prisma/client';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FindMemberService {
  constructor(private readonly prisma: PrismaService) {}

  async findMemberById(member_id: number): Promise<Member> {
    return await this.prisma.member.findUnique({
      where: {
        member_id,
      },
    });
  }

  async findMemberWithPagingByConditions(
    data: Prisma.memberWhereInput & { page: number; take: number },
  ): Promise<Member[]> {
    const { page, take, member_name, email } = data;

    const skip = (page - 1) * take; // 페이지 번호 * take

    return await this.prisma.member.findMany({
      take,
      skip,
      where: {
        ...(member_name && { member_name }),
        ...(email && { email }),
      },
    });
  }

  async findMemberCountByConditions(
    data: Prisma.memberWhereInput,
  ): Promise<number> {
    const { member_name, email } = data;

    return await this.prisma.member.count({
      where: {
        ...(member_name && { member_name }),
        ...(email && { email }),
      },
    });
  }
}
