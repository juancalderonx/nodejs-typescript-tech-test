import { Module } from '@nestjs/common';
import { Envs } from '../../../../app/config/env/envs';
import { UserTypeOrmEntity } from './user.typeorm-entity';
import { TypeOrmModule } from '@nestjs/typeorm';

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
export class UserTypeormModule {}
