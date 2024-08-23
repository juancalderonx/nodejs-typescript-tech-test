import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Envs } from '../env/envs';
import { UserTypeOrmEntity } from '../../../contexts/users/infrastructure/entities/user.typeorm-entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: Envs.DATABASE.HOST,
      port: Envs.DATABASE.PORT,
      username: Envs.DATABASE.USER,
      password: Envs.DATABASE.PASSWORD,
      database: Envs.DATABASE.NAME,
      synchronize: true,
      entities: [UserTypeOrmEntity],
      ssl:
        Envs.DATABASE.SSL === true ? { rejectUnauthorized: false } : undefined,
    }),
  ],
})
export class DatabaseModule {}
