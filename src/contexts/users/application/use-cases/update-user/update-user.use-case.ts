import { Injectable } from '../../../../shared/dependency-injection/dependency-injection';
import { UserPrimitive, UserRepository } from '../../../domain';

@Injectable()
export class UpdateUserUseCase {
  constructor(private readonly userRepository: UserRepository) {}

  async execute() {}
}
