import {
  Resolver,
  Mutation,
  Args,
  Parent,
  ResolveField,
} from '@nestjs/graphql';
import { Auth, Token } from './auth.model';
import { LoginInput, SignupInput } from './auth.interface';
import { AuthService } from './auth.service';
import { User } from 'src/user/user.model';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly auth: AuthService) {}

  @Mutation(() => Auth)
  async signup(@Args('data') data: SignupInput) {
    const { accessToken, refreshToken } = await this.auth.createUser(data);
    return { accessToken, refreshToken };
  }

  @Mutation(() => Auth)
  async login(@Args('data') data: LoginInput) {
    const { username, password } = data;
    const { accessToken, refreshToken } = await this.auth.login(
      username,
      password,
    );
    return { accessToken, refreshToken };
  }

  @Mutation(() => Token)
  async refreshToken(@Args('token') token: string) {
    return this.auth.refreshToken(token);
  }

  @ResolveField(() => User)
  async user(@Parent() auth: Auth) {
    return await this.auth.getUserFromToken(auth.accessToken);
  }
}
