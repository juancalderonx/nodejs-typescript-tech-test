import { Injectable } from '../../../../shared/dependency-injection/dependency-injection';
import { UserPrimitive, UserRepository } from '../../../domain';

@Injectable()
export class FindAllUsersUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Find all users
   * @returns Users primitives
   */
  async execute(): Promise<UserPrimitive[]> {
    return await this.userRepository.findAll();
  }
}
