import { Injectable } from '../../../../shared/dependency-injection/dependency-injection';
import { UserNotFoundException, UserRepository } from '../../../domain';

@Injectable()
export class RemoveUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  /**
   * Remove a user
   * @param userId User identifier
   * @returns void
   */
  async execute(userId: string): Promise<void> {
    // Temporal
    // const user = await this.userRepository.findById(userId);
    //
    // if (!user) throw new UserNotFoundException(userId);
    //
    // await this.userRepository.remove(user);
  }
}
