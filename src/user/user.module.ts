import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserResolver } from './user.resovler';

@Module({
  providers: [UserService, UserResolver],
})
export class UserModule {}
