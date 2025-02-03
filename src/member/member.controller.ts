import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    ParseIntPipe,
    Patch,
    Post,
    Query,
    UsePipes,
    ValidationPipe
} from '@nestjs/common';
import { FindMemberService } from './servicies/find-member.service';
import { member as Member } from '@prisma/client';
import { FindMemberDto } from './dto/find-member.dto';
import { TPaging } from '../type/paging';
import { CreateMemberDto } from './dto/create-member.dto';
import { CreateMemberService } from './servicies/create-member.service';
import { UpdateMemberDto } from './dto/update-member.dto';
import { UpdateMemberService } from './servicies/update-member.service';
import { DeleteMemberService } from './servicies/delete-member.service';

@Controller('members')
export class MemberController {
    constructor(
        private readonly findMemberService: FindMemberService,
        private readonly createMemberService: CreateMemberService,
        private readonly updateMemberService: UpdateMemberService,
        private readonly deleteMemberService: DeleteMemberService
    ) {}

    @Get(':member_id')
    async findMemberById(@Param('member_id', ParseIntPipe) member_id: number): Promise<Member> {
        return await this.findMemberService.findMemberById(member_id);
    }

    @Get()
    @UsePipes(new ValidationPipe({ transform: true }))
    async findMemberWithPagingByConditions(@Query() findMemberDto: FindMemberDto): Promise<TPaging<Member>> {
        const { page, take } = findMemberDto;

        const memberCount: number = await this.findMemberService.findMemberCountByConditions(findMemberDto);

        const memberList: Member[] = await this.findMemberService.findMemberWithPagingByConditions(findMemberDto);

        return {
            paging: {
                page,
                take,
                count: memberCount
            },
            data: memberList
        };
    }

    @Post()
    @UsePipes(new ValidationPipe({ transform: true }))
    async createMember(@Body() createMemberDto: CreateMemberDto): Promise<Member> {
        const created_at = new Date();
        return await this.createMemberService.createMember({ ...createMemberDto, created_at });
    }

    @Patch(':member_id')
    @UsePipes(new ValidationPipe({ transform: true }))
    async updateMemberById(
        @Param('member_id', ParseIntPipe) member_id: number,
        @Body() updateMemberDto: UpdateMemberDto
    ): Promise<Member> {
        return await this.updateMemberService.updateMemberById(member_id, updateMemberDto);
    }

    @Delete(':member_id')
    async deleteMemberById(@Param('member_id', ParseIntPipe) member_id: number): Promise<Member> {
        return await this.deleteMemberService.deleteMemberById(member_id);
    }
}
