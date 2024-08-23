import { User, UserPrimitive } from './user.entity';

export abstract class UserRepository {
  /**
   * Save a new user
   * @param user User received
   * @returns User saved
   */
  abstract create(user: User): Promise<UserPrimitive>;

  /**
   * Find a user by id
   * @param id User id
   * @returns User found
   */
  abstract findById(id: string): Promise<UserPrimitive | null>;

  /**
   * Find all users
   * @returns Users found
   * @returns null if no users found
   */
  abstract findAll(): Promise<UserPrimitive[] | null>;

  /**
   * Update a user
   * @param user User received
   * @returns User updated
   */
  abstract update(user: User): Promise<UserPrimitive>;

  /**
   * Remove a user
   * @param user User to remove
   */
  abstract remove(user: User): Promise<void>;
}
