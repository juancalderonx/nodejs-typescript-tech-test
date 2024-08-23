import { Injectable } from '../../../../shared/dependency-injection/dependency-injection';
import { UserPrimitive, UserRepository } from '../../../domain';
import { CreateUserDto } from './create-user.dto';
import { User } from '../../../domain';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Create a new user
   * @param createUserDto User data
   * @returns User primitive
   */
  async execute(
    createUserDto: CreateUserDto,
  ): Promise<{ user: UserPrimitive }> {
    const user = User.create(createUserDto);

    await this.userRepository.create(user);

    return { user: user.toValue() };
  }
}
