import { Module } from '@nestjs/common';
import { DatabaseModule } from './config/database/database.module';
import { UsersModule } from '../contexts/users/infrastructure/users.module';

@Module({
  imports: [UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
