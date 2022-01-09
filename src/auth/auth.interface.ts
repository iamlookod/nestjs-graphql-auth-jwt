import { IsNotEmpty, MinLength, IsString, IsJWT } from 'class-validator';
import { InputType, Field, ArgsType } from '@nestjs/graphql';

export interface JwtDto {
  userId: string;
  /**
   * Issued at
   */
  iat: number;
  /**
   * Expiration time
   */
  exp: number;
}

@InputType()
export class LoginInput {
  @Field()
  @IsString()
  username: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;
}

@ArgsType()
export class RefreshTokenInput {
  @IsNotEmpty()
  @IsJWT()
  token: string;
}

@InputType()
export class SignupInput {
  @Field()
  @IsString()
  username: string;

  @Field()
  @IsNotEmpty()
  @MinLength(8)
  password: string;

  @Field({ nullable: true })
  name?: string;
}
