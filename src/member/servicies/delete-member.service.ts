import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { member as Member } from '@prisma/client';

@Injectable()
export class DeleteMemberService {
  constructor(private readonly prisma: PrismaService) {}

  // 내부적으로 select를 한번 더 해서 데이터를 가져옴
  // 삭제에 실패하면 무조건 예외가 발생하도록 되어있음
  async deleteMemberById(member_id: number): Promise<Member> {
    return await this.prisma.member.delete({
      where: {
        member_id,
      },
    });
  }
}
