import { v4 as uuid } from 'uuid';

export interface UserPrimitive {
  id: string;
  firstname: string;
  lastname: string;
  email: string;
  isDelete: boolean;
  createAt: Date;
}

export class User {
  constructor(private attributes: UserPrimitive) {}

  /**
   * Domain service to create a new user
   * @param createUser User primitive data
   * @returns User entity
   */
  static create(createUser: {
    firstname: string;
    lastname: string;
    email: string;
  }): User {
    return new User({
      id: uuid(),
      ...createUser,
      isDelete: false,
      createAt: new Date(),
    });
  }

  /**
   * Domain service to return a user value
   * @returns User value
   */
  toValue() {
    return {
      id: this.attributes.id,
      firstname: this.attributes.firstname,
      lastname: this.attributes.lastname,
      email: this.attributes.email,
      isDelete: this.attributes.isDelete,
      createAt: this.attributes.createAt,
    };
  }
}
