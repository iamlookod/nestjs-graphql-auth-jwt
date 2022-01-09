import { Injectable } from '@nestjs/common';
import { hash, compare } from 'bcrypt';

@Injectable()
export class PasswordUtil {
  validatePassword(password: string, hashPassword: string): Promise<boolean> {
    return compare(password, hashPassword);
  }

  hashPassword(password) {
    return hash(password, 10);
  }
}
