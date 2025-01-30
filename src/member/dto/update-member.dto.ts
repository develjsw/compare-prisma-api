import { IsOptional, IsString } from 'class-validator';

export class UpdateMemberDto {
  @IsOptional()
  @IsString()
  memberName: string;

  @IsOptional()
  @IsString()
  email: string;
}
