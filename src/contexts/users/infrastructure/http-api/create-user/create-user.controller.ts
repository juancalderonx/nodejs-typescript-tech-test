import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserUseCase } from '../../../application/use-cases/create-user';
import { CreateUserHttpDto } from './create-user.http-dto';
import { UserPrimitive } from '../../../domain';

@Controller('users')
export class CreateUserController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  async run(@Body() createUserDto: CreateUserHttpDto): Promise<{
    message: string;
    status: number;
    data: UserPrimitive;
  }> {
    try {
      const { user } = await this.createUserUseCase.execute(createUserDto);

      return {
        message: 'Success Create User',
        status: 201,
        data: user,
      };
    } catch (error) {
      return {
        message: error.message,
        status: 400,
        data: null,
      };
    }
  }
}
