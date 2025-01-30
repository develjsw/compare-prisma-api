import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateMemberDto {
  @IsNotEmpty()
  @IsString()
  member_name: string;

  @IsOptional()
  @IsString()
  email: string;
}
