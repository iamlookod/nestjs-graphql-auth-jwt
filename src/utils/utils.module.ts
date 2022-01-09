import { Module, Global } from '@nestjs/common';
import { PasswordUtil } from './password.util';

@Global()
@Module({
  exports: [PasswordUtil],
  providers: [PasswordUtil],
})
export class UtilsModule {}
