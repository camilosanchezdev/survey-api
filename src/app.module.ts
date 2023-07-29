import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './features/users/users.module';
import { RolesModule } from './features/roles/roles.module';
import { join } from 'path';

@Module({
  imports: [AuthModule, DatabaseModule, UsersModule, RolesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
