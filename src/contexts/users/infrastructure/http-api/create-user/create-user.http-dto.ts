import { IsEmail, IsString } from 'class-validator';

export class CreateUserHttpDto {
  @IsString()
  firstname: string;

  @IsString()
  lastname: string;

  @IsEmail()
  email: string;
}
