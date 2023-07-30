import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DatabaseModule } from './database/database.module';
import { UsersModule } from './features/users/users.module';
import { RolesModule } from './features/roles/roles.module';
import { join } from 'path';
import { CustomersModule } from './features/customers/customers.module';

@Module({
  imports: [AuthModule, DatabaseModule, UsersModule, RolesModule, CustomersModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
