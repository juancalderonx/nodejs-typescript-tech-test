import { Module } from '@nestjs/common';
import { CreateUserController } from './http-api/create-user/create-user.controller';
import { CreateUserUseCase } from '../application/use-cases/create-user';
import { FindAllUsersUseCase } from '../application/use-cases/find-all-users/find-all-users.use-case';
import { FindUserByIdUseCase } from '../application/use-cases/find-user-by-id/find-user-by-id.use-case';
import { UpdateUserUseCase } from '../application/use-cases/update-user/update-user.use-case';
import { RemoveUserUseCase } from '../application/use-cases/remove-user/remove-user.use-case';
import { UsersTypeormRepository } from './repositories/users-typeorm.repository';
import { UserRepository } from '../domain';
import { UserTypeormModule } from './entities/user-typeorm.module';

@Module({
  imports: [UserTypeormModule],
  controllers: [CreateUserController],
  providers: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    UpdateUserUseCase,
    RemoveUserUseCase,
    UsersTypeormRepository,
    {
      provide: UserRepository,
      useExisting: UsersTypeormRepository,
    },
  ],
  exports: [
    CreateUserUseCase,
    FindAllUsersUseCase,
    FindUserByIdUseCase,
    UpdateUserUseCase,
    RemoveUserUseCase,
    UsersTypeormRepository,
  ],
})
export class UsersModule {}
