import { Module } from '@nestjs/common';
import { MemberController } from './member.controller';
import { FindMemberService } from './servicies/find-member.service';
import { CreateMemberService } from './servicies/create-member.service';
import { UpdateMemberService } from './servicies/update-member.service';
import { DeleteMemberService } from './servicies/delete-member.service';

@Module({
    imports: [],
    controllers: [MemberController],
    providers: [FindMemberService, CreateMemberService, UpdateMemberService, DeleteMemberService],
    exports: []
})
export class MemberModule {}
