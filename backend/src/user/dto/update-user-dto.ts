import { Role } from '@prisma/client';
import {
  IsEmail,
  IsEnum,
  IsNotEmpty,
  IsOptional,
  IsString,
} from 'class-validator';

export class UpdateUserDto {
  @IsEmail()
  @IsNotEmpty()
  @IsOptional()
  email?: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  hash?: string;

//   @IsString()
//   @IsNotEmpty()
//   @IsOptional()
//   secret?: string;

//   @IsEnum(Role)
//   @IsOptional()
//   role?: Role;
}
