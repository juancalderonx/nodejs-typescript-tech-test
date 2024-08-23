import { Injectable } from '../../../../shared/dependency-injection/dependency-injection';
import {
  UserNotFoundException,
  UserPrimitive,
  UserRepository,
} from '../../../domain';

@Injectable()
export class FindUserByIdUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Find a user by identifier
   * @param userId User identifier
   * @returns User primitive
   * @throws UserNotFoundException if the user is not found
   */
  async execute(userId: string): Promise<UserPrimitive> {
    const user = await this.userRepository.findById(userId);

    if (!user) throw new UserNotFoundException(userId);

    return user;
  }
}
