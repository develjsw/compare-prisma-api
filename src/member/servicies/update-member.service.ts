import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { Prisma, member as Member } from '@prisma/client';

@Injectable()
export class UpdateMemberService {
  constructor(private readonly prisma: PrismaService) {}

  // 내부적으로 select를 한번 더 해서 데이터를 가져옴
  // 수정에 실패하면 무조건 예외가 발생하도록 되어있음
  async updateMemberById(
    member_id: number,
    data: Prisma.memberUpdateInput,
  ): Promise<Member> {
    return await this.prisma.member.update({
      where: {
        member_id,
      },
      data,
    });
  }
}
