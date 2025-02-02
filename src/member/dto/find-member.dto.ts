import { IsNotEmpty, IsNumber, IsOptional, IsString, Min } from 'class-validator';
import { Type } from 'class-transformer';

export class FindMemberDto {
    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    @Min(1)
    page: number;

    @IsNotEmpty()
    @IsNumber()
    @Type(() => Number)
    @Min(1)
    take: number;

    @IsOptional()
    @IsString()
    member_name: string;

    @IsOptional()
    @IsString()
    email: string;
}
