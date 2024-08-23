import { Injectable } from '../../../shared/dependency-injection/dependency-injection';
import { User, UserPrimitive, UserRepository } from '../../domain';
import { DataSource, Repository } from 'typeorm';
import { UserTypeOrmEntity } from '../entities/user.typeorm-entity';
import { UserMapper } from '../mappers/user.mapper';

export class UsersTypeormRepository implements UserRepository {
  private readonly usersRepository =
    this.dataSource.getRepository(UserTypeOrmEntity);

  constructor(private dataSource: DataSource) {}

  async create(user: User): Promise<UserPrimitive> {
    const ormUser = UserMapper.toTypeOrm(user.toValue());

    console.log({ ormUser });

    const savedUser = await this.usersRepository.save(ormUser);

    console.log({ savedUser });

    return UserMapper.toDomain(savedUser);
  }

  async findAll(): Promise<UserPrimitive[] | null> {
    throw new Error('Method not implemented.');
  }

  async findById(id: string): Promise<UserPrimitive | null> {
    throw new Error('Method not implemented.');
  }

  async remove(user: User): Promise<void> {
    throw new Error('Method not implemented.');
  }

  async update(user: User): Promise<UserPrimitive> {
    throw new Error('Method not implemented.');
  }
}
