import { Injectable } from '../../../shared/dependency-injection/dependency-injection';
import { UserTypeOrmEntity } from '../entities/user.typeorm-entity';
import { UserPrimitive } from '../../domain';

@Injectable()
export class UserMapper {
  static toDomain(user: UserTypeOrmEntity): UserPrimitive {
    return {
      id: user.id,
      firstname: user.firstname,
      lastname: user.lastname,
      email: user.email,
      isDelete: user.isDelete,
      createAt: user.createdAt,
    };
  }

  static toTypeOrm(userPrimitive: UserPrimitive) {
    const user = new UserTypeOrmEntity();
    user.id = userPrimitive.id;
    user.firstname = userPrimitive.firstname;
    user.lastname = userPrimitive.lastname;
    user.email = userPrimitive.email;
    user.isDelete = userPrimitive.isDelete;
    user.createdAt = userPrimitive.createAt;

    return user;
  }
}
